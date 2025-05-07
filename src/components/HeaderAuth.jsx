import React from 'react'
import Logo from '../assets/Svg/Logo.svg'

const HeaderAuth = () => {
  return (
    <div className='
    bg-white px-6 py-4 
      border-y border-[#f1f1f1]
      shadow-[4px_8px_12px_0_rgba(62,67,74,.15)]
      sm:py-3 sm:px-30 sm:border-b
      sm:border-[#3a3541]/12

      '
    >
      <img className='h-[42px] sm:h-[56px]' src={Logo} alt="Logo Video Belajar"/>
    </div>
  )
}

export default HeaderAuth