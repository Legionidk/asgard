import { motion } from "motion/react";

import { opacityAnimation } from "@/animations";
import { CategoryTitle } from "./title";
import { CategoryCardsGrid } from "./cards-grid";

type CategoryProps = {
    children: React.ReactNode;
    title: string;
    iconUrl?: string;
};

export function Category({ children, title, iconUrl }: CategoryProps) {
    return (
        <motion.div
            {...opacityAnimation}
            layout="position"
            className="w-full flex flex-col gap-[10px]"
            id="category"
        >
            <CategoryTitle title={title} iconUrl={iconUrl} />

            <CategoryCardsGrid>{children}</CategoryCardsGrid>
        </motion.div>
    );
}
