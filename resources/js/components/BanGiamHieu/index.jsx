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

function BanGiamHieu() {
    const navigate = useNavigate();

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
        <div id="board-of-directors-time">
            <Box sx={{ flexGrow: 1, paddingY: "5rem" }}>
                <Reveal>
                    <p className="text-3xl uppercase text-chathamsblue text-center pb-[5rem]">
                        {t("home.board-of-directors-time")}
                    </p>
                </Reveal>
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
                                    <Reveal>
                                        <img
                                            src={bangiamhieu.image}
                                            alt={bangiamhieu.name}
                                            className=" max-w-full h-auto rounded-lg"
                                        />
                                    </Reveal>
                                    <div className="text-center mt-2">
                                        <Reveal>
                                            <p className="text-[1rem] font-semibold uppercase">
                                                {bangiamhieu.name}
                                            </p>
                                        </Reveal>
                                        <Reveal>
                                            <p className="text-lg text-gray-500 ">
                                                {bangiamhieu.title}
                                            </p>
                                        </Reveal>
                                        <Reveal>
                                            <p className="text-lg text-gray-500 ">
                                                {bangiamhieu.year}
                                            </p>
                                        </Reveal>
                                    </div>
                                </div>
                            </PopZoom>
                        </Grid>
                    ))}
                </Grid>
                <div className=" flex justify-center items-center w-full my-10">
                    <Reveal>
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
