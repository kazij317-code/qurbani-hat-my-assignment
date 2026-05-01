"use client";

import { useParams } from "next/navigation";
import animals from "@/data/animals.json";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export default function DetailsPage() {
  const { id } = useParams();
  const animal = animals.find((a) => a.id == id);

  // const [session, setSession] = useState(null);

  // // Get session (works with your authClient)
  // useEffect(() => {
  //   async function getUser() {
  //     const { data } = await authClient.getSession();
  //     setSession(data);
  //   }
  //   getUser();
  // }, []);

  // --------------------
  const [session, setSession] = useState(null);

  // 🔥 UPDATED: re-check session after Google login
  useEffect(() => {
    async function getUser() {
      const { data } = await authClient.getSession();
      setSession(data);
    }

    getUser();

    // 🔥 VERY IMPORTANT: detects when user comes back from Google login
    window.addEventListener("focus", getUser);

    return () => {
      window.removeEventListener("focus", getUser);
    };
  }, []);
  // -------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking Successful!");
    e.target.reset();
  };

  if (!animal) return <p className="p-6">Animal not found</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 mt-20">

      {/* DETAILS SECTION */}
      {/* <div className="grid md:grid-cols-2 gap-10 items-start">

        <Image
          src={animal.image}
          alt={animal.name}
          width={800}
          height={600}
          className="w-full h-[420px] object-cover rounded-xl"
        />

        <div className="space-y-5">
          <h1 className="text-3xl font-bold">{animal.name}</h1>
          <h2 className="text-2xl font-semibold">৳ {animal.price}</h2>

          <p className="text-gray-600">{animal.description}</p>
        </div>
      </div> */}

      {/* ---------- */}
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* IMAGE */}
        <div>
          <Image
            src={animal.image}
            alt={animal.name}
            width={600}
            height={600}
            className="w-full object-cover rounded-xl"
          />
        </div>

        {/* DETAILS */}
        <div className="space-y-5">

          <div className="flex gap-3">

            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              Available
            </div> */}

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available
            </div>

            <div className="badge rounded-full bg-red-200">
              {animal.category}
            </div>
          </div>

          <h1 className="text-3xl font-bold">{animal.name}</h1>
          <h2 className="text-2xl font-semibold">৳ {animal.price}</h2>

          <h3 className="text-lg font-semibold border-b pb-2">
            SPECIFICATIONS
          </h3>

          <div className="grid grid-cols-2 gap-y-3 text-gray-700">
            <p><strong>Type:</strong> {animal.type}</p>
            <p><strong>Breed:</strong> {animal.breed}</p>
            <p><strong>Age:</strong> {animal.age} Years</p>
            <p><strong>Weight:</strong> {animal.weight} kg</p>
            <p><strong>Location:</strong> {animal.location}</p>
            <p><strong>Category:</strong> {animal.category}</p>
          </div>

          <p className="text-gray-600 pt-4 font-semibold">
            {animal.description}
          </p>
        </div>
      </div>
      {/* ----------- */}

      {/* LOGIN / BOOKING SECTION */}
      <div className="mt-10">

        {/* ------------- */}
        {/* {status === "loading" && (
          <p>Loading...</p>
        )} */}
        {/* ------------- */}

        {/* NOT LOGGED IN */}
        {!session ? (
          <Link
            href={`/login?callbackUrl=/animals/${id}`}
            className="btn bg-green-600 text-white px-4 py-2"
          >
            Log In & Proceed to Booking
          </Link>

        ) : (
          /* LOGGED IN → SHOW FORM */
          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-3 border p-5 rounded-xl"
          >
            
            <input 
            className="border p-2 w-full" 
            defaultValue={session?.user?.name}
            placeholder="Name" 
            required />
            
            <input 
            className="border p-2 w-full" 
            defaultValue={session?.user?.email}
            placeholder="Email" 
            required />
            
            <input className="border p-2 w-full" placeholder="Phone" required />
            <textarea className="border p-2 w-full" placeholder="Address"></textarea>

            <button className="bg-green-600 text-white px-4 py-2 w-full">
              Book Now
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
// ----------------------

