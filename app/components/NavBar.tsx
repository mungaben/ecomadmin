"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from "react";
const activeLink="bg-white hover:bg-gray-900 hover:text-white flex items-start  px-2 py-2 text-sm font-medium rounded-md py-2 transition-colors duration-200  md:mx-4"
const inActiveLink="text-gray-300 hover:bg-gray-700 hover:text-white flex items-start px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200  md:mx-4"
// get the path from the url

const NavBar = () => {
  const path = usePathname();

  const navItems=[
    {
      path:"/",
      name:"DashBoard"
    },
    {
      path:"/Products",
      name:"Products"
    },
    {
      path:"/Orders",
      name:"Orders"
    },
    {
      path:"/Settings",
      name:"Settings"
    }

  ]
 
  return (
    <aside className="justify-start h-screen px-4 py-4 mt-2 text-black bg-black ">
      {
        navItems.map((item,index)=>
        <nav key={index}>
           <Link href={item.path} className={`${item.path ===path ? activeLink:inActiveLink} mt-2 pt-4`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>

        <span className="">{item.name}</span>
      </Link>

        </nav>
        )
      }
     
    

    </aside>
  );
};

export default NavBar;
