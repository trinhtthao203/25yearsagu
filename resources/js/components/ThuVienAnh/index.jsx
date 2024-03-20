import React from "react";
import { ImageListItemBar, Box, IconButton } from "@mui/material";
import Landscape from "../../../../public/images/Gallery/Facilities/Landscape/1.-Toàn-cảnh-Trường-Đại-học-An-Giang.jpg";
import Education from "../../../../public/images/Gallery/Education/21.-Các-hoạt-động-giới-thiệu-học-bổng-du-học-cho-sinh-viên.jpg";
import Research from "../../../../public/images/Gallery/Research/7.-Sinh-viên-ĐHAG-nghiên-cứu-khoa-học.jpg";
import Foreign from "../../../../public/images/Gallery/Foreign/2.-Hiệu-trưởng-Võ-Văn-Thắng-ký-kết-hợp-tác-với-các-trường-tại-Diễn-đàn-Hiệu-trưởng-các-đại-học-WTA-lần-10.jpg";
import Union from "../../../../public/images/Gallery/Union/18.Đại-hội-văn-thể-chào-mừng-ngày-Nhà-giáo-Việt-Nam-20.11.jpg";
import Organizations from "../../../../public/images/Gallery/Organizations/66.-Công-đoàn-trường-tổ-chức-tham-quan-học-tập-kinh-nghiệm.jpg";
import School from "../../../../public/images/Gallery/School/1.-Toàn-cảnh-Trường-Thực-Hành-Sư-Phạm.jpg";
import Mitting from "../../../../public/images/Gallery/Union/46.Tư-vấn-hỗ-trợ-sinh-viên-khởi-nghiệp.jpg";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
const cardVariants = {
    offscreen: {
        y: 500,
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1,
        },
    },
};

function Card({ image, title, description, link }) {
    const { t } = useTranslation();

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
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-1000 ease-in-out">
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
                            className="text-[32px] flex justify-center items-center h-[35px] mt-[17rem] rounded-[4px] bg-[#5ca1e1] border-none text-white text-center px-[16px] w-[220px] cursor-pointer m-[36px] shadow-[0_10px_20px_-8px_rgba(0,0,0,0.7)] relative duration-1000 after:content-['»'] after:absolute after:opacity-0 after:top-[-7px] after:right-[-20px] after:duration-1000 hover:pr-[24px] hover:pl-[8px] hover:after:opacity-100 hover:after:right-[10px]"
                        >
                            <span className=" text-[17px]">
                                {t("common.read-more")}
                            </span>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function HinhAnh() {
    const { t } = useTranslation();

    const itemData = [
        {
            img: Landscape,
            title: t("gallery.facilities"),
            description: t("gallery.facilities-description"),
            link: t("path.gallery-facilities"),
        },
        {
            img: Education,
            title: t("gallery.education"),
            description: t("gallery.education-description"),
            link: t("path.gallery-education"),
        },
        {
            img: Research,
            title: t("gallery.research"),
            description: t("gallery.research-description"),
            link: t("path.gallery-research"),
        },
        {
            img: Foreign,
            title: t("gallery.foreign"),
            description: t("gallery.foreign-description"),
            link: t("path.gallery-foreign"),
        },
        {
            img: Organizations,
            title: t("gallery.organizations"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
            link: t("path.gallery-organizations"),
        },
        {
            img: Union,
            title: t("gallery.union"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
            link: t("path.gallery-union"),
        },
        {
            img: School,
            title: t("gallery.school"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
            link: t("path.gallery-school"),
        },
        {
            img: Mitting,
            title: t("gallery.mitting"),
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque.",
            link: t("path.gallery-mitting"),
        },
    ];

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
                        <Grid item xs={12} sm={6} md={4} key={item}>
                            <Card
                                image={item.img}
                                title={item.title}
                                description={item.description}
                                link={item.link}
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
