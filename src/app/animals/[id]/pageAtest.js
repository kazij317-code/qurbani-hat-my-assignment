"use client";
import { useParams } from "next/navigation";
import animals from "@/data/animals.json";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";


export default function DetailsPage() {
  const { id } = useParams();
  const animal = animals.find((a) => a.id == id);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking Successful!");
    e.target.reset();
  };

  return (
    // <div className="p-6">
    //   <Image
    //     src={animal.image}
    //     alt={animal.type}
    //     width={60}
    //     height={60}
    //     className="h-60" />

    //   <div>
    //     <p>{animal.category}</p>
    //     <p>{animal.price}</p>
    //   </div>

    //   <p>{animal.description}</p>

    //   Specification
    //   <div>
    //     <p>{animal.type}</p>
    //     <h1 className="text-2xl font-bold">{animal.name}</h1>
    //     <p>{animal.breed}</p>
    //   </div>

    //   <div>
    //     <h1>{animal.location} </h1>
    //     <h1>Age: {animal.age} Years</h1>
    //     <h1>Live weight (approx.): {animal.weight} kg</h1>
    //   </div>




    // </div>

    <div className="max-w-7xl mx-auto p-6 mt-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE IMAGE */}
        <div className="w-full">
          <Image
            src={animal.image}
            alt={animal.name}
            width={800}
            height={600}
            className="w-full h-[420px] object-cover rounded-xl"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="space-y-5">

          {/* STATUS BADGES */}
          <div className="flex gap-3">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available
            </div>
            {/* <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
              Medium
            </span> */}
            <div className="badge rounded-full bg-red-200">{animal.category}</div>
          </div>

          {/* NAME */}
          <h1 className="text-3xl font-bold">{animal.name}</h1>

          {/* PRICE */}
          <h2 className="text-2xl font-semibold text-gray-800">
            ৳ {animal.price}
          </h2>

          {/* SPECIFICATION TITLE */}
          <h3 className="text-lg font-semibold border-b pb-2">
            SPECIFICATIONS
          </h3>

          {/* SPEC GRID */}
          <div className="grid grid-cols-2 gap-y-3 text-gray-700">


            <p><strong>Type:</strong> {animal.type}</p>
            <p><strong>Breed:</strong> {animal.breed}</p>

            <p><strong>Age:</strong> {animal.age} Years</p>
            <p><strong>Live weight:</strong> {animal.weight} kg</p>

            <p><strong>Category:</strong> {animal.category}</p>
            <p><strong>Location:</strong> {animal.location}</p>




          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 pt-4 font-semibold">
            {animal.description}
          </p>
        </div>
      </div>
      {/* <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input className="border p-2 w-full" placeholder="Name" required />
        <input className="border p-2 w-full" placeholder="Email" required />
        <input className="border p-2 w-full" placeholder="Phone" required />
        <textarea className="border p-2 w-full" placeholder="Address"></textarea> */}

      <Link href="/login" className="btn bg-green-600 text-white px-4 py-2">
        Log In & Proceed to Next Step
      </Link>
      {/* <Link href="/login" className="btn bg-green-600 text-white w-full">
        Login
      </Link> */}
      {/* </form> */}
    </div>


  );
}
{/* <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input className="border p-2 w-full" placeholder="Name" required />
        <input className="border p-2 w-full" placeholder="Email" required />
        <input className="border p-2 w-full" placeholder="Phone" required />
        <textarea className="border p-2 w-full" placeholder="Address"></textarea>

        <button className="bg-green-600 text-white px-4 py-2">
          Book Now
        </button>
      </form> */}