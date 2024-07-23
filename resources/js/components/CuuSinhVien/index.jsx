import React from "react";
import Slider from "react-slick";
import _1 from "../../../../public/images/CuuSinhVien/ptnnhu.png";
import _2 from "../../../../public/images/CuuSinhVien/hvcanh.png";
import _3 from "../../../../public/images/CuuSinhVien/lhphong.png";
import _4 from "../../../../public/images/CuuSinhVien/nthong.png";
import _5 from "../../../../public/images/CuuSinhVien/dtngiau.png";
import _6 from "../../../../public/images/CuuSinhVien/dtmtruc.png";
import _7 from "../../../../public/images/CuuSinhVien/lvnho.png";
import _8 from "../../../../public/images/CuuSinhVien/nthtrang.png";
import _9 from "../../../../public/images/CuuSinhVien/dtkngan.png";
import _10 from "../../../../public/images/CuuSinhVien/nthnhi.png";
import _11 from "../../../../public/images/CuuSinhVien/ptathu.png";
import _12 from "../../../../public/images/CuuSinhVien/ltnhiem.png";
import _13 from "../../../../public/images/CuuSinhVien/htnga.png";
import _14 from "../../../../public/images/CuuSinhVien/ntduc.png";
import _15 from "../../../../public/images/CuuSinhVien/ntctien.png";
import _16 from "../../../../public/images/CuuSinhVien/tttvi.png";
import _17 from "../../../../public/images/CuuSinhVien/ltctu.png";
import _18 from "../../../../public/images/CuuSinhVien/lhnhu.png";
import _19 from "../../../../public/images/CuuSinhVien/htmloan.png";
import { t } from "i18next";
import CustomSlide from "../CustomSlide";
import { Reveal } from "../../motion/Reveal";

function PauseOnHover() {
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;

    const comments = [
        {
            message: t("alumni.sv1_message"),
            fullname: t("alumni.sv1_fullname"),
            title: t("alumni.sv1_title"),
            position: t("alumni.sv1_position"),
            image: _1,
            course: t("alumni.sv1_course"),
        },
        {
            message: t("alumni.sv2_message"),
            fullname: t("alumni.sv2_fullname"),
            title: t("alumni.sv2_title"),
            position: t("alumni.sv2_position"),
            image: _2,
            course: t("alumni.sv2_course"),
        },
        {
            message: t("alumni.sv3_message"),
            fullname: t("alumni.sv3_fullname"),
            title: t("alumni.sv3_title"),
            position: t("alumni.sv3_position"),
            image: _3,
            course: t("alumni.sv3_course"),
        },
        {
            message: t("alumni.sv4_message"),
            fullname: t("alumni.sv4_fullname"),
            title: t("alumni.sv4_title"),
            position: t("alumni.sv4_position"),
            image: _4,
            course: t("alumni.sv4_course"),
        },
        {
            message: t("alumni.sv5_message"),
            fullname: t("alumni.sv5_fullname"),
            title: t("alumni.sv5_title"),
            position: t("alumni.sv5_position"),
            image: _5,
            course: t("alumni.sv5_course"),
        },
        {
            message: t("alumni.sv6_message"),
            fullname: t("alumni.sv6_fullname"),
            title: t("alumni.sv6_title"),
            position: t("alumni.sv6_position"),
            image: _6,
            course: t("alumni.sv6_course"),
        },
        {
            message: t("alumni.sv7_message"),
            fullname: t("alumni.sv7_fullname"),
            title: t("alumni.sv7_title"),
            position: t("alumni.sv7_position"),
            image: _7,
            course: t("alumni.sv7_course"),
        },
        {
            message: t("alumni.sv8_message"),
            fullname: t("alumni.sv8_fullname"),
            title: t("alumni.sv8_title"),
            position: t("alumni.sv8_position"),
            image: _8,
            course: t("alumni.sv8_course"),
        },
        {
            message: t("alumni.sv9_message"),
            fullname: t("alumni.sv9_fullname"),
            title: t("alumni.sv9_title"),
            position: t("alumni.sv9_position"),
            image: _9,
            course: t("alumni.sv9_course"),
        },
        {
            message: t("alumni.sv10_message"),
            fullname: t("alumni.sv10_fullname"),
            title: t("alumni.sv10_title"),
            position: t("alumni.sv10_position"),
            image: _10,
            course: t("alumni.sv10_course"),
        },
        {
            message: t("alumni.sv11_message"),
            fullname: t("alumni.sv11_fullname"),
            title: t("alumni.sv11_title"),
            position: t("alumni.sv11_position"),
            image: _11,
            course: t("alumni.sv11_course"),
        },
        {
            message: t("alumni.sv12_message"),
            fullname: t("alumni.sv12_fullname"),
            title: t("alumni.sv12_title"),
            position: t("alumni.sv12_position"),
            image: _12,
            course: t("alumni.sv12_course"),
        },
        {
            message: t("alumni.sv13_message"),
            fullname: t("alumni.sv13_fullname"),
            title: t("alumni.sv13_title"),
            position: t("alumni.sv13_position"),
            image: _13,
            course: t("alumni.sv13_course"),
        },
        {
            message: t("alumni.sv14_message"),
            fullname: t("alumni.sv14_fullname"),
            title: t("alumni.sv14_title"),
            position: t("alumni.sv14_position"),
            image: _14,
            course: t("alumni.sv14_course"),
        },
        {
            message: t("alumni.sv15_message"),
            fullname: t("alumni.sv15_fullname"),
            title: t("alumni.sv15_title"),
            position: t("alumni.sv15_position"),
            image: _15,
            course: t("alumni.sv15_course"),
        },
        {
            message: t("alumni.sv16_message"),
            fullname: t("alumni.sv16_fullname"),
            title: t("alumni.sv16_title"),
            position: t("alumni.sv16_position"),
            image: _16,
            course: t("alumni.sv16_course"),
        },
        {
            message: t("alumni.sv17_message"),
            fullname: t("alumni.sv17_fullname"),
            title: t("alumni.sv17_title"),
            position: t("alumni.sv17_position"),
            image: _17,
            course: t("alumni.sv17_course"),
        },
        {
            message: t("alumni.sv18_message"),
            fullname: t("alumni.sv18_fullname"),
            title: t("alumni.sv18_title"),
            position: t("alumni.sv18_position"),
            image: _18,
            course: t("alumni.sv18_course"),
        },
        {
            message: t("alumni.sv19_message"),
            fullname: t("alumni.sv19_fullname"),
            title: t("alumni.sv19_title"),
            position: t("alumni.sv19_position"),
            image: _19,
            course: t("alumni.sv19_course"),
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768, // breakpoint for screen size sm
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900, // breakpoint for screen size sm
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <div id="alumni" className=" pt-[5rem] ">
            <Reveal isAnimation={isAnimation}>
                <p className=" py-10 w-full flex justify-center items-center mt-[3rem] text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] uppercase text-green01 font-oswald">
                    {t("home.alumni")}
                </p>
            </Reveal>
            <div className="slider-container p-10 ">
                <Slider {...settings}>
                    {comments.map((comment, index) => (
                        <CustomSlide
                            index={index}
                            message={comment.message}
                            title={comment.title}
                            image={comment.image}
                            position={comment.position}
                            course={comment.course}
                            fullname={comment.fullname}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default PauseOnHover;
