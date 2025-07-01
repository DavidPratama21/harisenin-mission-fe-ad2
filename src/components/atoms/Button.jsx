const Button = ({
    children,
    to,
    type,
    action,
    style = "default",
    className,
}) => {
    return (
        <button
            onClick={action}
            type={type}
            to={to}
            className={`rounded-[10px] flex text-center py-[7px] px-5.5 font-bold text-sm items-center leading-[140%] tracking-[0.2px] sm:py-2.5 sm:px-6.5 sm:text-base sm:w-full sm:place-content-center
                ${className} ${
                style === "reverse"
                    ? "bg-primary-100 text-primary"
                    : style === "disabled"
                    ? "bg-greyscale-400 text-dark-disabled pointer-events-none"
                    : style === "cancel"
                    ? "bg-error-default text-light-primary"
                    : "bg-primary text-light-primary"
            } 
            `}
        >
            {children}
        </button>
    );
};

export default Button;
