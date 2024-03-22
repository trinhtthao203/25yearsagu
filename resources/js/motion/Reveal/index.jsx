import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const Reveal = ({ children, isAnimation }) => {
    const { ref: inViewRef, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div
            ref={inViewRef}
            style={{ position: "relative", overflow: "hidden" }}
        >
            {isAnimation &&
                React.Children.map(children, (child, index) => (
                    <AnimatedChild key={index} inView={inView}>
                        {child}
                    </AnimatedChild>
                ))}
            {!isAnimation && children}
        </div>
    );
};

const AnimatedChild = ({ children, inView }) => {
    const ref = useRef(null);
    const controls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
            slideControls.start("visible");
        }
    }, [inView, controls]);

    return (
        <div ref={ref}>
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "#c7ecee",
                    zIndex: 20,
                }}
            />
        </div>
    );
};
