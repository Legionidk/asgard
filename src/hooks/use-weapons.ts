import { useQuery } from "@tanstack/react-query";
import getWeapons from "@/services/weapons";

export default function useWeapons() {
    return useQuery({
        queryKey: ["weapons"],
        queryFn: getWeapons,
    });
}
