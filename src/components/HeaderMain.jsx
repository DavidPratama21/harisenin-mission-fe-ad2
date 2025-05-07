import React from 'react'
import Logo from '../assets/Svg/Logo.svg'
import Profile from "../assets/Profile.png"

const HeaderMain = () => {
  return (
    <div className='flex justify-between itemc bg-white py-4 px-6 sm:px-30 sm:py-2'>
      {/* Logo */}
      <img src={Logo} alt="Logo Video Belajar" className='' />
      {/* Profile */}
      <div className='sm:flex items-center gap-9 font-medium hidden'>
        <p>Kategori</p>
        <img src={Profile} alt="" className='rounded-xl border w-11 aspect-square' />
      </div>

      {/* Humberger Menu */}
      <div className='grid gap-1.5 h-fit sm:hidden'>
        <span className='h-0.5 w-5 bg-[#4a505c]'></span>
        <span className='h-0.5 w-5 bg-[#4a505c]'></span>
        <span className='h-0.5 w-5 bg-[#4a505c]'></span>
        
      </div>

    </div>
  )
}

export default HeaderMain