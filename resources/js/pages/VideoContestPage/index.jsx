import React from "react";
import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import { Reveal } from "../../motion/Reveal";
import { ScrollText } from "../../motion/ScrollText";
import { useTranslation } from "react-i18next";
import BackButton from "../../components/BackButton";
import Poster from "../../../../public/images/SuKien/poster_video.jpg";
import { Grid } from "@mui/material";
import CustomFab from "../../components/CustomFab";

function VideoContestPage() {
    const { t } = useTranslation();
    return (
        <div className="w-full h-full">
            <CustomHeader />
            <CustomFab />
            <BackButton title={t("common.back-home")} left={"30%"} />
            <div className="flex flex-col justify-center items-center bg[#f1f2f6] py-[6rem] ">
                <p className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] uppercase text-green01 font-oswald text-center px-2 py-10">
                    <Reveal>{t("event.evt1-name")}</Reveal>
                </p>
                <img src={Poster} className=" w-3/4" />
                <Grid container sx={{ paddingTop: "17px" }}>
                    <Grid item xs={12} md={3}>
                        <p className="flex w-full justify-start md:justify-end px-2 font-semibold text-green01 ">
                            Đối tượng:
                        </p>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <p className="px-2">
                            Sinh viên, học sinh, viên chức, người lao động đang
                            học tập, công tác tại trường Đại học An Giang
                        </p>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <p className="flex w-full justify-start md:justify-end px-2 font-semibold text-green01 ">
                            Nội dung:
                        </p>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <p className="px-2">
                            Tác phẩm Video thể hiện các yếu tố sau: <br />+ Giới
                            thiệu về Khoa, ngành học, chương trình đào tạo.
                            <br />+ Cơ sở vật chất hiện đại, nguồn nhân lực, chủ
                            trương chính sách và điều kiện hỗ trợ học tập, sinh
                            hoạt cho người học. <br />+ Cơ hội việc làm, học tập
                            sau tốt nghiệp. <br />+ Các hoạt động ngoại khóa và
                            phục vụ cộng đồng của sinh viên, viên chức.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <p className="flex w-full justify-start md:justify-end px-2 font-semibold text-green01 ">
                            Yêu cầu:
                        </p>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <p className="px-2">
                            Video phải đảm bảo các tiêu chuẩn sau: <br />+ Thời
                            lượng: Tổi thiểu 5 phút; tối đa 10 phút <br />+ Có
                            thể sử dụng hiệu ứng, kỷ xảo và đảm bảo chất lượng
                            hình ảnh, âm thanh Dung lượng tối đa: 2GB, có độ
                            phân giải 480px; khung hình tối thiểu 854x480 trở
                            lên <br />+ Được lưu với định dạng: mp3, avi, .mpeg,
                            .mkv,…phù hợp đăng trên youtube.
                        </p>
                    </Grid>
                </Grid>
                <div className=" flex flex-col justify-start items-start w-[70%]">
                    <a
                        href="https://sao.agu.edu.vn/article/cuoc-thi-thiet-ke-video-gioi-thieu-khoa-nganh-chuyen-nganh-dao-tao-va-hoat-dong-cua-truong-dai-hoc-an-giang.html"
                        target="_blank"
                        className=" font-montserrat text-xl font-medium py-5 text-green05"
                    >
                        {t("event.view-detail")}
                    </a>
                </div>
                {/* NOT DELETE - Hidden waiting for have result of context */}
                {/* <div>
                    <p className=" text-center text-[1.5rem] font-meri font-light italic ">
                        {t("event.evt1-title")}
                    </p>
                </div> */}
            </div>
            <ScrollText />
            <Footer />
        </div>
    );
}

export default VideoContestPage;
