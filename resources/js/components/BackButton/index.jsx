import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ title, left, textColor }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const buttonHoverStyle = {
        transition: "1s ease-in-out",
        background: "#4F95DA",
        strokeDashoffset: "-480",
    };
    const spanHoverStyle = {
        color: "white",
    };

    const svgHoverStyle = {
        strokeDashoffset: "-480",
    };

    return (
        <div
            style={{
                width: "100px",
                height: "30px",
                marginTop: "30px",
                marginLeft: left ? left : "100px",
                transform: "translate(-50%, -50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    width: " 180px",
                    height: "60px",
                    position: " absolute",
                }}
            >
                <button
                    style={{
                        width: "180px",
                        height: "60px",
                        cursor: "pointer",
                        background: "transparent",
                        border: "1px solid #91C9FF",
                        outline: "none",
                        borderRadius: "10px",
                        transition: "1s ease-in-out",
                        ...(isHovered && buttonHoverStyle),
                    }}
                    onClick={goBack}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <svg
                        width="180px"
                        height="60px"
                        viewBox="0 0 180 60"
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            fill: "none",
                            stroke: "#fff",
                            strokeDasharray: "150 480",
                            strokeDashoffset: 150,
                            transition: "1s ease-in-out",
                            ...(isHovered && svgHoverStyle),
                        }}
                    >
                        <polyline
                            points="179,1 179,59 1,59 1,1 179,1"
                            class="bg-line"
                        />
                        <polyline
                            points="179,1 179,59 1,59 1,1 179,1"
                            class="hl-line"
                        />
                    </svg>
                    <span
                        style={{
                            color: textColor ? textColor : "black",
                            fontSize: "18px",
                            fontWeight: "100",
                            ...(isHovered && spanHoverStyle),
                        }}
                    >
                        {title}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default BackButton;
