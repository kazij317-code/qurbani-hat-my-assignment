"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const [session, setSession] = useState(null);

  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    async function getUser() {
      const { data } = await authClient.getSession();
      setSession(data);

      if (data?.user) {
        setForm({
          name: data.user.name || "",
          image: data.user.image || "",
        });
      }
    }
    getUser();
  }, []);

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     // ⚠️ Replace with your backend API later
//     toast.success("Profile Updated (Demo)");

//     console.log(form);
//   };

// ---------------------
const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/update-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        image: form.image,
        email: session?.user?.email, // 👈 IMPORTANT
      }),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Profile Updated ✅");
    } else {
      toast.error(data.message || "Update failed");
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  }
};
//----------------------- 

  if (!session) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-30 p-6 border rounded-xl bg-white shadow">

      <h1 className="text-2xl font-bold mb-5">Update Profile</h1>

      <form onSubmit={handleUpdate} className="space-y-4">

        {/* IMAGE */}
        <input
          className="border p-2 w-full"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />

        {/* NAME */}
        <input
          className="border p-2 w-full"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <button className="bg-green-600 text-white px-4 py-2 w-full">
          Update Information
        </button>

      </form>

    </div>
  );
}