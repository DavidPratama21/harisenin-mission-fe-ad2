import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router";
import { ArrowLeft, ChevronDown, LogOut, Menu } from "lucide-react";
import Header from "../components/organisems/Header";
import Divider from "../components/atoms/Divider"
import Button from "../components/atoms/Button"
import Profile from "../assets/Profile.png";
const Video_layout = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 640 });
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isProgressOpen, setIsProgressOpen] = useState(false);
    const dropDownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target)
            ) {
                setIsProfileOpen(false);
            }
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target)
            ) {
                setIsProgressOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
    return (
        <div>
            <Header>
                {/* Back Btn */}
                <div className="flex gap-2.5 items-center">
                    <div className="text-dark-secondary">
                        <ArrowLeft />
                    </div>
                    <p className="font-medium text-sm leading-[140%] tracking-[0.2px] text-dark-primary truncate w-25">
                        Foundations of User Experience Design
                    </p>
                </div>
                {/* Progress video */}
                <button 
                    onClick={() => setIsProgressOpen(!isProgressOpen)}
                    className="flex gap-2 items-center text-primary mr-6">
                    <p className="font-bold leading-[140%] tracking-[0.2px]">
                        10/12
                    </p>
                    <ChevronDown />
                </button>
                {/* Hum / Profile */}
                {isMobile ? (
                    <Menu
                        color="#4A505C"
                        className="sm:hidden"
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                    />
                ) : (
                    <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
                        <img
                            src={Profile}
                            alt="Profile picture"
                            className="w-11 rounded-[10px] hidden sm:inline"
                        />
                    </button>
                )}
            </Header>
            {isProfileOpen && (
                // Drop Down Menu
                <div
                    ref={dropDownRef}
                    className="rounded-b fixed z-2 w-full top-14 sm:right-30 sm:w-[220px] bg-white shadow-[0_0_1px_0_rgba(62,67,74,0.31),0_18px_28px_0_rgba(62,67,74,0.15)]"
                >
                    <Link
                        to="/kategori"
                        className="sm:hidden text-dark-secondary font-medium leading-[140%] tracking-[0.2px] border border-other-border px-3 py-4 flex"
                    >
                        Kategori
                    </Link>
                    <Link
                        to="/profil"
                        className="text-dark-secondary font-medium leading-[140%] tracking-[0.2px] border border-other-border px-3 py-4 flex"
                    >
                        Profil Saya
                    </Link>
                    <Link
                        to="/kelas"
                        className="text-dark-secondary font-medium leading-[140%] tracking-[0.2px] border border-other-border px-3 py-4 flex"
                    >
                        Kelas Saya
                    </Link>
                    <Link
                        to="/pesanan"
                        className="text-dark-secondary font-medium leading-[140%] tracking-[0.2px] border border-other-border px-3 py-4 flex "
                    >
                        Pesanan Saya
                    </Link>
                    <Link
                        to="/login"
                        className="flex items-center gap-[5px] text-error-default font-medium leading-[140%] tracking-[0.2px] border border-other-border px-3 py-4"
                    >
                        Keluar
                        <LogOut />
                    </Link>
                </div>
            )}
            {isProgressOpen && (
                <div className="absolute top-14 z-1 w-80 shadow-[0_12px_25px_-10px_rgba(61,61,61,0.15)] grid p-6 gap-3 rounded bg-other-primary">
                    <p className="font-semibold leading-[120%] text-dark-primary">25% Modul Telah Selesai</p>
                    <Divider />
                    <p className="text-sm leading-[140%] tracking-[0.2px] text-dark-secondary">Selesaikan Semua Modul Untuk Mendapatkan Sertifikat</p>
                    <Button>Ambil Sertifikat</Button>
                </div>
            )}
            {children}
        </div>
    );
};

export default Video_layout;
