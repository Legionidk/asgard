import { motion } from "motion/react";

import { CardTitle } from "./title";
import { CardImageWrapper } from "./image-wrapper";
import { opacityAnimation } from "@/animations";

type CardProps = {
    title: string;
    imageUrl: string;
    onClick: () => void;
    agentMode?: boolean;
};

const classes =
    "group select-none cursor-pointer flex flex-col rounded-[8px] overflow-hidden xl:w-[380px]";

export function Card({
    title,
    imageUrl,
    onClick,
    agentMode = false,
}: CardProps) {
    return (
        <motion.div
            {...opacityAnimation}
            layout
            whileHover={{ boxShadow: "0 0 0 2px #FF4248" }}
            className={classes}
            onClick={onClick}
        >
            <CardImageWrapper
                alt={title}
                imageUrl={imageUrl}
                agentMode={agentMode}
            />

            <CardTitle title={title} />
        </motion.div>
    );
}
