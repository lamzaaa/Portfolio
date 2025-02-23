import { useScroll, useTransform } from "motion/react";

export const useParallax = (inputRange: number[], outputRange: number[], ref?: React.RefObject<HTMLElement>) => {
    const { scrollYProgress } = useScroll({ target: ref });
    return useTransform(scrollYProgress, inputRange, outputRange);
};