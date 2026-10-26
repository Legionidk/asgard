type CardTitleProps = {
    title: string;
};

const classes = "px-[16px] py-[8px] text-[20px] bg-[#211E1F]";

export function CardTitle({ title }: CardTitleProps) {
    return <p className={classes}>{title}</p>;
}
