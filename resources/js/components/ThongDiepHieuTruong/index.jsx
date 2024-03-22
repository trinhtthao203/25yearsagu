import React, { useEffect, useRef } from "react";
import ChanDungHieuTruong from "../../../../public/images/hieu-truong.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Reveal } from "../../motion/Reveal";

function ThongDiepHieuTruong() {
    const ref = useRef(null);
    const { t } = useTranslation();
    const isInView = useInView(ref, { once: true });
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} className=" bg-[#364994]">
            <div className=" flex justify-center items-center bg-[#f1f2f6] mt-[0.5rem] lg:mt-[1rem] mb-[1rem] lg:mb-[9rem]  ">
                <div className="lg:w-5/6 xl:w-4/6 flex lg:flex-row justify-center items-center">
                    <div className="w-full mr-0 lg:mr-8 lg:w-7/12">
                        <p className="pl-[9px] md:pl-[6rem] max-w-full sm:max-w-[25rem] md:max-w-[29.5rem] lg:max-w-[35rem] text-[0.55rem] sm:text-[0.4rem] md:text-[0.9rem] lg:text-[1.1rem] text-[#2C3A47]">
                            <p className="text-[0.85rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.8rem] font-medium uppercase text-[#8CA9AD]">
                                <Reveal isAnimation={isAnimation}>
                                    {t("home.chancellor-message")}
                                </Reveal>
                            </p>
                            <Reveal isAnimation={isAnimation}>
                                {t("home.short_content")}
                                <Link
                                    to="/thong-diep-hieu-truong"
                                    className="text-[#227093]"
                                >
                                    {t("common.read-more")}
                                </Link>
                            </Reveal>
                            <p className="text-[0.6rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] text-[#2C3A47] pt-[0.5rem] lg:pt-[2rem]">
                                <Reveal isAnimation={isAnimation}>
                                    {t("hieutruong.vvthang")}
                                </Reveal>
                            </p>
                            <p className="text-[#2C3A47]">
                                <Reveal isAnimation={isAnimation}>
                                    {t("hieutruong.title")}
                                </Reveal>
                            </p>
                        </p>
                    </div>
                    <div className="w-5/6 lg:w-5/12 md:pl-[5rem]">
                        <Reveal isAnimation={isAnimation}>
                            <img
                                src={`${ChanDungHieuTruong}`}
                                className=" w-full sm:w-2/3 md:w-3/4 lg:w-full drop-shadow-2xl"
                            />
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThongDiepHieuTruong;
