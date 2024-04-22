import React from "react";
import Slider from "react-slick";
import XSKT from "../../../../public/images/NhaTaiTro/logo-xo-so-an-giang.png";
import BIDV from "../../../../public/images/NhaTaiTro/logo-BIDV.png";
import VIETCOMBANK from "../../../../public/images/NhaTaiTro/logo-vietcombank-sl.png";
import VINTECH from "../../../../public/images/NhaTaiTro/logo-vintech-city.png";
import AGRIBANK from "../../../../public/images/NhaTaiTro/logo-agribank.png";
import COOPBANK from "../../../../public/images/NhaTaiTro/logo-coopbank.png";

function NhaTaiTro() {
    const nhataitro = [
        {
            name: "Xổ số kiến thiết An Giang",
            url: "http://www.xsktangiang.com.vn/",
            image: XSKT,
        },
        {
            name: "Ngân hàng Đầu Tư và Phát Triển BIDV – Chi nhánh An Giang",
            url: "https://bidv.com.vn/vn/doanh-nghiep",
            image: BIDV,
        },
        {
            name: "Ngân hàng Hợp Tác Xã Việt Nam – Chi nhánh An Giang",
            url: "https://www.co-opbank.vn/",
            image: COOPBANK,
        },
        {
            name: "Vintech City",
            url: "https://vintechcity.com/",
            image: VINTECH,
        },
        {
            name: "Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)",
            url: "https://www.vietcombank.com.vn/",
            image: VIETCOMBANK,
        },
        {
            name: "Ngân hàng Nông nghiệp và Phát triển nông thôn Việt Nam (Agribank)",
            url: "https://www.agribank.com.vn/",
            image: AGRIBANK,
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear",
    };

    return (
        <div className=" bg-green04 ">
            <Slider {...settings} className=" w-screen overflow-hidden">
                {nhataitro.map((ntt) => (
                    <div key={ntt} className="py-[1.5rem]">
                        <a
                            href={ntt.url}
                            className="relative flex-col card-style-boxshadows group overflow-hidden shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] flex justify-center items-center bg-white mx-1 md:mx-5 lg:mx-10 my-5 rounded-[3px] sm:rounded-sm md:rounded-md lg:rounded-lg"
                            target="_blank"
                        >
                            <img
                                src={ntt.image}
                                alt={ntt.name}
                                className=" drop-shadow-2xl w-auto h-[3rem] sm:h-[4rem] md:h-[5rem] lg:h-[6rem] xl:h-[7rem]"
                            />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default NhaTaiTro;
