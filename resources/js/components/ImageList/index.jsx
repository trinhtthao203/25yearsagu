import React, { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useTranslation } from "react-i18next";

function ImageList({ title, data }) {
    const { t } = useTranslation();

    const [index, setIndex] = useState(-1);
    const handleClick = (index, item) => setIndex(index);

    const images = data.map((image) => ({
        ...image,
        customOverlay: (
            <div className=" bg-black max-h-[240px] overflow-hidden absolute bottom-0 w-full text-white p-1 text-[90%]">
                <div>{t(`${image.caption}`)}</div>
                {image.tags &&
                    image.tags.map((t, index) => (
                        <div
                            key={index}
                            className=" break-words inline-block bg-white h-auto text-[75%] font-semibold leading-none p-10 rounded-[10px] text-black align-baseline m-[2px]"
                        >
                            {t.title}
                        </div>
                    ))}
            </div>
        ),
    }));

    const slides = data.map(({ original }) => ({
        src: original,
        width: "100%",
        height: "100%",
        borderRadius: "10px",
    }));

    return (
        <div className=" md:px-[14rem] py-[2rem]">
            <p className="text-[1.3rem] font-medium uppercase text-darkblue ">
                {title}
            </p>
            <div>
                <Gallery
                    images={images}
                    onClick={handleClick}
                    enableImageSelection={false}
                />
                <Lightbox
                    slides={slides}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                />
            </div>
        </div>
    );
}

export default ImageList;
