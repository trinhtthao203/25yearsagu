import React from "react";

import "yet-another-react-lightbox/styles.css";
import { data } from "./images";

import Footer from "../../components/Footer";
import BackButton from "../../components/BackButton";
import CustomHeader from "../../components/CustomHeader";

import { useTranslation } from "react-i18next";
import ImageList from "../../components/ImageList";

function GalleryEducationPage() {
    const { t } = useTranslation();

    return (
        <div>
            <CustomHeader />
            <BackButton title={t("common.back-home")} left={"30%"} />
            <div className=" py-10 px-10 ">
                <p className="text-3xl uppercase text-darkblue text-center">
                    {t("gallery.education")}
                </p>
                <ImageList title={t("gallery.education")} data={data} />
            </div>
            <Footer />
        </div>
    );
}

export default GalleryEducationPage;
