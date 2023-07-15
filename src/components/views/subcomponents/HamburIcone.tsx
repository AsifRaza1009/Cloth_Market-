"use client";

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { NavBarItemsType, NavbarArray } from "@/components/uitils/NavBarItems";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri"


const HamburIcone = () => {
  const [isNavBarOpen, setNavBarOpen] = useState<boolean>(false);

  return (
    <>
      <div onClick={() => setNavBarOpen(!isNavBarOpen)}>
        {isNavBarOpen ? (
          <div className=''>
            <RxHamburgerMenu size={22} />
          </div>
        ) : (
          <div className=''>
            <IoIosClose size={25} fill='red' />
          </div>
        )}
        {!isNavBarOpen && (
          <div className='w-full px-6 py-4 bg-gray-100 '>
            {NavbarArray.map((item: NavBarItemsType, index: number) => (
            
        
              <ul key={index} className="px-2 py-3">
                <div className="flex justify-between">
                <Link href={item.href}>{item.label}</Link>
                {item.isDropDown? <RiArrowDropDownLine 
                fill='blue'
                  size={25}
                  className='mt-1 -rotate-180 group-hover:rotate-0 duration-500'/>:""}
                  </div>
                  <div>
                    {item.dropDownData?.map((subItem:NavBarItemsType,index:number)=>(
                      <div key={index} className="text-center border gap-4 " >{subItem.label}</div>

                    ))}
                  </div>
                  
              </ul>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HamburIcone;
