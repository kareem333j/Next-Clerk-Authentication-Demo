import { SignIn } from "@clerk/nextjs";

// # to make Authentications pages's url in your domain
export default function SignInPage(){
    return(
        <div className="flex justify-center items-center py-8">
            <SignIn/>
        </div>
    )
}