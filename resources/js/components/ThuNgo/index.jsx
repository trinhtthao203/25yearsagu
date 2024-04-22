import React from "react";
import { Reveal } from "../../motion/Reveal";
import { t } from "i18next";
import { Link } from "react-router-dom";

function ThuNgos() {
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;
    return (
        <div className="flex flex-col justify-center items-center pt-[5rem] bg-green04">
            <div className="px-2 w-full md:w-2/5 text-center ">
                <p className="text-[2rem] uppercase text-green01 text-center font-oswald py-5">
                    Thư Ngỏ
                </p>
                <Reveal isAnimation={isAnimation}>
                    <p className="text-[0.85rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.2rem] text-green01 font-montserrat font-medium">
                        {t("home.short_content")}
                    </p>
                    <Link
                        to="/"
                        className=" text-[0.85rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.2rem] text-green05 font-montserrat"
                    >
                        {t("common.read-more")}
                    </Link>
                </Reveal>
            </div>
        </div>
    );
}

export default ThuNgos;
