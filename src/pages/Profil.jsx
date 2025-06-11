import PhoneInput from "react-phone-input-2";
import Profil_layout from "../layouts/Profil_layout";
import Menu_daftar from "../components/molecules/Menu_daftar";
import Button from "../components/atoms/Button";
import Divider from "../components/atoms/Divider";
import Input from "../components/atoms/Input";
import avatar from "../assets/Avatar_tutor/2.png";

const Profil = () => {
    return (
        <Profil_layout>
            {/* 3752 */}
            <div className="relative top-19.5 mb-16 grid py-7 px-5 gap-6 sm:flex sm:py-16 sm:px-30 sm:gap-9 sm:max-w-[1440px] sm:w-auto">
                {/* 4801 */}
                <div className="grid gap-6 h-fit">
                    {/* 3692 */}
                    <div className="grid gap-2.5">
                        <h5 className="font-semibold text-xl leading-[120%] text-dark-primary">
                            Ubah Profil
                        </h5>
                        <p className="leading-[140%] tracking-[0.2px] text-dark-secondary">
                            Ubah data diri Anda
                        </p>
                    </div>
                    {/* 3880 */}
                    <Menu_daftar />
                </div>
                {/* 3879 */}
                <div className="grid gap-6 p-6 bg-other-primary rounded-[10px] border border-other-border justify-end">
                    {/* 4428 */}
                    <div className="flex gap-3.5 items-center sm:gap-4">
                        {/* Avatar */}
                        <img
                            src={avatar}
                            alt="Avatar image"
                            className="w-15 rounded sm:w-23"
                        />
                        <div className="grid sm:gap-2">
                            <p className="font-semibold leading-[120%] text-dark-primary sm:text-xl">
                                Jennie Ruby Jane
                            </p>
                            <p className="leading-[140%] tracking-[0.2px] text-dark-primary sm:text-lg">
                                rubyjane@gmail.com
                            </p>
                            <p className="font-bold leading-[140%] tracking-[0.2px] text-tertiary">
                                Ganti Foto Profil
                            </p>
                        </div>
                    </div>
                    {/* Divider */}
                    <Divider />
                    {/* 4420 */}
                    <div className="grid gap-4 sm:flex">
                        {/* 4429 */}
                        <div className="grid gap-4 sm:flex">
                            <Input type={"text"} value={"Jennie Ruby Jane"}>
                                Nama Lengkap
                            </Input>
                            <Input type={"email"} value={"rubyjane@gmail.com"}>
                                E-Mail
                            </Input>
                        </div>
                        {/* 4430 */}
                        <div className="grid gap-4">
                            {/* Jenis Kelamin */}
                            <div className="relative sm:hidden">
                                <select
                                    type=""
                                    id=""
                                    className="peer h-[49px] border border-gray-300 rounded-[10px] px-3 focus:outline-none focus:border-primary w-full"
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <label
                                    htmlFor=""
                                    className="absolute left-3 -top-2 text-sm font-medium bg-white px-[5px] text-gray-500 transition-all peer-focus:text-primary"
                                >
                                    Jenis Kelamin
                                </label>
                            </div>
                            {/* No HP */}
                            <div className="relative flex gap-4">
                                <select
                                    type=""
                                    id=""
                                    className="peer h-[49px] border border-gray-300 rounded-[10px] px-3 focus:outline-none focus:border-primary"
                                >
                                    <option value="male">+62</option>
                                    <option value="female">+61</option>
                                </select>
                                <Input>No. Hp</Input>
                            </div>
                        </div>
                        {/* 4431 */}
                        <div className="grid gap-4 sm:hidden">
                            <Input type={"password"} value={"howyoulikethat"}>
                                Password
                            </Input>
                            <Input type={"password"} value={"howyoulikethat"}>
                                Konfirmasi Password
                            </Input>
                        </div>
                    </div>
                    <div className="sm:h-11.5 sm:justify-self-end">
                        <Button>Simpan</Button>
                    </div>
                </div>
            </div>
        </Profil_layout>
    );
};

export default Profil;
