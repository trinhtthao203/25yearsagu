import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./styles.css";

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(() => {
        // Kiểm tra xem ngôn ngữ đã được lưu trong localStorage chưa
        const savedLanguage = sessionStorage.getItem("language");
        return savedLanguage ? savedLanguage === "en" : true;
    });

    const toggleLanguage = () => {
        const newLanguage = isEnglish ? "en" : "vi";
        setIsEnglish(!isEnglish);
        sessionStorage.setItem("language", newLanguage);
        i18n.changeLanguage(newLanguage);
    };

    useEffect(() => {
        // Thiết lập ngôn ngữ ban đầu khi trang được tải
        const savedLanguage = sessionStorage.getItem("language");
        if (savedLanguage) {
            setIsEnglish(savedLanguage === "vi");
            i18n.changeLanguage(savedLanguage);
        }
    }, []);

    return (
        <div className="example-container">
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={toggleLanguage}
            >
                <p className="text-[#FFFFFF]">{isEnglish ? "VN" : "EN"}</p>
            </motion.div>
        </div>
    );
};

export default LanguageSelector;
