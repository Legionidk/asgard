type CategoryCardsGridProps = {
    children: React.ReactNode;
};

const classes =
    "grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4";

export function CategoryCardsGrid({ children }: CategoryCardsGridProps) {
    return <div className={classes}>{children}</div>;
}
