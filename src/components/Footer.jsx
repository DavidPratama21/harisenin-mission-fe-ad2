import React from 'react'
import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react'
import Logo from '../assets/Svg/Logo.svg'

const Footer = () => {
  return (
    <div className=' bg-white border-t border-[#3a3541]/12'>
      <div className='w-[1440px] mx-auto px-30 py-15 grid gap-5 text-[#222325]'>
        {/* Videobelajar, Kategori, Perusahaan, Komunitas */}
        <div className='flex justify-between'>
          {/* Video belajar add & contact*/}
          <div className='grid gap-4'>
            {/* Logo */}
            <div className='py-[13px] px-[5px]'>
              <img src={Logo} className='h-[30px]' alt="Logo Video Belajar"/>
            </div>

            {/* Add & Contact */}
            <div className='grid gap-3'>
              <p className='text-lg font-bold'>Gali Potensi Anda Melalui Pembelajaran <br/>Video di hariesok.id!</p>
              <p>Jl. Usman Effendi Np. 50 Lowokwaru, Malang</p>
              <p>+62-877-7123-1234</p>
            </div>
          </div>

          {/* Kategori, Perusahaan, Komunitas */}
          <div className='flex gap-12'>
            {/* Kategori */}
            <div className='flex flex-col gap-[15px]'>
              <p className='font-bold'>Kategori</p>
              {/* List */}
              <div className='flex flex-col gap-[13px] font-medium text-[#333]/68'>
                <p>Digital & Teknologi</p>
                <p>Pemasaran</p>
                <p>Manajemen Bisnis</p>
                <p>Pengembangan Diri</p>
                <p>Desain</p>
              </div>
            </div>

            {/* Perusahaan */}
            <div className='flex flex-col gap-[15px]'>
              <p className='font-bold'>Perusahaan</p>
              {/* List */}
              <div className='flex flex-col gap-[13px] font-medium text-[#333]/68'>
                <p>Tentang Kami</p>
                <p>FAQ</p>
                <p>Kebijakan Privasi</p>
                <p>Ketentuan Layanan</p>
                <p>Bantuan</p>
              </div>
            </div>

            {/* Komunitas */}
            <div className='flex flex-col gap-[15px]'>
              <p className='font-bold'>Komunitas</p>
              {/* List */}
              <div className='flex flex-col gap-[13px] font-medium text-[#333]/68'>
                <p>Tips Sukses</p>
                <p>Blog</p>
              </div>
            </div>
          </div>
        </div>

        {/* Garis */}
        <span className='border border-[#3a3541]/12'></span>

        {/* Copyright & Sosial Media */}
        <div className='flex justify-between'>
          {/* Copyrights */}
          <p className='font-medium text-[#333]/68'>@2023 Gerobak Sayur All Rights Reserved.</p>
          
          {/* Sosial Media */}
          <div className='flex gap-[15px]'>
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