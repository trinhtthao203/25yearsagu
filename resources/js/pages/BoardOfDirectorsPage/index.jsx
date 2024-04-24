import React, { useEffect } from "react";

import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import { Reveal } from "../../motion/Reveal";
import { ScrollText } from "../../motion/ScrollText";
import { useTranslation } from "react-i18next";
import BackButton from "../../components/BackButton";

import VVThang from "../../../../public/images/BanGiamHieu/vvthang.png";
import VTXuan from "../../../../public/images/BanGiamHieu/vtxuan.png";
import LMTung from "../../../../public/images/BanGiamHieu/lmtung.png";
import HXQuang from "../../../../public/images/BanGiamHieu/hxquang.png";
import DHLuc from "../../../../public/images/BanGiamHieu/dhluc.png";
import NTHai from "../../../../public/images/BanGiamHieu/nthai.png";
import TVDat from "../../../../public/images/BanGiamHieu/tvdat.png";
import LQCuong from "../../../../public/images/BanGiamHieu/lqcuong.png";
import HTBinh from "../../../../public/images/BanGiamHieu/htbinh.png";

import { Box } from "@mui/material";
import CustomFab from "../../components/CustomFab";

function BoardOfDirectorsPage() {
    const { t } = useTranslation();
    const bghList = [
        {
            term: t("board-of-directors.term-I"),
            time: t("board-of-directors.term-I-time"),
            member: [
                {
                    image: VTXuan,
                    name: t("board-of-directors.vtxuan"),
                    title: t("board-of-directors.principal"),
                    year: t("board-of-directors.time-vtxuan-term-I"),
                },
                {
                    image: LMTung,
                    name: t("board-of-directors.lmtung"),
                    title: t("board-of-directors.vice-principal"),
                    year: t("board-of-directors.time-lmtung-term-I"),
                },
                {
                    image: HXQuang,
                    name: t("board-of-directors.hxquang"),
                    title: t("board-of-directors.vice-principal"),
                    year: t("board-of-directors.time-hxquang-term-I"),
                },
                {
                    image: DHLuc,
                    name: t("board-of-directors.dhluc"),
                    title: t("board-of-directors.vice-principal"),
                    year: t("board-of-directors.time-dhluc-term-I"),
                },
            ],
        },
        {
            term: t("board-of-directors.term-II"),
            time: t("board-of-directors.term-II-time"),
            member: [
                {
                    image: LMTung,
                    name: t("board-of-directors.lmtung"),
                    title: t("board-of-directors.principal"),
                    year: t("board-of-directors.time-lmtung-term-II"),
                },
                {
                    image: HXQuang,
                    name: t("board-of-directors.hxquang"),
                    title: t("board-of-directors.vice-principal"),
                    year: t("board-of-directors.time-hxquang-term-II"),
                },
                {
                    image: DHLuc,
                    name: t("board-of-directors.dhluc"),
                    title: t("board-of-directors.vice-principal"),
                    year: t("board-of-directors.time-dhluc-term-II"),
                },
                {
                    image: VVThang,
                    name: t("board-of-directors.vvthang"),
                    title: t("board-of-directors.vice-principal"),
                    year: t("board-of-directors.time-vvthang-term-II"),
                },
            ],
        },
        {
            term: t("board-of-directors.term-III"),
            time: t("board-of-directors.term-III-time"),
            member: [
                {
                    image: VVThang,
                    name: t("board-of-directors.vvthang"),
                    title: t("board-of-directors.principal"),
                    year: t("board-of-directors.time-vvthang-term-III"),
                },
                {
                    image: HXQuang,
                    name: t("board-of-directors.hxquang"),
                    title: t("board-of-directors.vice-principal"),
                    year: t("board-of-directors.time-hxquang-term-III"),
                },
                {
                    image: NTHai,
                    name: t("board-of-directors.nthai"),
                    title: t("board-of-directors.vice-principal"),
                    year: t("board-of-directors.time-nthai-term-III"),
                },
                {
                    image: TVDat,
                    name: t("board-of-directors.tvdat"),
                    title: t("board-of-directors.vice-principal"),
                    year: t("board-of-directors.time-tvdat-term-III"),
                },
                {
                    image: LQCuong,
                    name: t("board-of-directors.lqcuong"),
                    title: t("board-of-directors.vice-principal"),
                    year: t("board-of-directors.time-lqcuong-term-III"),
                },
            ],
        },
        {
            term: t("board-of-directors.term-IV"),
            time: t("board-of-directors.term-IV-time"),
            member: [
                {
                    image: VVThang,
                    name: t("board-of-directors.vvthang"),
                    title: t("board-of-directors.principal"),
                    year: t("board-of-directors.time-vvthang-term-IV"),
                },
                {
                    image: NTHai,
                    name: t("board-of-directors.nthai"),
                    title: t("board-of-directors.vice-principal"),
                    year: t("board-of-directors.time-nthai-term-IV"),
                },
                {
                    image: TVDat,
                    name: t("board-of-directors.tvdat"),
                    title: t("board-of-directors.vice-principal"),
                    year: t("board-of-directors.time-tvdat-term-IV"),
                },
                {
                    image: LQCuong,
                    name: t("board-of-directors.lqcuong"),
                    title: t("board-of-directors.vice-principal"),
                    year: t("board-of-directors.time-lqcuong-term-IV"),
                },
            ],
        },
        ,
        {
            term: t("board-of-directors.term-V"),
            time: t("board-of-directors.term-V-time"),
            member: [
                {
                    image: VVThang,
                    name: t("board-of-directors.vvthang"),
                    title: t("board-of-directors.principal"),
                    year: t("board-of-directors.time-vvthang-term-V"),
                },
                {
                    image: HTBinh,
                    name: t("board-of-directors.htbinh"),
                    title: t("board-of-directors.vice-principal"),
                    year: t("board-of-directors.time-htbinh-term-V"),
                },
            ],
        },
    ];

    const sectionStyle = {
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        overflow: "hidden",
        margin: "5rem 0 2rem 0",
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
            sections.forEach((sec) => {
                const h1 = sec.querySelector("h1");
                const p = sec.querySelectorAll("p");
                const img = sec.querySelectorAll("img");
                const top = window.scrollY;
                const offset = sec.offsetTop - 450;
                const height = sec.offsetHeight;
                if (top >= offset && top < offset + height) {
                    h1.classList.replace(
                        "translate-x-[-100%]",
                        "translate-x-0"
                    );
                    p.forEach((i) => {
                        i.classList.replace(
                            "translate-x-[-100%]",
                            "translate-x-0"
                        );
                    });
                    img.forEach((i) => {
                        i.classList.replace(
                            "translate-x-[-100%]",
                            "translate-x-0"
                        );
                    });
                } else {
                    h1.classList.replace(
                        "translate-x-0",
                        "translate-x-[-100%]"
                    );
                    p.forEach((i) => {
                        i.classList.replace(
                            "translate-x-0",
                            "translate-x-[-100%]"
                        );
                    });
                    img.forEach((i) => {
                        i.classList.replace(
                            "translate-x-0",
                            "translate-x-[-100%]"
                        );
                    });
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className=" bg-[#1f242d]">
            <CustomHeader />
            <CustomFab />
            <BackButton
                title={t("common.back-home")}
                textColor={"white"}
                left={"30%"}
            />
            {bghList.map((bgh, index) => (
                <Box key={index}>
                    <section style={sectionStyle}>
                        <div className=" lg:flex justify-center items-center text-center pb-[7rem]">
                            <h1 className="translate-x-[-100%] duration-1000 text-[35px] text-white font-meri px-[2rem]">
                                {bgh.term}
                            </h1>
                            <p className="translate-x-[-100%] duration-1000 text-[20px] text-green05 font-[600]">
                                {bgh.time}
                            </p>
                        </div>
                        <div className=" lg:flex-row flex flex-col justify-center items-center">
                            {bgh.member.map((member, index) => (
                                <div
                                    key={index}
                                    className="flex items-center flex-col w-5/6"
                                >
                                    <img
                                        className="shadow-2xl shadow-blue-500/20 rounded-md translate-x-[-100%] duration-1000 "
                                        src={member.image}
                                        alt={member.name}
                                        loading="lazy"
                                    />
                                    <p className=" w-full text-center pt-[2rem] translate-x-[-100%] duration-1000 mx-[30px] text-moonMist text-[17px]">
                                        {member.name}
                                    </p>
                                    <p className="translate-x-[-100%] duration-1000 mx-[30px] text-moonMist text-[17px]">
                                        {member.title}
                                    </p>
                                    <p className="translate-x-[-100%] duration-1000 mx-[30px] text-moonMist text-[17px]">
                                        {member.year}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </Box>
            ))}
            <Footer />
        </div>
    );
}

export default BoardOfDirectorsPage;
