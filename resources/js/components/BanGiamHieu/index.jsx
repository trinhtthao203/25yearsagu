import React from "react";
import banGiamHieu from "../../../data/banGiamHieu";
import { PopZoom } from "../../motion/PopZoom";
import { Reveal } from "../../motion/Reveal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { t } from "i18next";

function BanGiamHieu() {
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
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {banGiamHieu.map((bangiamhieu, index) => (
                        <Grid item xs={12} sm={12} md={4} key={index}>
                            <PopZoom>
                                <div className="flex justify-center items-center flex-col">
                                    <Reveal>
                                        <img
                                            src={bangiamhieu.image}
                                            alt={bangiamhieu.name}
                                            className=" max-w-full h-auto rounded-lg shadow-lg overflow-hidden"
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
            </Box>
        </div>
    );
}

export default BanGiamHieu;
