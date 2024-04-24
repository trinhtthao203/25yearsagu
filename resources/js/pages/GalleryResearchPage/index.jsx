import React from "react";

import "yet-another-react-lightbox/styles.css";
import { data } from "./images";

import Footer from "../../components/Footer";
import BackButton from "../../components/BackButton";
import CustomHeader from "../../components/CustomHeader";

import { useTranslation } from "react-i18next";
import ImageList from "../../components/ImageList";
import { Reveal } from "../../motion/Reveal";
import CustomFab from "../../components/CustomFab";

function GalleryResearchPage() {
    const { t } = useTranslation();
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;
    return (
        <div>
            <CustomHeader />
            <CustomFab />
            <BackButton title={t("common.back-home")} left={"30%"} />
            <div className=" py-10 px-10 ">
                <Reveal isAnimation={isAnimation}>
                    <p className=" py-10 w-full flex justify-center items-center mt-[3rem] text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] uppercase text-green01 font-oswald">
                        {t("gallery.research")}
                    </p>
                </Reveal>
                <ImageList title={t("gallery.research")} data={data} />
            </div>
            <Footer />
        </div>
    );
}

export default GalleryResearchPage;
