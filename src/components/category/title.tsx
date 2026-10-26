type CategoryTitleProps = {
    title: string;
    iconUrl?: string;
};

const classes =
    "flex items-center gap-[10px] bg-[#292727] p-[8px_16px] rounded-[8px] text-[18px] text-[#B8B8B8] font-medium uppercase tracking-widest";

export function CategoryTitle({ title, iconUrl }: CategoryTitleProps) {
    return (
        <p className={classes}>
            {iconUrl && (
                <img
                    src={iconUrl}
                    alt={`${title}-icon`}
                    className="size-[20px]"
                />
            )}

            {title}
        </p>
    );
}
