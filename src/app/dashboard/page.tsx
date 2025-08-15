import { auth, currentUser } from "@clerk/nextjs/server";


export default async function Dashboard() {
    // **NOTE: this two helpers (auth() and currentUser()) --> not working on client side (client components)**
    // **NOTE: to read this data on client side we need to use hooks(useAuth() and useUser() --> from @clerk/nextjs) -> I use EX: in components/counter.tsx**
    const authObj = await auth(); // get data auth of user like sessionId, exp, userId and isAuthenticated etc...0
    const userObj = await currentUser(); // get data of current user on a server

    console.log(authObj, userObj);
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}