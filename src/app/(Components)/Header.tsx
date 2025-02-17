'use client';

import Link from "next/link";
import Image from "next/image";

import { Fragment, useState, useEffect  } from 'react';
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid';


// const AboutDropdown: React.FC = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const closeMenu = () => {
//     setIsHovered(false);
//     // Add any additional close logic if needed
//   };

//   return (
//     <Popover>
//       {({ open }) => (
//         <>
//           <Popover.Button
//             className="focus:outline-none cursor-pointer flex items-center"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <span>About</span>
//             <ChevronDownIcon className="w-5 h-5 ml-1" />
//           </Popover.Button>

//           <Transition
//             show={open || isHovered}
//             as={Fragment}
//             enter="transition ease-out duration-200"
//             enterFrom="opacity-0 translate-y-1"
//             enterTo="opacity-100 translate-y-0"
//             leave="transition ease-in duration-150"
//             leaveFrom="opacity-100 translate-y-0"
//             leaveTo="opacity-0 translate-y-1"
//           >
//             <Popover.Panel static
//               className="absolute mt-[35px] space-y-2"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div className="overflow-hidden rounded-lg rounded-t-none border-t-4 border-pink-500 shadow-lg ring-1 ring-black ring-opacity-5">
//                 {/* Popover Content */}
//                 <div className="p-4 bg-white text-black">
//                   <ul className="space-y-4 text-sm">
//                     <li className="hover:text-pink-600">
//                       <Link href="/About" onClick={closeMenu}>
//                         About Us
//                       </Link>
//                     </li>
//                     <li className="hover:text-pink-600">
//                       <Link href="/About" onClick={closeMenu}>
//                         About Us
//                       </Link>
//                     </li>
//                     <li className="hover:text-pink-600">
//                       <Link href="/About" onClick={closeMenu}>
//                         About Us
//                       </Link>
//                     </li>
//                     {/* Add more About menu items as needed */}
//                   </ul>
//                 </div>
//               </div>
//             </Popover.Panel>
//           </Transition>
//         </>
//       )}
//     </Popover>
//   );
// };


const TreatmentDropdown: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const closeMenu = () => {
    setIsHovered(false);
    // Add any additional close logic if needed
  };

  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className="focus:outline-none cursor-pointer flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/Treatments" className="text-purple-900" onClick={closeMenu}><span>Treatments</span></Link>
            <ChevronDownIcon className="w-5 h-5 ml-1" />
          </Popover.Button>

          <Transition
            show={open || isHovered}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel static
              className="absolute mt-[35px] space-y-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="overflow-hidden rounded-lg rounded-t-none border-t-4 border-pink-500 shadow-lg ring-1 ring-black ring-opacity-5">
                {/* Popover Content */}
                <div className="flex px-2 py-3 bg-white text-black">
                {/* First part */}
                <div className="w-1/2">
                  <ul className="space-y-2 text-sm">
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Antenatal-Care" className="text-purple-900" onClick={closeMenu}>
                      Antenatal Care & Postnatal Care
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Preconception-Counselling" className="text-purple-900" onClick={closeMenu}>
                      Preconception Counselling
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Cancer-Screening" className="text-purple-900" onClick={closeMenu}>
                      Cancer Screening
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Menstrual-Issues" className="text-purple-900" onClick={closeMenu}>
                      Menstrual Issues
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Uro" className="text-purple-900" onClick={closeMenu}>
                      Uro - Gynecological Problems
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Sexually-Transmitted-Disease" className="text-purple-900" onClick={closeMenu}>
                      Sexually Transmitted Disease
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Second part */}
                <div className="w-1/2">
                  <ul className="space-y-2 text-sm">
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Infertility-Work-up" className="text-purple-900" onClick={closeMenu}>
                      Infertility Work-up
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Family-Planning" className="text-purple-900" onClick={closeMenu}>
                      Family Planning
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Laparoscopic" className="text-purple-900" onClick={closeMenu}>
                      Laparoscopic & Hysteroscopic Surgeries
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Menopausal-Problems" className="text-purple-900" onClick={closeMenu}>
                      Menopausal Problems
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Adolescent-Health" className="text-purple-900" onClick={closeMenu}>
                      Adolescent Health Counselling
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/IVF-Speciality" className="text-purple-900" onClick={closeMenu}>
                      IVF Speciality
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>

              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full top-4 z-50 transition duration-300 ease-in-out">
      {/* <div className="absolute inset-0 z-2 h-170 bg-gradient-to-b from-[#00000080] to-transparent"></div> */}
      <nav className="p-0">
        <div className="max-w-[1280px] mx-auto bg-white px-5 py-3 rounded-2xl drop-shadow-md">
          <div className="flex justify-between items-center">
            <div className="text-pink-500 !z-[999]">
              <Link href="/">
                <Image src="../SVG/Spandan-Logo-Text-Side.svg" alt="Spandan Maternity" width={200} height={64} />
              </Link>
            </div>
            <div className="flex text-black !z-[999]">
              <div className="sm:hidden text-pink-500 cursor-pointer" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 9h16.5m-16.5 6.75h16.5"}
                  />
                </svg>
              </div>
              <ul className={`sm:flex p-4 space-x-10 items-center ${isMenuOpen ? "block fixed top-0 pt-4 z-10 right-0 w-full h-full bg-black" : "hidden"}`}>
                <li className="sm:hidden absolute top-4 right-4">
                  <div className="text-pink-500 cursor-pointer" onClick={closeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </li>
                <li>
                  <Link href="/About" className="text-purple-900" onClick={closeMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/Insurance" className="text-purple-900" onClick={closeMenu}>
                    Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/Facilities" className="text-purple-900" onClick={closeMenu}>
                    Facilities
                  </Link>
                </li>
                <li className="text-purple-900">
                  <TreatmentDropdown />
                </li>
                
                <li>
                  <Link href="/About" className="text-purple-900" onClick={closeMenu}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/Contact" className="text-purple-900" onClick={closeMenu}>
                     Contact 
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-purple-900" onClick={closeMenu}>
                    <button className="mt-0 pt-2 pb-2 pl-4 pr-4 rounded-3xl text-white bg-pink-500 flex items-center">
                      IVF Center
                    </button>

                    {/* <Image src="/Images/bavishi-logo.png" alt="Bavishi Clinic" width={200} height={200} />  */}
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
