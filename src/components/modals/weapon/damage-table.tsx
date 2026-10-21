import { WeaponDamageData } from "@/types/weaponModal";
import DamageTableTd from "./damage-table-td";

interface DamageTableProps {
    data: WeaponDamageData[];
}

export default function DamageTable({ data }: DamageTableProps) {
    return (
        <table id="damage-table">
            <thead className="text-[#B8B8B8] border-b-2 border-[#292727]">
                <tr>
                    <th className="text-[#B8B8B8] text-[18px] text-center font-light p-[8px_16px]">
                        Meters
                    </th>

                    {data.map((damage) => (
                        <th
                            className="uppercase tracking-widest p-[8px_16px]"
                            key={damage.rangeStart}
                        >
                            {damage.rangeStart}-{damage.rangeEnd}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody className="text-[18px]">
                <tr>
                    <DamageTableTd value="Head" mode="light" />

                    {data.map((damage) => (
                        <DamageTableTd
                            key={damage.headDamage + damage.rangeStart}
                            value={damage.headDamage}
                        />
                    ))}
                </tr>

                <tr>
                    <DamageTableTd value="Body" mode="light" />

                    {data.map((damage) => (
                        <DamageTableTd
                            key={damage.headDamage + damage.rangeStart}
                            value={damage.headDamage}
                        />
                    ))}
                </tr>

                <tr>
                    <DamageTableTd value="Legs" mode="light" />

                    {data.map((damage) => (
                        <DamageTableTd
                            key={damage.headDamage + damage.rangeStart}
                            value={damage.headDamage}
                        />
                    ))}
                </tr>
            </tbody>
        </table>
    );
}
