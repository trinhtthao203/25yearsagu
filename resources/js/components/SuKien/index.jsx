import React from "react";
import Gate from "../../../../public/images/gate.jpg";
function SuKien() {
    return (
        <div
            className="flex flex-col justify-center items-center py-[3rem]"
            style={{
                backgroundImage: ` url(${Gate})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <p className="text-3xl uppercase text-[#2c2c54] text-center py-5">
                Sự Kiện
            </p>
            <p className="text-[1.2rem] p-[1rem] uppercase text-[#2c2c54] text-center py-5">
                Những sự kiện nổi bật chào mừng 20 năm thành lập trường
            </p>
            <div className="px-5">
                <div className="flex justify-center items-center">
                    <button className="border-solid border-2 p-2 text-[1.3rem] rounded-md bg-[#227093]">
                        Su kien 1
                    </button>
                    <p className="p-5 text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Odit impedit veniam, numquam optio assumenda
                        itaque magni sit rem a ducimus?
                    </p>
                </div>
                <div className="flex justify-center items-center ">
                    <button className="border-solid border-2 p-2 text-[1.3rem] rounded-md bg-[#227093]">
                        Su kien 1
                    </button>
                    <p className="p-5 text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Odit impedit veniam, numquam optio assumenda
                        itaque magni sit rem a ducimus?
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <button className="border-solid border-2 p-2 text-[1.3rem] rounded-md bg-[#227093]">
                        Su kien 1
                    </button>
                    <p className="p-5 text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Odit impedit veniam, numquam optio assumenda
                        itaque magni sit rem a ducimus?
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <button className="border-solid border-2 p-2 text-[1.3rem] rounded-md bg-[#227093]">
                        Su kien 1
                    </button>
                    <p className="p-5 text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Odit impedit veniam, numquam optio assumenda
                        itaque magni sit rem a ducimus?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SuKien;
