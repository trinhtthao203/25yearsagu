import React from "react";
import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import { Reveal } from "../../motion/Reveal";
import { ScrollText } from "../../motion/ScrollText";
import { useTranslation } from "react-i18next";
import BackButton from "../../components/BackButton";
import { ArticleData } from "./articles";
import CustomCard from "../../components/CustomCard";
import IMG from "../../../../public/images/logo25.png";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import CustomFab from "../../components/CustomFab";
import Poster from "../../../../public/images/SuKien/poster_viet.jpg";

function ArticleContestPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onClick = (id) => {
        navigate(`${t("path.event-write-detail")}`, { state: id });
    };

    return (
        <div className="w-full h-full">
            <CustomHeader />
            <CustomFab />
            <BackButton title={t("common.back-home")} left={"30%"} />
            <div
                id="father"
                className="bg[#f1f2f6] py-[1rem] flex justify-center items-center flex-col"
            >
                <p className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] uppercase text-green01 font-oswald text-center px-2 py-10">
                    <Reveal>{t("event.evt2-name")}</Reveal>
                </p>
                <div className="flex justify-center items-center">
                    <img src={Poster} className="w-3/4 " />
                </div>
                <div id="content" className="w-3/4 pt-10">
                    <p id="header" className="px-2 font-semibold text-green01">
                        Đối tượng:
                    </p>
                    <p className="px-2">
                        Viên chức, người lao động và người học của Trường Đại
                        học An Giang.
                    </p>
                    <p className=" px-2 font-semibold text-green01 ">
                        Nội dung:
                    </p>
                    <p className="px-2 text-justify ">
                        Thí sinh có thể bày tỏ những suy nghĩ, cảm nhận của bản
                        thân về quá trình hình thành và phát triển của Trường
                        Đại học An Giang qua 25 năm, gồm các hoạt động giảng dạy
                        và học tập; nghiên cứu khoa học và chuyển giao công
                        nghệ; hoạt động đối ngoại; công tác xã hội và phục vụ
                        cộng đồng; văn hóa văn nghệ, thể dục thể thao; những
                        thành tựu nổi bật của Trường; những ý tưởng đóng góp xây
                        dựng Trường ngày càng phát triển.
                    </p>
                    <p className=" px-2 font-semibold text-green01 ">
                        Hình thức dự thi:
                    </p>
                    <p className="px-2 text-justify ">
                        a) Bài viết
                        <br /> + Bài dự thi thuộc các thể loại phóng sự, ký sự,
                        nhật ký, bài viết cảm nhận. <br />+ Bài dự thi được đánh
                        máy trên khổ A4, font chữ Times New Roman, size:13 và
                        không quá 2.000 từ. <br />
                        b) Tranh vẽ
                        <br />
                        + Tranh vẽ được thể hiện trên chất liệu, nguyên vật liệu
                        và màu tự chọn (sáp màu, màu nước, màu bột, sơn dầu,…),
                        khuyến khích những tác phẩm đảm bảo độ bền và giá trị sử
                        dụng lâu dài. <br />+ Tranh vẽ có kích thước 30x40cm
                        hoặc 40x40cm. <br />
                        + Bài dự thi cần ghi đầy dủ thông tin tác giả và tiêu
                        đề/chủ đề của tranh ở mặt sau sản phẩm. <br />
                        c) Ảnh nghệ thuật
                        <br />
                        Ảnh dự thi được chụp bằng máy ảnh hay điện thoại thông
                        minh dưới dạng kỹ thuật số có chất lượng cao, file ảnh
                        có định dạng .jpg hoặc .jpeg (kích thước của chiều dài
                        nhất tối thiểu 3.000 pixel, độ phân giải 300 dpi).{" "}
                        <br />+ Ảnh dự thi là ảnh đơn, ảnh màu và không được cắt
                        ghép, không được bo viền, không được đặt bất cứ ký hiệu
                        nhận dạng nào trên ảnh. Ảnh mang tính chất nghệ thuật,
                        không gởi ảnh chụp mang tính chất lưu niệm. <br />+ Mỗi
                        thí sinh tham gia không quá 05 ảnh dự thi, gửi kèm file
                        word nội dung cụ thể của từng ảnh có chú thích đầy đủ
                        thông tin (nơi chụp, nhân vật trong ảnh, hoạt động đang
                        tham gia) và ghi thông tin tác giả (họ tên, địa chỉ, số
                        điện thoại, email).
                    </p>
                    <p className=" px-2 font-semibold text-green01 ">
                        Quy định chung đối với tác phẩm dự thi:
                    </p>
                    <p className="px-2 text-justify ">
                        + Thí sinh dự thi độc lập (không làm theo nhóm).
                        <br />+ Tác phẩm dự thi phải bám sát chủ đề “Kỷ niệm 25
                        năm thành lập Trường Đại học An Giang”. Khuyến khích các
                        tác phẩm phản ảnh nét đẹp trong môi trường học tập,
                        giảng dạy, nghiên cứu khoa học, chuyển giao công nghệ,
                        phục vụ cộng đồng… <br />+ Tác phẩm dự thi là sản phẩm
                        sáng tạo mới của thí sinh, chưa gửi đăng hoặc dự thi ở
                        các cuộc thi khác, chưa công bố trên bất kỳ phương tiện
                        thông tin đại chúng. Các trường hợp sử dụng nội dung,
                        đoạn trích, câu nói, tranh, hình ảnh,…của người khác
                        trong bài dự thi phải có trích dẫn đầy đủ. <br />+ Bài
                        dự thi phải có đầy đủ thông tin tác giả (họ tên, lớp,
                        email, điện thoại).
                    </p>
                    <div className=" flex flex-col justify-start items-start w-[70%]">
                        <a
                            href="https://lib.agu.edu.vn/tin-tuc-va-su-kien/thong-bao/6179-cu%E1%BB%99c-thi-vi%E1%BA%BFt-b%C3%A0i,-v%E1%BA%BD-tranh-v%C3%A0-ch%E1%BB%A5p-%E1%BA%A3nh-ngh%E1%BB%87-thu%E1%BA%ADt-v%E1%BB%9Bi-ch%E1%BB%A7-%C4%91%E1%BB%81-%E2%80%9Ck%E1%BB%B7-ni%E1%BB%87m-25-n%C4%83m-th%C3%A0nh-l%E1%BA%ADp-tr%C6%B0%E1%BB%9Dng-%C4%91%E1%BA%A1i-h%E1%BB%8Dc-an-giang-1999-2024"
                            target="_blank"
                            className=" font-montserrat text-xl font-medium py-5 text-green05"
                        >
                            {t("event.view-detail")}
                        </a>
                    </div>
                </div>
                {/* NOT DELETE - Hidden waiting for have result of context */}
                {/* <div className=" flex justify-center items-center flex-col">
                    <p className=" text-center text-[1.5rem] font-meri font-light italic ">
                        {t("event.evt2-title")}
                    </p>
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            width: "80%",
                            marginTop: "17px",
                        }}
                    >
                        {ArticleData.map((art, ind) => (
                            <Grid item key={ind}>
                                <CustomCard
                                    title={art.title}
                                    content={art.content}
                                    time={art.time.toLocaleDateString()}
                                    onClick={() => onClick(art.id)}
                                    img={IMG}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div> */}
            </div>
            <ScrollText />
            <Footer />
        </div>
    );
}

export default ArticleContestPage;
