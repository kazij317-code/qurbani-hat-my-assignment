import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-200  px-6 md:px-16 font-sans pt-10 pb-5">
      <div className="max-w-8xl mx-auto border-amber-400">


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-20  mb-5">

          <div>
            <div>
              <h2 className="text-4xl font-bold mb-6">About QurbanHat</h2>
              <p className="text-[17px]">
                Bengal Meat Processing Industries Ltd. (BMPIL)  is a world-class meat industry, producing safe wholesome meat and meat-based further processed products that are of the highest quality and standard for domestic and international markets. Established in 2006 at Kashinathphpur, Santhia, Pabna, Bengal Meat is the first approved world-class abattoir in the country. Bengal Meat offers Halal, Safe, Hygienic, and Superior Quality meat and meat-based further processed products of Chicken, Cattle, Goat, Sheep, and Birds.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-[20px]">Contact Info</h3>
              <p>Tel: 01712736526</p>
              <p>Tel: Email: mithu00781@gmail.com</p>
              <p>306 Mujahidnagar, Rayerbag, Dhaka 1200, Bangladesh</p>
            </div>
<div>
            <h3 className=" font-semibold text-[20px]">Social Links</h3>
            <div className="flex gap-4">

              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">


                {/* <FontAwesomeIcon/> */}
                <FaInstagram />
              </a>

              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">
                <FaFacebookF />

              </a>

              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">
                <RiTwitterXLine />
              </a>
            </div>
          </div>




          </div>
          {/* <div>
            <h3 className="text-white font-semibold mb-6 text-[20px]">Resources</h3>
            <ul className="space-y-4 text-[17px]">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div> */}
          <div>
           
            {/* <p>Bengal Meat Processing Industries Ltd. (BMPIL)  is a world-class meat industry, producing safe wholesome meat and meat-based further processed products that are of the highest quality and standard for domestic and international</p>              */}
          </div>
          




        </div>


        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className='text-[17px]'>© {currentYear} Digitools. All rights reserved.</p>
          <div className="text-[17px] flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;