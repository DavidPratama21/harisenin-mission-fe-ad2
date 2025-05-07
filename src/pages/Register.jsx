import React from "react";
import { Link } from "react-router-dom";
import googleLogo from "../assets/Svg/Google_logo.svg";
import indo from "../assets/Svg/IND.svg"

const Register = () => {
  return (
    <div className="
      py-7 px-5 gap-6 grid text-[14px] text-center
      sm:p-9 sm:gap-9 sm:text-base
      "
    >
      
      {/* box */}
      <div
        className="m-auto p-5 grid gap-5 justify-center 
        bg-white rounded-sm border border-[#f1f1f1] 
        sm:w-[590px]
        "
      >
        {/* Desc */}
        <div className="grid gap-2.5">
          <h3 className="text-2xl font-semibold text-[#222325]
            sm:text-[32px] 
            "
          >
            Pendaftaran Akun
          </h3>
          <p>Yuk, daftarin akunmu sekarang juga!</p>
        </div>

        {/* Regis Form */}
        <div className="grid gap-5 sm:gap-6">

          {/* Input & Regis/Enter BTN */}
          <div className="grid gap-6">

            {/* Input Nama, Email, No HP, PW & Confirm PW */}
            <div className="grid gap-3 sm:gap-4">
              
              {/* Nama */}
              <div className="grid">
                <label
                  className="
                    justify-self-start pr-4 pb-1
                    after:content-['*'] after:text-red-500 after:ml-1 
                  "
                  htmlFor=""
                >
                  Nama Lengkap
                </label>
                <input
                  className="px-2.5 py-3 rounded-[6px] border border-[#3a3541]/12"
                  type="text"
                />
              </div>

              {/* Email */}
              <div className="grid">
                <label
                  className="after:content-['*'] after:text-red-500 after:ml-1 justify-self-start"
                  htmlFor=""
                >
                  E-mail
                </label>
                <input
                  className="px-2.5 py-3 rounded-[6px] border border-[#3a3541]/12"
                  type="email "
                />
              </div>

              {/* No. Hp */}
              <div className="grid">
                <label
                  className="after:content-['*'] after:text-red-500 after:ml-1 justify-self-start "
                  htmlFor=""
                >
                  No. Hp
                </label>
                {/* Input Phone Num */}
                <div className="grid gap-2 grid-cols-[1fr_3fr]">
                  {/* Country Select */}
                  <div className="flex">
                    <div className="flex p-2 bg-[#f4f5fa] border rounded-l-[6px] border-[#3a3541]/12">
                      <img src={indo} alt=""/>
                    </div>
                    <select name="" id="" className="px-4 py-2.5 border rounded-r-[6px] border-[#3a3541]/12">
                      <option value="">
                        +62
                      </option>
                    </select>
                  </div>

                  {/* Phone Num Input  */}
                  <input
                    type="tel"
                    className="py-2.5 border rounded-[6px] border-[#3a3541]/12"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="grid">
                <label
                  className="after:content-['*'] after:text-red-500 after:ml-1 justify-self-start"
                  htmlFor=""
                >
                  Kata Sandi
                </label>
                <input
                  className="px-2.5 py-3 rounded-[6px] border border-[#3a3541]/12"
                  type="password"
                />
              </div>

              {/* Confirm Password */}
              <div className="grid">
                <label
                  className="after:content-['*'] after:text-red-500 after:ml-1 justify-self-start"
                  htmlFor=""
                >
                  Konfirmasi Kata Sandi
                </label>
                <input
                  className="px-2.5 py-3 rounded-[6px] border border-[#3a3541]/12"
                  type="password"
                />
              </div>

              {/* Forgot Password */}
              <a href="" className="justify-self-end">
                Lupa Password?
              </a>
            </div>

            {/* Button Daftar & Masuk */}
            <div className="grid gap-4">
              {/* Button Daftar */}
              <Link to="/Beranda">
                <button
                  className="w-full rounded-[10px] py-[7px] font-bold
                  bg-[#3ecf4c] text-[#e8fde1] 
                  hover:bg-[#e8fde1] hover:text-[#3ecf4c]
                  "
                >
                  Daftar
                </button>
              </Link>

              {/* Button Masuk */}
              <Link to="/Login">
                <button
                  className="bg-[#e8fde1] text-[#3ecf4c] w-full rounded-[10px] py-[7px] font-bold border border-white
                  hover:bg-white hover:border-[#3ecf4c] hover:border"
                >
                  Masuk
                </button>
              </Link>
            </div>
          </div>

          {/* Atau */}
          <div className="flex mx-auto items-center gap-2.5 w-full">
            <div className="h-0.5 w-full bg-[#f1f1f1] "></div>
            <p className="text-[#4A505C]">atau</p>
            <div className="h-0.5 w-full bg-[#f1f1f1] "></div>
          </div>

          {/* Button Daftar dengan Google */}
          <button className="flex items-center justify-center gap-2 py-2 mx-auto border rounded-xl border-[#f0f0f0] w-full">
            <img className="h-[20px]" src={googleLogo} alt="Google Button" />
            <p className="font-bold text-[#4a505c]">Daftar dengan Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
