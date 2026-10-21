const infoWrapperClasses =
    "flex flex-col p-[8px] gap-[8px] h-fit md:min-w-[400px] md:overflow-auto";

type InfoWrapperProps = {
    children: React.ReactNode;
};

export default function InfoWrapper({ children }: InfoWrapperProps) {
    return <div className={infoWrapperClasses}>{children}</div>;
}
