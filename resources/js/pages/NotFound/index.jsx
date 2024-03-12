import React from "react";
import BackButton from "../../components/BackButton";
import { t } from "i18next";
function NotFound() {
    return (
        <div className="h-screen w-screen flex-col bg-darkblue flex justify-center items-center">
            <p className=" uppercase text-[1.5rem] text-white font-mono">
                404 | Not Found
            </p>
            <BackButton
                title={t("common.back-home")}
                left={"90px"}
                textColor={"white"}
            />
        </div>
    );
}

export default NotFound;
