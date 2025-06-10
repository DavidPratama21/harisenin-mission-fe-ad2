import {
    ChevronDown,
    Search,
} from "lucide-react";

const Filter = () => {
    return (
        <div className="flex gap-4 justify-between sm:justify-end">
            <button className="grid h-12 px-3 rounded-[10px] border border-other-border bg-white text-dark-secondary">
                <div className="flex items-center gap-2 py-3 pl-[5px]">
                    <p className="font-medium">Urutkan</p>
                    <ChevronDown />
                </div>
            </button>
            <button className="grid h-12 px-3 rounded-[10px] border border-other-border bg-white text-dark-secondary sm:w-[220px]">
                <div className="flex items-center gap-2 py-3 pl-[5px] sm:justify-between">
                    <p className="font-medium">Cari Kelas</p>
                    <Search />
                </div>
            </button>
        </div>
    );
};

export default Filter;
