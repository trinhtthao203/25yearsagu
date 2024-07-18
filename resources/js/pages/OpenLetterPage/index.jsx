import React from "react";
import HieuTruong from "../../../../public/images/hieu-truong.jpg";
import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import { Reveal } from "../../motion/Reveal";
import { ScrollText } from "../../motion/ScrollText";
import BackButton from "../../components/BackButton";
import { useTranslation } from "react-i18next";
import CustomFab from "../../components/CustomFab";
import { t } from "i18next";

function OpenLetterPage() {
    const { t } = useTranslation();
    const contentData = [
        {
            title: t("open-letter.title-hello"),
            content: t("open-letter.content"),
        },]

    return (
        <div className="w-full h-full">
            <CustomHeader />
            <CustomFab />
            <div className=" justify-end items-end">
                <BackButton title={t("common.back-home")} left={"30%"} />
            </div>
            <div className="flex flex-col justify-center items-center bg[#f1f2f6] py-[6rem] ">
                <p className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] uppercase text-green01 font-oswald text-center px-2 pt-10">
                    <Reveal>{t("open-letter.title")}</Reveal>
                </p>
                <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] text-green01 font-oswald text-center px-2 pb-10">
                    <Reveal>{t("open-letter.sub-title")}</Reveal>
                </p>
                <p className="max-w-[49rem] text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] my-5 mx-[5rem] font-semibold">
                    <Reveal>
                        <div
                            className="text-justify"
                            dangerouslySetInnerHTML={{
                                __html: contentData[0].title.replace(
                                    /\n/g,
                                    "<br> "
                                ),
                            }}
                        ></div>
                    </Reveal>
                </p>
                <p className=" max-w-[49rem] text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem]  text-justify  my-5 mx-[5rem] ">
                    <Reveal>
                    <span
                        className="text-[1.2rem] pb-[1rem] text-justify"
                        dangerouslySetInnerHTML={{
                            __html: contentData[0].content.replace(
                                /\n/g,
                                "<br> "
                            ),
                        }}
                    ></span>
                        {/* <div
                            className="text-justify"
                            dangerouslySetInnerHTML={{
                                __html: t("open-letter.content")
                            }}
                        ></div> */}
                    </Reveal>
                </p>
                <Reveal>
                    <img
                        src={`${HieuTruong}`}
                        className=" rounded-[10rem] border-solid border-[0.5rem] border-[#f7f1e3] w-[10rem]"
                    />
                </Reveal>
                <p className="text-[0.8rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] text-green01 font-oswald text-center px-2 pt-4">
                    <Reveal>{t("board-of-directors.principal")}</Reveal>
                </p>
                <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] uppercase text-green01 font-oswald text-center px-2">
                    <Reveal>{t("board-of-directors.vvthang")}</Reveal>
                </p>
            </div>
            <ScrollText />
            <Footer />
        </div>
    );
}

export default OpenLetterPage;
