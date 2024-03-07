import React from "react";
import LogoAGU from "../../../../public/images/logo-agu.png";
import LogoVNU from "../../../../public/images/logo-vnu.png";
import { Box, Fab, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";
import { Navigation } from "@mui/icons-material";

const Footer = forwardRef((props, ref) => {
    const { t } = useTranslation();
    var currentYear = new Date().getFullYear();
    return (
        <div
            id="footer"
            ref={ref}
            className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100"
        >
            <div className="container flex flex-col justify-between pt-10 mx-auto lg:flex-row lg:space-y-0">
                <Box sx={{ flexGrow: 1, position: "relative" }}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        sx={{ maxWidth: "100%", overflow: "hidden" }}
                    >
                        <Grid item xs={12} sm={12} md={3}>
                            <div className="flex justify-center items-center">
                                <img
                                    src={`${LogoVNU}`}
                                    className=" w-[4.5rem] h-auto mr-5"
                                />
                                <img
                                    src={`${LogoAGU}`}
                                    className=" w-[4.5rem]"
                                />
                            </div>
                            <div className="p-2 w-full self-center text-center text-[0.8rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] font-semibold uppercase ">
                                {t("home.agu")}
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            md={3}
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            <p className="uppercase dark:text-gray-50">
                                {t("contact.address")}
                            </p>
                            <div>
                                <p rel="noopener noreferrer">
                                    {t("contact.address-content")}
                                </p>
                                <a
                                    className="text-[#27ae60]"
                                    href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+An+Giang+-+%C4%90HQG+TPHCM/@10.3716558,105.429764,17z/data=!3m1!4b1!4m6!3m5!1s0x310a731e7546fd7b:0x953539cd7673d9e5!8m2!3d10.3716558!4d105.4323389!16s%2Fm%2F03nt3_y?hl=vi-VN&entry=ttu"
                                >
                                    {t("contact.view-in-map")}
                                </a>
                            </div>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            md={3}
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            <div className="uppercase dark:text-gray-50">
                                {t("contact.contact")}
                            </div>
                            <ul style={{ paddingLeft: 0 }}>
                                <li>
                                    <Typography variant="body1">
                                        Tel: +84 296 625 65 65
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1">
                                        Mail: webmaster@agu.edu.vn
                                    </Typography>
                                </li>
                            </ul>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={3}
                            sx={{
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <div className="uppercase dark:text-gray-50">
                                {t("contact.social-media")}
                            </div>
                            <div className="flex justify-start space-x-3">
                                <a
                                    rel="noopener noreferrer"
                                    href="https://www.facebook.com/pages/%C4%90%E1%BA%A1i-h%E1%BB%8Dc-An-Giang/1574368222658744"
                                    title="Facebook"
                                    className="flex items-center p-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                        className="w-5 h-5 fill-current"
                                    >
                                        <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                    </svg>
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    href="https://www.agu.edu.vn/vi"
                                    title="Website"
                                    className="flex items-center p-1"
                                >
                                    <svg
                                        class="w-6 h-6 text-gray-800 dark:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8.6 4.7A8 8 0 0 1 19 8h-.7c-.7 0-1.2.3-1.2 1 0 .2 0 2-2 2s-2-1.8-2-2c0-1.5-.8-1.7-1.7-2L10 6.6c-1-.5-1.3-1.2-1.5-1.9ZM6 4a10 10 0 0 0-2.8 3.3A10 10 0 0 0 12.5 22 10 10 0 1 0 6 4Zm13.4 11.1-.8-.1h-.2a3.4 3.4 0 0 0-3.4 3.4v1a8 8 0 0 0 4.4-4.3ZM12 20A8 8 0 0 1 5.1 8c1 .5 1.4 1.5 1.8 2.4l.7 1.1c.5.7 1 1 1.6 1.4.5.3 1 .6 1.6 1.3 1.4 1.8 1.4 4.3 1.3 5.8Z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    href="https://vn.linkedin.com/school/vietnam-national-university-hcmc-an-giang-university/"
                                    title="Linkedin"
                                    className="flex items-center p-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="w-5 h-5 fill-current"
                                    >
                                        <path d="M20.25 0h-16.5c-1.517 0-2.75 1.233-2.75 2.75v16.5c0 1.517 1.233 2.75 2.75 2.75h16.5c1.517 0 2.75-1.233 2.75-2.75v-16.5c0-1.517-1.233-2.75-2.75-2.75zM7.844 20.25h-3.094v-10.28h3.094v10.28zM6.797 8.859h0.021c-1.033 0-1.672-0.712-1.672-1.594 0-0.884 0.639-1.594 1.654-1.594s1.672 0.71 1.65 1.594c0 0.882-0.621 1.594-1.653 1.594zM20.25 20.25h-3.094v-5.844c0-1.391-0.499-2.342-1.736-2.342-0.949 0-1.518 0.638-1.767 1.257-0.091 0.223-0.111 0.537-0.111 0.852v6.077h-3.094c0 0 0.041-8.597 0-9.47h3.094v1.34c0.413-0.638 1.151-1.547 2.812-1.547 2.052 0 3.608 1.343 3.608 4.223v5.454z"></path>
                                    </svg>
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                    <Fab
                        variant="extended"
                        color="primary"
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth", // Smooth scrolling animation
                            });
                        }}
                        sx={{
                            position: "absolute",
                            top: "1.5rem",
                            right: "0px",
                        }}
                    >
                        <Navigation />
                    </Fab>
                </Box>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-400">
                © {currentYear} An Giang University
            </div>
        </div>
    );
});
export default Footer;
