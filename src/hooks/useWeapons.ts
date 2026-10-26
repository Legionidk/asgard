import { useQuery } from "@tanstack/react-query";
import { getWeapons } from "@/api/weapons/weapons";

export default function useWeapons() {
    return useQuery({
        queryKey: ["weapons"],
        queryFn: getWeapons,
    });
}
