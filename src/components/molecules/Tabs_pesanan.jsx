const Tabs = () => {
    return (
        <div className="flex overflow-x-scroll no-scrollbar">
            {/* Tab Semua Kelas */}
            <div className="grid">
                <span className="text-tertiary py-3 pr-9 font-medium leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                    Semua Pesanan
                </span>
                {/* Bar */}
                <span className="h-1.5 w-13 bg-tertiary rounded-[10px]"></span>
            </div>
            {/* Tab Pemasaran */}
            <span className="py-3 pr-9 text-dark-secondary font-medium leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                Menunggu
            </span>
            {/* Tab Desain */}
            <span className="py-3 pr-9 text-dark-secondary font-medium leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                Berhasil
            </span>
            {/* Tab Pengembangan Diri */}
            <span className="py-3 pr-9 text-dark-secondary font-medium leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                Gagal
            </span>
        </div>
    );
};

export default Tabs;
