import React from 'react'
import Logo from '../assets/Logo.svg'

const HeaderMain = () => {
  return (
    <div className='flex justify-between bg-white px-30 py-2'>
      {/* Logo */}
      <img src={Logo} alt="Logo Video Belajar" className='' />
      {/* Profile */}
      <div className='flex items-center gap-9 font-medium'>
        <p>Kategori</p>
        <img src="" alt="" className='rounded-xl border w-11 aspect-square' />
      </div>
    </div>
  )
}

export default HeaderMain