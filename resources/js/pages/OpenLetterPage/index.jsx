import React from "react";
import HieuTruong from "../../../../public/images/hieu-truong.jpg";
import CustomHeader from "../../components/CustomHeader";
import Footer from "../../components/Footer";
import { Reveal } from "../../motion/Reveal";
import { ScrollText } from "../../motion/ScrollText";
import BackButton from "../../components/BackButton";
import { useTranslation } from "react-i18next";
import CustomFab from "../../components/CustomFab";

function OpenLetterPage() {
    const { t } = useTranslation();
    const contentData = [
        {
            title: 'Kính gửi: Quý Doanh nghiệp',
            content: `
            Trải qua 25 năm xây dựng, trưởng thành và phát triển, Trường Đại học An Giang, Đại học Quốc gia - HCM đã từng bước khẳng định được vị thế của mình trong cộng đồng giáo dục và đóng góp tích cực vào sự phát triển của tỉnh An Giang và đất nước Việt Nam.
            </br></br>
            Với mong muốn tôn vinh những thành tựu đã đạt được, tạo điểm đến giao lưu, quy tụ các cựu sinh viên, giảng viên và đối tác quan trọng của Trường, cũng như quảng bá hình ảnh của nhà trường đến với cộng đồng xã hội trong và ngoài nước, Trường Đại học An Giang sẽ triển khai tổ chức kỷ niệm 25 ngày thành lập Trường. Các chuỗi sự kiện được thực hiện từ tháng 01/2024, bao gồm: tổ chức các hội thi, các hoạt động thể thao, văn nghệ, hội trại truyền thống, tổ chức các hội nghị, hội thảo quốc tế; giao lưu văn hoá với giảng viên, sinh viên các Trường đối tác quốc tế; tổ chức triển lãm 25 hình thành và phát triển của Trường; xuất bản phim tư liệu, tập san,...; đồng thời, tổng kết đánh giá, khen thưởng các cá nhân, đơn vị có công lao đóng góp vào sự phát triển của Trường.
            </br></br>
            Để thực hiện thành công các sự kiện kỷ niệm 25 năm ngày thành lập, Nhà trường rất mong nhận được sự đồng hành, ủng hộ về tinh thần, tài chính và vật chất của quý tổ chức, đoàn thể, doanh nghiệp, chính quyền các cấp cũng như của toàn thể thế hệ viên chức, giảng viên, học viên, sinh viên và cựu sinh viên của Trường. Nhà trường tin rằng sự hỗ trợ của quý vị sẽ là động lực to lớn đóng góp quan trọng vào sự thành công của sự kiện.
            </br></br>
            Trân trọng cảm ơn và kính chúc quý tổ chức, đoàn thể, doanh nghiệp ngày càng phát triển và thành công../
            </br></br>
            `,
        },]

    return (
        <div className="w-full h-full">
            <CustomHeader />
            <CustomFab />
            <div className=" justify-end items-end">
                <BackButton title={t("common.back-home")} left={"30%"} />
            </div>
            <div className="flex flex-col justify-center items-center bg[#f1f2f6] py-[6rem] ">
                <p className="text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem] uppercase text-green01 font-oswald text-center px-2 pt-10">
                    <Reveal>{t("open-letter.title")}</Reveal>
                </p>
                <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] text-green01 font-oswald text-center px-2 pb-10">
                    <Reveal>{t("open-letter.sub-title")}</Reveal>
                </p>
                <p className="max-w-[49rem] text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] my-5 mx-[5rem] font-semibold">
                    <Reveal>
                        <div
                            className="text-justify"
                            dangerouslySetInnerHTML={{
                                __html: contentData[0].title,
                            }}
                        ></div>
                    </Reveal>
                </p>
                <p className=" max-w-[49rem] text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem]  text-justify  my-5 mx-[5rem] ">
                    <Reveal>
                        <div
                            className="text-justify"
                            dangerouslySetInnerHTML={{
                                __html: contentData[0].content,
                            }}
                        ></div>
                    </Reveal>
                </p>
                <Reveal>
                    <img
                        src={`${HieuTruong}`}
                        className=" rounded-[10rem] border-solid border-[0.5rem] border-[#f7f1e3] w-[10rem]"
                    />
                </Reveal>
                <p className="text-[0.8rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.3rem] text-green01 font-oswald text-center px-2 pt-4">
                    <Reveal>{t("board-of-directors.principal")}</Reveal>
                </p>
                <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] uppercase text-green01 font-oswald text-center px-2">
                    <Reveal>{t("board-of-directors.vvthang")}</Reveal>
                </p>
            </div>
            <ScrollText />
            <Footer />
        </div>
    );
}

export default OpenLetterPage;
