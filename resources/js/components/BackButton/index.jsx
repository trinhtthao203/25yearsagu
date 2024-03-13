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
        border: "1px solid #EE5A24",
        strokeDashoffset: "-480",
    };
    const spanHoverStyle = {
        color: "#EE5A24",
    };

    const svgHoverStyle = {
        strokeDashoffset: "-480",
    };

    return (
        <div
            style={{
                marginTop: "30px",
                marginLeft: left ? left : "160px",
                transform: "translate(-50%, -50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    width: "180px",
                    height: "40px",
                    position: " absolute",
                }}
            >
                <button
                    style={{
                        width: "180px",
                        height: "40px",
                        cursor: "pointer",
                        background: "transparent",
                        outline: "none",
                        transition: "0.6s ease-in-out",
                        ...(isHovered && buttonHoverStyle),
                    }}
                    onClick={goBack}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <svg
                        viewBox="0 0 180 40"
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            fill: "none",
                            stroke: "#EE5A24",
                            strokeDasharray: "150 480",
                            strokeDashoffset: 150,
                            transition: "0.6s ease-in-out",
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
                            color: textColor ? textColor : "#130f40",
                            fontSize: "18px",
                            fontWeight: "400",
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
