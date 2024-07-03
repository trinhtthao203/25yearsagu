import React from "react";
import Slider from "react-slick";

import XSKT from "../../../../public/images/NhaTaiTro/logo-xo-so-an-giang.png";
import VIETCOMBANK from "../../../../public/images/NhaTaiTro/logo-vietcombank-sl.png";
import EXIMBANK from "../../../../public/images/NhaTaiTro/logo-eximbank.png";
import BIDV from "../../../../public/images/NhaTaiTro/logo-BIDV.png";
import NAMA from "../../../../public/images/NhaTaiTro/logo-nam_a_bank.jpg";
import AGRIBANK from "../../../../public/images/NhaTaiTro/logo-agribank.png";
import SACOMBANK from "../../../../public/images/NhaTaiTro/logo-sacombank.png";
import ACB from "../../../../public/images/NhaTaiTro/logo-acb.png";
import MB from "../../../../public/images/NhaTaiTro/logo-MB.png";
import KHUYENHOC from "../../../../public/images/NhaTaiTro/hoi-khuyen-hoc.png";
import ATF from "../../../../public/images/NhaTaiTro/quy-tiep-suc.png";
import KOVA from "../../../../public/images/NhaTaiTro/logo-kova.png";
import NEVER from "../../../../public/images/NhaTaiTro/never-give-up.png";
import QUYHOTRO from "../../../../public/images/NhaTaiTro/logo-quy-ho-tro.png";
import VINPEARL from "../../../../public/images/NhaTaiTro/logo-vinpearl.png";
import VNPT from "../../../../public/images/NhaTaiTro/vnpt.png";
import MOBIPHONE from "../../../../public/images/NhaTaiTro/logo-mobifone.png";
import FPT from "../../../../public/images/NhaTaiTro/fpt.png";
import VIETTEL from "../../../../public/images/NhaTaiTro/logo-viettel.png";
import LOCTROI from "../../../../public/images/NhaTaiTro/logo-loc-troi.png";
import CPGROUP from "../../../../public/images/NhaTaiTro/c-p-group.png";
import NAMPHUONG from "../../../../public/images/NhaTaiTro/nam-phuong.png";
import APS from "../../../../public/images/NhaTaiTro/aps.png";
import SUNJIN from "../../../../public/images/NhaTaiTro/sunjin.png";
import VUALOSAY from "../../../../public/images/NhaTaiTro/vua-lo-say.png";
import NEU from "../../../../public/images/NhaTaiTro/neu.png";
import FGL from "../../../../public/images/NhaTaiTro/fgl.png";
import ISEE from "../../../../public/images/NhaTaiTro/isee.png";
import TRANQUANG from "../../../../public/images/NhaTaiTro/tran-quang.png";
import YYC from "../../../../public/images/NhaTaiTro/yyc.png";
import SULECO from "../../../../public/images/NhaTaiTro/suleco-edu.png";
import BAMBOO from "../../../../public/images/NhaTaiTro/bamboo.png";
import GREENFEED from "../../../../public/images/NhaTaiTro/greenfeed.png";
import HOASEN from "../../../../public/images/NhaTaiTro/hoasenhome.jpg";
import EPICA from "../../../../public/images/NhaTaiTro/epica.png";
import YAKULT from "../../../../public/images/NhaTaiTro/yakult.png";
import VINHOLIDAY from "../../../../public/images/NhaTaiTro/vin-holidays.png";
import NGOCPHUONGDONG from "../../../../public/images/NhaTaiTro/ngoc-phuong-dong.png";
import DATXANHMIENTAY from "../../../../public/images/NhaTaiTro/dxmt.png";
import HOMESEEK from "../../../../public/images/NhaTaiTro/homeseek.png";
import TOYOTA from "../../../../public/images/NhaTaiTro/toyota.png";
import MAIVANG from "../../../../public/images/NhaTaiTro/mai-vang.png";
import MANULIFE from "../../../../public/images/NhaTaiTro/manulife.png";
import PRUDENTIAL from "../../../../public/images/NhaTaiTro/prudential.png";
import BAOANGIANG from "../../../../public/images/NhaTaiTro/bao-an-giang.png";
import ATV from "../../../../public/images/NhaTaiTro/atv.png";

