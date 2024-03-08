import React from "react";
import { ImageListItemBar, Box, IconButton, ImageList } from "@mui/material";
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
        y: 10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ image, title, description }) {
    // const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
        <motion.div
            className=" overflow-hidden flex items-center justify-center relative pt-[20px] "
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <div
                className=" absolute bottom-0 left-0 right-0 top-0 h-10 pt-[10rem] "
                // style={{ background }}
            />
            <motion.div
                className=" text-[164px] w-[450px] h-[300px] flex items-center justify-center bg-white rounded-[20px] origin-[10%_60%] shadow-[ 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)] "
                variants={cardVariants}
            >
                <img
                    srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${image}?w=248&fit=crop&auto=format`}
                    alt={title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={title}
                    subtitle={description}
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
            </motion.div>
        </motion.div>
    );
}
const food = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320],
];
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
                <p className="text-[1rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.9rem] uppercase text-chathamsblue pt-[5rem] text-center ">
                    <Reveal>{t("home.gallery")}</Reveal>
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
// const itemData = [
//     {
//         img: IMG,
//         title: t("gallery.facilities"),
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
//         rows: 2,
//         cols: 2,
//         featured: true,
//     },
//     {
//         img: IMG,
//         title: t("gallery.education"),
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
//     },
//     {
//         img: IMG,
//         title: t("gallery.mitting"),
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
//     },
//     {
//         img: IMG,
//         title: t("gallery.research"),
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
//         cols: 2,
//     },
//     {
//         img: IMG,
//         title: t("gallery.union"),
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
//         cols: 2,
//     },
//     {
//         img: IMG,
//         title: t("gallery.organizations"),
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
//         rows: 2,
//         cols: 2,
//         featured: true,
//     },
//     {
//         img: IMG,
//         title: t("gallery.school"),
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
//     },
// ];
// return (
//     <div
//         id="gallery"
//         className="flex flex-col justify-center items-center py-[5rem] bg-[#dff9fb]"
//     >
//         <p className="text-3xl uppercase text-[#2c2c54] text-center py-5">
//             {t("home.gallery")}
//         </p>
//         <div className=" text-center flex justify-center items-center pt-12">
//             <ImageList sx={{ width: "70%", height: 500 }}>
//                 {itemData.map((item) => (
//                     <ImageListItem key={item.img}>
//                         <img
//                             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//                             src={`${item.img}?w=248&fit=crop&auto=format`}
//                             alt={item.title}
//                             loading="lazy"
//                         />
//                         <ImageListItemBar
//                             title={item.title}
//                             subtitle={item.author}
//                             actionIcon={
//                                 <IconButton
//                                     sx={{
//                                         color: "rgba(255, 255, 255, 0.54)",
//                                     }}
//                                     aria-label={`info about ${item.title}`}
//                                 >
//                                     <p>i</p>
//                                 </IconButton>
//                             }
//                         />
//                     </ImageListItem>
//                 ))}
//             </ImageList>
//         </div>
//     </div>
// );
