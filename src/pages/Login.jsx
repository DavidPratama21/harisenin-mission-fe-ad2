import React from "react";
import { Link } from "react-router-dom";
import googleLogo from "../assets/Google_logo.svg";

const Login = () => {
  return (
    <div
      className=" mt-16 w-[590px] p-9 gap-9 m-auto grid justify-center 
      bg-white text-[16px] text-center 
      rounded-sm border border-[#f0f0f0] 
      "
    >
      {/* Title */}
      <div className="grid gap-2.5">
        <h3 className="text-[32px] font-bold text-[#222325]">Masuk ke Akun</h3>
        <p className="">Yuk, lanjutin belajarmu di videobelajar.</p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-6">
          {/* Input Email & PW */}
          <div className="grid gap-4">
            {/* Email */}
            <div className="grid">
              {/* Email */}
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
                type="text"
              />
            </div>
            {/* Forgot Password */}
            <a href="" className="justify-self-end">
              Lupa Password?
            </a>
          </div>

          {/* Button Masuk & Daftar */}
          <div className="grid gap-4">
            
            {/* Button Masuk */}
            <Link to="/Beranda">
              <button
                className="w-[518px] rounded-xl py-[11px] font-bold
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
                className="bg-[#e8fde1] text-[#3ecf4c] w-[518px] rounded-xl py-[11px] font-bold border border-white
                hover:bg-white hover:border-[#3ecf4c] hover:border"
              >
                Daftar
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

        {/* Button Masuk dengan Google */}
        <button className="h-[42px] flex items-center justify-center gap-2 mx-auto border rounded-xl border-[#f0f0f0] w-full font-bold">
          <img className="h-1/2" src={googleLogo} alt="Google Button" />
          Masuk dengan Google
        </button>
      </div>
    </div>
  );
};

export default Login;
