const imageWrapperStyle =
    "flex flex-col justify-center gap-[25px] w-full p-[50px_25px] bg-[#292727]";

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
