import { useState } from "react";
import Loader from "@/components/Loader";

interface ImageContainerProps {
    alt: string;
    url: string;
}

export default function ImageContainer({ alt, url }: ImageContainerProps) {
    const [isLoaded, setLoaded] = useState(false);

    return (
        <div
            className="flex flex-col items-center gap-[10px] w-full"
            id="image-container"
        >
            <img
                className="object-contain h-[140px]"
                src={url}
                alt={`${alt} image`}
                hidden={!isLoaded}
                onLoad={() => setLoaded(true)}
            />

            {!isLoaded && <Loader />}
        </div>
    );
}
