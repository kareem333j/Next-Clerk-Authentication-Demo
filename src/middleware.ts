import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// to protect route
// way 1 to defiend your protected routes
// const isProtectedRoute = createRouteMatcher(['/user-profile']);

// way 2 to defiend your public routes
const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)']);

// for admin only
const isAdminRoute = createRouteMatcher(['/admin(.*)']);


export default clerkMiddleware(async (auth, req)=>{
  // way 1
  // if(isProtectedRoute(req)) await auth.protect();

  // way 2
  // if(!isPublicRoute(req)) await auth.protect();

  // way 3
  const {userId, redirectToSignIn} = await auth();

  // for admin
  if(isAdminRoute(req) && (await auth()).sessionClaims?.metadata.role !== 'admin'){
    const url = new URL("/", req.url);
    return NextResponse.redirect(url);
  };

  if(!userId && !isPublicRoute(req)){
    // Add custom logic to run before redirecting

    return redirectToSignIn();
  };
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};