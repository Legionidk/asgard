import clsx from "clsx";
import { motion } from "motion/react";

import { useEffect } from "react";
import { createPortal } from "react-dom";

import { yAnimation, opacityAnimation } from "@/animations";

type AdaptiveModalProps = {
    children: React.ReactNode;
    onClose: () => void;
    centered?: boolean;
    additionalClasses?: string;
};

export default function AdaptiveModal({
    onClose,
    children,
    centered = false,
    additionalClasses,
}: AdaptiveModalProps) {
    const contentWrapperStyles = clsx(
        "z-20 fixed",
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
                onClick={(e) => {
                    if ((e.target as HTMLElement).id !== "content-wrapper") {
                        return;
                    }

                    onClose();
                }}
            >
                {children}
            </motion.div>

            <motion.div
                {...opacityAnimation}
                id="modal-background"
                className="z-15 fixed top-0 size-full bg-black/25 backdrop-blur-xs"
            />
        </>,
        document.getElementById("modal-root")!,
    );
}
