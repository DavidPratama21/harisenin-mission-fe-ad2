import { Link } from "react-router";
import { EyeOff } from "lucide-react";
import GoogleLogo from "../assets/Google_logo.svg";

const Login = () => {
  return (
    <div className="py-7 px-5 bg-[#FFFDF3] sm:py-16 sm:px-30">
      {/* Frame 42224 */}
      <div
        className="
          p-5 gap-5 grid mx-auto bg-light-primary text-[14px] text-center rounded-sm border border-other-border
          sm:gap-9 sm:p-9 md:w-[590px]"
      >
        {/* Desc */}
        <div className="grid gap-2.5">
          <h3 className="text-[24px] font-semibold text-dark-primary leading-[110%] sm:text-[32px]">
            Masuk ke Akun
          </h3>
          <p className="sm:text-[16px] text-dark-secondary leading-[140%] tracking-[0.2px] ">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>
        </div>

        {/* Frame 1000004406, Email, Button Masuk, login with google */}
        <form action="" method="" className="grid gap-5 sm:gap-6">
          {/* Frame 1000004405, Email & Button Masuk */}
          <div className="grid gap-6 sm:gap-6">
            {/* Frame 1000004403, Input Email & PW */}
            <div className="grid gap-3 sm:gap-4 text-dark-secondary">
              {/* Email */}
              <div className="grid">
                <label
                  htmlFor=""
                  className="
                    justify-self-start pb-1 pr-4 
                    after:content-['*'] after:text-red-500 after:ml-1 
                    sm:text-[16px] "
                >
                  E-mail
                </label>
                <input
                  type="email"
                  className="
                    px-2.5 py-3 rounded-[6px] border border-other-border"
                />
              </div>

              {/* Password */}
              <div className="grid">
                <label
                  htmlFor=""
                  className="pb-1 pr-4 after:content-['*'] after:text-red-500 after:ml-1 justify-self-start sm:text-[16px"
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  className="px-2.5 py-3 rounded-[6px] border border-other-border"
                />
              </div>
              {/* Forgot Password */}
              <a
                href=""
                className="
                  justify-self-end font-medium 
                  sm:text-[16px]"
              >
                Lupa Password?
              </a>
            </div>

            {/* Frame 1000004809, Button Masuk & Daftar */}
            <div className="grid gap-4">
              {/* Button Masuk */}
              <Link to="/Beranda">
                <button
                  className="
                    bg-primary text-light-primary w-full rounded-xl py-[7px] font-bold leading-[140%] tracking-[0.2px]
                  hover:bg-primary-100 hover:text-primary"
                >
                  Masuk
                </button>
              </Link>

              {/* Button Daftar */}
              <Link to="/Register">
                <button
                  className="
                    bg-primary-100 text-primary w-full rounded-xl py-[7px] font-bold leading-[140%] tracking-[0.2px] border border-white
                  hover:bg-white hover:border-primary hover:border"
                >
                  Daftar
                </button>
              </Link>
            </div>
          </div>

          {/*Frame 1000004407, Atau */}
          <div className="flex mx-auto items-center gap-2.5 w-full">
            <div className="h-0.5 w-full bg-other-border "></div>
            {/* Frame 1000004408 */}
            <p className="text-dark-secondary">atau</p>
            <div className="h-0.5 w-full bg-other-border "></div>
          </div>

          {/* Button, Masuk dengan Google */}
          <button
            className="
              w-full mx-auto font-bold py-2 flex items-center justify-center gap-2 border border-other-border rounded-[10px]"
          >
            <div className="flex gap-2">
              <img className="h-[20px]" src={GoogleLogo} alt="Google Button" />
              <p className="text-dark-secondary">Masuk dengan Google</p>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
