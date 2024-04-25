import React from "react";
import Slider from "react-slick";
import IMG from "../../../../public/images/NhaTaiTro/logo-BIDV.png";
import { t } from "i18next";
import CustomSlide from "../CustomSlide";
import { Reveal } from "../../motion/Reveal";

function PauseOnHover() {
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;

    const partners = [
        {
            image: IMG,
            fullname: t("partners.partner01"),
            message: t("partners.partner01-message"),
        },
        {
            image: IMG,
            fullname: t("partners.partner02"),
            message: t("partners.partner02-message"),
        },
        {
            image: IMG,
            fullname: t("partners.partner03"),
            message: t("partners.partner03-message"),
        },
        {
            image: IMG,
            fullname: t("partners.partner04"),
            message: t("partners.partner04-message"),
        },
        {
            image: IMG,
            fullname: t("partners.partner05"),
            message: t("partners.partner05-message"),
        },
        {
            image: IMG,
            fullname: t("partners.partner06"),
            message: t("partners.partner06-message"),
        },
        {
            image: IMG,
            fullname: t("partners.partner07"),
            message: t("partners.partner07-message"),
        },
        {
            image: IMG,
            fullname: t("partners.partner08"),
            message: t("partners.partner08-message"),
        },
        {
            image: IMG,
            fullname: t("partners.partner09"),
            message: t("partners.partner09-message"),
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
                    {partners.map((partner, index) => (
                        <CustomSlide
                            index={index}
                            message={partner.message}
                            fullname={partner.name}
                            image={partner.image}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default PauseOnHover;
