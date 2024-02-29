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
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear",
    };

    return (
        <div className="w-full h-[2.7rem] sm:h-[5rem] md:h-[6.4rem] lg:h-[7.5rem] xl:h-[8.5rem] px-10 pt-[0.7rem] bg-moonMist">
            <Slider {...settings}>
                {nhataitro.map((ntt) => (
                    <div>
                        <a
                            href={ntt.url}
                            className="flex justify-center items-center "
                            target="_blank"
                        >
                            <img
                                src={ntt.image}
                                alt={ntt.name}
                                className="h-[1.5rem] sm:h-[4rem] md:h-[5rem] lg:h-[6rem] xl:h-[7rem]"
                            />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default NhaTaiTro;
