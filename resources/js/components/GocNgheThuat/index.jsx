import React from "react";
import Song01 from "../../../../public/audio/dai-hoc-an-giang-truong-chung-toi.mp3";
import Song02 from "../../../../public/audio/tien-len-dai-hoc-an-giang.mp3";
import KeHoach from "../../../../public/images/planning.jpg";
import _25Years from "../../../../public/images/Gallery/Facilities/Landscape/1.-Toàn-cảnh-Trường-Đại-học-An-Giang.jpg";
import BackGround from "../../../../public/images/background.jpg";
import BaiHatVeTruong from "../../../../public/images/music_player.gif";
import VideoVeTruong from "../../../../public/video/agu_20th_years_anniversary.mp4";
import _25yplan from "../../../../public/files/kehoach25nam.pdf";

import Slider from "react-slick";
import { Grid, Box } from "@mui/material";
import { t } from "i18next";
import { Reveal } from "../../motion/Reveal";
import ReadMoreButton from "../ReadMoreButton";
import ReactPlayer from "react-player";

function CustomSlide(props) {
    const { index, ...otherProps } = props;
    return (
        <div {...otherProps}>
            <h3>{index}</h3>
        </div>
    );
}
const GocNgheThuat = () => {
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;

    const slideData = [
        // {
        //     URL: _25Years,
        //     title: t("home.25years-development"),
        //     description: t("art.25years-development-desciption"),
        //     link: _25yplan,
        // },
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
            class="slider-container "
            className=" flex justify-center items-center"
            style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${BackGround})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* <Slider {...settings} className="w-[90%]"> */}
            <div className="p-10">
                <Grid container spacing={1}>
                    <Grid item xs={12} md={5}>
                        <Reveal isAnimation={isAnimation}>
                            <p className=" font-medium font-oswald text-green01 text-center text-[1.2rem] md:text-[1.7rem] ">
                                {t("art.video-title")}
                            </p>
                        </Reveal>
                        <Reveal isAnimation={isAnimation}>
                            <ReactPlayer
                                controls={true}
                                url={VideoVeTruong}
                                height={"300"}
                                width={"450"}
                            />
                        </Reveal>
                    </Grid>
                    <Grid item xs={12} md={7} sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                        <Reveal isAnimation={isAnimation}>
                            <p className=" font-medium font-oswald text-green01 text-center text-[1.2rem] md:text-[1.7rem] ">
                                {t("art.song-title")}
                            </p>
                        </Reveal>
                        <div className="pt-10 flex-col md:flex-col flex justify-center items-center md:justify-start md:items-start px-[2rem]">
                            <div className="flex flex-row">
                                <div className="md:pr-10">
                                    <p className=" font-bold font-montserrat text-green01 text-justify text-[0.9rem] md:text-[1.1rem]">
                                        {t("art.song-01-title")}
                                    </p>
                                    <audio
                                        controls
                                        src={Song01}
                                        className=" w-[95%] md:w-[90%] "
                                    />
                                </div>
                                <div>
                                    <p className=" font-montserrat font-bold text-green01 text-justify text-[0.9rem] md:text-[1.1rem]">
                                        {t("art.song-02-title")}
                                    </p>
                                    <audio
                                        controls
                                        src={Song02}
                                        className=" w-[95%] md:w-[90%] "
                                    />
                                </div>
                            </div>

                        </div>
                            <div className=" flex items-center justify-center">   <img src={BaiHatVeTruong} className=" w-1/2" /></div>
                        {/* <Reveal isAnimation={isAnimation}>
                                <p className=" font-medium font-oswald text-green01 text-center text-[1.2rem] md:text-[1.7rem] ">
                                    {t("art.video-title")}
                                </p>
                            </Reveal>
                            <Reveal isAnimation={isAnimation}>
                                <p className=" px-5 font-montserrat font-medium text-green01 text-justify text-[0.9rem] md:text-[1.2rem]">
                                    {t("art.video-description")}
                                </p>
                            </Reveal> */}
                    </Grid>
                </Grid>
            </div>
            {/* <div className="p-10">
                    <Grid container spacing={1}>
                        <Grid
                            item
                            xs={12}
                            md={5}
                            sx={{
                                justifyContent: "center",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <img src={BaiHatVeTruong} className=" w-3/5" />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Reveal isAnimation={isAnimation}>
                                <p className=" pt-10 font-medium font-oswald text-green01 text-center text-[1.2rem] md:text-[1.7rem] ">
                                    {t("art.song-title")}
                                </p>
                            </Reveal>
                            <Reveal isAnimation={isAnimation}>
                                <p className=" font-montserrat font-medium text-green01 text-justify text-[0.9rem] md:text-[1.2rem] py-5">
                                    {t("art.song-description")}
                                </p>
                            </Reveal>
                            <div className=" flex-col md:flex-row flex justify-center items-center md:justify-start md:items-start">
                                <div className="md:pr-10 ">
                                    <p className=" font-montserrat font-medium text-green01 text-justify text-[0.9rem] md:text-[1.1rem]">
                                        {t("art.song-01-title")}
                                    </p>
                                    <audio
                                        controls
                                        src={Song01}
                                        className=" w-[95%] md:w-[90%] "
                                    />
                                </div>
                                <div>
                                    <p className=" font-montserrat font-medium text-green01 text-justify text-[0.9rem] md:text-[1.1rem]">
                                        {t("art.song-02-title")}
                                    </p>
                                    <audio
                                        controls
                                        src={Song02}
                                        className=" w-[95%] md:w-[90%] "
                                    />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div> */}
            {/* </Slider> */}
        </div>
    );
};

export default GocNgheThuat;
