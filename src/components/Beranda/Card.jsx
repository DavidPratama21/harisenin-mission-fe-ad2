import React from "react";

const Card = ({image, tutor}) => {
  return (
    <div className="grid bg-white border border-[#3a3541]/12 rounded-[10px]
      w-[320px] sm:w-[384px] 
      gap-2 p-4 sm:p-5
      "
    >
      {/* Img, Title, Tutor */}
      <div className="flex sm:grid gap-3 items-center">
      
        {/* Class img*/}
        <img src={image} alt="Image Class" className="h-[82px] sm:h-[193px] object-cover aspect-square sm:aspect-video rounded-[10px]" />
        
        {/* Title & Tutor */}
        <div className="grid gap-2">

          {/* Title & desc*/}
          <div className="grid gap-2">
            {/* title */}
            <h6 className="text-[#222325] font-semibold sm:font-bold text-base sm:text-lg">Big 4 Auditor Financial Analyst</h6>
            {/* desc */}
            <p className="hidden sm:block font-medium">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>
          </div>
          
          {/* tutor */}
          <div className="flex gap-2.5 items-center">
            {/* Foto Profile */}
            <img src={tutor} alt="" className="h-10 aspect-square rounded-xl"/>
            {/* Name & Role */}
            <div>
              <p className="font-medium text-[#222325]">Jenna Ortega</p>
              <p className="text-[12px] sm:text-sm font-normal">Senior Accountant 
                <span className="hidden sm:inline"> di</span>
                <span className="hidden sm:inline font-bold"> Gojek</span>
              </p>
            </div>
          </div>

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
          <p className="font-medium text-[12px] sm:text-sm">3.5 (86)</p>
        </div>
        
        {/* price */}
        <p className="font-semibold text-xl sm:text-2xl text-[#3ecf4c]">Rp 300K</p>
      </div>
    </div>
  );
};

export default Card;
