import React from 'react'
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router";

const Header_authorization = () => {
  return (
    // Navigation
    <div 
      className="sticky w-full
        flex justify-between items-center bg-light-primary px-6 py-4 border-y border-other-border 
        shadow-[0_0_1px_0_rgba(62,67,74,0.31),4px_8px_12px_0_rgba(62,67,74,0.15)]
        sm:py-3 sm:px-30 sm:gap-9 sm:border-b sm:shadow-none"
    >
      {/* Frame 3 */}
      <div className="flex justify-between items-center w-full ">
        {/* Logo */}
        <img
          src={Logo}
          className="h-[22px] sm:h-[30px]"
          alt="Logo Video Belajar"
        />
      </div>
    </div>
  )
}

export default Header_authorization