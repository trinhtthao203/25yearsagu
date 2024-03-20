import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images } from "./images";

import Footer from "../../components/Footer";
import { Reveal } from "../../motion/Reveal";
import BackButton from "../../components/BackButton";
import CustomHeader from "../../components/CustomHeader";

import { useTranslation } from "react-i18next";

// import LAND01 from "../../../../public/images/Gallery/Facilities/Landscape/1.-Toàn-cảnh-Trường-Đại-học-An-Giang.jpg";
// import LAND02 from "../../../../public/images/Gallery/Facilities/Landscape/2.-Toàn-cảnh-Trường-Đại-học-An-Giang.jpg";
// import LAND03 from "../../../../public/images/Gallery/Facilities/Landscape/3.-Toàn-cảnh-Trường-Đại-học-An-Giang.jpg";
// import LAND04 from "../../../../public/images/Gallery/Facilities/Landscape/4.-Toàn-cảnh-Trường-Đại-học-An-Giang.jpg";
// import LAND05 from "../../../../public/images/Gallery/Facilities/Landscape/5.-Toàn-cảnh-Trường-Đại-học-An-Giang.jpg";
// import LAND06 from "../../../../public/images/Gallery/Facilities/Landscape/6.-Toàn-cảnh-Trường-Đại-học-An-Giang.jpg";
// import LAND07 from "../../../../public/images/Gallery/Facilities/Landscape/7.-Toàn-cảnh-Trường-Đại-học-An-Giang.jpg";
// import LAND08 from "../../../../public/images/Gallery/Facilities/Landscape/8.-Trường-Đại-học-An-Giang-qua-góc-ảnh-panorama.jpg";
// import LAND09 from "../../../../public/images/Gallery/Facilities/Landscape/9.-Khuôn-viên-khu-Hiệu-bộ-AGU.jpg";
// import LAND10 from "../../../../public/images/Gallery/Facilities/Landscape/10.-Khuôn-viên-khu-Hiệu-bộ-AGU.png";
// import LAND11 from "../../../../public/images/Gallery/Facilities/Landscape/11.-Tòa-nhà-Thư-viện-và-các-Trung-tâm.jpg";
// import LAND12 from "../../../../public/images/Gallery/Facilities/Landscape/12.-Khu-Thí-nghiệm.jpg";
// import LAND13 from "../../../../public/images/Gallery/Facilities/Landscape/13.-Khối-lớp-học-tại-tòa-nhà-A.jpg";
// import LAND14 from "../../../../public/images/Gallery/Facilities/Landscape/14.-Khối-lớp-học-tại-tòa-nhà-B.jpg";
// import LAND15 from "../../../../public/images/Gallery/Facilities/Landscape/15.-Khối-lớp-học-tại-tòa-nhà-C.jpg";
// import LAND16 from "../../../../public/images/Gallery/Facilities/Landscape/16.-Khối-văn-phòng-khoa.jpg";
// import LAND17 from "../../../../public/images/Gallery/Facilities/Landscape/17.-Khối-văn-phòng-khoa.jpg";
// import LAND18 from "../../../../public/images/Gallery/Facilities/Landscape/18.-Không-gian-xanh-tại-AGU.jpg";
// import LAND19 from "../../../../public/images/Gallery/Facilities/Landscape/19.-Không-gian-xanh-tại-AGU.jpg";
// import LAND20 from "../../../../public/images/Gallery/Facilities/Landscape/20.-Không-gian-xanh-tại-AGU.jpg";
// import LAND21 from "../../../../public/images/Gallery/Facilities/Landscape/21.-Không-gian-xanh-tại-AGU.jpg";
// import LAND22 from "../../../../public/images/Gallery/Facilities/Landscape/22.-Không-gian-xanh-tại-AGU.jpg";
// import LAND23 from "../../../../public/images/Gallery/Facilities/Landscape/23.-Không-gian-xanh-tại-AGU.jpg";
// import LAND24 from "../../../../public/images/Gallery/Facilities/Landscape/24.-Không-gian-xanh-tại-AGU.jpg";
// import LAND25 from "../../../../public/images/Gallery/Facilities/Landscape/25.-Không-gian-xanh-tại-AGU.jpg";

