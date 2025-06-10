import React from "react";
import { Link } from "react-router";

const Card = ({ image, tutor }) => {
    return (
        <Link
            to="/detailProduk"
            className="grid rounded-[10px] p-4 gap-2 bg-other-primary border border-other-border sm:w-[384px] sm:p-5"
        >
            {/* Frame 1000004805, Img, Title, Tutor */}
            <div className="flex gap-3 items-center sm:grid">
                {/* Image */}
                <img
                    src={image}
                    alt="Image Class"
                    className="h-[82px] sm:h-[193px] object-cover aspect-square sm:aspect-video rounded-[10px]"
                />

                {/* Frame 1000004804, Title & Tutor */}
                <div className="grid gap-2 sm:gap-3">
                    {/* Title */}
                    <div className="grid gap-2">
                        <h6 className="text-dark-primary font-semibold text-base leading-[120%] sm:text-lg">
                            Big 4 Auditor Financial Analyst
                        </h6>
                        <p className="hidden sm:block font-medium leading-[140%] tracking-[0.2px] text-dark-secondary">
                            Mulai transformasi dengan instruktur profesional,
                            harga yang terjangkau, dan...
                        </p>
                    </div>

                    {/* Frame 1000004496, Tutor */}
                    <div className="flex gap-2 items-center sm:gap-2.5">
                        {/* Foto Profile */}
                        <img
                            src={tutor}
                            alt="Profile Image"
                            className="h-9 aspect-square rounded-xl"
                        />
                        {/* Title */}
                        <div>
                            <p className="font-medium text-dark-primary leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                                Jenna Ortega
                            </p>
                            {/* Frame 1000004497 */}
                            <div className="flex gap-1 sm:text-sm">
                                <p className="text-xs font-normal text-dark-secondary leading-[140%] tracking-[0.2px] sm:text-sm">
                                    Senior Accountant
                                </p>
                                <span className="hidden text-dark-secondary sm:inline">
                                    di
                                </span>
                                <span className="hidden font-bold text-dark-secondary sm:inline">
                                    Gojek
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Frame 1000004498, Rating & price */}
            <div className="flex justify-between items-center">
                {/*Frame 1000004495, rating */}
                <div className="flex gap-2">
                    {/* Rating */}
                    <div className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="14.25"
                            viewBox="0 0 16 15"
                            fill="none"
                        >
                            <path
                                d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                fill="#FCE91B"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="14.25"
                            viewBox="0 0 16 15"
                            fill="none"
                        >
                            <path
                                d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                fill="#FCE91B"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="14.25"
                            viewBox="0 0 16 15"
                            fill="none"
                        >
                            <path
                                d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                fill="#FCE91B"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="14.25"
                            viewBox="0 0 16 15"
                            fill="none"
                        >
                            <path
                                d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                fill="#3A3541"
                                fillOpacity="0.12"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="14.25"
                            viewBox="0 0 16 15"
                            fill="none"
                        >
                            <path
                                d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                fill="#3A3541"
                                fill-opacity="0.12"
                            />
                        </svg>
                    </div>
                    <p className="font-medium text-xs leading-[140%] tracking-[0.2px] underline text-dark-secondary sm:text-sm">
                        3.5 (86)
                    </p>
                </div>

                <p className="font-semibold text-xl text-primary leading-[120%] sm:text-2xl">
                    Rp 300K
                </p>
            </div>
        </Link>
    );
};

export default Card;
