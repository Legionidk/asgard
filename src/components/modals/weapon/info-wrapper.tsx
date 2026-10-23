const infoWrapperClasses =
    "flex flex-col p-[8px] gap-[8px] md:min-w-[50%] md:overflow-auto";

type InfoWrapperProps = {
    children: React.ReactNode;
};

export default function InfoWrapper({ children }: InfoWrapperProps) {
    return <div className={infoWrapperClasses}>{children}</div>;
}
