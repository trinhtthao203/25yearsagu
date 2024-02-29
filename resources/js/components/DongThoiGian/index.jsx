import React from "react";
import { Link } from "react-router-dom";
import nenGiua from "../../../../public/images/DongThoiGian/nen-dtg-giua.png";
import nenCuoi from "../../../../public/images/DongThoiGian/nen-dtg-cuoi.png";
import { Reveal } from "../Reveal";

function DongThoiGian() {
    return (
        <div className="py-[5rem] bg-[#dff9fb]">
            <p className="text-3xl uppercase text-[#2c2c54] text-center py-5">
                Ngược dòng thời gian
            </p>
            <div className="flex justify-center items-center px-[17rem]">
                <div className=" w-2/6 h-[7rem] bg-[#18B6B4] mt-[11rem] relative ">
                    <Reveal>
                        <p>Giai đoạn 1</p>
                        <button className="border-solid border-2 p-2 text-[1.3rem] rounded-md bg-[#227093]">
                            <Link to="/lich-su-hinh-thanh">Khám phá</Link>
                        </button>
                    </Reveal>
                </div>
                <div
                    className={`w-2/6 bg-[url('${nenGiua}')] mt-[4rem] relative left-[-2rem]`}
                >
                    <div className="relative">
                        <p className="z-10 relative">Giai đoạn 2</p>
                        <button className="z-10 relative border-solid border-2 p-2 text-[1.3rem] rounded-md bg-[#227093]">
                            <Link to="/lich-su-hinh-thanh">Khám phá</Link>
                        </button>
                        <img
                            src={`${nenGiua}`}
                            alt="Logo"
                            className="absolute top-0 left-0 w-full h-[10rem]"
                        />
                    </div>
                </div>
                <div
                    className={`w-2/6 bg-[url('${nenCuoi}')] relative left-[-3.75rem]`}
                >
                    <div className="relative">
                        <p className="z-10 relative">Giai đoạn 2</p>
                        <button className="z-10 relative border-solid border-2 p-2 text-[1.3rem] rounded-md bg-[#227093]">
                            <Link to="/lich-su-hinh-thanh">Khám phá</Link>
                        </button>
                        <img
                            src={`${nenCuoi}`}
                            alt="Logo"
                            className="absolute top-0 left-0 w-full h-[10rem]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DongThoiGian;
