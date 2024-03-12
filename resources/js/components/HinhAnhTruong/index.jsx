import React from "react";
import { ImageListItemBar, Box, IconButton } from "@mui/material";
import IMG from "../../../../public/images/gate.jpg";
import { t } from "i18next";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import { Reveal } from "../../motion/Reveal";
const cardVariants = {
    offscreen: {
        y: 500,
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

function Card({ image, title, description }) {
    return (
        <motion.div
            className="overflow-hidden flex items-center justify-center relative pt-[20px] "
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <div className="absolute bottom-0 left-0 right-0 top-0 h-10" />
            <motion.div
                className="text-[164px] w-[450px] h-[300px] rounded-[7px] flex items-center justify-center bg-white"
                variants={cardVariants}
            >
                <div className="relative w-full h-full overflow-hidden rounded-[7px]">
                    <img
                        srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${image}?w=248&fit=crop&auto=format`}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-[7px]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out">
                        <ImageListItemBar
                            title={title}
                            subtitle={description}
                            sx={{ borderRadius: "7px" }}
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
                        <button className=" flex justify-center items-center h-[35px] mt-[17rem] rounded-[4px] bg-[#5ca1e1] border-none text-white text-center text-[32px] px-[16px] w-[220px] cursor-pointer m-[36px] shadow-[0_10px_20px_-8px_rgba(0,0,0,0.7)] relative duration-300 after:content-['»'] after:absolute after:opacity-0 after:top-[-7px] after:right-[-20px] after:duration-300 hover:pr-[24px] hover:pl-[8px] hover:after:opacity-100 hover:after:right-[10px]">
                            <span className="text-[17px]">
                                {t("common.read-more")}
                            </span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
const itemData = [
    {
        img: IMG,
        title: t("gallery.facilities"),
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
    },
    {
        img: IMG,
        title: t("gallery.education"),
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
    },
    {
        img: IMG,
        title: t("gallery.research"),
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
        cols: 2,
    },
    {
        img: IMG,
        title: t("gallery.union"),
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
    },
    {
        img: IMG,
        title: t("gallery.organizations"),
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
    },
    {
        img: IMG,
        title: t("gallery.school"),
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
    },
];

function HinhAnh() {
    return (
        <div
            id="gallery"
            className=" py-[2rem] px-[1rem] md:px-[1rem] lg:px-[10rem] bg-moonMist"
        >
            <Box>
                <p className="text-3xl uppercase text-[#2c2c54] text-center py-5 pt-10">
                    {t("home.gallery")}
                </p>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {itemData.map((item) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                image={item.img}
                                title={item.title}
                                description={item.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default HinhAnh;
