import { useEffect, useRef, useState } from "react";
import { Menu, LogOut } from "lucide-react";
import { Link } from "react-router";
import Header from "../components/headers/Header_metode_pembayaran";

const Selesai_layout = ({ children }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dropDownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target)
            ) {
                setIsProfileOpen(false);
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
                <Menu
                    color="#4A505C"
                    className="sm:hidden"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                />
            </Header>
            {isProfileOpen && (
                // Drop Down Menu
                <div
                    ref={dropDownRef}
                    className="rounded-b fixed z-2 w-full top-16 sm:right-30 sm:w-[220px] bg-white shadow-[0_0_1px_0_rgba(62,67,74,0.31),0_18px_28px_0_rgba(62,67,74,0.15)]"
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
            {children}
        </div>
    );
};

export default Selesai_layout;
