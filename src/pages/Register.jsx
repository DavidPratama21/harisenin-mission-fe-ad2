import React from "react";
import { Link } from "react-router-dom";
import googleLogo from "../assets/Svg/Google_logo.svg";
import indo from "../assets/Svg/IND.svg"

const Register = () => {
  return (
    <div
      className=" mt-16 w-[590px] p-9 gap-9 m-auto grid justify-center 
      bg-white text-[16px] text-center text-[#333]/68
      rounded-sm border border-[#f0f0f0] 
      "
    >
      {/* Title */}
      <div className="grid gap-2.5">
        <h3 className="text-[32px] font-bold text-[#222325]">
          Pendaftaran Akun
        </h3>
        <p className="">Yuk, daftarin akunmu sekarang juga!</p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-6">
          {/* Input Nama, Email, No HP, PW & Confirm PW */}
          <div className="grid gap-4">
            {/* Nama */}
            <div className="grid">
              <label
                className="after:content-['*'] after:text-red-500 after:ml-1 justify-self-start"
                htmlFor=""
              >
                Nama Lengkap
              </label>
              <input
                className="px-4 py-2.5 border rounded-lg border-[#f0f0f0] "
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
                className="px-4 py-2.5 border rounded-lg border-[#f0f0f0] "
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
                {/* Country Num */}
                {/* <input
                  type="email "
                  className="px-4 py-2.5 border rounded-lg border-[#f0f0f0] "
                /> */}
                <div className="flex">
                  <div className="flex p-2 bg-[#f4f5fa] border rounded-l-lg border-[#f0f0f0]">
                    <img src={indo} alt=""/>
                  </div>
                  <select name="" id="" className="px-4 py-2.5 border rounded-r-lg border-[#f0f0f0]">
                    <option value="">
                      +62
                    </option>
                  </select>
                </div>

                {/* Phone Num */}
                <input
                  type="tel"
                  className="py-2.5 border rounded-lg border-[#f0f0f0]"
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
                className="px-4 py-2.5 border rounded-lg border-[#f0f0f0]"
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
                className="px-4 py-2.5 border rounded-lg border-[#f0f0f0]"
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
                className="w-[518px] rounded-xl py-[11px] font-bold
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
                className="bg-[#e8fde1] text-[#3ecf4c] w-[518px] rounded-xl py-[11px] font-bold border border-white
                hover:bg-white hover:border-[#3ecf4c] hover:border"
              >
                Masuk
              </button>
            </Link>
          </div>
        </div>

        {/* Atau */}
        <div className="flex mx-auto items-center gap-2 w-full">
          <div className="h-0.5 w-full bg-[#f1f1f1] "></div>
          atau
          <div className="h-0.5 w-full bg-[#f1f1f1] "></div>
        </div>

        {/* Button Daftar dengan Google */}
        <button className="h-[42px] flex items-center justify-center gap-2 mx-auto border rounded-xl border-[#f0f0f0] w-full font-bold">
          <img className="h-1/2" src={googleLogo} alt="Google Button" />
          Daftar dengan Google
        </button>
      </div>
    </div>
  );
};

export default Register;
