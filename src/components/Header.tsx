'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useEasterEggs } from './EasterEggContext';

export default function Header() {
    const { unlockEgg } = useEasterEggs();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [logoClicks, setLogoClicks] = useState(0);
    const pressTimer = useRef<NodeJS.Timeout | null>(null);

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setLogoClicks(prev => prev + 1);
        if (logoClicks + 1 === 5) {
            unlockEgg('logo_spin', 'Spinning Logo', 'Ви закрутили логотип 5 разів!');
        }
    };

    const handlePressStart = () => {
        pressTimer.current = setTimeout(() => {
            unlockEgg('sudo', 'Admin Mode', 'Ви утримували логотип (як справжній адмін).');
        }, 1500);
    };

    const handlePressEnd = () => {
        if (pressTimer.current) clearTimeout(pressTimer.current);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '#about', label: 'Про свято' },
        { href: '#facts', label: 'Факти' },
        { href: '#celebrate', label: 'Святкування' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong py-3' : 'py-4'
                }`}
        >
            <div className="container-mobile flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="flex items-center gap-2 text-primary font-mono text-lg font-bold select-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogoClick}
                    onMouseDown={handlePressStart}
                    onMouseUp={handlePressEnd}
                    onMouseLeave={handlePressEnd}
                    onTouchStart={handlePressStart}
                    onTouchEnd={handlePressEnd}
                    animate={logoClicks >= 5 ? { rotate: 360 } : {}}
                    transition={{ duration: 1, repeat: logoClicks >= 5 ? Infinity : 0, ease: "linear" }}
                >
                    <span className="text-2xl">{'</>'}</span>
                    <span className="hidden sm:inline">IPD 2026</span>
                </motion.a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.href}
                            href={item.href}
                            className="text-text-dim hover:text-primary transition-colors text-sm font-medium"
                            whileHover={{ y: -2 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                    <motion.a
                        href="#easter-eggs"
                        className="bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        🥚 Пасхалки
                    </motion.a>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.span
                        className="w-6 h-0.5 bg-primary rounded-full"
                        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                    />
                    <motion.span
                        className="w-6 h-0.5 bg-primary rounded-full"
                        animate={{ opacity: isOpen ? 0 : 1 }}
                    />
                    <motion.span
                        className="w-6 h-0.5 bg-primary rounded-full"
                        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                    />
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-strong mt-2 mx-4 rounded-xl overflow-hidden"
                    >
                        <div className="p-4 flex flex-col gap-3">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    className="text-text-dim hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-surface-light"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#easter-eggs"
                                className="bg-primary/10 border border-primary/30 text-primary px-4 py-3 rounded-lg text-center font-medium"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                onClick={() => setIsOpen(false)}
                            >
                                🥚 Знайти пасхалки
                            </motion.a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
