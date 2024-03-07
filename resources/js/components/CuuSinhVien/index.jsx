import React from "react";
import Slider from "react-slick";
import IMG from "../../../../public/images/logo-vnu.png";
import { t } from "i18next";

function PauseOnHover() {
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
        ],
    };

    return (
        <div className=" pt-[5rem] bg-moonMist">
            <p className="text-3xl uppercase text-[#2c2c54] text-center py-5">
                {t("home.alumni")}
            </p>
            <div className="slider-container p-10 ">
                <Slider {...settings} className="">
                    {comments.map((comment, index) => (
                        <div key={index} className="px-10">
                            <p className="text-[0.8rem] sm:text-[0.7rem] md:text-[0.8] lg:text-[1rem] text-justify">
                                {comment.message}
                            </p>
                            <img src={IMG} alt={`Image ${index}`} />
                            <p className="text-[1.2rem] sm:text-[1rem] text-center">
                                {comment.fullname}
                            </p>
                            <p className="text-[0.9rem] sm:text-[0.9rem] text-center">
                                {comment.title}-{comment.position}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default PauseOnHover;
