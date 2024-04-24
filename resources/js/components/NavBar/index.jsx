import * as React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import {
    Box,
    Slide,
    Typography,
    Toolbar,
    AppBar,
    useScrollTrigger,
    IconButton,
    Menu,
    MenuItem,
    Button,
} from "@mui/material";

import { HistoryEdu, DragHandle } from "@mui/icons-material";
import LanguageSelector from "../LanguageSelector";
import { t } from "i18next";

function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function NavBar(props) {
    const { resultRef } = props;
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const scrollTo = (element) => {
        const footerElement = document.getElementById(element);
        footerElement.scrollIntoView({ behavior: "smooth" });
        handleCloseNavMenu();
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pages = [
        {
            title: t("home.time-line-short"),
            link: "time-line",
        },
        {
            title: t("home.board-of-directors-time-short"),
            link: "board-of-directors-time",
        },
        {
            title: t("home.join-the-celebration-short"),
            link: "join-the-celebration",
        },
        {
            title: t("home.partner"),
            link: "partner",
        },
        {
            title: t("home.alumni"),
            link: "alumni",
        },
        {
            title: t("home.gallery"),
            link: "gallery",
        },
        {
            title: t("contact.contact"),
            link: "footer",
        },
    ];

    const [scrollOpacity, setScrollOpacity] = React.useState(1);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = 200;
            const opacity = Math.min(1, 0.5 + scrollPosition / maxScroll);

            setScrollOpacity(opacity);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: `rgba(255, 255, 255, ${scrollOpacity})`,
                    transition: "background-color 0.3s ease-in-out",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                }}
            >
                <Toolbar disableGutters>
                    <HistoryEdu
                        sx={{
                            display: { xs: "none", md: "flex" },
                            mr: 1,
                            color: "black",
                        }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        // href="/agu25years"
                        onClick={() => scrollTo("header")}
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "black",
                            textDecoration: "none",
                        }}
                    >
                        AGU
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <DragHandle
                                sx={{
                                    color: "black",
                                }}
                            />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem
                                    key={index}
                                    onClick={() => scrollTo(page.link)}
                                >
                                    <Typography
                                        textAlign="center"
                                        sx={{ color: "black" }}
                                    >
                                        {page.title}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <HistoryEdu
                        sx={{
                            display: { xs: "flex", md: "none" },
                            mr: 1,
                            color: "black",
                        }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        // href="/agu25years"
                        onClick={() => scrollTo("header")}
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "black",
                            textDecoration: "none",
                        }}
                    >
                        AGU
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page, index) => (
                            <Button
                                key={page}
                                onClick={() => {
                                    scrollTo(page.link);
                                }}
                                sx={{
                                    my: 2,
                                    color: "black",
                                    display: "block",
                                }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <LanguageSelector />
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
    );
}

NavBar.propTypes = {
    resultRef: PropTypes.object,
};
