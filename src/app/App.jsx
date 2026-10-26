import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import WeaponsPage from "../pages/weapons";
import AgentsPage from "../pages/Agents";
import SkinsPage from "../pages/Skins";

/**
 * z-0 - Main component
 * z-10 - Header component
 * z-15 - Modal background
 * z-20 - Modal component
 */

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<WeaponsPage />} />
                <Route path="/agents" element={<AgentsPage />} />
                <Route path="/skins" element={<SkinsPage />} />
            </Routes>
        </QueryClientProvider>
    );
}
