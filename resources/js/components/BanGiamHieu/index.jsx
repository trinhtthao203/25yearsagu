import React from "react";
import banGiamHieu from "../../../data/banGiamHieu";
import { PopZoom } from "../PopZoom";
import { Reveal } from "../Reveal";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { t } from "i18next";

function BanGiamHieu() {
    return (
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
        // <div className="flex flex-col justify-center items-center py-[5rem] bg-moonMist">
        //     <Reveal>
        //         <p className="text-3xl uppercase text-chathamsblue text-center py-5">
        //             Ban giám hiệu qua các thời kỳ
        //         </p>
        //     </Reveal>
        //     <ul className="flex flex-wrap justify-center">
        //         {banGiamHieu.map((item, index) => (
        //             <PopZoom>
        //                 <li
        //                     key={index}
        //                     className="w-full sm:w-1/2 md:w-1/3 lg:w-full p-4 px-[7rem]  "
        //                 >
        //                     <div className="flex justify-center items-center flex-col">
        //                         <img
        //                             src={item.image}
        //                             alt={item.name}
        //                             className=" w-[10rem]"
        //                         />
        //                         <Reveal></Reveal>
        //                         <div className="text-center mt-2">
        //                             <Reveal>
        //                                 <p className="text-[1rem] font-semibold uppercase">
        //                                     {item.name}
        //                                 </p>
        //                             </Reveal>
        //                             <Reveal>
        //                                 <p className="text-lg text-gray-500 ">
        //                                     {item.title}
        //                                 </p>
        //                             </Reveal>
        //                             <Reveal>
        //                                 <p className="text-lg text-gray-500 ">
        //                                     {item.year}
        //                                 </p>
        //                             </Reveal>
        //                         </div>
        //                     </div>
        //                 </li>
        //             </PopZoom>
        //         ))}
        //     </ul>
        //     <Reveal>
        //         <button className=" mt-3 border-solid border-2 p-3 text-[1.2rem] rounded-md bg-chathamsblue uppercase text-moonMist">
        //             Khám phá
        //         </button>
        //     </Reveal>
        // </div>
    );
}

export default BanGiamHieu;
