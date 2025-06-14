import { useState } from "react";
import Tab from "../atoms/Tab";
const Tabs = () => {
    const [activeTab, setActiveTab] = useState()
    return (
        <div className="flex overflow-x-scroll no-scrollbar">
            {/* Tab Semua Kelas */}
            <Tab active="on">Semua Kelas</Tab>
            {/* Tab Pemasaran */}
            <Tab>Pemasaran</Tab>
            {/* Tab Desain */}
            <Tab>Desain</Tab>
            {/* Tab Pengembangan Diri */}
            <Tab>Pengembangan Diri</Tab>
            {/* Tab Bisnis */}
            <Tab>Bisnis</Tab>
        </div>
    );
};

export default Tabs;
