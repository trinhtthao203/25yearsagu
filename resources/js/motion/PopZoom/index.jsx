import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const PopZoom = ({ children }) => {
    const { ref: inViewRef, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div ref={inViewRef}>
            {React.Children.map(children, (child, index) => (
                <AnimatedChild key={index} inView={inView}>
                    {child}
                </AnimatedChild>
            ))}
        </div>
    );
};

const AnimatedChild = ({ children, inView }) => {
    const ref = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <div ref={ref}>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                {children}
            </motion.div>
        </div>
    );
};
