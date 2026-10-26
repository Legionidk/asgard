import * as v from "valibot";

import { WeaponsSchema } from "@/schemas/weapon";
import { WeaponCategories, WeaponCategory } from "@/schemas/weapon-category";

export default async function getWeaponCategories(): Promise<
    v.InferOutput<typeof WeaponCategories>
> {
    const response = await fetch("https://valorant-api.com/v1/weapons");

    if (response.status !== 200) {
        throw new Error(
            `An error occurred while retrieving weapon categories data.\nIf you are in Russia, please check the settings of your DPI-bypass tool or VPN; the connection to valorant-api.com may be interrupted due to network restrictions.\nError code: ${response.status}.`,
        );
    }

    const categories = new Map<string, v.InferOutput<typeof WeaponCategory>>();
    const weapons = await response.json();
    const parsedWeapons = v.parse(WeaponsSchema, weapons.data);

    for (const weapon of parsedWeapons) {
        if (!categories.get(weapon.category)) {
            categories.set(weapon.category, {
                id: weapon.category,
                name:
                    weapon.shopData?.category || weapon.category.split(":")[2],
            });
        }
    }

    return v.parse(WeaponCategories, [...categories.values()]);
}
