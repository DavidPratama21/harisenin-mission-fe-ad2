const Tab = ({ children, active = "off" }) => {
    return (
        <button onClick="/" className="grid transition-all">
            <span className={`py-3 pr-9 font-medium leading-[140%] tracking-[0.2px] text-sm sm:text-base
                ${active === "on" ? "text-tertiary" : "text-dark-secondary"}
                `}>
                {children}
            </span>
            {/* Bar */}
            {active === "on" ? (
                <span className="h-1.5 w-13 bg-tertiary rounded-[10px]"></span>
            ) : (
                ""
            )}
        </button>
    );
};

export default Tab;
