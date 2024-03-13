import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { t } from "i18next";
import { Reveal } from "../../motion/Reveal";
import { useNavigate } from "react-router-dom";

function DongThoiGian() {
    const navigate = useNavigate();

    const timeData = [
        {
            id: 1,
            description: t("time.gd1"),
            time: t("time.time-gd1"),
            events: [
                {
                    description: t("time.gd1-event-1"),
                    time: t("time.time-gd1-event-1"),
                },
                {
                    description: t("time.gd1-event-2"),
                    time: t("time.time-gd1-event-2"),
                },
            ],
            marginTop: "mt-8",
            bgColor: "bg-[#18B6B4]",
        },
        {
            id: 2,
            description: t("time.gd2"),
            time: t("time.time-gd2"),
            events: [
                {
                    description: t("time.gd2-event-1"),
                    time: t("time.time-gd2-event-1"),
                },
                {
                    description: t("time.gd2-event-2"),
                    time: t("time.time-gd2-event-2"),
                },
            ],
            marginTop: "mt-4",
            bgColor: "bg-[#2C92D5]",
        },
        {
            id: 3,
            description: t("time.gd3"),
            time: t("time.time-gd3"),
            events: [
                {
                    description: t("time.gd3-event-1"),
                    time: t("time.time-gd3-event-1"),
                },
                {
                    description: t("time.gd3-event-2"),
                    time: t("time.time-gd3-event-2"),
                },
            ],
            marginTop: "mt-0",
            bgColor: "bg-[#13538A]",
        },
    ];

    function goTimeLineDetails(id) {
        navigate("/theo-dong-thoi-gian");
    }

    return (
        <div id="time-line" className=" bg-[#2d3436] py-10">
            <Reveal>
                <p className="text-3xl uppercase text-moonMist text-center px-2 py-10">
                    {t("home.time-line")}
                </p>
            </Reveal>
            <Box sx={{ flexGrow: 1, margin: "30px" }}>
                <Grid
                    container
                    spacing={{ xs: 0, md: 0 }}
                    columns={{ xs: 4, sm: 4, md: 4 }}
                >
                    {timeData.map((time, index) => (
                        <Grid item xs={4} sm={1.33} md={1.33} key={index}>
                            <Reveal>
                                <button
                                    onClick={() => goTimeLineDetails(time.id)}
                                    className={`w-full flex flex-col justify-center items-center h-[7rem] text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.6rem] ${time.marginTop} ${time.bgColor} rounded-[4px] border-none text-white text-center px-[15px] scursor-pointer m-[10px] mb-[36px] shadow-[0_10px_20px_-8px_rgba(0,0,0,0.7)] relative duration-300 after:content-['»'] after:text-[5rem] after:absolute after:opacity-0 after:top-[-10px] after:right-[-20px] after:duration-300 hover:pr-[24px] hover:pl-[8px] hover:after:opacity-100 hover:after:right-[10px]`}
                                >
                                    <p className="items-center">
                                        {time.description}
                                    </p>
                                    <p>{time.time}</p>
                                </button>
                            </Reveal>
                            <div className=" p-[0.5rem] text-moonMist text-justify">
                                {time.events.map((event) => (
                                    <Reveal>
                                        <p>
                                            - {event.time} : {event.description}
                                        </p>
                                    </Reveal>
                                ))}
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default DongThoiGian;
