import React from "react";
import banGiamHieu from "../../../data/banGiamHieu";
function BanGiamHieu() {
    return (
        <div className="flex flex-col justify-center items-center py-[5rem] bg-moonMist">
            <p className="text-3xl uppercase text-chathamsblue text-center py-5">
                Ban giám hiệu qua các thời kỳ
            </p>
            <ul className="flex flex-wrap justify-center">
                {banGiamHieu.map((item, index) => (
                    <li
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 p-4 px-[7rem] flex justify-center "
                    >
                        <div>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="max-w-full h-auto rounded-lg shadow-lg overflow-hidden "
                            />
                            <div className="text-center mt-2">
                                <p className="text-sm font-semibold">
                                    {item.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {item.title}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {item.year}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <button className="border-solid border-2 p-3 text-[1.2rem] rounded-md bg-chathamsblue uppercase text-moonMist">
                Khám phá
            </button>
        </div>
    );
}

export default BanGiamHieu;
