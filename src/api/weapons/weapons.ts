import * as v from "valibot";
import { WeaponSchema, WeaponsSchema } from "@/schemas/weapon";

/**
 * Retrieving all weapons data.
 * @returns Weapons data array.
 */
export async function getWeapons(): Promise<
    v.InferOutput<typeof WeaponsSchema>
> {
    const response = await fetch("https://valorant-api.com/v1/weapons");

    if (response.status !== 200) {
        throw new Error(
            `An error occurred while retrieving weapons data.\nIf you are in Russia, please check the settings of your DPI-bypass tool or VPN; the connection to valorant-api.com may be interrupted due to network restrictions.\nError code: ${response.status}.`,
        );
    }

    const weapons = await response.json();
    return v.parse(WeaponsSchema, weapons.data);
}

/**
 * Retrieving weapon data by uuid.
 * @param uuid Weapon uuid to retrieve.
 * @returns Weapon data object.
 */
export async function getWeapon(
    uuid: string,
): Promise<v.InferOutput<typeof WeaponSchema>> {
    const response = await fetch(`https://valorant-api.com/v1/weapons/${uuid}`);

    if (response.status !== 200) {
        throw new Error(
            `An error occurred while retrieving weapon data.\nIf you are in Russia, please check the settings of your DPI-bypass tool or VPN; the connection to valorant-api.com may be interrupted due to network restrictions.\nError code: ${response.status}.`,
        );
    }

    const weapon = await response.json();
    return v.parse(WeaponSchema, weapon.data);
}
