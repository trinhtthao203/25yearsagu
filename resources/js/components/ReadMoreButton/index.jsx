import React from "react";

const ReadMoreButton = ({ onClick, title }) => {
    return (
        <button
            onClick={onClick}
            className=" flex justify-center items-center h-[36px] rounded-[4px] bg-[#5ca1e1] border-none text-white text-center text-[32px] px-[15px] scursor-pointer m-[10px] mb-[36px] shadow-[0_10px_20px_-8px_rgba(0,0,0,0.7)] relative duration-300 after:content-['»'] after:absolute after:opacity-0 after:top-[-7px] after:right-[-20px] after:duration-300 hover:pr-[24px] hover:pl-[8px] hover:after:opacity-100 hover:after:right-[10px]"
        >
            <span className="text-[17px] pt-[2px] pr-2">{title}</span>
        </button>
    );
};

export default ReadMoreButton;
