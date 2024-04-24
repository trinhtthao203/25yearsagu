import React from "react";
import { PopZoom } from "../../motion/PopZoom";
import { Reveal } from "../../motion/Reveal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { t } from "i18next";
import VTXuan from "../../../../public/images/BanGiamHieu/vtxuan.png";
import VVThang from "../../../../public/images/BanGiamHieu/vvthang.png";
import LMTung from "../../../../public/images/BanGiamHieu/lmtung.png";
import ReadMoreButton from "../ReadMoreButton";
import { useNavigate } from "react-router-dom";
import BackGround from "../../../../public/images/background.jpg";

function BanGiamHieu() {
    const navigate = useNavigate();
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;

    function goToPage() {
        navigate(`/ban-giam-hieu`);
    }

    const imageList = [
        {
            image: VTXuan,
            name: t("board-of-directors.vtxuan"),
            title: t("board-of-directors.principal"),
            year: t("board-of-directors.vtxuan-time"),
        },
        {
            image: LMTung,
            name: t("board-of-directors.lmtung"),
            title: t("board-of-directors.principal"),
            year: t("board-of-directors.lmtung-time"),
        },
        {
            image: VVThang,
            name: t("board-of-directors.vvthang"),
            title: t("board-of-directors.principal"),
            year: t("board-of-directors.vvthang-time"),
        },
    ];
    return (
        <div
            id="board-of-directors-time"
            style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${BackGround})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <Box sx={{ flexGrow: 1, paddingY: "5rem" }}>
                <p className=" pb-[7rem] w-full flex justify-center items-center mt-[7.5rem] text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] uppercase text-green01 font-oswald">
                    <Reveal isAnimation={isAnimation}>
                        {t("home.board-of-directors-time")}
                    </Reveal>
                </p>
                <Grid
                    container
                    spacing={{ xs: 2, md: 4 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    sx={{ paddingX: { md: "7rem", lg: "15rem" } }}
                >
                    {imageList.map((bangiamhieu, index) => (
                        <Grid item xs={12} sm={12} md={4} key={index}>
                            <PopZoom>
                                <div className="flex justify-center items-center flex-col rounded-lg">
                                    <Reveal isAnimation={isAnimation}>
                                        <img
                                            src={bangiamhieu.image}
                                            alt={bangiamhieu.name}
                                            loading="lazy"
                                            className=" max-w-full h-auto rounded-lg"
                                        />
                                    </Reveal>
                                    <div className="text-center mt-2">
                                        <p className="text-[1rem] font-montserrat font-bold text-green01 uppercase">
                                            <Reveal isAnimation={isAnimation}>
                                                {bangiamhieu.name}
                                            </Reveal>
                                        </p>
                                        <p className="text-lg text-green01 font-montserrat font-medium">
                                            <Reveal isAnimation={isAnimation}>
                                                {bangiamhieu.title}
                                            </Reveal>
                                        </p>
                                        <p className="text-lg text-green01 font-montserrat font-medium">
                                            <Reveal isAnimation={isAnimation}>
                                                {bangiamhieu.year}
                                            </Reveal>
                                        </p>
                                    </div>
                                </div>
                            </PopZoom>
                        </Grid>
                    ))}
                </Grid>
                <div className=" flex justify-center items-center w-full my-10">
                    <Reveal isAnimation={isAnimation}>
                        <ReadMoreButton
                            onClick={() => goToPage()}
                            title={t("common.view-detail")}
                        />
                    </Reveal>
                </div>
            </Box>
        </div>
    );
}

export default BanGiamHieu;