function NhaTaiTro() {
    const nhataitro = [
        {
            name: "Xổ số kiến thiết An Giang",
            url: "http://www.xsktangiang.com.vn/",
            image: XSKT,
        },
        {
            name: "Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)",
            url: "https://www.vietcombank.com.vn/",
            image: VIETCOMBANK,
        },
        {
            name: "Eximbank An Giang - Ngân hàng Eximbank",
            url: "https://eximbank.com.vn/",
            image: EXIMBANK,
        },
        {
            name: "Ngân hàng Đầu Tư và Phát Triển BIDV – Chi nhánh An Giang",
            url: "https://bidv.com.vn/vn/doanh-nghiep",
            image: BIDV,
        },
        {
            name: "NAM A BANK",
            url: "https://www.namabank.com.vn/",
            image: NAMA,
        },
        {
            name: "Ngân hàng Nông nghiệp và Phát triển nông thôn Việt Nam (Agribank)",
            url: "https://www.agribank.com.vn/",
            image: AGRIBANK,
        },
        {
            name: "Ngân hàng TMCP Sài Gòn Thương Tín - Sacombank",
            url: "https://www.sacombank.com.vn/ca-nhan.html",
            image: SACOMBANK,
        },
        {
            name: "ACB: Ngân hàng Thương Mại Cổ Phần Á Châu",
            url: "https://acb.com.vn/",
            image: ACB,
        },
        {
            name: "Ngân hàng Quân Đội MB",
            url: "https://acb.com.vn/",
            image: MB,
        },
        {
            name: "Hội khuyến học tỉnh An Giang",
            url: "http://hoikhuyenhoc.angiang.edu.vn/",
            image: KHUYENHOC,
        },
        {
            name: "Hội khuyến học tỉnh An Giang",
            url: "",
            image: ATF,
        },
        {
            name: "KOVA Prize",
            url: "https://www.facebook.com/kova.prize/",
            image: KOVA,
        },
        {
            name: "NEVER GIVE UP",
            url: "",
            image: NEVER,
        },
        {
            name: "Quỹ Hỗ trợ Cộng đồng Đinh Thiện Lý",
            url: "https://lstf.org.vn/vi/about-us/",
            image: QUYHOTRO,
        },
        {
            name: "VINPEARL",
            url: "https://vinpearl.com/en",
            image: VINPEARL,
        },
        {
            name: "VNPT: Tập đoàn Bưu chính Viễn thông Việt Nam",
            url: "https://vnpt.com.vn/",
            image: VNPT,
        },
        {
            name: "MOBIPHONE",
            url: "https://www.mobifone.vn/",
            image: MOBIPHONE,
        },
        {
            name: "Tập đoàn FPT",
            url: "https://fpt.com/vi",
            image: FPT,
        },
        {
            name: "Viettel",
            url: "https://viettel.vn/",
            image: VIETTEL,
        },
        {
            name: "Tập Đoàn Lộc Trời – Cùng nông dân phát triển bền vững",
            url: "https://loctroi.vn/",
            image: LOCTROI,
        },
        {
            name: "Công ty cổ phần chăn nuôi C.P. Việt Nam: Trang chủ",
            url: "https://www.cp.com.vn/",
            image: CPGROUP,
        },
        {
            name: "Nam Phương",
            url: "",
            image: NAMPHUONG,
        },
        {
            name: "APS",
            url: "",
            image: APS,
        },
        {
            name: "SUNJIN",
            url: "https://sunjin.vn/en/",
            image: SUNJIN,
        },
        {
            name: "Vua lò sấy-Dương Xuân Quả",
            url: "https://duongxuanqua.com/ve-chung-toi/",
            image: VUALOSAY,
        },
        {
            name: "Ngoại Ngữ Đại Bắc Âu ",
            url: "https://www.facebook.com/ngoaingudaibacau/?locale=vi_VN",
            image: NEU,
        },
        {
            name: "Fashion Garments 2 Co., Ltd (FGL)",
            url: "https://www.fashiongarments.com/vi/",
            image: FGL,
        },
        {
            name: "Ngoại Ngữ Quốc Tế iSEE",
            url: "https://isee.edu.vn/",
            image: ISEE,
        },
        {
            name: "Công Ty Du Học Quốc Tế Trần Quang",
            url: "https://duhoctranquang.edu.vn/",
            image: TRANQUANG,
        },
        {
            name: "TRUNG TÂM ANH NGỮ YYC ENGLISH",
            url: "https://yyc.edu.vn/",
            image: YYC,
        },
        {
            name: "Công ty TNHH Đào tạo chuyển giao Lao động & Chuyên gia",
            url: "https://haio.vn/vi",
            image: SULECO,
        },
        {
            name: "Hệ thống trường hội nhập quốc tế Bamboo ",
            url: "https://www.facebook.com/hethongtruonghoinhapquoctebamboo1/?locale=vi_VN",
            image: BAMBOO,
        },
        {
            name: "GREENFEED Vietnam Corporation",
            url: "https://www.greenfeed.com.vn/en/",
            image: GREENFEED,
        },
        {
            name: "Hoa Sen Home",
            url: "https://hoasenhome.vn/",
            image: HOASEN,
        },
        {
            name: "Anh Ngữ Quốc Tế EPICA ENGLISH",
            url: "https://epica.edu.vn/",
            image: EPICA,
        },
        {
            name: "Yakult Việt Nam",
            url: "https://www.yakult.vn/",
            image: YAKULT,
        },
        {
            name: "VinHolidays Fiesta Phú Quốc",
            url: "https://vinpearl.com/vi/hotels/vinholidays-fiesta-phu-quoc",
            image: VINHOLIDAY,
        },
        {
            name: "Ngọc Phương Đông",
            url: "https://ngocphuongdong.com/",
            image: NGOCPHUONGDONG,
        },
        {
            name: "Công Ty Cổ Phần Dịch Vụ Và Đầu Tư Đất Xanh Miền Tây",
            url: "https://datxanhmientay.net/",
            image: DATXANHMIENTAY,
        },
        {
            name: "Homeseek",
            url: "https://homeseek.vn/",
            image: HOMESEEK,
        },
        {
            name: "Toyota An Giang",
            url: "https://toyota-angiang.com/",
            image: TOYOTA,
        },
        {
            name: "Tập Đoàn Lộc Trời – Cùng nông dân phát triển bền vững",
            url: "https://loctroi.vn/",
            image: MAIVANG,
        },
        {
            name: "Bảo hiểm Manulife Việt Nam",
            url: "https://www.manulife.com.vn/",
            image: MANULIFE,
        },
        {
            name: "Công ty bảo hiểm nhân thọ Prudential | Prudential Việt Nam",
            url: "https://www.prudential.com.vn/vi/",
            image: PRUDENTIAL,
        },
        {
            name: "Báo An Giang Online",
            url: "https://baoangiang.com.vn/",
            image: BAOANGIANG,
        },
        {
            name: "Đài Phát thanh - Truyền hình An Giang",
            url: "http://atv.org.vn/",
            image: ATV,
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
