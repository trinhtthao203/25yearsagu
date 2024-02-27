import React from "react";
import backgroundImage from "../../../../public/images/gate.jpg"; // Adjust the path to your image
import Logo25 from "../../../../public/images/logo25.png";

function CustomHeader() {
    return (
        <div className="w-screen">
            <div
                className=" w-full flex justify-center relative animate-fade animate-duration-[1200ms] py-16"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="flex flex-col items-center justify-center mt-[-1rem]">
                    <div className="w-[5rem] sm:w-[6rem] md:w-[14rem] lg:w-[17rem] xl:w-[14rem] animate-flip-down">
                        <img src={`${Logo25}`} alt="Logo" />
                    </div>
                    <div className="transform text-center">
                        <p className=" px-[1rem] text-[1.5rem] sm:text-[1.5rem] md:text-[2.4rem] lg:text-[2.9rem] xl:text-[3.5rem] font-bold text-gray-900 tracking-wider shadow-retr">
                            KỶ NIỆM 25 NĂM THÀNH LẬP
                        </p>
                        <p className="text-[1.1rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.4rem] xl:text-[2.5rem] p-3">
                            TRƯỜNG ĐẠI HỌC AN GIANG
                        </p>
                        <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[2rem]">
                            (1999-2024)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomHeader;
