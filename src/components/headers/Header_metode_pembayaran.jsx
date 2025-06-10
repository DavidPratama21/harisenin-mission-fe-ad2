import { Link } from "react-router";
import Logo from "../../assets/Logo.svg";
import Stepper from "../molecules/Stepper";

const Header_metode_pembayaran = ({children}) => {
    return (
        // Navigation
        <div
            className="fixed w-full z-1 flex justify-between items-center bg-light-primary px-6 py-4 border-y border-other-border shadow-[0_0_1px_0_rgba(62,67,74,0.31),4px_8px_12px_0_rgba(62,67,74,0.15)]
        sm:py-3 sm:px-30 sm:gap-9 sm:border-b sm:shadow-none"
        >
            {/* Frame 3 */}
            <div className="flex justify-between items-center w-full">
                {/* Logo */}
                <Link
                    to="/"
                    className={`grid place-content-center h-[42px] w-[152px] sm:h-[56px] sm:w-[237px]`}
                >
                    <img
                        src={Logo}
                        className="h-[22px] sm:h-[30px]"
                        alt="Logo Video Belajar"
                    />
                </Link>
                <div className="hidden sm:inline">
                    <Stepper />
                </div>
            </div>
                {children}
        </div>
    );
};

export default Header_metode_pembayaran;
