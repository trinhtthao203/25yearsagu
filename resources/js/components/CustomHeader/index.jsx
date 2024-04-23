import React, { useEffect } from "react";
import backgroundImage from "../../../../public/images/gate.jpg"; // Adjust the path to your image
import Logo25 from "../../../../public/images/logo25.png";
import LanguageSelector from "../LanguageSelector";
import { Reveal } from "../../motion/Reveal";
import { useTranslation } from "react-i18next";

function CustomHeader() {
    const { t } = useTranslation();
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;

    return (
        <div className=" w-screen">
            <div
                className="h-[25rem] relative animate-fade animate-duration-[1200ms]"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(138, 90, 226, 0.2), rgba(255, 255, 150, 0.5)), url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="w-screen flex justify-end items-end ">
                    <LanguageSelector />
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center justify-center ">
                        <Reveal isAnimation={isAnimation}>
                            <p className=" text-white uppercase text-[10rem] font-semibold font-montserrat">
                                25
                            </p>
                            {/* <img src={`${Logo25}`} alt="Logo" /> */}
                        </Reveal>
                        <div className="transform text-center ">
                            <Reveal isAnimation={isAnimation}>
                                <p className=" text-white uppercase text-[1.1rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.4rem] xl:text-[2.0rem] font-semibold font-montserrat">
                                    {t("home.sologan")}
                                </p>
                            </Reveal>
                            <Reveal isAnimation={isAnimation}>
                                <p className="text-white text-[1rem] sm:text-[1.1rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[2rem] font-oswald">
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
