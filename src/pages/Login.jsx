import React from "react";
import { Link } from "react-router-dom";
import googleLogo from "../assets/Svg/Google_logo.svg";

const Login = () => {
  return (
    <div className="py-7 px-5 sm:py-16 sm:px-30">
      {/* Box */}
      <div
        className="md:w-[590px] p-5 gap-5 grid mx-auto
        bg-white text-[14px] text-center
        rounded-sm border border-[#f1f1f1] 
        sm:gap-9 sm:p-9"
      >
        {/* Title */}
        <div className="grid gap-2.5">
          <h3 className="text-[24px] font-semibold text-[#222325] sm:text-[32px]">
            Masuk ke Akun
          </h3>
          <p className="sm:text-[16px]">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>
        </div>

        {/* Email, Button Masuk, login with google */}
        <div className="grid gap-5 sm:gap-6">

          {/* Email & Button Masuk */}
          <div className="grid gap-6 sm:gap-6">

            {/* Input Email & PW */}
            <div className="grid gap-3 sm:gap-4">

              {/* Email */}
              <div className="grid">
                <label
                  className="
                    justify-self-start pb-1 pr-4
                    after:content-['*'] after:text-red-500 after:ml-1 
                    sm:text-[16px] "
                  htmlFor=""
                >
                  E-mail
                </label>
                <input
                  className="px-2.5 py-3 rounded-[6px] border border-[#3a3541]/12"
                  type="email "
                />
              </div>

              {/* Password */}
              <div className="grid">
                <label
                  className="pb-1 pr-4 after:content-['*'] after:text-red-500 after:ml-1 justify-self-start sm:text-[16px"
                  htmlFor=""
                >
                  Kata Sandi
                </label>
                <input
                  className="px-2.5 py-3 rounded-[6px] border border-[#3a3541]/12"
                  type="text"
                />
              </div>
              {/* Forgot Password */}
              <a href="" className="justify-self-end font-medium sm:text-[16px]">
                Lupa Password?
              </a>
            </div>

            {/* Button Masuk & Daftar */}
            <div className="grid gap-4">

              {/* Button Masuk */}
              <Link to="/Beranda">
                <button
                  className="w-full rounded-xl py-[7px] font-bold
                  bg-[#3ecf4c] text-[#e8fde1] 
                  hover:bg-[#e8fde1] hover:text-[#3ecf4c]
                  "
                >
                  Masuk
                </button>
              </Link>

              {/* Button Daftar */}
              <Link to="/Register">
                <button
                  className="w-full bg-[#e8fde1] text-[#3ecf4c] rounded-xl py-[7px] font-bold border border-white
                  hover:bg-white hover:border-[#3ecf4c] hover:border"
                >
                  Daftar
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

          {/* Button Masuk dengan Google */}
          <button
            className="
              h-[34px] w-full mx-auto font-bold py-2 
              flex items-center justify-center gap-2 
              border border-[#f1f1f1] rounded-[10px] text-[#4A505C]
              "
          >
            <img className="h-[20px]" src={googleLogo} alt="Google Button" />
            Masuk dengan Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
