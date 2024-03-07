import React, { useState, useEffect, useRef } from "react";
import backgroundImage from "../../../../public/images/gate.jpg"; // Điều chỉnh đường dẫn đến hình ảnh của bạn
import Logo25 from "../../../../public/images/logo25.png";
import LoadingScreen from "../Loading";

import ThongDiepHieuTruong from "../../components/ThongDiepHieuTruong";
import Footer from "../../components/Footer";
import DongThoiGian from "../../components/DongThoiGian";
import BanGiamHieu from "../../components/BanGiamHieu";
import ThuNgo from "../../components/ThuNgo";
import TinTuc from "../../components/TinTuc";
import SuKien from "../../components/SuKien";
import HinhAnh from "../../components/HinhAnhTruong";
import DoiTac from "../../components/DoiTac";
import CuuSinhVien from "../../components/CuuSinhVien";

import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/LanguageSelector";
import NhaTaiTro from "../../components/NhaTaiTro";
import { Reveal } from "../../motion/Reveal";
import NavBar from "../../components/Navbar";

function Home() {
    const { t, i18n } = useTranslation();

    const resultRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [isEnglish, setIsEnglish] = useState(() => {
        const savedLanguage = sessionStorage.getItem("language");
        return savedLanguage ? savedLanguage === "en" : false;
    });

    useEffect(() => {
        if (isEnglish) {
            i18n.changeLanguage("en");
        } else {
            i18n.changeLanguage("vi");
        }

        const timeout = setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("visited", JSON.stringify(false));
        }, 3000); // Thời gian hiển thị loading (3 giây)

        return () => clearTimeout(timeout); // Xóa timeout khi component unmount
    }, []);

    return (
        <>
            {loading &&
            JSON.parse(sessionStorage.getItem("visited")) !== false ? (
                <LoadingScreen />
            ) : (
                <div className="w-full h-full">
                    <div
                        className=" h-screen w-screen relative animate-fade animate-duration-[1200ms]"
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundAttachment: "fixed",
                        }}
                    >
                        <NavBar resultRef={resultRef} />
                        <div className=" h-screen w-screen flex justify-center items-center">
                            <div className="flex flex-col items-center justify-center mt-[-15rem]">
                                <div className="w-[10rem] sm:w-[11rem] md:w-[19rem] lg:w-[22rem] xl:w-[19rem] animate-flip-down">
                                    <Reveal>
                                        <img src={`${Logo25}`} alt="Logo" />
                                    </Reveal>
                                </div>
                                <div className="transform text-center">
                                    <Reveal>
                                        <p className=" uppercase px-[1.2rem] text-[1.7rem] sm:text-[1.7rem] md:text-[2.6rem] lg:text-[3.1rem] xl:text-[3.7rem] font-bold text-gray-900 tracking-wider shadow-retr">
                                            {t("home.25year-established")}
                                        </p>
                                    </Reveal>
                                    <Reveal>
                                        <p className=" uppercase text-[1.1rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.4rem] xl:text-[2.5rem] p-3">
                                            {t("home.agu")}
                                        </p>
                                    </Reveal>
                                    <Reveal>
                                        <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[2rem]">
                                            {t("home.year-anniversary")}
                                        </p>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NhaTaiTro />
                    <ThongDiepHieuTruong />
                    <DongThoiGian />
                    <BanGiamHieu />
                    {/* <ThuNgo /> */}
                    <SuKien />
                    {/* <TinTuc /> */}
                    {/* <DoiTac /> */}
                    <CuuSinhVien />
                    <HinhAnh />
                    <Footer ref={resultRef} />
                </div>
            )}
        </>
    );
}

export default Home;
