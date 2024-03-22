import React from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import { Reveal } from "../../motion/Reveal";
import BackButton from "../../components/BackButton";

import { useTranslation } from "react-i18next";

function GallerySchoolPage() {
    const { t } = useTranslation();

    return (
        <div>
            <CustomHeader />
            <BackButton title={t("common.back-home")} left={"30%"} />
            <p className="text-3xl uppercase text-darkblue text-center px-2 py-10">
                {t("gallery.school")}
            </p>
            <Footer />
        </div>
    );
}

export default GallerySchoolPage;
