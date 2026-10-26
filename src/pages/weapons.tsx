import { AnimatePresence } from "motion/react";
import { useState, useMemo } from "react";

import Header from "@/components/header/Header";
import Main from "@/components/Main";
import Footer from "@/components/footer/Footer";
import Input from "@/components/Input/Input";
import { Category } from "@/components/category";
import { Card } from "@/components/card";
import SkeletonCategory from "@/components/skeletonCategory/SkeletonCategory";

import Modal from "@/components/modal";
import WeaponModal from "@/components/modals/weapon";

import useWeapons from "@/hooks/use-weapons";
import { WeaponModalData } from "@/types/weaponModal";

export default function WeaponsPage() {
    const query = useWeapons();
    const [search, setSearch] = useState("");
    const [weaponModal, setWeaponModal] = useState<WeaponModalData | null>(
        null,
    );

    const filteredQueryData = useMemo(() => {
        if (!query.data) {
            return [];
        }

        if (!search.trim()) {
            return query.data;
        }

        return query.data
            .map((category) => ({
                ...category,
                cardsData: category.cardsData.filter((weapon) =>
                    weapon.name.toLowerCase().includes(search.toLowerCase()),
                ),
            }))
            .filter((category) => category.cardsData.length > 0);
    }, [query.data, search]);

    return (
        <>
            <AnimatePresence>
                {weaponModal && (
                    <Modal
                        additionalClasses="pt-[100px]"
                        onClose={() => {
                            setWeaponModal(null);
                        }}
                    >
                        <WeaponModal
                            modalData={weaponModal}
                            closeFunc={() => {
                                setWeaponModal(null);
                            }}
                        />
                    </Modal>
                )}
            </AnimatePresence>

            <Header />

            <Main>
                {query.isPending && <SkeletonCategory />}

                {query.isSuccess && (
                    <>
                        <Input
                            placeholder="Search in weapons"
                            onChange={(value) => {
                                setSearch(value);
                            }}
                        />

                        <AnimatePresence>
                            {filteredQueryData.map((category) => (
                                <Category
                                    key={category.id}
                                    title={category.name}
                                >
                                    {category.cardsData.map((card) => (
                                        <Card
                                            key={card.id}
                                            title={card.name}
                                            imageUrl={card.imageUrl}
                                            onClick={() => {
                                                setWeaponModal(card.modalData);
                                            }}
                                        />
                                    ))}
                                </Category>
                            ))}
                        </AnimatePresence>
                    </>
                )}
            </Main>

            <Footer />
        </>
    );
}
