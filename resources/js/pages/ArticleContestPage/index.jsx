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

function ArticleContestPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onClick = (id) => {
        navigate(`${t("path.event-write-detail")}`, { state: id });
    };

    return (
        <div className="w-full h-full">
            <CustomHeader />
            <BackButton title={t("common.back-home")} left={"30%"} />
            <div className="flex flex-col justify-center items-center bg[#f1f2f6] py-[1rem] ">
                <p className="text-3xl uppercase text-darkblue text-center px-2 pt-10 pb-5">
                    <Reveal>{t("event.evt2-name")}</Reveal>
                </p>
                <div className=" flex flex-col justify-start items-start w-[70%] mt-10">
                    <p>{t("event.view-detail")}</p>
                </div>
                <div className=" flex justify-center items-center flex-col">
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
                </div>
            </div>
            <ScrollText />
            <Footer />
        </div>
    );
}

export default ArticleContestPage;
