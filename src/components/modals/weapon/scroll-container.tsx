const ScrollContainerClasses =
    "flex flex-col overflow-auto h-fit md:flex-row md:overflow-hidden";

type ScrollContainerProps = {
    children: React.ReactNode;
};

export default function ScrollContainer({ children }: ScrollContainerProps) {
    return <div className={ScrollContainerClasses}>{children}</div>;
}
