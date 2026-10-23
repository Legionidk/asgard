import ScrollContainer from "./scroll-container";
import InfoWrapper from "./info-wrapper";

import ModalTitle from "../modal-title";
import ImagesWrapper from "./images-wrapper";
import ImageContainer from "./image-container";
import ModalBlock from "../modal-block";
import ModalBlockInfo from "../modal-block-info";
import DamageTable from "./damage-table";

import CreditsIcon from "@/assets/creditsIcon.webp";
import { WeaponModalData } from "@/types/weaponModal";

const modalClasses =
    "flex flex-col size-full bg-[#211E1F] overflow-hidden rounded-t-[16px] md:h-fit md:max-h-full md:mx-[20px] xl:w-[1160px]";

type WeaponModalProps = {
    modalData: WeaponModalData;
    closeFunc: () => void;
};

export default function WeaponModal({
    modalData,
    closeFunc,
}: WeaponModalProps) {
    return (
        <div className={modalClasses}>
            <ModalTitle
                title={modalData.name}
                subTitle={modalData.category}
                closeFunc={closeFunc}
            />
            <ScrollContainer>
                <ImagesWrapper>
                    {modalData.images.map((image) => (
                        <ImageContainer
                            key={image.url}
                            alt={image.name}
                            url={image.url}
                        />
                    ))}
                </ImagesWrapper>

                <InfoWrapper>
                    <ModalBlock iconUrl={CreditsIcon} title={modalData.cost} />

                    {modalData.generalData && (
                        <ModalBlock title="General">
                            {modalData.generalData.map((data) => (
                                <ModalBlockInfo
                                    name={data.name}
                                    value={data.value}
                                />
                            ))}
                        </ModalBlock>
                    )}

                    {modalData.primaryFireData && (
                        <ModalBlock title="Primary fire">
                            {modalData.primaryFireData.map((data) => (
                                <ModalBlockInfo
                                    name={data.name}
                                    value={data.value}
                                />
                            ))}
                        </ModalBlock>
                    )}

                    {modalData.altFireData && (
                        <ModalBlock
                            title={`Alternative fire - ${modalData.altFireData.type}`}
                        >
                            {modalData.altFireData.data.map((data) => (
                                <ModalBlockInfo
                                    name={data.name}
                                    value={data.value}
                                />
                            ))}
                        </ModalBlock>
                    )}

                    {modalData.damageData && (
                        <ModalBlock title="Damage" padding={false}>
                            <DamageTable data={modalData.damageData} />
                        </ModalBlock>
                    )}
                </InfoWrapper>
            </ScrollContainer>
        </div>
    );
}
