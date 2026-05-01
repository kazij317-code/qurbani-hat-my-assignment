"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";

export default function MyProfile() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function getUser() {
      const { data } = await authClient.getSession();
      setSession(data);
    }
    getUser();
  }, []);

  if (!session) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-30 p-6 border rounded-xl bg-white shadow">

      <h1 className="text-2xl font-bold mb-5">My Profile</h1>

      {/* PROFILE INFO */}
      <div className="space-y-3">

        <Image
          src={session.user.image || "/avatar.png"}
          alt="User avatar"
          width={40}
          height={40}
          className="rounded-full"
        />

        <p><strong>Name:</strong> {session.user.name}</p>
        <p><strong>Email:</strong> {session.user.email}</p>

      </div>

      {/* UPDATE BUTTON */}
      <Link
        href="/my-profile/update"
        className="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded"
      >
        Update Profile
      </Link>

    </div>
  );
}