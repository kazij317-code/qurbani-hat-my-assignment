import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { MdPlace } from 'react-icons/md';
import { RiTwitterXLine } from 'react-icons/ri';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    //     <footer className="bg-green-200  px-6 md:px-16 font-sans pt-10 pb-5">
    //       <div className="max-w-8xl mx-auto border-amber-400">


    //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-20  mb-5">

    //           <div>
    //             <div>
    //               <h2 className="text-4xl font-bold mb-6">About QurbaniHat</h2>
    //               <p className="text-[17px]">
    //                 Qurbani Hat is a modern livestock booking platform for buying animals online.
    // It connects buyers and sellers in a simple and trusted marketplace.
    // Users can browse cows, goats, and bulls with detailed information.
    // Each listing includes price, weight, age, and clear images.
    // This helps buyers choose animals without visiting crowded markets.
    // The platform allows advance booking before Eid-ul-Adha.
    // Sellers can easily list animals and reach more customers.
    // Qurbani Hat ensures transparency and trusted transactions.
    // It also offers communication and delivery support.
    // Overall, it makes the Qurbani process easy, safe, and convenient.
    //               </p>
    //             </div>
    //           </div>
    //           <div className="flex justify-between items-center">
    //             <div>
    //               <h3 className="font-semibold text-[20px]">Contact Info</h3>
    //               <p>Tel: 01712736526</p>
    //               <p>Tel: Email: mithu00781@gmail.com</p>
    //               <p>306 Mujahidnagar, Rayerbag, Dhaka 1200, Bangladesh</p>
    //             </div>
    // <div>
    //             <h3 className=" font-semibold text-[20px]">Social Links</h3>
    //             <div className="flex gap-4">

    //               <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">


    //                 {/* <FontAwesomeIcon/> */}
    //                 <FaInstagram />
    //               </a>

    //               <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">
    //                 <FaFacebookF />

    //               </a>

    //               <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">
    //                 <RiTwitterXLine />
    //               </a>
    //             </div>
    //           </div>




    //           </div>
    //           {/* <div>
    //             <h3 className="text-white font-semibold mb-6 text-[20px]">Resources</h3>
    //             <ul className="space-y-4 text-[17px]">
    //               <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
    //               <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
    //               <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
    //               <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
    //             </ul>
    //           </div> */}
    //           <div>

    //             {/* <p>Bengal Meat Processing Industries Ltd. (BMPIL)  is a world-class meat industry, producing safe wholesome meat and meat-based further processed products that are of the highest quality and standard for domestic and international</p>              */}
    //           </div>





    //         </div>


    //         <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
    //           <p className='text-[17px]'>© {currentYear} Digitools. All rights reserved.</p>
    //           <div className="text-[17px] flex gap-8 mt-4 md:mt-0">
    //             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
    //             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
    //             <a href="#" className="hover:text-white transition-colors">Cookies</a>
    //           </div>
    //         </div>
    //       </div>
    //     </footer>

    // ----------------------
    <footer className="bg-green-200 px-4 sm:px-6 md:px-10 lg:px-16 font-sans pt-10 pb-5">
      <div className="max-w-8xl mx-auto border-amber-400">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 mb-5">

          <div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                About QurbaniHat
              </h2>
              <p className="text-sm sm:text-base md:text-[17px] leading-relaxed">
                Qurbani Hat is a modern livestock booking platform for buying animals online.
                It connects buyers and sellers in a simple and trusted marketplace.
                Users can browse cows, goats, and bulls with detailed information.
                Each listing includes price, weight, age, and clear images.
                This helps buyers choose animals without visiting crowded markets.
                The platform allows advance booking before Eid-ul-Adha.
                Sellers can easily list animals and reach more customers.
                Qurbani Hat ensures transparency and trusted transactions.
                It also offers communication and delivery support.
                Overall, it makes the Qurbani process easy, safe, and convenient.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-10">
            <div>
              <h3 className="font-semibold text-lg sm:text-[20px]">Contact Info</h3>
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <p className="text-sm sm:text-base">01712736526</p>
              </div>

              <div className="flex items-center gap-2">
                <IoMdMail />
                <p className="text-sm sm:text-base">mithu00781@gmail.com</p>
              </div>

              <div className="flex text-2xl gap-1">
                <MdPlace className="text-2xl" />
                <p className="text-sm sm:text-base"> 306 Mujahidnagar, Rayerbag, Dhaka 1200, Bangladesh</p>
              </div>



            </div>

            <div>
              <h3 className="font-semibold text-lg sm:text-[20px]">Social Links</h3>
              <div className="flex gap-3 sm:gap-4 mt-2">
                <a className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">
                  <FaInstagram />
                </a>

                <a className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">
                  <FaFacebookF />
                </a>

                <a className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-sm">
                  <RiTwitterXLine />
                </a>
              </div>
            </div>
          </div>

          <div>
            {/* empty div stays same */}
          </div>

        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm gap-4">
          <p className="text-sm sm:text-base md:text-[17px]">
            © {currentYear} QurbaniHat. All rights reserved.
          </p>

          <div className="text-sm sm:text-base md:text-[17px] flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
    // ---------------------
  );
};

export default Footer;