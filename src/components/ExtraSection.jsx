import Image from 'next/image';
import myImage from '../assets/products/cow.jpg';


import { Play } from 'lucide-react';
import NavLink from './NavLink';

const Banner = () => {
  return (
    <div className="py-16 border-amber-400 mt-10">


      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-12">

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">


          {/* LEFT CONTENT */}
          <div className="z-10 px-10 max-w-xl">
            <p className="text-sm tracking-wide text-gray-500 mb-2">
              NATURALLY GROWN WITH LOVE AND COMPASSION
            </p>

            <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
              Premium Qurbani Booking
            </h1>
            <p className="py-4 text-gray-600 text-[18px] mb-3">
              সহজ, নিরাপদ এবং বিশ্বস্ত কুরবানির পশু বুকিং প্ল্যাটফর্ম


            </p>

            <p className="text-gray-600 mb-6">
              Celebrating EID UL AZHA Responsibly
            </p>

            <NavLink className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold transition" href={"/animals"}>
              BROWSE ALL ANIMALS
            </NavLink>
          </div>


          <div className="flex justify-center border-amber-400">
            <Image
              src={myImage}
              width={500}
              height={590}
              alt="Banner"
              className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;