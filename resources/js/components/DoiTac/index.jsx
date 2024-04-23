import React from "react";
import Slider from "react-slick";
import IMG from "../../../../public/images/logo-vnu.png";
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
            image: IMG,
            course: t("alumni.sv1_course"),
        },
        {
            message: t("alumni.sv2_message"),
            fullname: t("alumni.sv2_fullname"),
            title: t("alumni.sv2_tile"),
            position: t("alumni.sv2_position"),
            image: IMG,
            course: t("alumni.sv2_course"),
        },
        {
            message: t("alumni.sv3_message"),
            fullname: t("alumni.sv3_fullname"),
            title: t("alumni.sv3_title"),
            position: t("alumni.sv3_position"),
            image: IMG,
            course: t("alumni.sv3_course"),
        },
        {
            message: t("alumni.sv4_message"),
            fullname: t("alumni.sv4_fullname"),
            title: t("alumni.sv4_title"),
            position: t("alumni.sv4_position"),
            image: IMG,
            course: t("alumni.sv4_course"),
        },
        {
            message: t("alumni.sv5_message"),
            fullname: t("alumni.sv5_fullname"),
            title: t("alumni.sv5_title"),
            position: t("alumni.sv5_position"),
            image: IMG,
            course: t("alumni.sv5_course"),
        },
        {
            message: t("alumni.sv6_message"),
            fullname: t("alumni.sv6_fullname"),
            title: t("alumni.sv6_title"),
            position: t("alumni.sv6_position"),
            image: IMG,
            course: t("alumni.sv6_course"),
        },
        {
            message: t("alumni.sv7_message"),
            fullname: t("alumni.sv7_fullname"),
            title: t("alumni.sv7_title"),
            position: t("alumni.sv7_position"),
            image: IMG,
            course: t("alumni.sv7_course"),
        },
        {
            message: t("alumni.sv8_message"),
            fullname: t("alumni.sv8_fullname"),
            title: t("alumni.sv8_title"),
            position: t("alumni.sv8_position"),
            image: IMG,
            course: t("alumni.sv8_course"),
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
        <div id="partner" className=" pt-[5rem] ">
            <Reveal isAnimation={isAnimation}>
                <p className=" py-10 w-full flex justify-center items-center mt-[3rem] text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] uppercase text-green01 font-oswald">
                    {t("home.partner")}
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
