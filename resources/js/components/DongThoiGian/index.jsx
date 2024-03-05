import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { t } from "i18next";
import { Reveal } from "../Reveal";
import { PopZoom } from "../PopZoom";

function DongThoiGian() {
    return (
        <div className=" bg-[#2d3436] py-10">
            <p className="text-[1rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.9rem] uppercase text-white text-center ">
                <Reveal>{t("home.time-line")}</Reveal>
            </p>
            <Box sx={{ flexGrow: 1, margin: "60px" }}>
                <Grid
                    container
                    spacing={{ xs: 0, md: 0 }}
                    columns={{ xs: 4, sm: 4, md: 4 }}
                >
                    <Grid item xs={4} sm={1.33} md={1.33}>
                        <Reveal>
                            <div className="flex flex-col justify-center items-center h-[7rem] text-[1rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.6rem] mt-[2rem] bg-[#18B6B4] text-[#FFFFFF]">
                                <p className=" items-center">{t("time.gd1")}</p>
                                <p>{t("time.time-gd1")}</p>
                            </div>
                        </Reveal>
                        <div className=" p-[1rem] text-moonMist">
                            <Reveal>
                                <p>
                                    - 1999-2000: Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                </p>
                            </Reveal>
                            <Reveal>
                                <p>
                                    - 1999-2000: Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                </p>
                            </Reveal>
                        </div>
                    </Grid>
                    <Grid item xs={4} sm={1.33} md={1.33}>
                        <Reveal>
                            <div className="flex flex-col justify-center items-center h-[7rem] text-[1rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.6rem] mt-[1rem] bg-[#2C92D5] text-[#FFFFFF] ">
                                <p className=" items-center">{t("time.gd2")}</p>
                                <p>{t("time.time-gd2")}</p>
                            </div>
                        </Reveal>
                        <div className=" p-[1rem] text-moonMist">
                            <Reveal>
                                <p>
                                    - 1999-2000: Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                </p>
                            </Reveal>
                            <Reveal>
                                <p>
                                    - 1999-2000: Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                </p>
                            </Reveal>
                        </div>
                    </Grid>
                    <Grid item xs={4} sm={1.33} md={1.33}>
                        <Reveal>
                            <div className="flex flex-col justify-center items-center h-[7rem] text-[1rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.6rem] bg-[#13538A] text-[#FFFFFF] ">
                                <p className=" items-center">{t("time.gd3")}</p>
                                <p>{t("time.time-gd3")}</p>
                            </div>
                        </Reveal>
                        <div className=" p-[1rem] text-moonMist ">
                            <Reveal>
                                <p>
                                    - 1999-2000: Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                </p>
                            </Reveal>
                            <Reveal>
                                <p>
                                    - 1999-2000: Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                </p>
                            </Reveal>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default DongThoiGian;
