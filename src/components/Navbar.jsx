"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import RightSidebar from "./RightSidebar";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import logo from "../assets/design/logo.png";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {

  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // ✅ ADDED ONLY THIS LINE (IMPORTANT)
  const closeMenu = () => setMenuOpen(false);

  const slideMenu = useSpring({
    transform: menuOpen ? "translateX(0%)" : "translateX(100%)",
    config: { tension: 260, friction: 25 },
  });

  const overlayFade = useSpring({
    opacity: menuOpen ? 1 : 0,
  });

  return (
    <div className="navbar fixed top-0 z-50 w-full bg-white/30 backdrop-blur-md shadow-md">

      <div className="max-w-8xl mx-auto w-full px-6 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex-1">
          <Image src={logo} alt="logo" width={80} height={80} />
        </div>

        {/* CENTER */}
        <ul className="hidden md:flex flex-1 justify-center items-center gap-6 text-gray-700">
          <li><NavLink href={"/"}>Home</NavLink></li>
          <li><NavLink href={"/animals"}>Animals</NavLink></li>
        </ul>

        {/* RIGHT */}
        <div className="flex-1 flex justify-end items-center gap-3">

          {/* MOBILE BTN */}
          <button
            className="md:hidden text-2xl bg-white shadow-md rounded-lg px-3 py-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {isPending ? (
            <span className="loading loading-spinner text-error"></span>
          ) : user ? (
            <div className="hidden md:flex items-center gap-3 relative">

              <h2 className="hidden lg:block">
                Hello, {user.name}
              </h2>

              <div className="relative flex items-center gap-3">

                <Image
                  src={user.image || userAvatar}
                  alt="User avatar"
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"
                  onClick={() => setProfileOpen(!profileOpen)}
                />

                <FaChevronDown onClick={() => setProfileOpen(!profileOpen)} />

                {profileOpen && (
                  <div className="absolute right-0 mt-25 w-40 bg-white shadow-lg rounded-lg border z-50">

                    <Link
                      href="/my-profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setProfileOpen(false)}
                    >
                      My Profile
                    </Link>

                  </div>
                )}

              </div>

              <button
                className="btn bg-green-500 text-white"
                onClick={async () => {
                  await authClient.signOut();
                  setProfileOpen(false);
                  closeMenu();
                  router.push("/");
                  router.refresh();
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <button className="btn bg-green-900 text-white">
                <Link href={"/login"}>Login</Link>
              </button>

              <button className="btn bg-green-900 text-white">
                <Link href={"/register"}>Register</Link>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <animated.div
          style={overlayFade}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* MOBILE MENU */}
      <animated.div
        style={slideMenu}
        className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-50 shadow-xl md:hidden"
      >
        <div className="p-6 space-y-6">

          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-green-700">Menu</h2>
            <button onClick={closeMenu}>✕</button>
          </div>

          {/* NAV LINKS */}
          <div className="flex flex-col gap-4 text-blue-800 font-bold">

            <NavLink href="/" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink href="/animals" onClick={closeMenu} className="px-2 py-2 rounded hover:bg-gray-100  bg-green-200">
              Animals
            </NavLink>

            {user && (
              <>
                <Link
                  href="/my-profile"
                  className="px-2 py-2 rounded hover:bg-gray-100  bg-green-200"
                  onClick={closeMenu}
                >
                  My Profile
                </Link>

                <button
                  className="text-left px-2 py-2 rounded hover:bg-gray-100 bg-green-200 text-red-500"
                  onClick={async () => {
                    await authClient.signOut();
                    setProfileOpen(false);
                    closeMenu();
                    router.push("/");
                    router.refresh();
                  }}
                >
                  Logout
                </button>
              </>
            )}

          </div>

          {!user && (
            <div className="flex flex-col gap-3 pt-4 border-t">

              <Link
                href="/login"
                className="btn bg-green-600 text-white w-full"
                onClick={closeMenu}
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn bg-black text-white w-full"
                onClick={closeMenu}
              >
                Register
              </Link>

            </div>
          )}

        </div>
      </animated.div>
    </div>
  );
};

export default Navbar;


// ----------------------------
// "use client";
// import { useRouter } from "next/navigation";

// import Image from "next/image";
// import Link from "next/link";
// import userAvatar from "@/assets/user.png";
// import NavLink from "./NavLink";
// import { authClient } from "@/lib/auth-client";
// import RightSidebar from "./RightSidebar";
// import { useState } from "react";
// import { useSpring, animated } from "@react-spring/web";
// import logo from "../assets/design/logo.png";
// import { FaChevronDown } from "react-icons/fa";

// const Navbar = () => {

//   const router = useRouter();
//   const { data: session, isPending } = authClient.useSession();
//   const user = session?.user;

//   const [menuOpen, setMenuOpen] = useState(false);

//   // ✅ NEW: profile dropdown state
//   const [profileOpen, setProfileOpen] = useState(false);

