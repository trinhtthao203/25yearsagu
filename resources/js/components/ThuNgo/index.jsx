import React from "react";
import { Reveal } from "../../motion/Reveal";
import { t } from "i18next";
import { Link } from "react-router-dom";

function ThuNgo() {
    const isAnimation = JSON.parse(sessionStorage.getItem("visited")) !== false;
    return (
        <div className="flex flex-col justify-center items-center pt-[5rem] bg-green04">
            <div className="px-2 w-full md:w-2/5 text-center py-[10rem] ">
                <p className="items-center pb-10 text-[1.5rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] uppercase text-green01 font-oswald">
                    {t("open-letter.title")}
                </p>
                <Reveal isAnimation={isAnimation}>
                    <p className="text-center px-[9px] text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] text-green01 font-montserrat font-medium">
                        {t("open-letter.short-content")}
                        <Link
                            to={t("path.open-letter")}
                            className=" text-[0.85rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.2rem] text-green05 font-montserrat"
                        >
                            {t("common.read-more")}
                        </Link>
                    </p>

                </Reveal>
            </div>
        </div>
    );
}

export default ThuNgo;
