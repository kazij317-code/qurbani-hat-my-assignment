"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { useRouter } from 'next/navigation';
import GoogleLogin from '@/components/GoogleLogin';

const RegisterPage = () => {
    const router = useRouter();

    const [isShowPassword, setIsShowPassword] = useState(false)


    
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm()

    const handleRegisterFunc = async (data) => {
        // console.log(data, "data");
        const { email, name, photo, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name, 
            email: email, 
            password: password, 
            image: photo,
            callbackURL: "/",
        });

        console.log(res, error);

        if (error) {
            // alert(error.message)
            toast.error(error.message)
        }
        if (res) {
            // alert("Signup successfully")
            toast.success("Signup successfully");
            
            reset({
                email: "",
                password: ""
            }); 

            await authClient.signOut(); 
            router.push("/login");
        }

    }

    return (

        <div className="container mx-auto min-h-[80vh] bg-slate-100 flex justify-center items-center mt-22">

            <div className="p-4 rounded-xl bg-white">
                <h2 class="font-bold text-3xl text-center mb-4">Register your account</h2>

                <form className="space-y-1" onSubmit={handleSubmit(handleRegisterFunc)} autoComplete="off">

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Name</legend>
                        <input
                            type="text"
                            className="input"
                            name="name"
                            {...register("name", { required: "Name field is required" })}
                            placeholder="Enter your name" />
                        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input
                            type="text"
                            className="input"
                            name="photo"
                            {...register("photo", { required: "Photo field is required" })}
                            placeholder="Attach your photo" />
                        {errors.photo && <p className="text-red-600">{errors.photo.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email address</legend>
                        <input
                            type="email"
                            autoComplete="off"
                            className="input"
                            {...register("email", { required: true })}
                            placeholder="Enter you email address" />
                        {errors.email && <span className="text-blue-800">This field is required</span>}
                    </fieldset>


                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input

                            type={isShowPassword ? "text" : "password"}
                            autoComplete="new-password"
                            className="input"
                            // name="password"

                            {...register("password", { required: "Password field is required" })}
                            placeholder="Enter your password" />

                        <span className="absolute right-8 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye /> : <FaEyeSlash />}</span>


                        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">Register</button>

                </form>
                <p className="mt-4 text-center">If have An Account, Please <Link href={"/login"} className="text-red-600">Login</Link></p>
                <div class="divider">OR</div>
                <GoogleLogin />
            </div>
        </div>

    );
};

export default RegisterPage;