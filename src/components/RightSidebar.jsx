
"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useSearchParams } from "next/navigation";//new add
const RightSidebar = () => {
  const searchParams = useSearchParams();//new add
   const callbackURL = searchParams.get("callbackUrl") || "/";//new add
    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: callbackURL, // 🔥 IMPORTANT new add
        });
        console.log(data, "data");

    }
   
    const handleGithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github"

        });
        console.log(data, "data");
    }
     

        return (
            <div>

               
                <div className="flex flex-col gap-2">
                    
                    <button className="btn border-blue-500 text-blue-500" onClick={handleGoogleSignin}><FaGoogle />Login with google</button>
                    
                    
                </div>

            </div>
        );
    };

    export default RightSidebar;

// ---------------------End:47_6-(1) to () --------------------------------