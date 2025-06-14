import { Link } from "react-router";

const Button = ({ to, children, type = "default", className }) => {
    return (
        <Link
            to={to}
            className={`rounded-[10px] text-center py-[7px] px-5.5 font-bold text-sm leading-[140%] tracking-[0.2px] ${className} sm:py-2.5 sm:px-6.5 sm:text-base sm:w-full sm:flex sm:place-content-center
                ${
                    type === "reverse"
                        ? "bg-primary-100 text-primary"
                        : type === "disabled"
                        ? "bg-greyscale-400 text-dark-disabled pointer-events-none"
                        : "bg-primary text-light-primary"
                }
                `}
        >
            {children}
        </Link>
    );
};

export default Button;
