"use client";

import { motion } from "motion/react";
import React from "react";


type MotionComponentKeys = keyof typeof motion;
type MotionWrapperProps = {
    type?: MotionComponentKeys;
    children: React.ReactNode;
    [key: string]: unknown;
};

const MotionWrapper = React.forwardRef<HTMLElement, MotionWrapperProps>(
    ({ type, children, ...props }, ref) => {
        const Component: React.ElementType =
            typeof type === "string" && Object.prototype.hasOwnProperty.call(motion, type)
                ? (motion[type as MotionComponentKeys] as React.ElementType)
                : motion.div;
        return (
            <Component ref={ref} {...props}>
                {children}
            </Component>
        );
    }
);

MotionWrapper.displayName = "MotionWrapper";

export { MotionWrapper };