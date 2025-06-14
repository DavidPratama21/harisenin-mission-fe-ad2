import { useRef, useState, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import List_menu_filter from "../atoms/List_menu_filter";

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);
    const popoverRef = useRef(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    const togglePopover = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (buttonRef.current && isOpen) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + window.scrollY - 50,
                left: rect.left + window.scrollX - 25,
            });
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="flex gap-4 justify-between sm:justify-end">
            {/* Urutkan */}
            <button
                ref={buttonRef}
                onClick={togglePopover}
                className="grid h-12 px-3 rounded-[10px] border border-other-border bg-white text-dark-secondary"
            >
                <div className="flex items-center gap-2 py-3 pl-[5px]">
                    <p className="font-medium">Urutkan</p>
                    <ChevronDown />
                </div>
            </button>
            {/* Cari Kelas */}
            <button className="grid h-12 px-3 rounded-[10px] border border-other-border bg-white text-dark-secondary sm:w-[220px]">
                <div className="flex items-center gap-2 py-3 pl-[5px] sm:justify-between">
                    <p className="font-medium">Cari Kelas</p>
                    <Search />
                </div>
            </button>
            {/* Popover Menu */}
            {isOpen && (
                <div
                    ref={popoverRef}
                    style={{
                        top: position.top,
                        left: position.left,
                    }}
                    className="absolute z-2 grid py-1 rounded-[10px] bg-white shadow-[0_0_1px_0_rgba(62,67,74,.31),0_18px_28px_0_rgba(62,67,74,.15)]"
                >
                    <List_menu_filter>Harga Rendah</List_menu_filter>
                    <List_menu_filter>Harga Tinggi</List_menu_filter>
                    <List_menu_filter>A to Z</List_menu_filter>
                    <List_menu_filter>Z to A</List_menu_filter>
                    <List_menu_filter>Rating Tertinggi</List_menu_filter>
                    <List_menu_filter>Rating Terendah</List_menu_filter>
                </div>
            )}
        </div>
    );
};

export default Filter;