// import CLASS01 from "../../../../public/images/Gallery/Facilities/Class/1.-Không-gian-lớp-học-tại-AGU.jpg";
// import CLASS02 from "../../../../public/images/Gallery/Facilities/Class/2.-Toàn-cảnh-Phòng-Dự-án-TRIG.jpg";
// import CLASS03 from "../../../../public/images/Gallery/Facilities/Class/3.-Không-gian-lớp-học-tại-AGU.jpg";
// import CLASS04 from "../../../../public/images/Gallery/Facilities/Class/4.Toàn-cảnh-Hội-trường-600.jpg";
// import CLASS05 from "../../../../public/images/Gallery/Facilities/Class/5.Toàn-cảnh-Hội-trường-300.jpg";
// import CLASS06 from "../../../../public/images/Gallery/Facilities/Class/6.Toàn-cảnh-Hội-trường-180.jpg";
// import CLASS07 from "../../../../public/images/Gallery/Facilities/Class/7.-Toàn-cảnh-Hội-trường-180.jpg";
// import CLASS08 from "../../../../public/images/Gallery/Facilities/Class/8.-Toàn-cảnh-Hội-trường-150.jpg";
// import CLASS09 from "../../../../public/images/Gallery/Facilities/Class/9.-Thư-viện.jpg";
// import CLASS10 from "../../../../public/images/Gallery/Facilities/Class/10.-Không-gian-học-tập-tại-Thư-viện.jpg";
// import CLASS11 from "../../../../public/images/Gallery/Facilities/Class/11.-Không-gian-tại-Thư-viện.jpg";
// import CLASS12 from "../../../../public/images/Gallery/Facilities/Class/12.-Không-gian-tại-Thư-viện.jpg";
// import CLASS13 from "../../../../public/images/Gallery/Facilities/Class/13.-Không-gian-tại-Thư-viện.jpg";
// import CLASS14 from "../../../../public/images/Gallery/Facilities/Class/14.-Quầy-báo-và-tạp-chí-tại-Thư-viện.jpg";
// import CLASS15 from "../../../../public/images/Gallery/Facilities/Class/15.-Không-gian-tại-Thư-viện.jpg";
// import CLASS16 from "../../../../public/images/Gallery/Facilities/Class/16.-Không-gian-tại-Thư-viện.jpg";
// import CLASS17 from "../../../../public/images/Gallery/Facilities/Class/17.-Không-gian-tại-Thư-viện.jpg";

// import LAB01 from "../../../../public/images/Gallery/Facilities/Lab/1.-Giảng-viên-hướng-dẫn-sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB02 from "../../../../public/images/Gallery/Facilities/Lab/2.Giảng-viên-hướng-dẫn-sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB03 from "../../../../public/images/Gallery/Facilities/Lab/3.-Giảng-viên-hướng-dẫn-sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB04 from "../../../../public/images/Gallery/Facilities/Lab/4.-Giảng-viên-hướng-dẫn-sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB05 from "../../../../public/images/Gallery/Facilities/Lab/5.-Sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB06 from "../../../../public/images/Gallery/Facilities/Lab/6.-Sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB07 from "../../../../public/images/Gallery/Facilities/Lab/7.-Sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB08 from "../../../../public/images/Gallery/Facilities/Lab/8.-Sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB09 from "../../../../public/images/Gallery/Facilities/Lab/9.-Sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB10 from "../../../../public/images/Gallery/Facilities/Lab/10.-Sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB11 from "../../../../public/images/Gallery/Facilities/Lab/11.-Sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB12 from "../../../../public/images/Gallery/Facilities/Lab/12.-Sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB13 from "../../../../public/images/Gallery/Facilities/Lab/13.-Sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB14 from "../../../../public/images/Gallery/Facilities/Lab/14.-Sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB15 from "../../../../public/images/Gallery/Facilities/Lab/15.-Sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB16 from "../../../../public/images/Gallery/Facilities/Lab/16.-Sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB17 from "../../../../public/images/Gallery/Facilities/Lab/17.-Sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB18 from "../../../../public/images/Gallery/Facilities/Lab/18.-Sinh-viên-thực-hành-thí-nghiệm.jpg";
// import LAB19 from "../../../../public/images/Gallery/Facilities/Lab/19.-Hệ-thống-Data-center-của-Trường-ĐHAG.jpg";