//   const slideMenu = useSpring({
//     transform: menuOpen ? "translateX(0%)" : "translateX(100%)",
//     config: { tension: 260, friction: 25 },
//   });

//   const overlayFade = useSpring({
//     opacity: menuOpen ? 1 : 0,
//   });

//   return (
//     <div className="navbar fixed top-0 z-50 w-full bg-white/30 backdrop-blur-md shadow-md">

//       <div className="max-w-8xl mx-auto w-full px-6 flex items-center justify-between">

//         {/* LEFT */}
//         <div className="flex-1">
//           <Image src={logo} alt="logo" width={80} height={80} />
//         </div>

//         {/* CENTER */}
//         <ul className="hidden md:flex flex-1 justify-center items-center gap-6 text-gray-700">
//           <li><NavLink href={"/"}>Home</NavLink></li>
//           <li><NavLink href={"/animals"}>Animals</NavLink></li>
//         </ul>

//         {/* RIGHT */}
//         <div className="flex-1 flex justify-end items-center gap-3">

//           {/* MOBILE BTN */}
//           <button
//             className="md:hidden text-2xl bg-white shadow-md rounded-lg px-3 py-1"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? "✕" : "☰"}
//           </button>

//           {isPending ? (
//             <span className="loading loading-spinner text-error"></span>
//           ) : user ? (
//             <div className="hidden md:flex items-center gap-3 relative">

//               <h2 className="hidden lg:block">
//                 Hello, {user.name}
//               </h2>

//               {/* ========================= */}
//               {/* ✅ PROFILE DROPDOWN START */}
//               {/* ========================= */}
//               <div className="relative flex items-center gap-3">

//                 <Image
//                   src={user.image || userAvatar}
//                   alt="User avatar"
//                   width={40}
//                   height={40}
//                   className="rounded-full cursor-pointer"
//                   onClick={() => setProfileOpen(!profileOpen)}
//                 />
//                 <FaChevronDown
//                   onClick={() => setProfileOpen(!profileOpen)}
//                 />

//                 {profileOpen && (
//                   <div className="absolute right-0 mt-25 w-40 bg-white shadow-lg rounded-lg border z-50">

//                     <Link
//                       href="/my-profile"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                       onClick={() => setProfileOpen(false)}
//                     >
//                       My Profile
//                     </Link>

//                   </div>
//                 )}

//               </div>
//               {/* ========================= */}
//               {/* END DROPDOWN */}
//               {/* ========================= */}

//               <button
//                 className="btn bg-green-500 text-white"
//                 onClick={async () => {
//                   await authClient.signOut();
//                   setProfileOpen(false); // optional
//                   setMenuOpen(false);    // optional
//                   router.push("/"); 
//                   router.refresh();     // ✅ redirect to home
//                 }}
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div className="hidden sm:flex items-center gap-2">
//               <button className="btn bg-green-900 text-white">
//                 <Link href={"/login"}>Login</Link>
//               </button>

//               <button className="btn bg-green-900 text-white">
//                 <Link href={"/register"}>Register</Link>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* OVERLAY */}
//       {menuOpen && (
//         <animated.div
//           style={overlayFade}
//           className="fixed inset-0 bg-black/40 z-40 md:hidden"
//           onClick={() => setMenuOpen(false)}
//         />
//       )}

//       {/* MOBILE MENU */}
//       <animated.div
//         style={slideMenu}
//         className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-50 shadow-xl md:hidden"
//       >
//         <div className="p-6 space-y-6">

//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-bold text-green-700">Menu</h2>
//             <button onClick={() => setMenuOpen(false)}>✕</button>
//           </div>

//           <div className="flex flex-col gap-4 text-blue-800 text-bold">
//             <NavLink
//               href="/"
//               onClick={() => setMenuOpen(false)}
//             >
//               Home
//             </NavLink>

//             <NavLink className="text-blue-800 text-bold hover:bg-gray-100" href={"/animals"} onClick={() => setMenuOpen(false)}>Animals</NavLink>

//             {/* ✅ SHOW ONLY WHEN LOGGED IN */}
//             {user && (
//               <>
//                 <Link
//                   href="/my-profile"
//                   className="px-2 py-2 rounded hover:bg-gray-100 text-blue-800 text-extra-bold"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   My Profile
//                 </Link>

//                 <button
//                   href="/"
//                   className="text-left px-2 py-2 rounded hover:bg-gray-100 text-red-500"
//                   onClick={async () => {
//                     await authClient.signOut();
//                     setProfileOpen(false); // optional
//                     setMenuOpen(false);    // optional
//                     router.push("/");
//                     router.refresh();     // ✅ redirect to home
//                   }}

//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>

//           {!user && (
//             <div className="flex flex-col gap-3 pt-4 border-t">
//               <Link href="/login" className="btn bg-green-600 text-white w-full">
//                 Login
//               </Link>

//               <Link href="/register" className="btn bg-black text-white w-full">
//                 Register
//               </Link>
//             </div>
//           )}

//         </div>
//       </animated.div>
//     </div>
//   );
// };

// export default Navbar;

