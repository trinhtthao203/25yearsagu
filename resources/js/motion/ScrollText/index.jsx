import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

export const ScrollText = ({ children }) => {
    const { ref: inViewRef, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div ref={inViewRef}>
            <motion.div
                className=" fixed top-0 left-0 right-0 h-[10px] bg-green02 origin-[0%]"
                style={{ scaleX }}
            />
            {children}
        </div>
    );
};
