import React, { useState, useEffect } from "react";
import CustomHeader from "../../components/CustomHeader";
import { Reveal } from "../../motion/Reveal";
import { t } from "i18next";
import BackButton from "../../components/BackButton";
import { ScrollText } from "../../motion/ScrollText";
import Footer from "../../components/Footer";
import { Button, Box, Grid, TextField } from "@mui/material"; // Import TextField for search bar
import { ArticleData } from "../ArticleContestPage/articles";
import { useLocation } from "react-router-dom";
import CustomFab from "../../components/CustomFab";

function ArticleDetailPage() {
    const location = useLocation();
    const [activeStep, setActiveStep] = useState(location.state - 1);
    const [article, setArticle] = useState(ArticleData[location.state - 1]);
    const [latestArticles, setLatestArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [filteredArticles, setFilteredArticles] = useState([]); // State for filtered articles

    useEffect(() => {
        setArticle(ArticleData[activeStep]);
    }, [activeStep]);

    useEffect(() => {
        const sortedArticles = [...ArticleData].sort((a, b) => {
            return new Date(b.time) - new Date(a.time);
        });

        const filtered = sortedArticles.filter((article) =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredArticles(filtered);

        const latest = sortedArticles.slice(0, 5);
        setLatestArticles(latest);
    }, [searchQuery]);

    const handleNext = () => {
        if (activeStep === ArticleData.length - 1) {
            return;
        }
        const nextStep = activeStep + 1;
        setActiveStep(nextStep);
    };

    const handleBack = () => {
        const prevStep = activeStep - 1;
        if (prevStep >= 0) {
            setActiveStep(prevStep);
        }
    };

    const handleLatestArticleClick = (index) => {
        setActiveStep(index);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    return (
        <div className="w-full h-full">
            <CustomHeader />
            <CustomFab />
            <Grid container>
                <Grid item md={8}>
                    <div className="flex flex-col justify-center items-center bg[#f1f2f6] py-[6rem] ">
                        <Reveal>
                            <p className=" text-[1.1rem] md:text-[1.7rem] max-w-[52rem] uppercase text-darkblue text-center px-10 py-10">
                                {article.title}
                            </p>
                        </Reveal>
                        <p className=" max-w-[50rem] text-[0.9rem] sm:text-[0.5rem]  md:text-[1.5rem] lg:text-[1.2rem] text-justify my-5 mx-[3rem] text-[#2C3A47]">
                            <div
                                className="text-justify"
                                dangerouslySetInnerHTML={{
                                    __html: article.content,
                                }}
                            ></div>
                        </p>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                pt: 2,
                            }}
                        >
                            <Reveal>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    {t("common.previous")}
                                </Button>
                            </Reveal>
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Reveal>
                                <Button
                                    onClick={handleNext}
                                    sx={{ mr: 1 }}
                                    disabled={
                                        activeStep === ArticleData.length - 1
                                    }
                                >
                                    {t("common.next")}
                                </Button>
                            </Reveal>
                        </Box>
                        <div className=" justify-end items-end">
                            <BackButton
                                title={t("common.back-home")}
                                left={"0px"}
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div className=" pt-10 px-12">
                        <TextField
                            label={t("article.search")}
                            variant="outlined"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder={t("article.search-placeholder")}
                            fullWidth
                        />
                    </div>
                    {searchQuery && (
                        <div className="bg[#f1f2f6] pt-6 ">
                            <p className="text-xl text-darkblue text-center ">
                                <Reveal> {t("article.search-result")}</Reveal>
                            </p>
                            {filteredArticles.map((filteredArticle, index) => (
                                <a
                                    className={`hover:text-[#3498db] ${
                                        filteredArticle.id - 1 === activeStep
                                            ? "text-yellow-500"
                                            : "text-[#2C3A47]"
                                    } justify-start items-start flex text-justify px-12`}
                                    key={filteredArticle.id}
                                    onClick={() =>
                                        handleLatestArticleClick(
                                            filteredArticle.id - 1
                                        )
                                    }
                                >
                                    {filteredArticle.title}
                                </a>
                            ))}
                        </div>
                    )}
                    <div className="bg[#f1f2f6] py-10">
                        <p className="text-xl text-darkblue text-center py-5">
                            <Reveal> {t("article.latest-articles")}</Reveal>
                        </p>
                        {latestArticles.map((latestArticle, index) => (
                            <a
                                className={`hover:text-[#3498db] ${
                                    latestArticle.id - 1 === activeStep
                                        ? "text-yellow-500"
                                        : "text-[#2C3A47]"
                                } justify-start items-start flex text-justify px-12`}
                                key={latestArticle.id}
                                onClick={() =>
                                    handleLatestArticleClick(
                                        latestArticle.id - 1
                                    )
                                }
                            >
                                {latestArticle.title}
                            </a>
                        ))}
                    </div>
                </Grid>
            </Grid>
            <ScrollText />
            <Footer />
        </div>
    );
}

export default ArticleDetailPage;
