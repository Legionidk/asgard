type DamageTableTd = {
    value: string | number;
    mode?: "light" | "default";
};

const defaultClasses = "text-center p-[8px_16px]";
const lightClasses = "text-[#B8B8B8] text-center font-light p-[8px_16px]";

export default function DamageTableTd({
    value,
    mode = "default",
}: DamageTableTd) {
    return (
        <td className={mode === "light" ? lightClasses : defaultClasses}>
            {value}
        </td>
    );
}
