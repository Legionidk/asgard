interface ModalBlockInfoProps {
    name: string;
    value: string | number;
}

export default function ModalBlockInfo({ name, value }: ModalBlockInfoProps) {
    return (
        <div className="w-full flex justify-between" id="stat-info">
            <span className="text-[#B8B8B8] font-medium uppercase tracking-widest">
                {name}
            </span>

            <span className="text-[18px]">{value}</span>
        </div>
    );
}
