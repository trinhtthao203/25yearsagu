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
const pages = ["Products", "Pricing", "Blosssg"];

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
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function HideAppBar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const scrollToFooter = () => {
        const footerElement = document.getElementById("footer");
        footerElement.scrollIntoView({ behavior: "smooth" });
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar
                    position="fixed"
                    sx={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
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
                            href="#app-bar-with-responsive-menu"
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
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page}
                                        onClick={scrollToFooter}
                                    >
                                        <Typography
                                            textAlign="center"
                                            sx={{ color: "black" }}
                                        >
                                            {page}
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
                            href="#app-bar-with-responsive-menu"
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
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={scrollToFooter}
                                    sx={{
                                        my: 2,
                                        color: "black",
                                        display: "block",
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <LanguageSelector />
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
}
