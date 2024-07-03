import React from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "../../motion/Reveal";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { PopZoom } from "../../motion/PopZoom";
import { Link } from "react-router-dom";

function SuKien() {
    const { t } = useTranslation();
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;

    const events = [
        {
            name: t("event.evt1-name"),
            content: t("event.evt1-content"),
            color: "#7d5fff",
            link: "path.event-video",
        },
        {
            name: t("event.evt2-name"),
            content: t("event.evt2-content"),
            color: "#f6b93b",
            link: "path.event-write",
        },   
        {
            name: t("event.evt3-name"),
            content: t("event.evt3-content"),
            color: "#ff9ff3",
            link: "https://enews.agu.edu.vn/index.php?option=com_content&view=article&id=24256&Itemid=115",
        },
        {
            name: t("event.evt4-name"),
            content: t("event.evt4-content"),
            color: "#f3a683",
            link: "https://www.agu.edu.vn/vi/chi-tiet-thong-tin/ron-rang-hoi-thi-ca-mua-nhac-sinh-vien-agu-nam-2024",
        },        
        {
            name: t("event.evt5-name"),
            content: t("event.evt5-content"),
            color: "#e67e22",
            link: "https://www.agu.edu.vn/vi/chi-tiet-thong-tin/ngay-hoi-tuyen-dung-nam-2024-cau-noi-vung-chac-giua-nha-truong-doanh-nghiep-va-sinh-vien",
        },      
        {
            name: t("event.evt6-name"),
            content: t("event.evt6-content"),
            color: "#7d5fff",
            link: "https://www.agu.edu.vn/vi/chi-tiet-thong-tin/chuong-trinh-giao-luu-van-hoa-quoc-te-voi-truong-dai-hoc-surindra-rajabhat",
        },
    ];

    return (
        <div
            id="join-the-celebration"
            className="flex flex-col justify-center items-center bg-[#0d2c14] py-28 "
        >
            <Reveal isAnimation={isAnimation}>
                <p className="text-2xl md:text-3xl font-oswald uppercase text-[#fdcb6e] text-center py-2">
                    {t("home.join-the-celebration")}
                </p>
            </Reveal>
            <p className="text-[1rem] md:text-[1.2rem] font-montserrat font-medium uppercase text-[#fdcb6e] text-center pb-3">
                <Reveal isAnimation={isAnimation}>
                    {t("home.join-the-celebration-desciption")}
                </Reveal>
            </p>
            <List
                sx={{
                    width: "100%",
                    maxWidth: { md: "50%" },
                    flexDirection: "column",
                }}
            >
                {events.map((event) => (
                    <PopZoom>
                        <Link to={t(`${event.link}`)} target="_blank">
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar
                                        sx={{
                                            backgroundColor: "white",
                                            borderRadius: "10px",
                                            width: { xs: "35px", md: "50px" },
                                            height: { xs: "35px", md: "50px" },
                                            marginRight: {
                                                xs: "10px",
                                                md: "20px",
                                            },
                                        }}
                                    >
                                        <AutoAwesomeIcon
                                            style={{ color: event.color }}
                                        />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primaryTypographyProps={{
                                        fontSize: { xs: "18px", md: "20px" },
                                        fontFamily: "Montserrat",
                                        color: "#E0EFE6",
                                        width: "100%",
                                    }}
                                    secondaryTypographyProps={{
                                        color: "#E0EFE6",
                                        fontFamily: "Montserrat",
                                        textAlign: "justify",
                                        fontSize: { xs: "15px", md: "16px" },
                                        width: "100%",
                                    }}
                                    primary={event.name}
                                    secondary={event.content}
                                />
                            </ListItem>
                        </Link>
                    </PopZoom>
                ))}
            </List>
        </div>
    );
}

export default SuKien;
