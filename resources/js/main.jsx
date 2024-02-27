import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import "../css/app.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./i18n";
import Home from "../js/pages/Home";
import LoadingScreen from "../js/pages/Loading";
import ThongDiepHieuTruongPage from "./pages/ThongDiepHieuTruongPage";
import DongThoiGianPage from "./pages/DongThoiGianPage";

function MyApp() {
    return (
        <BrowserRouter basename="/agu25years">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/thong-diep-hieu-truong"
                    element={<ThongDiepHieuTruongPage />}
                />
                <Route path="/loading" element={<LoadingScreen />} />
                <Route
                    path="/lich-su-hinh-thanh"
                    element={<DongThoiGianPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);
