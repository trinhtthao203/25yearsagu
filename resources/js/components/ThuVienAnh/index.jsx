import React from "react";
import { Grid } from "@mui/material";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ImageListItemBar, Box, IconButton } from "@mui/material";
import { Reveal } from "../../motion/Reveal";
import { dataImages } from "./images";

// const cardVariants = {
//     offscreen: {
//         y: 500,
//     },
//     onscreen: {
//         y: 0,
//         transition: {
//             type: "spring",
//             bounce: 0.4,
//             duration: 1,
//         },
//     },
// };

function Card({ image, title, description, link }) {
    const { t } = useTranslation();

    return (
        <div
            className="overflow-hidden flex items-center justify-center relative pt-[20px] "
            // initial="offscreen"
            // whileInView="onscreen"
            // viewport={{ once: true, amount: 0.8 }}
        >
            <div className="absolute bottom-0 left-0 right-0 top-0 h-10" />
            <div className="text-[164px] w-[450px] h-[300px] rounded-[7px] flex items-center justify-center bg-white">
                <div className="relative w-full h-full overflow-hidden rounded-[7px]">
                    <img
                        srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${image}?w=248&fit=crop&auto=format`}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-[7px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-400 ease-in-out">
                        <ImageListItemBar
                            title={title}
                            subtitle={description}
                            sx={{
                                borderRadius: "7px",
                                "& .MuiImageListItemBar-title": {
                                    fontSize: "18px",
                                },
                                "& .MuiImageListItemBar-subtitle": {
                                    fontSize: "13px",
                                    maxWidth: "100%",
                                    overflow: "hidden",
                                    whiteSpace: "normal",
                                },
                            }}
                            actionIcon={
                                <IconButton
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.54)",
                                    }}
                                    aria-label={`info about ${title}`}
                                >
                                    <p>i</p>
                                </IconButton>
                            }
                        />
                        <Link
                            to={link}
                            className=" font-oswald text-[32px] flex justify-center items-center h-[35px] mt-[17rem] rounded-[4px] bg-green05 border-none text-white text-center px-[16px] w-[220px] cursor-pointer m-[36px] shadow-[0_10px_20px_-8px_rgba(0,0,0,0.7)] relative duration-500 after:content-['»'] after:absolute after:opacity-0 after:top-[-7px] after:right-[-20px] after:duration-500 hover:pr-[24px] hover:pl-[8px] hover:after:opacity-100 hover:after:right-[10px]"
                        >
                            <span className=" text-[17px]">
                                {t("common.read-more")}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HinhAnh() {
    const { t } = useTranslation();
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;

    return (
        <div
            id="gallery"
            className=" py-[2rem] px-[1rem] md:px-[1rem] lg:px-[10rem] bg-moonMist"
        >
            <Box>
                <Reveal isAnimation={isAnimation}>
                    <p className=" py-10 w-full flex justify-center items-center mt-[3rem] text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] uppercase text-green01 font-oswald">
                        {t("home.gallery")}
                    </p>
                </Reveal>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {dataImages.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item}>
                            <Card
                                image={item.img}
                                title={t(`${item.title}`)}
                                description={t(`${item.description}`)}
                                link={t(`${item.link}`)}
                                xs={{ overflowWrap: "break-word" }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default HinhAnh;
