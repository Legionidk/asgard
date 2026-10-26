import { useQuery } from "@tanstack/react-query";
import getWeaponCategories from "@/api/weapons/categories";

export default function useWeaponCategories() {
    return useQuery({
        queryKey: ["weapon-categories"],
        queryFn: getWeaponCategories,
    });
}
