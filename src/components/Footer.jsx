import React from 'react'
import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react'
import Logo from '../assets/Svg/Logo.svg'

const Footer = () => {
  return (
    // BG
    <div className='bg-white border-t border-[#3a3541]/12 text-[#222325]'>
      {/* Frame */}
      <div className='grid gap-4 sm:gap-5
        sm:w-[1440px] mx-auto 
        p-5 sm:px-30 sm:py-15'
      >
        {/* Videobelajar, Kategori, Perusahaan, Komunitas */}
        <div className='grid sm:flex sm:justify-between gap-4'>
          
          {/* Video belajar add & contact*/}
          <div className='grid gap-4'>
            {/* Logo */}
            <div className='py-[13px] px-[5px]'>
              <img src={Logo} className='h-[25px] sm:h-[30px]' alt="Logo Video Belajar"/>
            </div>

            {/* Add & Contact */}
            <div className='grid gap-2 sm:gap-3 text-sm'>
              <p className='sm:text-lg font-bold'>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
              <p>Jl. Usman Effendi Np. 50 Lowokwaru, Malang</p>
              <p>+62-877-7123-1234</p>
            </div>
          </div>

          {/* Kategori, Perusahaan, Komunitas */}
          <div className='grid sm:flex gap-3 sm:gap-12'>
            
            {/* Kategori */}
            <div className='flex justify-between sm:justify-start sm:flex-col gap-[15px]'>
              <p className='font-bold'>Kategori</p>
              {/* List */}
              <div className='hidden sm:flex flex-col gap-[13px] font-medium text-[#333]/68'>
                <p>Digital & Teknologi</p>
                <p>Pemasaran</p>
                <p>Manajemen Bisnis</p>
                <p>Pengembangan Diri</p>
                <p>Desain</p>
              </div>
              {/* More btn */}
              <p className='sm:hidden font-extrabold text-[#3a3541]'>&gt;</p>
            </div>

            {/* Perusahaan */}
            <div className='flex justify-between sm:justify-start sm:flex-col gap-[15px]'>
              <p className='font-bold'>Perusahaan</p>
              {/* List */}
              <div className='hidden sm:flex flex-col gap-[13px] font-medium text-[#333]/68'>
                <p>Tentang Kami</p>
                <p>FAQ</p>
                <p>Kebijakan Privasi</p>
                <p>Ketentuan Layanan</p>
                <p>Bantuan</p>
              </div>
              {/* More btn */}
              <p className='sm:hidden font-extrabold text-[#3a3541]'>&gt;</p>
            </div>

            {/* Komunitas */}
            <div className='flex justify-between sm:justify-start sm:flex-col gap-[15px]'>
              <p className='font-bold'>Komunitas</p>
              {/* List */}
              <div className='hidden sm:flex flex-col gap-[13px] font-medium text-[#333]/68'>
                <p>Tips Sukses</p>
                <p>Blog</p>
              </div>
              {/* More btn */}
              <p className='sm:hidden font-extrabold text-[#3a3541]'>&gt;</p>
            </div>
          </div>
        </div>

        {/* Garis */}
        <span className='border border-[#3a3541]/12'></span>

        {/* Copyright & Sosial Media */}
        <div className='grid sm:flex gap-3 sm:justify-between'>
          {/* Copyrights */}
          <p className='font-medium text-[#333]/68 order-2 sm:order-1'>@2023 Gerobak Sayur All Rights Reserved.</p>
          
          {/* Sosial Media */}
          <div className='flex gap-[15px] order-1 sm:order-2'>
            {/* Linkedin */}
            <span className='grid place-items-center w-[35px] aspect-square rounded-3xl border-[1.5px] border-[#222325]/35'>
              <Linkedin fill="#222325" size={20} strokeWidth={0.5} />
            </span>

            {/* Facebook */}
            <span className='grid place-items-center w-[35px] aspect-square rounded-3xl border-[1.5px] border-[#222325]/35'>
              <Facebook fill="#222325" size={20} strokeWidth={0.5} />
            </span>

            {/* Instagram */}
            <span className='grid place-items-center w-[35px] aspect-square rounded-3xl border-[1.5px] border-[#222325]/35'>
              <Instagram size={20} strokeWidth={2.5} />
            </span>

            {/* Twitter */}
            <span className='grid place-items-center w-[35px] aspect-square rounded-3xl border-[1.5px] border-[#222325]/35'>
              <Twitter size={20} strokeWidth={2.5} />
            </span>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer