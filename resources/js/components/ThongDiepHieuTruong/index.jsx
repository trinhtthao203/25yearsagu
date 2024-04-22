import React, { useEffect, useRef } from "react";
import ChanDungHieuTruong from "../../../../public/images/hieu-truong.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Reveal } from "../../motion/Reveal";
import { Grid } from "@mui/material";

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
        <div ref={ref} className="mt-10">
            <Grid container>
                <Grid item xs={12} md={12}>
                    <Reveal isAnimation={isAnimation}>
                        <p className=" py-10 w-full flex justify-center items-center text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] uppercase font-medium text-green01 font-oswald">
                            {t("home.chancellor-message")}
                        </p>
                    </Reveal>
                </Grid>
                <Grid item xs={12} sm={1.5} md={3}></Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Reveal isAnimation={isAnimation}>
                        <p className=" text-center px-[9px] text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] text-green01 font-montserrat  font-medium">
                            {t("home.short_content")}
                        </p>
                        <Link to="/thong-diep-hieu-truong">
                            <p className=" text-green05 font-medium font-montserrat text-end px-[9px]">
                                {t("common.read-more")}
                            </p>
                        </Link>
                    </Reveal>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Reveal isAnimation={isAnimation}>
                        <img
                            src={`${ChanDungHieuTruong}`}
                            className=" w-[16.5rem] md:w-[27rem]"
                        />
                    </Reveal>
                </Grid>
                <Grid item xs={12} md={2}></Grid>
            </Grid>
            {/* <div className=" flex justify-center items-center bg-green04 my-[1rem] lg:my-[9rem]">
                <div className="lg:w-5/6 xl:w-4/6 flex lg:flex-row justify-center items-center">
                    <div className="w-full mr-0 lg:mr-8 lg:w-7/12">
                        <p className=" pl-[9px] text-[0.85rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[2.4rem] uppercase font-medium text-green01 font-oswald">
                            <Reveal isAnimation={isAnimation}>
                                {t("home.chancellor-message")}
                            </Reveal>
                        </p>
                        <p className="pl-[9px] md:pl-[6rem] max-w-full sm:max-w-[25rem] md:max-w-[29.5rem] lg:max-w-[35rem] text-[0.7rem] sm:text-[0.4rem] md:text-[0.9rem] lg:text-[1.1rem] text-[#2C3A47]">
                            <Reveal isAnimation={isAnimation}>
                                <p className=" text-green01 font-montserrat font-medium">
                                    {t("home.short_content")}
                                </p>
                                <Link
                                    to="/thong-diep-hieu-truong"
                                    className=" text-green05 font-montserrat"
                                >
                                    {t("common.read-more")}
                                </Link>
                            </Reveal>
                            <p className="text-[0.6rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] text-green01 font-montserrat font-medium pt-[0.5rem] lg:pt-[2rem]">
                                <Reveal isAnimation={isAnimation}>
                                    {t("hieutruong.vvthang")}
                                </Reveal>
                            </p>
                            <p className="text-green01 font-montserrat font-medium ">
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
                                className=" w-full sm:w-2/3 md:w-3/4 lg:w-full pt-[1.7rem]"
                            />
                        </Reveal>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default ThongDiepHieuTruong;
