type ErrorPlaceholderProps = {
    message: string;
};

export default function ErrorPlaceholder({ message }: ErrorPlaceholderProps) {
    return (
        <div className="flex flex-col items-start w-full">
            <span className="text-4xl font-medium mb-[10px]">:(</span>
            <span className="text-[#B8B8B8] font-light whitespace-pre-line">
                {message}
            </span>
        </div>
    );
}
