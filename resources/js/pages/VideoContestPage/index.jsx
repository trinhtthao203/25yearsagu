import React from "react";
import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import { Reveal } from "../../motion/Reveal";
import { ScrollText } from "../../motion/ScrollText";
import { useTranslation } from "react-i18next";
import BackButton from "../../components/BackButton";

function VideoContestPage() {
    const { t } = useTranslation();
    return (
        <div className="w-full h-full">
            <CustomHeader />
            <BackButton title={t("common.back-home")} left={"30%"} />
            <div className="flex flex-col justify-center items-center bg[#f1f2f6] py-[6rem] ">
                <p className="text-3xl uppercase text-darkblue text-center px-2 py-10">
                    <Reveal>{t("event.evt1-name")}</Reveal>
                </p>
                <div className=" flex flex-col justify-start items-start w-[70%]">
                    <p>{t("event.view-detail")}</p>
                </div>
                <div>
                    <p>{t("event.ev1-title")}</p>
                </div>
            </div>
            <ScrollText />
            <Footer />
        </div>
    );
}

export default VideoContestPage;
