import React from "react";
import Gate from "../../../../public/images/gate.jpg";
import { useTranslation } from "react-i18next";
import { Reveal } from "../../motion/Reveal";
function SuKien() {
    const { t } = useTranslation();

    const events = [
        {
            name: t("event.evt1-name"),
            content: t("event.evt1-content"),
        },
        {
            name: t("event.evt2-name"),
            content: t("event.evt2-content"),
        },
        {
            name: t("event.evt3-name"),
            content: t("event.evt3-content"),
        },
        {
            name: t("event.evt4-name"),
            content: t("event.evt4-content"),
        },
    ];

    return (
        <div
            id="join-the-celebration"
            className="flex flex-col justify-center items-center py-[3rem]"
            style={{
                backgroundImage: ` url(${Gate})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <Reveal>
                <p className="text-3xl uppercase text-[#2c2c54] text-center py-5">
                    {t("home.join-the-celebration")}
                </p>
            </Reveal>
            <Reveal>
                <p className="text-[1.2rem] p-[1rem] uppercase text-[#2c2c54] text-center py-5">
                    {t("home.join-the-celebration-desciption")}
                </p>
            </Reveal>
            <div className="px-5 justify-start flex flex-col items-start ">
                {events.map((event) => (
                    <Reveal>
                        <div className="flex justify-center items-center">
                            <button className=" border-solid border-2 p-2 text-[1.3rem] rounded-md bg-[#227093]">
                                {event.name}
                            </button>
                            <p className="p-5 text-justify max-w-screen-md">
                                {event.content}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
}

export default SuKien;
