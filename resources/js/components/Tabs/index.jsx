import React, { useRef, useState } from "react";
import { useMeasure } from "./use-measure";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Pager } from "./Pager";

const Container = styled.div`
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
    border-radius: 1rem;
    overflow: hidden;
    background-color: #f9f9f9;
    border: 1px solid black;
`;
const TabContainer = styled.div`
    overflow-y: hidden;
    box-shadow: none;
`;

const TabList = styled.div`
    display: block;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const TabItem = styled(motion.button)`
    white-space: nowrap;
    -webkit-appearance: none;
    box-sizing: border-box;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    user-select: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    box-shadow: none;
    cursor: pointer;
    text-decoration: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: 10px 1rem;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
    text-overflow: ellipsis;
    line-height: 1.5;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${(p) => (p.isActive ? "#2980b9" : "#b2bec3")};
    margin: 0px;
    overflow: hidden;
`;

export function Tabs({ eventData }) {
    const [value, setValue] = useState(0);
    const childRefs = useRef(new Map());
    const tabListRef = useRef();
    const [slider, setSlider] = useState({ left: 0, right: 0 });
    const { bounds, ref } = useMeasure();

    React.useEffect(() => {
        const target = childRefs.current.get(value);
        const container = tabListRef.current;
        if (target) {
            const cRect = container.getBoundingClientRect();

            if (cRect.width === 0) {
                return;
            }

            const tRect = target.getBoundingClientRect();
            const left = tRect.left - cRect.left;
            const right = cRect.right - tRect.right;

            setSlider({
                hasValue: true,
                left: left + 8,
                right: right + 8,
            });
        }
    }, [value, bounds]);

    return (
        <Container>
            <TabContainer ref={ref} >
                <TabList ref={tabListRef}>
                    {eventData.map((event, i) => (
                        <TabItem
                            key={event}
                            isActive={i === value}
                            whileHover={{ backgroundColor: "#95a5a6" }}
                            transition={{ duration: 0.1 }}
                            whileTap={{ backgroundColor: "#e9ecef" }}
                            ref={(el) => childRefs.current.set(i, el)}
                            onClick={() => setValue(i)}
                        >
                            <p className=" text-[1rem]">{event.time}</p>
                        </TabItem>
                    ))}
                </TabList>
            </TabContainer>
            <Pager value={value}>
                {eventData.map((event) => (
                    <div
                        key={event}
                        style={{
                            width: "100%",
                            minHeight: "250px",
                            padding: "16px",
                            color: "black",
                        }}
                    >
                        <span
                            dangerouslySetInnerHTML={{
                                __html: event.description.replace(
                                    /\n/g,
                                    "<br> - "
                                ),
                            }}
                        ></span>
                    </div>
                ))}
            </Pager>
        </Container>
    );
}