const imgs = images.map((image) => ({
    ...image,
    customOverlay: (
        <div className=" bg-black max-h-[240px] overflow-hidden absolute bottom-0 w-full text-white p-1 text-[90%]">
            <div>{image.caption}</div>
            {image.tags &&
                image.tags.map((t, index) => (
                    <div
                        key={index}
                        className=" break-words inline-block bg-white h-auto text-[75%] font-semibold leading-none p-10 rounded-[10px] text-black align-baseline m-[2px]"
                    >
                        {t.title}
                    </div>
                ))}
        </div>
    ),
}));

const slides = images.map(({ original, width, height }) => ({
    src: original,
    width: "100%",
    height: "100%",
}));

function GalleryFacilitiesPage() {
    const { t } = useTranslation();
    const [index, setIndex] = useState(-1);

    const handleClick = (index, item) => setIndex(index);

    // const imageData = [
    //     {
    //         title: t("gallery.facilities-landscape"),
    //         image: [
    //             {
    //                 url: LAND01,
    //                 name: "Toàn cảnh Trường Đại học An Giang",
    //             },
    //             {
    //                 url: LAND02,
    //                 name: "Toàn cảnh Trường Đại học An Giang",
    //             },
    //             {
    //                 url: LAND03,
    //                 name: "Toàn cảnh Trường Đại học An Giang",
    //             },
    //             {
    //                 url: LAND04,
    //                 name: "Toàn cảnh Trường Đại học An Giang",
    //             },
    //             {
    //                 url: LAND05,
    //                 name: "Toàn cảnh Trường Đại học An Giang",
    //             },
    //             {
    //                 url: LAND06,
    //                 name: "Toàn cảnh Trường Đại học An Giang",
    //             },
    //             {
    //                 url: LAND07,
    //                 name: "Toàn cảnh Trường Đại học An Giang",
    //             },
    //             {
    //                 url: LAND08,
    //                 name: "Trường Đại học An Giang qua góc ảnh panorama",
    //             },
    //             {
    //                 url: LAND09,
    //                 name: "Khuôn viên khu Hiệu bộ AGU",
    //             },
    //             {
    //                 url: LAND10,
    //                 name: "Khuôn viên khu Hiệu bộ AGU",
    //             },
    //             {
    //                 url: LAND11,
    //                 name: "Tòa nhà Thư viện và các Trung tâm",
    //             },
    //             {
    //                 url: LAND12,
    //                 name: "Khu Thí nghiệm",
    //             },
    //             {
    //                 url: LAND13,
    //                 name: "Khối lớp học tại tòa nhà A",
    //             },
    //             {
    //                 url: LAND14,
    //                 name: "Khối lớp học tại tòa nhà B",
    //             },
    //             {
    //                 url: LAND15,
    //                 name: "Khối lớp học tại tòa nhà C",
    //             },
    //             {
    //                 url: LAND16,
    //                 name: "Khối văn phòng khoa",
    //             },
    //             {
    //                 url: LAND17,
    //                 name: "Khối văn phòng khoa",
    //             },
    //             {
    //                 url: LAND18,
    //                 name: "Không gian xanh tại AGU",
    //             },
    //             {
    //                 url: LAND19,
    //                 name: "Không gian xanh tại AGU",
    //             },
    //             {
    //                 url: LAND20,
    //                 name: "Không gian xanh tại AGU",
    //             },
    //             {
    //                 url: LAND21,
    //                 name: "Không gian xanh tại AGU",
    //             },
    //             {
    //                 url: LAND22,
    //                 name: "Không gian xanh tại AGU",
    //             },
    //             {
    //                 url: LAND23,
    //                 name: "Không gian xanh tại AGU",
    //             },
    //             {
    //                 url: LAND24,
    //                 name: "Không gian xanh tại AGU",
    //             },
    //             {
    //                 url: LAND25,
    //                 name: "Không gian xanh tại AGU",
    //             },
    //         ],
    //     },
    //     {
    //         title: t("gallery.facilities-class"),
    //         image: [
    //             {
    //                 url: CLASS01,
    //                 name: "Không gian lớp học tại AGU",
    //             },
    //             {
    //                 url: CLASS02,
    //                 name: "Toàn cảnh Phòng Dự án TRIG",
    //             },
    //             {
    //                 url: CLASS03,
    //                 name: "Không gian lớp học tại AGU",
    //             },
    //             {
    //                 url: CLASS04,
    //                 name: "Toàn cảnh Hội trường 600",
    //             },
    //             {
    //                 url: CLASS05,
    //                 name: "Toàn cảnh Hội trường 300",
    //             },
    //             {
    //                 url: CLASS06,
    //                 name: "Toàn cảnh Hội trường 190",
    //             },
    //             {
    //                 url: CLASS07,
    //                 name: "Toàn cảnh Hội trường 180",
    //             },
    //             {
    //                 url: CLASS08,
    //                 name: "Toàn cảnh Hội trường 150",
    //             },
    //             {
    //                 url: CLASS09,
    //                 name: "Thư viện",
    //             },
    //             {
    //                 url: CLASS10,
    //                 name: "Không gian học tập tại Thư viện",
    //             },
    //             {
    //                 url: CLASS11,
    //                 name: "Không gian tại Thư viện",
    //             },
    //             {
    //                 url: CLASS12,
    //                 name: "Không gian tại Thư viện",
    //             },
    //             {
    //                 url: CLASS13,
    //                 name: "Không gian tại Thư viện",
    //             },
    //             {
    //                 url: CLASS14,
    //                 name: "Quầy báo và tạp chí tại Thư viện",
    //             },
    //             {
    //                 url: CLASS15,
    //                 name: "Không gian tại Thư viện",
    //             },
    //             {
    //                 url: CLASS16,
    //                 name: "Không gian tại Thư viện",
    //             },
    //             {
    //                 url: CLASS17,
    //                 name: "Không gian tại Thư viện",
    //             },
    //         ],
    //     },
    //     {
    //         title: t("gallery.facilities-lab"),
    //         image: [
    //             {
    //                 url: LAB01,
    //                 name: "Giảng viên hướng dẫn sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB02,
    //                 name: "Giảng viên hướng dẫn sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB03,
    //                 name: "Giảng viên hướng dẫn sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB04,
    //                 name: "Giảng viên hướng dẫn sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB05,
    //                 name: "Sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB06,
    //                 name: "Sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB07,
    //                 name: "Sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB08,
    //                 name: "Sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB09,
    //                 name: "Sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB10,
    //                 name: "Sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB11,
    //                 name: "Sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB12,
    //                 name: "Sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB13,
    //                 name: "Sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB14,
    //                 name: "Sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB15,
    //                 name: "Sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB16,
    //                 name: "Sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB17,
    //                 name: "Sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB18,
    //                 name: "Sinh viên thực hành thí nghiệm",
    //             },
    //             {
    //                 url: LAB19,
    //                 name: "Hệ thống Data center của Trường ĐHAG",
    //             },
    //         ],
    //     },
    // ];

    return (
        <div>
            <CustomHeader />
            <BackButton title={t("common.back-home")} left={"30%"} />
            <div className=" py-10 px-10 ">
                <Reveal>
                    <p className="text-3xl uppercase text-darkblue text-center">
                        {t("gallery.facilities")}
                    </p>
                </Reveal>
                <div>
                    <div>
                        <Gallery
                            images={imgs}
                            onClick={handleClick}
                            enableImageSelection={false}
                        />
                        <Lightbox
                            slides={slides}
                            open={index >= 0}
                            index={index}
                            close={() => setIndex(-1)}
                        />
                    </div>
                </div>
                {/* {imageData.map((img, ind) => (
                    <div className="">
                        {img.title}
                        <div className="flex justify-center items-center w-screen">
                            {img.image.map((i, id) => (
                                <img src={i.url} className=" w-1/5 h-auto" />
                            ))}
                        </div>
                    </div>
                ))} */}
            </div>

            <Footer />
        </div>
    );
}

export default GalleryFacilitiesPage;
