"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

export const Counter = ()=>{
    const [Count, setCount] = useState(0);
    // const {isLoaded, userId, sessionId, getToken} = useAuth(); // we can get more than {isLoaded, userId, sessionId, getToken} if we want more actions
    // const getUserToken = async () => {
    //     const token = await getToken();
    //     console.log(token);
    // }
    // getUserToken();
    // console.log(isLoaded, userId, sessionId);
    // if(!isLoaded || !userId) return null;

    const {isLoaded, isSignedIn, user} = useUser();
    if(!isLoaded || !isSignedIn) return null;
    console.log(user); // you can make any thing with user like -> update(pass, name, anyData..) and make any thing in user


    return(
        <>
            <p>Count: {Count}</p>
            <button onClick={() => setCount(Count + 1)}>Increment</button>
        </>
    )
}