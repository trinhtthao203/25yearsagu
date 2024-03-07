import React, { useEffect } from "react";
import backgroundImage from "../../../../public/images/gate.jpg"; // Adjust the path to your image
import Logo25 from "../../../../public/images/logo25.png";
import LanguageSelector from "../LanguageSelector";
import { Reveal } from "../../motion/Reveal";
import { useTranslation } from "react-i18next";

function CustomHeader() {
    const { t } = useTranslation();

    return (
        <div className=" w-screen h-[25rem]">
            <div
                className=" h-[25rem] animate-fade animate-duration-[1200ms]"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="w-screen flex justify-end items-end ">
                    <Reveal>
                        <LanguageSelector />
                    </Reveal>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center justify-center ">
                        <div className="w-[10rem] sm:w-[7rem] md:w-[15rem] lg:w-[19rem] xl:w-[15rem] animate-flip-down">
                            <Reveal>
                                <img src={`${Logo25}`} alt="Logo" />
                            </Reveal>
                        </div>
                        <div className="transform text-center">
                            <Reveal>
                                <p className=" uppercase px-[1.2rem] text-[1rem] sm:text-[1rem] md:text-[1.9rem] lg:text-[2.6rem] xl:text-[2.5rem] font-bold text-gray-900 tracking-wider shadow-retr">
                                    {t("home.25year-established")}
                                </p>
                            </Reveal>
                            <Reveal>
                                <p className=" uppercase text-[0.9rem] sm:text-[0.9rem] md:text-[1.2rem] lg:text-[1.6rem] xl:text-[1.7rem] p-3">
                                    {t("home.agu")}
                                </p>
                            </Reveal>
                            <Reveal>
                                <p className="text-[0.7rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] xl:text-[1.2rem]">
                                    {t("home.year-anniversary")}
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomHeader;
