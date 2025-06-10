import { Link } from "react-router";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import GoogleLogo from "../assets/Google_logo.svg";
// import indo from "../assets/IND.svg"

const Register = () => {
  return (
    // Frame 1000003752
    <div
      className="
      py-7 px-5 gap-6 grid bg-[#FFFDF3]
      sm:px-30 sm:py-16 sm:text-base"
    >
      {/* Frame 42224, Box */}
      <div
        className="rounded-sm border border-other-border p-5 gap-5 grid bg-light-primary
        sm:w-[590px] sm:mx-auto
        "
      >
        {/* Desc */}
        <div className="grid gap-2.5 text-center">
          <h3
            className="text-2xl font-semibold text-dark-primary leading-[110%]
            sm:text-[32px]"
          >
            Pendaftaran Akun
          </h3>
          <p
            className="
              text-sm text-dark-secondary leading-[140%] tracking-[0.2px]
              sm:text-base"
          >
            Yuk, daftarin akunmu sekarang juga!
          </p>
        </div>

        {/* Frame 1000004406, Regis Form */}
        <div className="grid gap-5 sm:gap-6">
          {/* Frame 1000004405, Input & Regis/Enter BTN */}
          <div className="grid gap-6">
            {/* Frame 1000004403, Input Nama, Email, No HP, PW & Confirm PW */}
            <div className="grid gap-3 sm:gap-4">
              {/* Nama */}
              <div className="grid">
                <label
                  htmlFor=""
                  className="
                    text-sm text-dark-secondary leading-[140%] tracking-[0.2px] after:content-['*'] after:text-red-500 after:ml-1 
                    sm:text-base"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  className="px-2.5 py-3 rounded-[6px] border border-other-border"
                />
              </div>

              {/* Email */}
              <div className="grid">
                <label
                  htmlFor=""
                  className="text-sm text-dark-secondary leading-[140%] tracking-[0.2px] after:content-['*'] after:text-red-500 after:ml-1
                  sm:text-base"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  className="px-2.5 py-3 rounded-[6px] border border-other-border"
                />
              </div>

              {/* Jenis Kelamin */}
              <div className="grid">
                <label
                  for="gender"
                  htmlFor=""
                  className="text-sm text-dark-secondary leading-[140%] tracking-[0.2px] after:content-['*'] after:text-red-500 after:ml-1
                  sm:text-base"
                >
                  Jenis Kelamin
                </label>
                <select
                  name="gender"
                  required
                  className="px-2.5 py-3 rounded-[6px] text-dark-secondary border border-other-border"
                >
                  <option value="" disabled hidden>
                    -- Pilih opsi --
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              {/* No. Hp */}
              <div className="grid">
                <label
                  htmlFor=""
                  className="text-sm text-dark-secondary leading-[140%] tracking-[0.2px] after:content-['*'] after:text-red-500 after:ml-1
                  sm:text-base"
                >
                  No. Hp
                </label>
                {/* Input Phone Num */}
                <div className="grid gap-2 py-1 border border-other-border rounded-[6px]">
                  <PhoneInput
                    country="id"
                    buttonClass="!border-none !bg-light-primary"
                    containerClass="!py-1 px-2.5"
                    dropdownClass="font-lato"
                    inputClass="!border-none !bg-light-primary font-lato !w-full "
                  />
                </div>
              </div>

              {/* Password */}
              <div className="grid text-sm">
                <label
                  htmlFor=""
                  className="text-sm text-dark-secondary leading-[140%] tracking-[0.2px] after:content-['*'] after:text-red-500 after:ml-1 justify-self-start sm:text-[16px]"
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  className="px-2.5 py-3 rounded-[6px] border border-other-border"
                />
              </div>

              {/* Confirm Password */}
              <div className="grid text-sm">
                <label
                  htmlFor=""
                  className="text-sm text-dark-secondary leading-[140%] tracking-[0.2px] after:content-['*'] after:text-red-500 after:ml-1 justify-self-start sm:text-[16px]"
                >
                  Konfimrasi Kata Sandi
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
                  text-sm font-medium text-dark-secondary leading-[140%] tracking-[0.2px] justify-self-end
                  sm:text-base"
              >
                Lupa Password?
              </a>
            </div>

            {/* Frame 1000004809, Button Daftar & Masuk */}
            <div className="grid gap-4">
              {/* Button Masuk */}
              <Link to="/Beranda">
                <button
                  className="
                    bg-primary text-light-primary w-full rounded-[10px] py-[7px] font-bold leading-[140%] tracking-[0.2px]
                  hover:bg-primary-100 hover:text-primary 
                  sm:text-base"
                >
                  Masuk
                </button>
              </Link>

              {/* Button Daftar */}
              <Link to="/Register">
                <button
                  className="
                    bg-primary-100 text-primary w-full rounded-[10px] py-[7px] font-bold leading-[140%] tracking-[0.2px] border border-white
                  hover:bg-white hover:border-primary hover:border
                  sm:text-base"
                >
                  Daftar
                </button>
              </Link>
            </div>
          </div>

          {/* Frame 1000004407, Atau */}
          <div className="flex mx-auto items-center gap-2.5 w-full">
            <div className="h-0.5 w-full bg-other-border "></div>
            {/* Frame 1000004408 */}
            <p className="text-dark-secondary">atau</p>
            <div className="h-0.5 w-full bg-other-border "></div>
          </div>

          {/* Button Daftar dengan Google */}
          <button
            className="
              w-full mx-auto font-bold py-2 flex items-center justify-center gap-2 border border-other-border rounded-[10px]"
          >
            <div className="flex gap-2">
              <img className="h-[20px]" src={GoogleLogo} alt="Google Button" />
              <p className="text-dark-secondary">Masuk dengan Google</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
