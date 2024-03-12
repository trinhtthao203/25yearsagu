import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import "../css/app.css";
import React from "react";
import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./i18n";
import Home from "../js/pages/Home";
import LoadingScreen from "../js/pages/Loading";
import ThongDiepHieuTruongPage from "./pages/ThongDiepHieuTruongPage";
import DongThoiGianPage from "./pages/DongThoiGianPage";
import NotFoundPage from "./pages/NotFound"; // Import your NotFoundPage component
import ScrollToTop from "./scrollToTop";

function MyApp() {
    return (
        <BrowserRouter basename="/agu25years">
            <ScrollToTop />
            <CssBaseline />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/thong-diep-hieu-truong"
                    element={<ThongDiepHieuTruongPage />}
                />
                <Route path="/loading" element={<LoadingScreen />} />
                <Route
                    path="/theo-dong-thoi-gian"
                    element={<DongThoiGianPage />}
                />
                {/* Catch-all route for "not found" page */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);
