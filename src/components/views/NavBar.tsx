import Image from "next/image";
import React from "react";
import logo from "../../../public/Logo.webp";
import { NavBarItemsType, NavbarArray } from "@/components/uitils/NavBarItems";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Dropdowndata } from "./subcomponents/Dropdowndata";
import HamburIcone from "./subcomponents/HamburIcone";

export default function NavBar() {
  return (
    <>
      <div className='p-5 flex md:flex-row space-x-0 md:space-x-2 justify-between items-center'>
        <div className='w-40 flex-shrink-0'>
          <Image src={logo} alt='' width={500} height={500} />
        </div>

        <div className='hidden md:flex md:flex-row md:space-x-4 lg:space-x-8 text-sm md:lg:text-lg font-semibold '>
          {NavbarArray.map((item: NavBarItemsType, index: number) => (
            <ul
              key='index'
              className='relative flex items-center px-3 py-1 rounded-lg hover:bg-gray-100 group'
            >
              <Link
                href={item.href}
                className='text-purple-700 hover:text-red-400 cursor-pointer'
              >
                {item.label}
              </Link>
              {item.isDropDown ? (
                <RiArrowDropDownLine
                  fill='blue'
                  size={25}
                  className='mt-1 -rotate-180 group-hover:rotate-0 duration-500'
                />
              ) : (
                ""
              )}
              {item.isDropDown && (
                <div
                  className={`invisible group-hover:visible absolute bg-gray-50 top-10 left-0 rounded px-6 py-4 font-light min-w-[6rem]`}
                >
                  <Dropdowndata item={item} />
                </div>
              )}
            </ul>
          ))}
        </div>
        <div className=' hidden xl:border rounded xl:flex xl:flex-row items-center px-0 xl:px-2 py-0 xl:py-1 space-x-0 xl:space-x-3'>
          <BiSearch fill='blue' size='15px' />
          <input
            type='text'
            placeholder='What are you looking for'
            className='w-72 text-sm flex'
          />
        </div>
        <div className='flex-shrink-0 relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-200'>
          <div className='absolute w-3.5 h-3.5 top-1.5 right-1 text-sm text-white bg-red-500 rounded-full flex items-center justify-center'>
            0
          </div>
          <BsCart2 size={25} fill='blue' />
        </div>

        <div>
          <HamburIcone />
        </div>
      </div>
    </>
  );
}
