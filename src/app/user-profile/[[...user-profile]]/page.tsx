import { UserProfile } from "@clerk/nextjs";


export default function ProfilePage(){
    return(
        <div className="flex justify-center items-center py-8">
            <UserProfile path="/user-profile" />
        </div>
    )
}