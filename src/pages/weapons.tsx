import { AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo } from "react";

import Header from "../components/header/Header";
import Main from "../components/Main";
import Footer from "../components/footer/Footer";
import Category from "../components/Category";
import SkeletonCategory from "../components/skeletonCategory/SkeletonCategory";
import WeaponModal from "@/components/modals/weapon";
import ErrorPlaceholder from "@/components/error-placeholder";

import AdaptiveModal from "@/components/adaptiveModal/modal";
import ModalWrapper from "@/components/modals/wrapper";
import Input from "../components/Input/Input";

import useWeaponCategories from "@/hooks/useWeaponCategories";
import useWeapons from "@/hooks/useWeapons";
import getWeapons from "../services/weapons";

export default function WeaponsPage() {
    const weaponsQuery = useWeapons();
    const categoriesQuery = useWeaponCategories();

    const [weaponsData, setWeaponsData] = useState([]);
    const [weaponModal, setWeaponModal] = useState(null);
    const [search, setSearch] = useState("");

    return (
        <>
            <AnimatePresence>
                {weaponModal && (
                    <AdaptiveModal
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
                    </AdaptiveModal>
                )}
            </AnimatePresence>

            <Header />

            <Main>
                {(weaponsQuery.isPending || categoriesQuery.isPending) && (
                    <SkeletonCategory />
                )}

                {weaponsQuery.isError && (
                    <ErrorPlaceholder message={weaponsQuery.error.message} />
                )}

                {categoriesQuery.isError && (
                    <ErrorPlaceholder message={categoriesQuery.error.message} />
                )}

                <AnimatePresence>
                    {weaponsQuery.isSuccess && categoriesQuery.isSuccess && (
                        <>
                            <Input
                                placeholder="Search in weapons"
                                onChange={(value) => {
                                    setSearch(value);
                                }}
                            />
                        </>
                    )}
                </AnimatePresence>
            </Main>

            <Footer />
        </>
    );
}
