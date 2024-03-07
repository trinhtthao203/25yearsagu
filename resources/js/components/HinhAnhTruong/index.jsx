import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import IMG from "../../../../public/images/gate.jpg";

function HinhAnh() {
    const itemData = [
        {
            img: IMG,
            title: "Breakfast",
            author: "@bkristastucchio",
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: IMG,
            title: "Burger",
            author: "@rollelflex_graphy726",
        },
        {
            img: IMG,
            title: "Camera",
            author: "@helloimnik",
        },
        {
            img: IMG,
            title: "Coffee",
            author: "@nolanissac",
            cols: 2,
        },
        {
            img: IMG,
            title: "Hats",
            author: "@hjrc33",
            cols: 2,
        },
        {
            img: IMG,
            title: "Honey",
            author: "@arwinneil",
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: IMG,
            title: "Basketball",
            author: "@tjdragotta",
        },
        {
            img: IMG,
            title: "Fern",
            author: "@katie_wasserman",
        },
    ];
    return (
        <div
            id="gallery"
            className="flex flex-col justify-center items-center py-[5rem] bg-[#dff9fb]"
        >
            <p className="text-3xl uppercase text-[#2c2c54] text-center py-5">
                Hình ảnh về trường
            </p>
            <div className=" text-center flex justify-center items-center pt-12">
                <ImageList sx={{ width: "70%", height: 500 }}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{
                                            color: "rgba(255, 255, 255, 0.54)",
                                        }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <p>i</p>
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    );
}

export default HinhAnh;
