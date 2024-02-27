import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", lang: "English" },
    { code: "vi", lang: "Vietnamese" },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        setIsEnglish(!isEnglish);
    };

    return (
        <div className="">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                {/* Language Switcher */}
                <div className="flex items-center justify-between mb-4">
                    <button
                        onClick={toggleLanguage}
                        className="text-blue-500 font-semibold"
                    >
                        Switch Language
                    </button>
                </div>

                {/* Content */}
                <div
                    className={`animate-slide ${
                        isEnglish ? "active" : "hidden"
                    }`}
                >
                    {/* English Content */}
                    <h2 className="text-lg font-semibold">Hello World!</h2>
                    <p className="text-gray-600">
                        This is some English content.
                    </p>
                </div>

                <div
                    className={`animate-slide ${
                        !isEnglish ? "active" : "hidden"
                    }`}
                >
                    {/* Vietnamese Content */}
                    <h2 className="text-lg font-semibold">Xin Chào!</h2>
                    <p className="text-gray-600">
                        Đây là một số nội dung tiếng Việt.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;
