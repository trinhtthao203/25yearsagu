import React from "react";
import Song01 from "../../../../public/audio/dai-hoc-an-giang-truong-chung-toi.mp3";
import Song02 from "../../../../public/audio/tien-len-dai-hoc-an-giang.mp3";
import KeHoach from "../../../../public/images/planning.jpg";
import _25Years from "../../../../public/images/Gallery/Facilities/Landscape/1.-Toàn-cảnh-Trường-Đại-học-An-Giang.jpg";
import BackGround from "../../../../public/images/background.jpg";
import BaiHatVeTruong from "../../../../public/images/music.png";
import VideoVeTruong from "../../../../public/video/agu_20th_years_anniversary.mp4";
import _25yplan from "../../../../public/files/kehoach25nam.pdf";

import Slider from "react-slick";
import { Grid, Box } from "@mui/material";
import { t } from "i18next";
import { Reveal } from "../../motion/Reveal";
import ReadMoreButton from "../ReadMoreButton";
import ReactPlayer from "react-player";

const GocNgheThuat = () => {
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;

    const slideData = [
        {
            URL: _25Years,
            title: t("home.25years-development"),
            description: t("art.25years-development-desciption"),
            link: _25yplan,
        },
        // {
        //     URL: CuocThiVideo,
        //     title: t("art.video-contest"),
        //     description: t("art.video-contest-desciption"),
        //     children: [],
        // },
        // {
        //     URL: CuocThiViet,
        //     title: t("art.write-contest"),
        //     description: t("art.write-contest-desciption"),
        //     children: [],
        // },
        {
            URL: KeHoach,
            title: t("art.plan"),
            description: t("art.plan-desciption"),
            link: _25yplan,
        },
        // {
        //     URL: BaiHatVeTruong,
        //     title: t("art.song-title"),
        //     description: "",
        //     children: [
        //         {
        //             URL: Song01,
        //             title: t("art.song-01-title"),
        //         },
        //         {
        //             URL: Song02,
        //             title: t("art.song-02-title"),
        //         },
        //     ],
        // },
    ];

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };

    return (
        <div
            className={`slider-container `}
            style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${BackGround})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <Slider {...settings}>
                {slideData.map((slide, index) => (
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "30px",
                            borderRadius: "15px",
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid
                                item
                                xs={12}
                                md={5}
                                sx={{
                                    width: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                }}
                            >
                                <img src={slide.URL} className="rounded-lg " />
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <p className=" text-center text-[1rem] md:text-[1.5rem] ">
                                    <Reveal isAnimation={isAnimation}>
                                        <p className=" text-[#474787] ">
                                            {slide.title}
                                        </p>
                                    </Reveal>
                                </p>
                                <p className=" text-justify text-[0.9rem] md:text-[1.2rem] pl-[1rem]">
                                    <Reveal isAnimation={isAnimation}>
                                        <p className=" text-[#30336b] py-5">
                                            {slide.description}
                                        </p>
                                    </Reveal>
                                </p>
                                <div className="w-full flex justify-end items-end">
                                    <Reveal isAnimation={isAnimation}>
                                        <button className=" flex justify-center items-center h-[36px] rounded-[4px] bg-[#5ca1e1] border-none text-white text-center text-[32px] px-[15px] scursor-pointer m-[10px] mb-[36px] shadow-[0_10px_20px_-8px_rgba(0,0,0,0.7)] relative duration-300 after:content-['»'] after:absolute after:opacity-0 after:top-[-7px] after:right-[-20px] after:duration-300 hover:pr-[24px] hover:pl-[8px] hover:after:opacity-100 hover:after:right-[10px]">
                                            <a
                                                href={slide.link}
                                                target="_blank"
                                                className="text-[17px] pt-[2px] pr-2"
                                            >
                                                {t("common.read-more")}
                                            </a>
                                        </button>
                                    </Reveal>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                ))}
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "35px",
                        borderRadius: "15px",
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Reveal isAnimation={isAnimation}>
                                <ReactPlayer
                                    controls={true}
                                    url={VideoVeTruong}
                                    height={"300"}
                                    width={"450"}
                                />
                            </Reveal>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <p className=" text-center text-[1rem] md:text-[1.5rem] text-[#474787]">
                                <Reveal isAnimation={isAnimation}>
                                    {t("art.video-title")}
                                </Reveal>
                            </p>
                            <p className=" text-justify text-[0.9rem] md:text-[1.2rem] text-[#40407a]">
                                <Reveal isAnimation={isAnimation}>
                                    {t("art.video-description")}
                                </Reveal>
                            </p>
                        </Grid>
                    </Grid>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "30px",
                        borderRadius: "15px",
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid
                            item
                            xs={12}
                            md={5}
                            sx={{
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                            }}
                        >
                            <img src={BaiHatVeTruong} className="rounded-lg" />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <p className=" text-center text-[1rem] md:text-[1.5rem] ">
                                <Reveal isAnimation={isAnimation}>
                                    <p className=" text-[#474787]">
                                        {t("art.song-title")}
                                    </p>
                                </Reveal>
                            </p>
                            <p className=" text-justify text-[0.9rem] md:text-[1.2rem]">
                                <Reveal isAnimation={isAnimation}>
                                    <p className=" text-[#40407a]">
                                        {t("art.song-description")}
                                    </p>
                                </Reveal>
                                <div className=" flex flex-col justify-center items-center md:justify-start md:items-start">
                                    <p className=" text-[#40407a] py-2">
                                        {t("art.song-01-title")}
                                    </p>
                                    <audio
                                        controls
                                        src={Song01}
                                        className=" w-[95%] md:w-[50%] "
                                    />
                                    <p className=" text-[#40407a] py-2">
                                        {t("art.song-02-title")}
                                    </p>
                                    <audio
                                        controls
                                        src={Song02}
                                        className=" w-[95%] md:w-[50%] "
                                    />
                                </div>
                            </p>
                        </Grid>
                    </Grid>
                </Box>
            </Slider>
        </div>
    );
};

export default GocNgheThuat;
