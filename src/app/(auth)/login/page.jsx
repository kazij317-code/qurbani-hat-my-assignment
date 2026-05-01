
// "use client"
// import RightSidebar from '@/components/RightSidebar';
// // import SocialSighnbar from '@/components/SocialSignbar';
// import { authClient } from '@/lib/auth-client';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import toast from 'react-hot-toast';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const LoginPage = () => {

//   const { register, handleSubmit, watch, formState: { errors } } = useForm()

//   const [isShowPassword, setIsShowPassword] = useState(false)

//   const handleLoginFunc = async (data) => {
//     console.log(data, "data");
//     // toast.success("Booking Successful!");

//     const { data: res, error } = await authClient.signIn.email({
//       email: data.email, // required
//       password: data.password, // required
//       rememberMe: true,
//       callbackURL: "/",
//     });
//     console.log(res, error);
//     if (error) {
//       // alert(error.message)
//       toast.error(error.message)
//     }
//     if (res) {
//       // alert("Login successfully")
//       toast.success("Login successfully");
//     }
//   }

//   return (

//     <div className="container mx-auto min-h-[80vh] bg-slate-100 flex justify-center items-center">

//       <div className="p-4 rounded-xl bg-white">
//         <h2 class="font-bold text-3xl text-center mb-6">Login your account</h2>


//         <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>

//           <fieldset className="fieldset">
//             <legend className="fieldset-legend">Email address</legend>
//             <input
//               type="email"
//               className="input"

//               {...register("email", { required: true })}
//               placeholder="Enter you email address" />

//             {errors.email && <span className="text-blue-800">This field is required</span>}

//           </fieldset>


//           <fieldset className="fieldset relative">
//             <legend className="fieldset-legend">Password</legend>
//             <input

//               type={isShowPassword ? "text" : "password"}
//               className="input"

//               {...register("password", { required: "Password field is required" })}

//               placeholder="Enter your password" />

//             <span className="absolute right-2 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye /> : <FaEyeSlash />}</span>

//             {errors.password && <p className="text-red-600">{errors.password.message}</p>}

//           </fieldset>

//           <button className="btn w-full bg-slate-800 text-white">Login</button>

//         </form>
//         <p className="mt-4 text-center">Don't Have An Account? <Link href={"/register"} className="text-red-600">Register</Link></p>
//         <div class="divider">OR</div>
//         <RightSidebar />
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// ------------------------
"use client";
import RightSidebar from '@/components/RightSidebar';
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  // const { register, handleSubmit, formState: { errors } } = useForm();

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const callbackURL = searchParams.get("callbackUrl") || "/";

  const handleLoginFunc = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: callbackURL, // 🔥 IMPORTANT FIX
    });

    if (error) {
      toast.error(error.message);
    }

    if (res) {
      toast.success("Login successful");
      //  reset(); //added for reset
      // -------
      reset({
        email: "",
        password: ""
      }); // 🔥 force clear values
      // -------

      router.push(callbackURL); // extra safety redirect
    }
  };

  return (
    // <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">

    //   <div className="p-6 bg-white rounded-xl w-[400px]">

    //     <h2 className="font-bold text-3xl text-center mb-6">
    //       Login your account
    //     </h2>

    //     <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>

    //       {/* EMAIL */}
    //       <input
    //         type="email"
    //         className="input border w-full p-2"
    //         placeholder="Email"
    //         {...register("email", { required: true })}
    //       />
    //       {errors.email && (
    //         <p className="text-red-600">Email required</p>
    //       )}

    //       {/* PASSWORD */}
    //       <div className="relative">
    //         <input
    //           type={isShowPassword ? "text" : "password"}
    //           className="input border w-full p-2"
    //           placeholder="Password"
    //           {...register("password", { required: true })}
    //         />

    //         <span
    //           className="absolute right-3 top-2 cursor-pointer"
    //           onClick={() => setIsShowPassword(!isShowPassword)}
    //         >
    //           {isShowPassword ? <FaEye /> : <FaEyeSlash />}
    //         </span>
    //       </div>

    //       {errors.password && (
    //         <p className="text-red-600">Password required</p>
    //       )}

    //       {/* BUTTON */}
    //       <button className="btn w-full bg-green-600 text-white">
    //         Login
    //       </button>
    //     </form>

    //     <p className="mt-4 text-center">
    //       Don't have account?{" "}
    //       <Link href="/register" className="text-red-600">
    //         Register
    //       </Link>
    //     </p>
    //   </div>
    // </div>
    // --------------
    <div className="container mx-auto min-h-[80vh] bg-slate-100 flex justify-center items-center mt-20">

      <div className="p-4 rounded-xl bg-white">
        <h2 class="font-bold text-3xl text-center mb-6">Login your account</h2>


        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}autoComplete="off">

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

              {...register("password", { required: "Password field is required" })}

              placeholder="Enter your password" />

            <span className="absolute right-2 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye /> : <FaEyeSlash />}</span>

            {errors.password && <p className="text-red-600">{errors.password.message}</p>}

          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">Login</button>

        </form>
        <p className="mt-4 text-center">Don't Have An Account? <Link href={"/register"} className="text-red-600">Register</Link></p>
        <div class="divider">OR</div>
        <RightSidebar />
      </div>
    </div>

    // --------------



  );
}

// ------------------------