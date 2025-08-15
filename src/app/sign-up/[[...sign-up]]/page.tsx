import { SignUp } from "@clerk/nextjs";

// # to make Authentications pages's url in your domain
export default function SignUpPage(){
    return(
        <div className="flex justify-center items-center py-8">
            <SignUp/>
        </div>
    )
}