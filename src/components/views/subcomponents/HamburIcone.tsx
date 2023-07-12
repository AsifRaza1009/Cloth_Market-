"use client";

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { NavBarItemsType, NavbarArray } from "@/components/uitils/NavBarItems";
import Link from "next/link";

const HamburIcone = () => {
  const [isNavBarOpen, setNavBarOpen] = useState<boolean>(false);

  return (
    <>
      <div onClick={() => setNavBarOpen(!isNavBarOpen)}>
        {isNavBarOpen ? (
          <div className='flex md:hidden'>
            <RxHamburgerMenu size={22} />
          </div>
        ) : (
          <div className='flex md:hidden'>
            <IoIosClose size={30} fill='red' />
          </div>
        )}
        {!isNavBarOpen && (
          <div className='w-full px-2 bg-gray-100  hover:bg-blue-500'>
            {NavbarArray.map((item: NavBarItemsType, index: number) => (
              <ul key={index} className="px-2 py-3">
                <Link href={item.href}>{item.label}</Link>
              </ul>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HamburIcone;
