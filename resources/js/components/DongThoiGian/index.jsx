import React from "react";
import Grid from "@mui/material/Grid";
import { t } from "i18next";
import { Reveal } from "../../motion/Reveal";
import { useNavigate } from "react-router-dom";

function DongThoiGian() {
    const navigate = useNavigate();
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;

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
            bgColor: "bg-[#4CBC3B]",
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
            bgColor: "bg-[#20bf6b]",
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
            bgColor: "bg-[#218c74]",
        },
    ];

    function goTimeLineDetails(id) {
        navigate(`/theo-dong-thoi-gian?id=${id}`);
    }

    return (
        <div id="time-line" className=" bg-[#2d3436] py-10">
            <p className=" text-center py-[5rem] text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] uppercase text-green04 font-oswald">
                <Reveal isAnimation={isAnimation}>{t("home.time-line")}</Reveal>
            </p>
            <div className=" flex-grow m-[30px]">
                <Grid
                    container
                    spacing={{ xs: 0, md: 0 }}
                    columns={{ xs: 4, sm: 4, md: 4 }}
                >
                    {timeData.map((time, index) => (
                        <Grid item xs={4} sm={1.33} md={1.33} key={index}>
                            <button
                                onClick={() => goTimeLineDetails(time.id)}
                                className={` text-green04 font-medium font-montserrat w-full flex flex-col justify-center items-center h-[7rem] text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.5rem] ${time.marginTop} ${time.bgColor} rounded-[4px] border-none text-center px-[15px] scursor-pointer m-[10px] mb-[36px] shadow-[0_10px_20px_-8px_rgba(0,0,0,0.7)] relative duration-300 after:content-['»'] after:text-[5rem] after:absolute after:opacity-0 after:top-[-10px] after:right-[-20px] after:duration-300 hover:pr-[24px] hover:pl-[8px] hover:after:opacity-100 hover:after:right-[10px]`}
                            >
                                <p>
                                    <Reveal isAnimation={isAnimation}>
                                        {time.description}
                                    </Reveal>
                                </p>
                                <p>
                                    <Reveal isAnimation={isAnimation}>
                                        {time.time}
                                    </Reveal>
                                </p>
                            </button>
                            <div className=" font-montserrat overflow-hidden mb-[7rem] max-h-[14rem] p-[0.5rem] text-green04 text-justify">
                                {time.events.map((event, eventIndex) => (
                                    <Reveal
                                        isAnimation={isAnimation}
                                        key={eventIndex}
                                    >
                                        <p>
                                            - {event.time} :{" "}
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: event.description.replace(
                                                        /\n/g,
                                                        "<br> + "
                                                    ),
                                                }}
                                            ></span>
                                        </p>
                                    </Reveal>
                                ))}
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default DongThoiGian;
