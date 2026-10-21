import clsx from "clsx";
import { motion } from "motion/react";

import { useEffect } from "react";
import { createPortal } from "react-dom";

import { yAnimation, opacityAnimation } from "@/animations";

type AdaptiveModalProps = {
    children: React.ReactNode;
    onClose: () => void;
    centered?: boolean;
    additionalClasses?: number;
};

export default function AdaptiveModal({
    onClose,
    children,
    centered = false,
    additionalClasses,
}: AdaptiveModalProps) {
    const contentWrapperStyles = clsx(
        "z-30 fixed",
        "flex justify-center top-0 size-full",
        centered ? "items-center" : "items-end",
        additionalClasses,
    );

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    });

    return createPortal(
        <>
            <motion.div
                {...yAnimation}
                id="content-wrapper"
                className={contentWrapperStyles}
            >
                {children}
                
                <motion.div
                    {...opacityAnimation}
                    id="modal-background"
                    className="fixed top-0 size-full bg-black/50 backdrop-blur-xs"
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                />
            </motion.div>
        </>,
        document.getElementById("modal-root")!,
    );
}
