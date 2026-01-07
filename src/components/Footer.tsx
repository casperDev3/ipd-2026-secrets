'use client';

import { motion } from 'framer-motion';
import { useEasterEggs } from './EasterEggContext';
import { useState } from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { foundEggs, totalEggs, unlockEgg } = useEasterEggs();
    const [binaryMode, setBinaryMode] = useState(false);
    const [glitchClicks, setGlitchClicks] = useState(0);

    const handleCopyrightHover = () => {
        setBinaryMode(true);
        unlockEgg('binary', 'Binary decoder', 'Ви розшифрували бінарний копірайт!');
    };

    const handleTitleClick = () => {
        setGlitchClicks(prev => prev + 1);
        if (glitchClicks + 1 === 7) {
            unlockEgg('glitch', 'Glitch in the Matrix', 'Ви натиснули на заголовок 7 разів та зламали систему.');
        }
    };

    return (
        <footer className="py-12 border-t border-border relative">
            <div className="container-mobile">
                {/* Main footer content */}
                <div className="text-center mb-8">
                    <motion.div
                        className="text-4xl mb-4 inline-block cursor-grab active:cursor-grabbing"
                        whileHover={{ rotate: 360 }}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        onDragEnd={() => unlockEgg('drag_logo', 'Thinking outside the box', 'Ви спробували вкрасти логотип, перетягнувши його!')}
                    >
                        {'</>'}
                    </motion.div>
                    <h3
                        className={`text-xl font-bold mb-2 select-none cursor-pointer ${glitchClicks >= 7 ? 'animate-pulse text-red-500' : ''}`}
                        onClick={handleTitleClick}
                    >
                        {glitchClicks >= 7 ? 'S¥SŦEM FAT∆L 3RR0R' : (
                            <>День Програміста <span className="text-primary">2026</span></>
                        )}
                    </h3>
                    <p className="text-text-dim text-sm">
                        Зроблено з ❤️ та ☕ в Україні 🇺🇦
                    </p>
                </div>

                {/* Social hints */}
                <div className="flex justify-center gap-4 mb-8">
                    {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                        <motion.button
                            key={social}
                            className="glass px-4 py-2 rounded-lg text-text-dim text-sm hover:text-primary transition-colors"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {social}
                        </motion.button>
                    ))}
                </div>

                {/* Easter egg hint */}
                <motion.div
                    id="easter-eggs"
                    className="glass rounded-xl p-6 max-w-md mx-auto text-center mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-2xl mb-2">🥚</div>
                    <h4 className="font-bold mb-2">Пасхалки</h4>
                    <p className="text-text-dim text-sm mb-4">
                        Знайдено: <span className="text-primary font-bold text-lg">{foundEggs.length}</span> / {totalEggs}
                        <br />
                        {foundEggs.length === totalEggs ? '🎉 ТИ ГЕНІЙ КОДУ! 🎉' : 'Шукай уважніше!'}
                    </p>
                    <div className="flex justify-center gap-2 flex-wrap">
                        {Array.from({ length: totalEggs }).map((_, i) => {
                            const isFound = i < foundEggs.length;
                            return (
                                <motion.div
                                    key={i}
                                    className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs transition-colors duration-500 ${isFound
                                            ? 'bg-primary border-primary text-background font-bold'
                                            : 'bg-surface-light border-border text-text-dim'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    initial={false}
                                    animate={isFound ? { rotate: [0, 360], scale: [1, 1.5, 1] } : {}}
                                >
                                    {isFound ? '✓' : '?'}
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Copyright */}
                <div className="text-center text-text-dim text-xs" onClick={handleCopyrightHover} onMouseEnter={handleCopyrightHover} onMouseLeave={() => setBinaryMode(false)}>
                    <p className="font-mono cursor-pointer hover:text-primary transition-colors">
                        {binaryMode
                            ? '01001001 01010000 01000100 00101101 00110010 00110000 00110010 00110110'
                            : `© ${currentYear} IPD-2026-Secrets | v1.0.0`
                        }
                    </p>
                    <p
                        className="mt-2 opacity-50 font-mono hover:opacity-100 cursor-pointer hover:text-primary transition-all"
                        onClick={() => unlockEgg('console', 'Console Master', 'Ви натиснули на емуляцію консолі.')}
                    >
                        console.log(&quot;Happy Programmer&apos;s Day!&quot;);
                    </p>
                </div>
            </div>
        </footer>
    );
}
