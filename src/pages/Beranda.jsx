import Card from "../components/molecules/Card";
import card_1 from "../assets/Card_images/card_1.jpg";
import card_2 from "../assets/Card_images/card_2.jpg";
import card_3 from "../assets/Card_images/card_3.jpg";
import card_4 from "../assets/Card_images/card_4.jpg";
import card_5 from "../assets/Card_images/card_5.jpg";
import card_6 from "../assets/Card_images/card_6.jpg";
import card_7 from "../assets/Card_images/card_7.jpg";
import card_8 from "../assets/Card_images/card_8.jpg";
import card_9 from "../assets/Card_images/card_9.jpg";
import tutor_1 from "../assets/Avatar_tutor/1.png";
import tutor_2 from "../assets/Avatar_tutor/2.png";
import tutor_3 from "../assets/Avatar_tutor/3.png";
import tutor_4 from "../assets/Avatar_tutor/4.png";
import tutor_5 from "../assets/Avatar_tutor/5.png";
import tutor_6 from "../assets/Avatar_tutor/6.png";
import tutor_7 from "../assets/Avatar_tutor/7.png";
import tutor_8 from "../assets/Avatar_tutor/8.png";
import Beranda_layout from "../layouts/Beranda_layout";
import Tabs from "../components/molecules/Tabs";

const Beranda = () => {
    return (
        <>
            <Beranda_layout>
                <div className="relative top-16 mb-16 grid py-7 px-5 gap-6 mx-auto sm:py-16 sm:px-30 sm:gap-16 sm:w-[1440px]">
                    {/* Frame 1000003861, Hero */}
                    <div className="grid rounded-[10px] py-16 px-5 gap-6 bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('./src/assets/Hero_bg.jpg')] bg-center bg-cover justify-items-center text-center text-light-primary   sm:pt-20.5 sm:pb-16 sm:px-35">
                        {/* Frame 1000003868, Title & Desc */}
                        <div className="grid gap-3">
                            <h1 className="font-bold text-2xl leading-[110%] sm:text-5xl">
                                Revolusi Pembelajaran: Temukan Ilmu Baru melalui
                                PLatform Video Interaktif!
                            </h1>
                            <p className="font-medium leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                                Temukan ilmu baru yang menarik dan mendalam
                                melalui koleksi video pembelajaran berkualitas
                                tinggi. Tidak hanya itu, Anda juga dapat
                                berpartisipasi dalam latihan interaktif yang
                                akan meningkatkan pemahaman Anda.
                            </p>
                        </div>

                        {/* Button */}
                        <button className="rounded-[10px] text-sm py-2.5 px-6.5 bg-primary text-light-primary leading-[140%] tracking-[0.2px] sm:text-base sm:font-bold hover:bg-primary-100 hover:text-primary">
                            Temukan Video Course untuk Dipelajari!
                        </button>
                    </div>

                    {/* Card Section */}
                    <main className="grid gap-6 sm:gap-8">
                        {/* Frame 1000003692, Title & Desc Beranda */}
                        <div className="grid gap-2.5">
                            <h1 className=" font-semibold text-2xl text-dark-primary leading-[110%] sm:text-[32px] sm:font-bold">
                                Koleksi Video Pembelajaran Unggulan
                            </h1>
                            <p className="font-medium text-dark-secondary text-sm leading-[140%] tracking-[0.2px] sm:text-base">
                                Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                            </p>
                        </div>

                        {/* Tabs */}
                        <Tabs />

                        {/* Frame 1000003837, 3841, 3842, Cards */}
                        <div className="flex flex-col mx-auto gap-5 sm:gap-x-6 sm:gap-y-8 sm:flex-row sm:flex-wrap">
                            <Card image={card_1} tutor={tutor_1} />
                            <Card image={card_2} tutor={tutor_2} />
                            <Card image={card_3} tutor={tutor_3} />
                            <Card image={card_4} tutor={tutor_4} />
                            <Card image={card_5} tutor={tutor_5} />
                            <Card image={card_6} tutor={tutor_6} />
                            <Card image={card_7} tutor={tutor_7} />
                            <Card image={card_8} tutor={tutor_8} />
                            <Card image={card_9} tutor={tutor_3} />
                        </div>
                    </main>

                    {/* Banner CTA */}
                    <div className="grid h-[400px] px-5 rounded drop-shadow-[0_12px_45px_-10px_rgba(0,59,222,0.2)] bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('./src/assets/CTA_bg.jpg')] bg-center bg-cover place-content-center">
                        {/* Frame 1000003756, Konten */}
                        <div className="grid gap-10">
                            {/* Newsletter */}
                            <div className="text-center grid gap-1">
                                <h3 className="text-base text-light-secondary font-medium leading-[140%] tracking-[0.2px] sm:text-lg">
                                    NEWSLETTER
                                </h3>
                                {/* Desc */}
                                <div className="grid gap-2.5">
                                    <h2 className="text-2xl font-semibold leading-[110%] text-light-primary sm:text-[32px]">
                                        Mau Belajar Lebih Banyak?
                                    </h2>
                                    <p className="text-other-base-background text-sm leading-[140%] tracking-[0.2px] sm:w-[525px] sm:text-base">
                                        Daftarkan dirimu untuk mendapatkan
                                        informasi terbaru dan penawaran spesial
                                        dari program-program terbaik hariesok.id
                                    </p>
                                </div>
                            </div>

                            {/* Frame 1000004812, Input Email */}
                            <div className="grid gap-4 sm:flex sm:justify-between sm:bg-white sm:gap-5 sm:py-2 sm:pr-2 sm:pl-8 sm:rounded-[10px]">
                                {/* Frame 1000003794 */}
                                <input
                                    type="text"
                                    placeholder="Masukkan Emailmu"
                                    className="rounded-[10px] text-center py-2.5 pl-3 pr-2 bg-other-primary text-sm font-normal leading-[140%] tracking-[0.2px] placeholder-dark-secondary text-dark-secondary sm:p-0 sm:text-base sm:text-left sm:outline-none"
                                />
                                <button className="rounded-[10px] py-2.5 bg-secondary text-sm font-bold leading-[140%] tracking-[0.2px] text-light-primary sm:px-6.5 sm:text-base">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Beranda_layout>
        </>
    );
};

export default Beranda;
