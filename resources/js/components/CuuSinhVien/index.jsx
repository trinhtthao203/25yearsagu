import React, { Component } from "react";
import Slider from "react-slick";
import IMG from "../../../../public/images/logo.png";

function PauseOnHover() {
    const comments = [
        {
            message:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, quibusdam.",
            fullname: "Trần Văn Nam",
            title: "Phó phòng Marketing - Ngân hàng Exim",
            position: "Công ty TNHH Dịch vụ Tin học ABC",
            image: IMG,
            course: "DH12NH",
        },
        {
            message:
                "Lorem ipsumritatis dignissimos amet tenetur tempora quasi repellendus sint nam?",
            fullname: "Nguyễn Văn Thành",
            title: "Chủ Doanh nghiệp ",
            position: "Công ty TNHH Dịch vụ Tin học ABC",
            image: IMG,
            course: "DH12NH",
        },
        {
            message:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, quibusdam.",
            fullname: "Hà Thanh Vân",
            title: "Phó phòng Marketing - Ngân hàng Exim",
            position: "Công ty TNHH Dịch vụ Tin học ABC",
            image: IMG,
            course: "DH12NH",
        },
        {
            message:
                "Lorem ipsum, dolor sit amet consectetur adipisng elit. Nemo dolor in veritatis dignissimos amet tenetur tempora quasi repellendus sint nam?",
            fullname: "Đỗ Minh Khuê",
            title: "Chủ Doanh nghiệp ",
            position: "Công ty TNHH Dịch vụ Tin học ABC",
            image: IMG,
            course: "DH12NH",
        },
        {
            message:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, quibusdam.",
            fullname: "Nguyễn Trọng Việt",
            title: "Phó phòng Marketing - Ngân hàng Exim",
            position: "Công ty TNHH Dịch vụ Tin học ABC",
            image: IMG,
            course: "DH12NH",
        },
        {
            message:
                "Lorem ipsum, dolor sit amet consectecing elit. Nemo dolor in veritatis dignissimos amet tenetur tempora quasi repellendus sint nam?",
            fullname: "Lê Hòa Bình",
            title: "Chủ Doanh nghiệp ",
            position: "Công ty TNHH Dịch vụ Tin học ABC",
            image: IMG,
            course: "DH12NH",
        },
        {
            message:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, quibusdam.",
            fullname: "Trần Đăng Khoa",
            title: "Phó phòng Marketing - Ngân hàng Exim",
            position: "Công ty TNHH Dịch vụ Tin học ABC",
            image: IMG,
            course: "DH12NH",
        },
        {
            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nes dignissimos amet tenetur tempora quasi repellendus sint nam?",
            fullname: "Ngô Thùy Hoa",
            title: "Chủ Doanh nghiệp ",
            position: "Công ty TNHH Dịch vụ Tin học ABC",
            image: IMG,
            course: "DH12NH",
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
                Cựu sinh viên
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
