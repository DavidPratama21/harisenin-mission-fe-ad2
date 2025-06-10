import { Link } from "react-router";

const Button = ({to, action}) => {
    return (
        <Link
            to={to}
            className="rounded-[10px] text-center bg-primary py-[7px] px-5.5 text-light-primary font-bold text-sm leading-[140%] tracking-[0.2px] sm:py-2.5 sm:px-6.5 sm:text-base sm:w-full sm:flex sm:place-content-center"
        >
            {action}
        </Link>
    );
};

export default Button;
