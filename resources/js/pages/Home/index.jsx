import React, { useState, useEffect, useRef } from "react";
import LoadingScreen from "../Loading";
import Logo25 from "../../../../public/images/logo25.png";
import backgroundImage from "../../../../public/images/gate.jpg"; // Điều chỉnh đường dẫn đến hình ảnh của bạn

import NavBar from "../../components/NavBar";
import SuKien from "../../components/SuKien";
import Footer from "../../components/Footer";
import DoiTac from "../../components/DoiTac";
import ThuNgo from "../../components/ThuNgo";
import CustomFab from "../../components/CustomFab";
import NhaTaiTro from "../../components/NhaTaiTro";
import ThuVienAnh from "../../components/ThuVienAnh";
import BanGiamHieu from "../../components/BanGiamHieu";
import CuuSinhVien from "../../components/CuuSinhVien";
import GocNgheThuat from "../../components/GocNgheThuat";
import DongThoiGian from "../../components/DongThoiGian";
import ThongDiepHieuTruong from "../../components/ThongDiepHieuTruong";

import { Reveal } from "../../motion/Reveal";
import { useTranslation } from "react-i18next";

function Home() {
    const { t, i18n } = useTranslation();

    const resultRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [isEnglish, setIsEnglish] = useState(() => {
        const savedLanguage = sessionStorage.getItem("language");
        return savedLanguage ? savedLanguage === "en" : false;
    });

    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;

    useEffect(() => {
        if (isEnglish) {
            i18n.changeLanguage("en");
        } else {
            i18n.changeLanguage("vi");
        }

        const timeout = setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("visited", JSON.stringify(false));
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {loading &&
            JSON.parse(sessionStorage.getItem("visited")) !== false ? (
                <LoadingScreen />
            ) : (
                <div id="header" className="w-full h-full">
                    <NavBar resultRef={resultRef} />
                    <CustomFab />
                    <div
                        className=" relative top-[-7.6rem] md:top-[-8.7rem] h-screen w-screen animate-fade animate-duration-[1200ms]"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(138, 90, 226, 0.2), rgba(255, 255, 150, 0.5)), url(${backgroundImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundAttachment: "fixed",
                            // marginTop: "-130px",
                        }}
                    >
                        <div className=" h-screen w-screen flex justify-center items-center">
                            <div className="flex flex-col items-center justify-center ">
                                {/* <div className="w-[10rem] sm:w-[11rem] md:w-[19rem] lg:w-[22rem] xl:w-[19rem] animate-flip-down"> */}
                                <Reveal isAnimation={isAnimation}>
                                    <p className=" text-white uppercase text-[10rem] font-semibold font-montserrat">
                                        25
                                    </p>
                                    {/* <img src={`${Logo25}`} alt="Logo" /> */}
                                </Reveal>
                                {/* </div> */}
                                <div className="transform text-center ">
                                    <Reveal isAnimation={isAnimation}>
                                        <p className=" text-white uppercase text-[1.1rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.4rem] xl:text-[2.0rem] font-semibold font-montserrat p-3">
                                            {t("home.sologan")}
                                        </p>
                                    </Reveal>
                                    <Reveal isAnimation={isAnimation}>
                                        <p className="text-white text-[1rem] sm:text-[1.1rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[2rem] font-oswald">
                                            {t("home.year-anniversary")}
                                        </p>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ThongDiepHieuTruong />
                    <ThuNgo />
                    <NhaTaiTro />
                    <DongThoiGian />
                    <BanGiamHieu />
                    {/* <HoiNhapPhatTrien /> */}
                    <SuKien />
                    {/* <GocNgheThuat /> // bị đẩy cột trắng */}
                    {/* <DoiTac /> */}
                    <CuuSinhVien />
                    <ThuVienAnh />
                    <Footer />
                </div>
            )}
        </>
    );
}

export default Home;
