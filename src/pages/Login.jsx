import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import GoogleLogo from "../assets/Google_logo.svg";
import Button from "../components/atoms/Button";
import Login_layout from "../layouts/Login_layout";
import { Users } from "../data/Users";

const Login = () => {
    const navigate = useNavigate();

    // ambil data dari input form
    const [getEmail, setGetEmail] = useState("");
    const [getPassword, setGetPassword] = useState("");

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const cek_users_LS = localStorage.getItem("users");
        // kalo LS nya kosong, isiin dari DB ke LS
        if (!cek_users_LS) {
            localStorage.setItem("users", JSON.stringify(Users));
        }
        // Ambil dari localStorage
        const usersParse = JSON.parse(localStorage.getItem("users") || []);
        setUsers(usersParse);
    }, []);

    // Find user dengan email yg sama dgn input form & cek pwnya juga
    const user = users.find(
        (user) => user.email === getEmail && user.password === getPassword
    );

    // Proses Login dari Local
    const handleLogin = (e) => {
        e.preventDefault();
        if (user) {
            localStorage.setItem("Login", true);
            localStorage.setItem("Lagi Login", JSON.stringify(user));
            alert("Login Success");
            navigate("/");
        } else {
            alert("Login Gagal");
        }
    };

    return (
        <Login_layout>
            <div className="relative top-16 mb-16 py-7 px-5 bg-[#FFFDF3] sm:py-16 sm:px-30">
                {/* 42224 */}
                <div className="p-5 gap-5 grid mx-auto bg-light-primary text-[14px] text-center rounded-sm border border-other-border sm:gap-9 sm:p-9 md:w-[590px]">
                    {/* Desc */}
                    <div className="grid gap-2.5">
                        <h3 className="text-[24px] font-semibold text-dark-primary leading-[110%] sm:text-[32px]">
                            Masuk ke Akun
                        </h3>
                        <p className="sm:text-[16px] text-dark-secondary leading-[140%] tracking-[0.2px] ">
                            Yuk, lanjutin belajarmu di videobelajar.
                        </p>
                    </div>

                    {/* 4406, Email, Button Masuk, login with google */}
                    <div className="grid gap-5 sm:gap-6">
                        {/* Form exclude Regis BTN */}
                        <div className="grid gap-4">
                            {/* 4405, Email & Button Masuk */}
                            <form
                                onSubmit={handleLogin}
                                action=""
                                method=""
                                className="grid gap-6 sm:gap-6"
                            >
                                {/* 4403, Input Email & PW */}
                                <div className="grid gap-3 sm:gap-4 text-dark-secondary">
                                    {/* Email */}
                                    <div className="grid">
                                        <label
                                            htmlFor=""
                                            className="justify-self-start pb-1 pr-4 after:content-['*'] after:text-red-500 after:ml-1 sm:text-[16px] "
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            onChange={(e) =>
                                                setGetEmail(e.target.value)
                                            }
                                            className="px-2.5 py-3 rounded-[6px] border border-other-border"
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
                                            required
                                            type="password"
                                            onChange={(e) =>
                                                setGetPassword(e.target.value)
                                            }
                                            className="px-2.5 py-3 rounded-[6px] border border-other-border"
                                        />
                                    </div>
                                    {/* Forgot Password */}
                                    <a
                                        href=""
                                        className="justify-self-end font-medium sm:text-[16px]"
                                    >
                                        Lupa Password?
                                    </a>
                                </div>
                                {/* Button Masuk */}
                                <Button type="submit">Masuk</Button>
                            </form>
                            {/* Button Daftar */}
                            <Button
                                type="button"
                                style="reverse"
                                action={() => navigate("/register")}
                            >
                                Daftar
                            </Button>
                        </div>
                        {/* 4407, Atau */}
                        <div className="flex mx-auto items-center gap-2.5 w-full">
                            <div className="h-0.5 w-full bg-other-border "></div>
                            {/* Frame 1000004408 */}
                            <p className="text-dark-secondary">atau</p>
                            <div className="h-0.5 w-full bg-other-border "></div>
                        </div>

                        {/* Button, Masuk dengan Google */}
                        <button className="w-full mx-auto font-bold py-2 flex items-center justify-center gap-2 border border-other-border rounded-[10px]">
                            <div className="flex gap-2">
                                <img
                                    className="h-[20px]"
                                    src={GoogleLogo}
                                    alt="Google Button"
                                />
                                <p className="text-dark-secondary">
                                    Masuk dengan Google
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </Login_layout>
    );
};

export default Login;
