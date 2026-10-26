import { AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo } from "react";

import Header from "@/components/header/Header";
import Main from "@/components/Main";
import Footer from "@/components/footer/Footer";
import Input from "@/components/Input/Input";
import Category from "@/components/Category";
import SkeletonCategory from "@/components/skeletonCategory/SkeletonCategory";

import Modal from "@/components/modal";
import WeaponModal from "@/components/modals/weapon";

import useWeapons from "@/hooks/use-weapons";

export default function WeaponsPage() {
    const query = useWeapons();
    const [weaponModal, setWeaponModal] = useState(null);
    const [search, setSearch] = useState("");

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

                        {/* TODO: need to make category component pass card component as children */}
                        <AnimatePresence>
                            {query.data.map((category) => (
                                <Category
                                    name={category.name}
                                    cardsData={category.cardsData}
                                    modalFunc={setWeaponModal}
                                    key={category.id}
                                />
                            ))}
                        </AnimatePresence>
                    </>
                )}
            </Main>

            <Footer />
        </>
    );
}
