import React from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "../../motion/Reveal";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import { PopZoom } from "../../motion/PopZoom";
import { Link } from "react-router-dom";

function SuKien() {
    const { t } = useTranslation();
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;

    const events = [
        {
            name: t("event.evt1-name"),
            content: t("event.evt1-content"),
            color: "#ff7979",
            link: "path.event-video",
        },
        {
            name: t("event.evt2-name"),
            content: t("event.evt2-content"),
            color: "#81ecec",
            link: "path.event-write",
        },
        {
            name: t("event.evt3-name"),
            content: t("event.evt3-content"),
            color: "#ff9ff3",
            link: "path.event-write",
        },
        {
            name: t("event.evt4-name"),
            content: t("event.evt4-content"),
            color: "#f3a683",
            link: "path.event-write",
        },
    ];

    return (
        <div
            id="join-the-celebration"
            className="flex flex-col justify-center items-center bg-[#2c3e50] py-28 "
        >
            <p className="text-xl md:text-3xl font-bol uppercase text-[#fdcb6e] text-center pb-2">
                <Reveal isAnimation={isAnimation}>
                    {t("home.join-the-celebration")}
                </Reveal>
            </p>
            <p className="text-[1.4rem] font-bold uppercase text-[#fdcb6e] text-center pb-3">
                <Reveal isAnimation={isAnimation}>
                    {t("home.join-the-celebration-desciption")}
                </Reveal>
            </p>
            <List
                sx={{
                    width: "100%",
                    maxWidth: { md: "50%" },
                }}
            >
                {events.map((event) => (
                    <PopZoom>
                        <Link to={t(`${event.link}`)}>
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
                                        <LocalFloristIcon
                                            style={{ color: event.color }}
                                            // fontSize={"large"}
                                        />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primaryTypographyProps={{
                                        fontSize: "20px",
                                        color: "white",
                                    }}
                                    secondaryTypographyProps={{
                                        color: "#b2bec3",
                                        textAlign: "justify",
                                        fontSize: "16px",
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
