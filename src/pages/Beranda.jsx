import React from "react";
import Card from "../components/Beranda/Card";
import card_1 from "../assets/Card images/card_1.jpg"
import card_2 from "../assets/Card images/card_2.jpg"
import card_3 from "../assets/Card images/card_3.jpg"
import card_4 from "../assets/Card images/card_4.jpg"
import card_5 from "../assets/Card images/card_5.jpg"
import card_6 from "../assets/Card images/card_6.jpg"
import card_7 from "../assets/Card images/card_7.jpg"
import card_8 from "../assets/Card images/card_8.jpg"
import card_9 from "../assets/Card images/card_9.jpg"
import tutor_1 from "../assets/Avatar tutor/1.png"
import tutor_2 from "../assets/Avatar tutor/2.png"
import tutor_3 from "../assets/Avatar tutor/3.png"
import tutor_4 from "../assets/Avatar tutor/4.png"
import tutor_5 from "../assets/Avatar tutor/5.png"
import tutor_6 from "../assets/Avatar tutor/6.png"
import tutor_7 from "../assets/Avatar tutor/7.png"
import tutor_8 from "../assets/Avatar tutor/8.png"

const Beranda = () => {
  return (
    <div className="grid 
      text-[14px] sm:text-base font-medium
      py-7 px-5 gap-6 mx-auto
      sm:py-16 sm:px-30 sm:gap-16 sm:w-[1440px]
      "
    >
      {/* Hero */}
      <div className="grid justify-items-center 
        relative overflow-hidden
        text-center text-white
        rounded-[10px]
        bg-black/80 
        gap-6 py-16 px-5
        sm:pt-[82px] sm:pb-16 sm:px-[140px]
        "
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-1"></div>

        {/* Background Image */}
        <div className="absolute inset-0 bg-[url(./src/assets/Background/Bg_hero.jpg)] bg-cover bg-center"></div>

        {/* Title & Desc */}
        <div className="grid gap-3 z-2">
          <h1 className="font-bold text-2xl sm:text-5xl">Revolusi Pembelajaran: Temukan Ilmu Baru melalui PLatform Video Interaktif!</h1>
          <p className="font-medium">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalma latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
        </div>

        <button
          className="rounded-[10px] py-2.5 px-6.5 z-2 
          bg-[#3ecf4c] text-[#e8fde1] 
          hover:bg-[#e8fde1] hover:text-[#3ecf4c]"
        >
          Temukan Video Course untuk Dipelajari
        </button>
      </div>

      {/* Beranda */}
      <main className="grid gap-6 sm:gap-8">

        {/* Title & Desc Beranda */}
        <div className="grid gap-2.5">
          <h1 className="font-semibold sm:font-bold text-2xl sm:text-[32px] text-[#222325]">Koleksi Video Pembelajaran Unggulan</h1>
          <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>

        {/* Tabs */}
        <div className="flex">
          {/* Tab Semua Kelas */}
          <div className="grid">
            <span className="text-[#f64920] py-3 pr-9 font-medium">Semua Kelas</span>
            {/* Bar */}
            <span className="h-1.5 w-14 bg-[#f64920] rounded"></span>
          </div>

          {/* Tab Pemasaran */}
          <span className="py-3 pr-9 font-medium">Pemasaran</span>
          {/* Tab Desain */}
          <span className="py-3 pr-9 font-medium">Desain</span>
          {/* Tab Pengembangan Diri */}
          <span className="py-3 pr-9 font-medium">Pengembangan Diri</span>
          {/* Tab Bisnis */}
          <span className="py-3 pr-9 font-medium">Bisnis</span>
        </div>

        {/* Cards */}
        <div className="flex flex-col mx-auto
          gap-5 
          sm:gap-x-6 sm:gap-y-8 sm:flex-row sm:flex-wrap
          "
        >
          <Card image={card_1} tutor={tutor_1}/>
          <Card image={card_2} tutor={tutor_2}/>
          <Card image={card_3} tutor={tutor_3}/>
          <Card image={card_4} tutor={tutor_4}/>
          <Card image={card_5} tutor={tutor_5}/>
          <Card image={card_6} tutor={tutor_6}/>
          <Card image={card_7} tutor={tutor_7}/>
          <Card image={card_8} tutor={tutor_8}/>
          <Card image={card_9} tutor={tutor_3}/>
        </div>
      </main>

      {/* Banner CTA */}
      <div className="relative grid place-content-center drop-shadow-[0_12px_45px_-10px_rgba(0,59,222,0.2)] 
        text-white rounded overflow-hidden
        h-[400px] px-5 "
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-1"></div>

        {/* Background Image */}
        <div className="absolute inset-0 bg-[url(./src/assets/Background/Bg_banner.jpg)] bg-cover bg-center"></div>

        {/* Konten */}
        <div className="grid gap-10 justify-center z-2">
          
          {/* Newsletter */}
          <div className="text-center grid justify-center gap-1">
            <h3 className="text-base sm:text-[18px] text-[#C1C2C4]">NEWSLETTER</h3>
            {/* Desc */}
            <div className="grid gap-2.5">
              <h2 className="text-2xl sm:text-[32px] font-semibold">Mau Belajar Lebih Banyak?</h2>
              <p className="font-normal text-[#F4F5FA]">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
            </div>
          </div>

          {/* Input Email */}
          <div className="
            grid sm:flex gap-5 sm:justify-between
            py-2 pr-2 pl-8 rounded-[10px] sm:bg-white "
          >
            <input
              className="
                placeholder-[#333]/68 focus:outline-none text-[#222325] bg-white rounded-[10px] 
                py-2.5 pl-3 pr-2 sm:p-0
                text-sm text-center font-normal
                sm:text-base sm:text-left"
              type="text"
              placeholder="Masukkan Emailmu"
            />
            <button className="rounded-[10px] py-2.5 px-6.5 bg-[#FFBD3A] font-bold">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
