'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type EasterEggContextType = {
    foundEggs: string[];
    unlockEgg: (id: string, name: string, howToFind: string) => void;
    totalEggs: number;
};

const EasterEggContext = createContext<EasterEggContextType | undefined>(undefined);

export const EASTER_EGGS_COUNT = 12;

export function EasterEggProvider({ children }: { children: React.ReactNode }) {
    const [foundEggs, setFoundEggs] = useState<string[]>([]);
    const [lastUnlocked, setLastUnlocked] = useState<{ name: string; howToFind: string; index: number } | null>(null);

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem('ipd-2026-eggs');
        if (saved) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFoundEggs(JSON.parse(saved));
        }
    }, []);

    const unlockEgg = (id: string, name: string, howToFind: string = "Secret found!") => {
        if (!foundEggs.includes(id)) {
            const newEggs = [...foundEggs, id];
            setFoundEggs(newEggs);
            localStorage.setItem('ipd-2026-eggs', JSON.stringify(newEggs));

            // Trigger notification
            setLastUnlocked({ name, howToFind, index: newEggs.length });
            setTimeout(() => setLastUnlocked(null), 6000); // 6 seconds to read

            console.log(`🥚 Easter Egg Found: ${name}`);
        }
    };

    return (
        <EasterEggContext.Provider value={{ foundEggs, unlockEgg, totalEggs: EASTER_EGGS_COUNT }}>
            {children}
            <AnimatePresence>
                {lastUnlocked && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
                        exit={{ opacity: 0, y: 20, scale: 0.9, x: '-50%' }}
                        className="fixed bottom-8 left-1/2 z-[100] w-[90%] max-w-sm bg-surface/95 backdrop-blur-md border border-primary text-text p-0 rounded-2xl shadow-2xl overflow-hidden glow-primary"
                    >
                        <div className="bg-primary/20 p-3 flex items-center gap-3 border-b border-primary/20">
                            <div className="bg-primary text-background font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm shrink-0">
                                #{lastUnlocked.index}
                            </div>
                            <h4 className="font-bold text-primary text-lg leading-tight">Пасхалку знайдено!</h4>
                        </div>
                        <div className="p-4">
                            <h5 className="font-bold text-lg mb-1">{lastUnlocked.name}</h5>
                            <p className="text-sm text-text-dim border-l-2 border-secondary pl-3 italic">
                                {lastUnlocked.howToFind}
                            </p>
                            <div className="mt-3 text-xs text-right text-primary/70 font-mono">
                                Всього знайдено: {lastUnlocked.index}/{EASTER_EGGS_COUNT}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </EasterEggContext.Provider>
    );
}

export function useEasterEggs() {
    const context = useContext(EasterEggContext);
    if (context === undefined) {
        throw new Error('useEasterEggs must be used within a EasterEggProvider');
    }
    return context;
}
