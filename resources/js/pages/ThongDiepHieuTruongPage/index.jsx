import React from "react";
import HieuTruong from "../../../../public/images/hieu-truong.jpg";
import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import { Reveal } from "../../motion/Reveal";
import { ScrollText } from "../../motion/ScrollText";
import BackButton from "../../components/BackButton";
import { useTranslation } from "react-i18next";

function ThongDiepHieuTruongPage() {
    const { t } = useTranslation();
    return (
        <div className="w-full h-full">
            <CustomHeader />
            <div className="flex flex-col justify-center items-center bg[#f1f2f6] py-[6rem] ">
                <Reveal>
                    <p className="text-3xl uppercase text-darkblue text-center px-2 py-10">
                        {t("home.chancellor-message")}
                    </p>
                </Reveal>
                <Reveal>
                    <p className=" max-w-[49rem] text-[0.9rem] sm:text-[0.5rem]  md:text-[1.5rem]  lg:text-[1.2rem] text-justify  my-5 mx-[5rem] text-[#2C3A47]">
                        {t("chancellor-message.paragraph-1")}
                    </p>
                </Reveal>
                <Reveal>
                    <img src={`${HieuTruong}`} className="  w-[10rem]" />
                </Reveal>
                <Reveal>
                    <p className=" max-w-[49rem] text-[0.9rem] sm:text-[0.5rem] md:text-[1.5rem] lg:text-[1.2rem] text-justify  my-5 mx-[5rem] text-[#2C3A47]">
                        {t("chancellor-message.paragraph-1")}
                    </p>
                </Reveal>
                <Reveal>
                    <img
                        src={`${HieuTruong}`}
                        className=" rounded-[10rem] border-solid border-[0.5rem] border-[#f7f1e3] w-[10rem]"
                    />
                </Reveal>
                <div className=" justify-end items-end">
                    <BackButton title={t("common.back-home")} left={"0px"} />
                </div>
            </div>
            <ScrollText />
            <Footer />
        </div>
    );
}

export default ThongDiepHieuTruongPage;
