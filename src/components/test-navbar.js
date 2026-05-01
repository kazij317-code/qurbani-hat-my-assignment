import cartImage from '../assets/products/shopping-cart.png';
import React, { useState } from "react";


"use client";

import Image from "next/image";
import Link from "next/link";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import RightSidebar from "./RightSidebar";

const Navbar = () => {
const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar fixed top-0 z-50 w-full bg-white/30 backdrop-blur-md shadow-md">
    {/* <div className="w-full border-b border-gray-200 py-4 bg-white sticky top-0 z-50"> */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          
        
          {/* <h1 className="font-bold text-2xl md:text-4xl text-[#9514FA] cursor-pointer" onClick={() => setView("products")}> */}
            <Link href="/" className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>QurbaniHat</Link>
          </h1>

         
          <ul className="hidden md:flex gap-6 font-semibold text-gray-700">
            <li><NavLink href={"/"}>Home</NavLink></li>
          <li><NavLink href={"/animals"}>Animals</NavLink></li>
          </ul>

        
          <div className="hidden md:flex items-center gap-6">
           
            
            
            
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

       
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-6 border-t pt-4">
            <ul className="flex flex-col gap-4 font-semibold text-gray-700">
              <li><NavLink href={"/"}>Home</NavLink></li>
          <li><NavLink href={"/animals"}>Animals</NavLink></li>
            </ul>

            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
              
              
              
              <div className="flex gap-3">
                <button className="font-bold text-gray-700" onClick={() => setView("products")}>Login</button>
                <button
                  className="bg-[#9514FA] px-4 py-2 text-white rounded-full text-sm font-bold"
                  
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;