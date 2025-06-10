import React from "react";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "../../assets/Logo.svg";

const Footer = () => {
  return (
    // BG
    <div className="relative bg-other-primary border-t border-other-border">
      {/* Frame */}
      <div className="grid gap-4 p-5 mx-auto sm:gap-5 sm:w-[1440px] sm:px-30 sm:py-15 ">
        {/* Frame 1000002280 */}
        <div className="grid gap-4 sm:flex sm:justify-between">
          {/* Frame 1000001673, Video belajar add & contact*/}
          <div className="grid gap-4">
            {/* Logo */}
            <div className="py-[13px] px-[5px]">
              <img
                src={Logo}
                className="h-[25px] sm:h-[30px]"
                alt="Logo Video Belajar"
              />
            </div>

            {/* Frame 1000003858, Add & Contact */}
            <div className="grid gap-2 text-sm leading-[140%] tracking-[0.2px] text-dark-primary sm:gap-3 sm:text-base">
              <p className="font-bold sm:text-lg sm:w-[352px]">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
              <p>Jl. Usman Effendi Np. 50 Lowokwaru, Malang</p>
              <p>+62-877-7123-1234</p>
            </div>
          </div>

          {/* Frame 1155, Kategori, Perusahaan, Komunitas */}
          <div className="grid gap-3 sm:flex sm:gap-12">
            {/* Frame 1145, Kategori */}
            <div className="flex gap-3 sm:grid sm:gap-[15px]">
              <div className="flex justify-between w-full">
                <p className="font-bold">Kategori</p>
                <p className="sm:hidden font-extrabold text-[#3A3541]/58">&gt;</p>
              </div>
              {/* Frame 1141, List */}
              <div className="hidden sm:flex flex-col gap-[13px] font-medium text-dark-secondary leading-[140%] tracking-[0.2px]">
                <p>Digital & Teknologi</p>
                <p>Pemasaran</p>
                <p>Manajemen Bisnis</p>
                <p>Pengembangan Diri</p>
                <p>Desain</p>
              </div>
            </div>

            {/* Frame 1147/1146 Perusahaan */}
            <div className="flex gap-3 sm:grid sm:gap-[15px]">
              <div className="flex justify-between w-full">
                <p className="font-bold">Perusahaan</p>
                <p className="sm:hidden font-extrabold text-[#3A3541]/58">&gt;</p>
              </div>
              {/* List */}
              <div className="hidden sm:flex flex-col gap-[13px] font-medium text-dark-secondary leading-[140%] tracking-[0.2px]">
                <p>Tentang Kami</p>
                <p>FAQ</p>
                <p>Kebijakan Privasi</p>
                <p>Ketentuan Layanan</p>
                <p>Bantuan</p>
              </div>
            </div>

            {/* Frame 1146/1147 Komunitas */}
            <div className="flex gap-3 sm:grid sm:gap-[15px] sm:content-start">
              <div className="flex justify-between w-full">
                <p className="font-bold">Komunitas</p>
                <p className="sm:hidden font-extrabold text-[#3A3541]/58">
                  &gt;
                </p>
              </div>
              {/* List */}
              <div className="hidden sm:flex flex-col gap-[13px] font-medium text-dark-secondary leading-[140%] tracking-[0.2px]">
                <p>Tips Sukses</p>
                <p>Blog</p>
              </div>
            </div>
          </div>
        </div>

        {/* Frame 1000003857 / Divider/Horizontal */}
        <span className="border border-other-border sm:mt-8"></span>

        {/* Frame 1152, Copyright & Sosial Media */}
        <div className="grid gap-3 sm:flex sm:justify-between">
          {/* Frame 1151, Sosial Media */}
          <div className="flex gap-[15px] sm:order-2">
            {/* Linkedin */}
            <span className="grid place-items-center w-[35px] aspect-square rounded-3xl border-[1.5px] border-dark-primary">
              <Linkedin fill="#222325" size={20} strokeWidth={0.5} />
            </span>

            {/* Facebook */}
            <span className="grid place-items-center w-[35px] aspect-square rounded-3xl border-[1.5px] border-dark-primary">
              <Facebook fill="#222325" size={20} strokeWidth={0.5} />
            </span>

            {/* Instagram */}
            <span className="grid place-items-center w-[35px] aspect-square rounded-3xl border-[1.5px] border-dark-primary">
              <Instagram size={20} strokeWidth={2.5} />
            </span>

            {/* Twitter */}
            <span className="grid place-items-center w-[35px] aspect-square rounded-3xl border-[1.5px] border-dark-primary">
              <Twitter size={20} strokeWidth={2.5} />
            </span>
          </div>

          {/* Copyrights */}
          <p className="font-medium text-dark-secondary leading-[140%] tracking-[0.2px] sm:order-1">
            @2023 Gerobak Sayur All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
