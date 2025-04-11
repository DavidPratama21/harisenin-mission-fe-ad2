import React from "react";

const Login = () => {
  return (
    <div>
      {/* Box Login */}
      <div className="w-[590px] rounded-sm border">
        {/* Title */}
        <h1>Masuk ke Akun</h1>
        <p>YUk, lanjutin belajarmu di videobelajar.</p>
        {/* Email */}
        <label htmlFor="">E-mail</label>
        <input type="email " />
        {/* Password */}
        <label htmlFor="">Kata Sandi</label>
        <input type="text" />
        {/* Forgot Password */}
        <a href="">
          Lupa Password?
        </a>
        {/* Button Masuk */}
        <button>
          Masuk
        </button>
        {/* Button Daftar */}
        <button>
          Daftar
        </button>
        {/* Button Masuk dengan Google */}
        <button>
          Masuk dengan Google
        </button>
      </div>
    </div>
  );
};

export default Login;
