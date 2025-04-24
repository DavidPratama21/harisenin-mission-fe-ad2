import React from "react";

const Beranda = () => {
  return (
    <div className="grid px-[120px] py-16 gap-16">
      {/* Hero */}
      <div
        className="grid gap-6 bg-black/80
        pt-[82px] pb-[64px] px-[140px]
        text-center justify-items-center text-white
        rounded-xl
      "
      >
        {/* Title & Desc */}
        <div className="grid gap-3">
          <h1 className="font-bold text-5xl">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui PLatform Video
            Interaktif!
          </h1>
          <p>
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalma latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
        </div>
        <button
          className="rounded-xl font-bold py-2.5 px-[26px]
          bg-[#3ecf4c] text-[#e8fde1] 
          hover:bg-[#e8fde1] hover:text-[#3ecf4c]"
        >
          Temukan Video Course untuk Dipelajari
        </button>
      </div>

      {/* Beranda */}
      <div className="grid gap-8">
        {/* Title & Desc Beranda */}
        <div className="grid gap-2.5">
          <h1 className="font-bold text-[32px] text-[#222325]">Koleksi Video Pembelajaran Unggulan</h1>
          <p className="">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
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
        <div className="flex gap-x-6 gap-y-8 flex-wrap">

          {/* Card */}
          <div className="w-[384px] grid gap-4 p-5 border border-[#3a3541]/12 rounded-xl bg-white">
            {/* Class img*/}
            <div className="rounded-xl bg-black h-[193px] aspect-video"></div>
            {/* title & desc*/}
            <div className="grid gap-2">
              {/* title */}
              <h6 className="text-[#222325] font-bold text-lg">Big 4 Auditor Financial Analyst</h6>
              {/* desc */}
              <p className="font-medium">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
            </div>
            {/* tutor */}
            <div className="flex gap-2.5 items-center">
              {/* Foto Profile */}
              <div className="h-10 aspect-square bg-black rounded-xl"></div>
              {/* Name & Role */}
              <div>
                <p className="font-medium text-[#222325]">Jenna Ortega</p>
                <p>Senior Accountant di 
                  <span className="font-bold"> Gojek</span>
                </p>
              </div>
              <div>
              </div>
            </div>
            {/* Rating & price */}
            <div className="flex justify-between items-center">
              {/* rating */}
              <div className="flex gap-2">
                {/* Stars */}
                <div>
                </div>
                <p className="font-medium text-[14px]">3.5 (8.6)</p>
              </div>
              {/* price */}
              <p className="font-semibold text-2xl text-[#3ecf4c]">Rp 300K</p>
            </div>
          </div>  

          {/* Card */}
          <div className="w-[384px] grid gap-4 p-5 border border-[#3a3541]/12 rounded-xl bg-white">
            {/* Class img*/}
            <div className="rounded-xl bg-black h-[193px] aspect-video"></div>
            {/* title & desc*/}
            <div className="grid gap-2">
              {/* title */}
              <h6 className="text-[#222325] font-bold text-lg">Big 4 Auditor Financial Analyst</h6>
              {/* desc */}
              <p className="font-medium">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
            </div>
            {/* tutor */}
            <div className="flex gap-2.5 items-center">
              {/* Foto Profile */}
              <div className="h-10 aspect-square bg-black rounded-xl"></div>
              {/* Name & Role */}
              <div>
                <p className="font-medium text-[#222325]">Jenna Ortega</p>
                <p>Senior Accountant di 
                  <span className="font-bold"> Gojek</span>
                </p>
              </div>
              <div>

              </div>
            </div>
            {/* Rating & price */}
            <div className="flex justify-between items-center">
              {/* rating */}
              <div className="flex gap-2">
                {/* Stars */}
                <div>
                </div>
                <p className="font-medium text-[14px]">3.5 (8.6)</p>
              </div>
              {/* price */}
              <p className="font-semibold text-2xl text-[#3ecf4c]">Rp 300K</p>
            </div>
          </div>  

          {/* Card */}
          <div className="w-[384px] grid gap-4 p-5 border border-[#3a3541]/12 rounded-xl bg-white">
            {/* Class img*/}
            <div className="rounded-xl bg-black h-[193px] aspect-video"></div>
            {/* title & desc*/}
            <div className="grid gap-2">
              {/* title */}
              <h6 className="text-[#222325] font-bold text-lg">Big 4 Auditor Financial Analyst</h6>
              {/* desc */}
              <p className="font-medium">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
            </div>
            {/* tutor */}
            <div className="flex gap-2.5 items-center">
              {/* Foto Profile */}
              <div className="h-10 aspect-square bg-black rounded-xl"></div>
              {/* Name & Role */}
              <div>
                <p className="font-medium text-[#222325]">Jenna Ortega</p>
                <p>Senior Accountant di 
                  <span className="font-bold"> Gojek</span>
                </p>
              </div>
              <div>

              </div>
            </div>
            {/* Rating & price */}
            <div className="flex justify-between items-center">
              {/* rating */}
              <div className="flex gap-2">
                {/* Stars */}
                <div>
                </div>
                <p className="font-medium text-[14px]">3.5 (8.6)</p>
              </div>
              {/* price */}
              <p className="font-semibold text-2xl text-[#3ecf4c]">Rp 300K</p>
            </div>
          </div>  

          {/* Card */}
          <div className="w-[384px] grid gap-4 p-5 border border-[#3a3541]/12 rounded-xl bg-white">
            {/* Class img*/}
            <div className="rounded-xl bg-black h-[193px] aspect-video"></div>
            {/* title & desc*/}
            <div className="grid gap-2">
              {/* title */}
              <h6 className="text-[#222325] font-bold text-lg">Big 4 Auditor Financial Analyst</h6>
              {/* desc */}
              <p className="font-medium">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
            </div>
            {/* tutor */}
            <div className="flex gap-2.5 items-center">
              {/* Foto Profile */}
              <div className="h-10 aspect-square bg-black rounded-xl"></div>
              {/* Name & Role */}
              <div>
                <p className="font-medium text-[#222325]">Jenna Ortega</p>
                <p>Senior Accountant di 
                  <span className="font-bold"> Gojek</span>
                </p>
              </div>
              <div>
              </div>
            </div>
            {/* Rating & price */}
            <div className="flex justify-between items-center">
              {/* rating */}
              <div className="flex gap-2">
                {/* Stars */}
                <div>
                </div>
                <p className="font-medium text-[14px]">3.5 (8.6)</p>
              </div>
              {/* price */}
              <p className="font-semibold text-2xl text-[#3ecf4c]">Rp 300K</p>
            </div>
          </div>  

          {/* Card */}
          <div className="w-[384px] grid gap-4 p-5 border border-[#3a3541]/12 rounded-xl bg-white">
            {/* Class img*/}
            <div className="rounded-xl bg-black h-[193px] aspect-video"></div>
            {/* title & desc*/}
            <div className="grid gap-2">
              {/* title */}
              <h6 className="text-[#222325] font-bold text-lg">Big 4 Auditor Financial Analyst</h6>
              {/* desc */}
              <p className="font-medium">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
            </div>
            {/* tutor */}
            <div className="flex gap-2.5 items-center">
              {/* Foto Profile */}
              <div className="h-10 aspect-square bg-black rounded-xl"></div>
              {/* Name & Role */}
              <div>
                <p className="font-medium text-[#222325]">Jenna Ortega</p>
                <p>Senior Accountant di 
                  <span className="font-bold"> Gojek</span>
                </p>
              </div>
              <div>

              </div>
            </div>
            {/* Rating & price */}
            <div className="flex justify-between items-center">
              {/* rating */}
              <div className="flex gap-2">
                {/* Stars */}
                <div>
                </div>
                <p className="font-medium text-[14px]">3.5 (8.6)</p>
              </div>
              {/* price */}
              <p className="font-semibold text-2xl text-[#3ecf4c]">Rp 300K</p>
            </div>
          </div>  

          {/* Card */}
          <div className="w-[384px] grid gap-4 p-5 border border-[#3a3541]/12 rounded-xl bg-white">
            {/* Class img*/}
            <div className="rounded-xl bg-black h-[193px] aspect-video"></div>
            {/* title & desc*/}
            <div className="grid gap-2">
              {/* title */}
              <h6 className="text-[#222325] font-bold text-lg">Big 4 Auditor Financial Analyst</h6>
              {/* desc */}
              <p className="font-medium">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
            </div>
            {/* tutor */}
            <div className="flex gap-2.5 items-center">
              {/* Foto Profile */}
              <div className="h-10 aspect-square bg-black rounded-xl"></div>
              {/* Name & Role */}
              <div>
                <p className="font-medium text-[#222325]">Jenna Ortega</p>
                <p>Senior Accountant di 
                  <span className="font-bold"> Gojek</span>
                </p>
              </div>
              <div>
              </div>
            </div>
            {/* Rating & price */}
            <div className="flex justify-between items-center">
              {/* rating */}
              <div className="flex gap-2">
                {/* Stars */}
                <div>
                </div>
                <p className="font-medium text-[14px]">3.5 (8.6)</p>
              </div>
              {/* price */}
              <p className="font-semibold text-2xl text-[#3ecf4c]">Rp 300K</p>
            </div>
          </div>  

          {/* Card */}
          <div className="w-[384px] grid gap-4 p-5 border border-[#3a3541]/12 rounded-xl bg-white">
            {/* Class img*/}
            <div className="rounded-xl bg-black h-[193px] aspect-video"></div>
            {/* title & desc*/}
            <div className="grid gap-2">
              {/* title */}
              <h6 className="text-[#222325] font-bold text-lg">Big 4 Auditor Financial Analyst</h6>
              {/* desc */}
              <p className="font-medium">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
            </div>
            {/* tutor */}
            <div className="flex gap-2.5 items-center">
              {/* Foto Profile */}
              <div className="h-10 aspect-square bg-black rounded-xl"></div>
              {/* Name & Role */}
              <div>
                <p className="font-medium text-[#222325]">Jenna Ortega</p>
                <p>Senior Accountant di 
                  <span className="font-bold"> Gojek</span>
                </p>
              </div>
              <div>

              </div>
            </div>
            {/* Rating & price */}
            <div className="flex justify-between items-center">
              {/* rating */}
              <div className="flex gap-2">
                {/* Stars */}
                <div>
                </div>
                <p className="font-medium text-[14px]">3.5 (8.6)</p>
              </div>
              {/* price */}
              <p className="font-semibold text-2xl text-[#3ecf4c]">Rp 300K</p>
            </div>
          </div>  

          {/* Card */}
          <div className="w-[384px] grid gap-4 p-5 border border-[#3a3541]/12 rounded-xl bg-white">
            {/* Class img*/}
            <div className="rounded-xl bg-black h-[193px] aspect-video"></div>
            {/* title & desc*/}
            <div className="grid gap-2">
              {/* title */}
              <h6 className="text-[#222325] font-bold text-lg">Big 4 Auditor Financial Analyst</h6>
              {/* desc */}
              <p className="font-medium">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
            </div>
            {/* tutor */}
            <div className="flex gap-2.5 items-center">
              {/* Foto Profile */}
              <div className="h-10 aspect-square bg-black rounded-xl"></div>
              {/* Name & Role */}
              <div>
                <p className="font-medium text-[#222325]">Jenna Ortega</p>
                <p>Senior Accountant di 
                  <span className="font-bold"> Gojek</span>
                </p>
              </div>
              <div>

              </div>
            </div>
            {/* Rating & price */}
            <div className="flex justify-between items-center">
              {/* rating */}
              <div className="flex gap-2">
                {/* Stars */}
                <div>
                </div>
                <p className="font-medium text-[14px]">3.5 (8.6)</p>
              </div>
              {/* price */}
              <p className="font-semibold text-2xl text-[#3ecf4c]">Rp 300K</p>
            </div>
          </div>  

          {/* Card */}
          <div className="w-[384px] grid gap-4 p-5 border border-[#3a3541]/12 rounded-xl bg-white">
            {/* Class img*/}
            <div className="rounded-xl bg-black h-[193px] aspect-video"></div>
            {/* title & desc*/}
            <div className="grid gap-2">
              {/* title */}
              <h6 className="text-[#222325] font-bold text-lg">Big 4 Auditor Financial Analyst</h6>
              {/* desc */}
              <p className="font-medium">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
            </div>
            {/* tutor */}
            <div className="flex gap-2.5 items-center">
              {/* Foto Profile */}
              <div className="h-10 aspect-square bg-black rounded-xl"></div>
              {/* Name & Role */}
              <div>
                <p className="font-medium text-[#222325]">Jenna Ortega</p>
                <p>Senior Accountant di 
                  <span className="font-bold"> Gojek</span>
                </p>
              </div>
              <div>

              </div>
            </div>
            {/* Rating & price */}
            <div className="flex justify-between items-center">
              {/* rating */}
              <div className="flex gap-2">
                {/* Stars */}
                <div>
                </div>
                <p className="font-medium text-[14px]">3.5 (8.6)</p>
              </div>
              {/* price */}
              <p className="font-semibold text-2xl text-[#3ecf4c]">Rp 300K</p>
            </div>
          </div>  
          
        </div>



      </div>

      {/* Banner CTA */}
    </div>
  );
};

export default Beranda;
