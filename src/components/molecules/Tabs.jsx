const Tabs = () => {
    return (
        <div className="flex overflow-x-scroll no-scrollbar">
            {/* Tab Semua Kelas */}
            <div className="grid">
                <span className="text-tertiary py-3 pr-9 font-medium leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                    Semua Kelas
                </span>
                {/* Bar */}
                <span className="h-1.5 w-13 bg-tertiary rounded-[10px]"></span>
            </div>
            {/* Tab Pemasaran */}
            <span className="py-3 pr-9 font-medium leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                Pemasaran
            </span>
            {/* Tab Desain */}
            <span className="py-3 pr-9 font-medium leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                Desain
            </span>
            {/* Tab Pengembangan Diri */}
            <span className="py-3 pr-9 font-medium leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                Pengembangan Diri
            </span>
            {/* Tab Bisnis */}
            <span className="py-3 pr-9 font-medium leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                Bisnis
            </span>
        </div>
    );
};

export default Tabs;
