import * as v from "valibot";

export const WeaponCategory = v.object({
    id: v.string(),
    name: v.string(),
});

export const WeaponCategories = v.array(WeaponCategory);
