import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import "../css/app.css";
import React from "react";
import { CssBaseline } from "@mui/material";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";
import { useTranslation } from "react-i18next";
import { render } from "react-dom";
import Home from "../js/pages/Home";
import LoadingScreen from "../js/pages/Loading";
import ChancellorMessagePage from "./pages/ChancellorMessagePage";
import TimeLinePage from "./pages/TimeLinePage";
import NotFoundPage from "./pages/NotFound"; // Import your NotFoundPage component
import ScrollToTop from "./scrollToTop";
import BoardOfDirectorsPage from "./pages/BoardOfDirectorsPage";

import GalleryFacilitiesPage from "./pages/GalleryFacilitiesPage";
import GalleryEducationPage from "./pages/GalleryEducationPage";
import GalleryForeignPage from "./pages/GalleryForeignPage";
import GalleryResearchPage from "./pages/GalleryResearchPage";
import GalleryOrganizationsPage from "./pages/GalleryOrganizationsPage";
import GalleryUnionPage from "./pages/GalleryUnionPage";
import GalleryMittingPage from "./pages/GalleryMittingPage";
import GallerySchoolPage from "./pages/GallerySchoolPage";
import VideoContestPage from "./pages/VideoContestPage";
import ArticleContestPage from "./pages/ArticleContestPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";

function MyApp() {
    const { t } = useTranslation();
    return (
        <BrowserRouter basename="/">
            <ScrollToTop />
            <CssBaseline />
            <Routes>
                <Route path={t("path.home")} element={<Home />} />
                <Route
                    path={t("path.chancellor-message")}
                    element={<ChancellorMessagePage />}
                />
                <Route path={t("path.loading")} element={<LoadingScreen />} />
                <Route path={t("path.time-line")} element={<TimeLinePage />} />
                <Route
                    path={t("path.board-of-directors")}
                    element={<BoardOfDirectorsPage />}
                />
                <Route
                    path={t("path.gallery-facilities")}
                    element={<GalleryFacilitiesPage />}
                />
                <Route
                    path={t("path.gallery-education")}
                    element={<GalleryEducationPage />}
                />
                <Route
                    path={t("path.gallery-foreign")}
                    element={<GalleryForeignPage />}
                />
                <Route
                    path={t("path.gallery-research")}
                    element={<GalleryResearchPage />}
                />
                <Route
                    path={t("path.gallery-organizations")}
                    element={<GalleryOrganizationsPage />}
                />
                <Route
                    path={t("path.gallery-union")}
                    element={<GalleryUnionPage />}
                />
                <Route
                    path={t("path.gallery-school")}
                    element={<GallerySchoolPage />}
                />
                <Route
                    path={t("path.gallery-mitting")}
                    element={<GalleryMittingPage />}
                />
                <Route
                    path={t("path.event-video")}
                    element={<VideoContestPage />}
                />
                <Route
                    path={t("path.event-write")}
                    element={<ArticleContestPage />}
                />
                <Route
                    path={t("path.event-write-detail")}
                    element={<ArticleDetailPage />}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

// ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("rootElement not found");

render(<MyApp />, rootElement);
