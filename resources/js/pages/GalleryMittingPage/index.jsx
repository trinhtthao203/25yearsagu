import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import { Reveal } from "../../motion/Reveal";
import BackButton from "../../components/BackButton";

import { useTranslation } from "react-i18next";

function GalleryMittingPage() {
    const { t } = useTranslation();
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;

    return (
        <div>
            <CustomHeader />
            <BackButton title={t("common.back-home")} left={"30%"} />
            <Reveal isAnimation={isAnimation}>
                <p className=" py-10 w-full flex justify-center items-center mt-[3rem] text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] uppercase text-green01 font-oswald">
                    {t("gallery.mitting")}
                </p>
            </Reveal>
            <Footer />
        </div>
    );
}

export default GalleryMittingPage;
