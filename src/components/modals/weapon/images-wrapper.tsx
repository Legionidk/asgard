const imageWrapperStyle =
    "flex flex-col gap-[50px] justify-between w-full p-[50px_25px] bg-[#292727] overflow-auto";

type ImagesWrapperProps = {
    children: React.ReactNode;
};

export default function ImagesWrapper({ children }: ImagesWrapperProps) {
    return (
        <div className={imageWrapperStyle} id="images-wrapper">
            {children}
        </div>
    );
}
