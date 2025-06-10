const Tabs = () => {
    return (
        <div className="flex overflow-x-scroll no-scrollbar">
            <div className="grid">
                <span className="text-tertiary py-3 pr-9 font-medium leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                    Semua Kelas
                </span>
                {/* Bar */}
                <span className="h-1.5 w-13 bg-tertiary rounded-[10px]"></span>
            </div>
            <span className="py-3 pr-9 text-dark-secondary font-medium leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                Sedang Berjalan
            </span>
            <span className="py-3 pr-9 text-dark-secondary font-medium leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                Selesai
            </span>
        </div>
    );
};

export default Tabs;
