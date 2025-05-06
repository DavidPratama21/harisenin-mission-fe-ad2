import React from "react";

const Card = ({image, tutor}) => {
  return (
    <div className="w-[384px] grid gap-4 p-5 border border-[#3a3541]/12 rounded-xl bg-white">
      {/* Class img*/}
      <img src={image} alt="" className="h-[193px] aspect-video rounded-xl" />
      {/* title & desc*/}
      <div className="grid gap-2">
        {/* title */}
        <h6 className="text-[#222325] font-bold text-lg">
          Big 4 Auditor Financial Analyst
        </h6>
        {/* desc */}
        <p className="font-medium">
          Mulai transformasi dengan instruktur profesional, harga yang
          terjangkau, dan...
        </p>
      </div>
      {/* tutor */}
      <div className="flex gap-2.5 items-center">
        {/* Foto Profile */}
        <img src={tutor} alt="" className="h-10 aspect-square rounded-xl"/>
        {/* Name & Role */}
        <div>
          <p className="font-medium text-[#222325]">Jenna Ortega</p>
          <p className="text-[14px]">
            Senior Accountant di
            <span className="font-bold"> Gojek</span>
          </p>
        </div>
      </div>
      {/* Rating & price */}
      <div className="flex justify-between items-center">
        {/* rating */}
        <div className="flex gap-2 items-center">
          {/* Stars */}
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
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
              width="16"
              height="15"
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
              width="16"
              height="15"
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
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                fill="#3A3541"
                fill-opacity="0.12"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
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
          <p className="font-medium text-[14px]">3.5 (8.6)</p>
        </div>
        {/* price */}
        <p className="font-semibold text-2xl text-[#3ecf4c]">Rp 300K</p>
      </div>
    </div>
  );
};

export default Card;
