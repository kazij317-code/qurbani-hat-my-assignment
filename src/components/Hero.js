"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import Marquee from "react-fast-marquee";


const animals = [
    "/animals/cow4.png",
    "/animals/cow3.png",
    "/animals/goat1.png",
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(false); // fade out

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % animals.length);
                setAnimate(true); // fade in
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        
    <section className="relative w-full h-[520px] md:h-[520px] h-auto bg-gray-100 overflow-hidden flex flex-col md:flex-row items-center mt-20">

    {/* LEFT CONTENT */}
    <div className="z-10 px-5 sm:px-8 md:px-10 max-w-xl text-center md:text-left py-10 md:py-0">
        <p className="text-xs sm:text-sm tracking-wide text-gray-500 mb-2">
            NATURALLY GROWN WITH LOVE AND COMPASSION
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Premium Qurbani Booking
        </h1>

        <p className="py-3 sm:py-4 text-gray-600 text-sm sm:text-base md:text-[18px] mb-3">
            সহজ, নিরাপদ এবং বিশ্বস্ত কুরবানির পশু বুকিং প্ল্যাটফর্ম
        </p>

        <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Celebrating EID UL AZHA Responsibly
        </p>

        <NavLink
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition text-sm sm:text-base"
            href={"/animals"}
        >
            BROWSE ALL ANIMALS
        </NavLink>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative md:absolute right-0 bottom-0 h-[250px] sm:h-[320px] md:h-full flex items-end justify-center md:justify-end pr-0 md:pr-10 w-full">
        <Image
            src={animals[index]}
            alt="animal"
            width={600}
            height={500}
            className={`object-contain h-full w-auto transition-all duration-700
            ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            priority
        />
    </div>

    {/* DOT INDICATORS */}
    <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {animals.map((_, i) => (
            <div
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${
                    i === index ? "bg-yellow-400 scale-125" : "bg-gray-300"
                }`}
            />
        ))}
    </div>
</section>
        
    );
}