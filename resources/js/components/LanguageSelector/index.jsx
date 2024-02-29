import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./styles.css";

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {};
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        if (isEnglish) {
            setIsEnglish(!isEnglish);
            i18n.changeLanguage("en");
        } else {
            setIsEnglish(!isEnglish);
            i18n.changeLanguage("vi");
        }
    };

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
