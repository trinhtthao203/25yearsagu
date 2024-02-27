import React, { useState } from "react";
import CuocThiVideo from "../../../../public/images/TinTuc/cuoc-thi-video.gif";
import CuocThiViet from "../../../../public/images/TinTuc/cuoc-thi-viet.gif";
import Slider from "react-slick";
import { Grid, Box, Typography } from "@mui/material";

const TinTuc = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
    };
    return (
        <div className=" pt-[5rem] bg-moonMist">
            <p className="text-3xl uppercase text-[#2c2c54] text-center py-5">
                Tin Tức
            </p>
            <div className="slider-container p-10 ">
                <Slider {...settings}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <img src={CuocThiVideo} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5">
                                    Cuộc thi dựng video chào mừng kỷ niệm 12 năm
                                    thành lập trường
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={8}>
                                <img src={CuocThiViet} />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <p>xs=6 md=4</p>
                            </Grid>
                        </Grid>
                    </Box>
                </Slider>
            </div>
        </div>
    );
};

export default TinTuc;
