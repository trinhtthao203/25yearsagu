import React from "react";
import CuocThiVideo from "../../../../public/images/TinTuc/cuoc-thi-video.gif";
import CuocThiViet from "../../../../public/images/TinTuc/cuoc-thi-viet.gif";
import HoiNhapPhatTrien from "../../../../public/images/gate.jpg";
import Slider from "react-slick";
import { Grid, Box } from "@mui/material";
import { t } from "i18next";
import { Reveal } from "../../motion/Reveal";
import ReadMoreButton from "../ReadMoreButton";

const GocNgheThuat = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };
    return (
        <div className=" pt-[5rem] bg-moonMist">
            {/* <p className="text-3xl uppercase text-[#2c2c54] text-center py-5">
                {t("home.art")}
            </p> */}
            <div className="slider-container p-10 ">
                <Slider {...settings}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Reveal>
                                    <img src={CuocThiVideo} />
                                </Reveal>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Reveal>
                                    <p className=" text-center text-[1.2rem]">
                                        {t("home.video-introduction")}
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className=" text-center text-[1rem]  md:text-[1.5rem]">
                                        {t("art.video-title")}
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className=" text-justify text-[0.7rem]  md:text-[1.2rem]">
                                        {t("art.video-description")}
                                    </p>
                                </Reveal>
                                <div className="w-full flex justify-end items-end">
                                    <Reveal>
                                        <ReadMoreButton
                                            title={t("common.view-detail")}
                                        />
                                    </Reveal>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Reveal>
                                    <img src={CuocThiViet} />
                                </Reveal>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Reveal>
                                    <p className="text-center text-[1.2rem]">
                                        {t("home.song-introduction")}
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className=" text-center text-[1rem]  md:text-[1.5rem]">
                                        {t("art.song-title")}
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className=" text-justify text-[0.7rem] md:text-[1.2rem]">
                                        {t("art.song-description")}
                                    </p>
                                </Reveal>
                                <div className="w-full flex justify-end items-end">
                                    <Reveal>
                                        <ReadMoreButton
                                            title={t("common.view-detail")}
                                        />
                                    </Reveal>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Reveal>
                                    <img src={HoiNhapPhatTrien} />
                                </Reveal>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Reveal>
                                    <p className=" text-center text-[1rem]  md:text-[1.5rem]">
                                        {t("home.25years-development")}
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className=" text-justify text-[0.7rem] md:text-[1.2rem]">
                                        {t("art.song-description")}
                                    </p>
                                </Reveal>
                                <div className="w-full flex justify-end items-end">
                                    <Reveal>
                                        <ReadMoreButton
                                            title={t("common.view-detail")}
                                        />
                                    </Reveal>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Slider>
            </div>
        </div>
    );
};

export default GocNgheThuat;
