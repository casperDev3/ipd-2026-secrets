'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const codeLines = [
    'function celebrate() {',
    '  const day = "7 січня";',
    '  const event = "День Програміста";',
    '  return 🎉;',
    '}',
];

export default function Hero() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            if (current < codeLines.length) {
                setDisplayedLines(prev => [...prev, codeLines[current]]);
                current++;
            } else {
                clearInterval(interval);
            }
        }, 400);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
            </div>

            <div className="container-mobile relative z-10">
                <div className="text-center">
                    {/* Date badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6"
                    >
                        <span className="text-primary font-mono text-sm">📅 7 січня 2026</span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                    >
                        <span className="gradient-text">День</span>
                        <br />
                        <span className="text-text">Програміста</span>
                        <motion.span
                            className="inline-block ml-2"
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                        >
                            🎉
                        </motion.span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-text-dim text-lg sm:text-xl max-w-md mx-auto mb-8"
                    >
                        Святкуємо професійне свято всіх, хто пише код в Україні! 🇺🇦
                    </motion.p>

                    {/* Code animation block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="code-block p-4 sm:p-6 text-left max-w-sm mx-auto mb-8 animate-float"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-accent" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-primary" />
                        </div>
                        <div className="font-mono text-sm sm:text-base space-y-1">
                            {displayedLines.map((line, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-text-dim"
                                >
                                    <span className="text-text-dim/50 mr-3">{index + 1}</span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: line
                                                .replace(/function|const|return/g, '<span class="text-secondary">$&</span>')
                                                .replace(/"[^"]*"/g, '<span class="text-primary">$&</span>')
                                                .replace(/🎉/g, '<span class="text-xl">🎉</span>')
                                        }}
                                    />
                                </motion.div>
                            ))}
                            <motion.span
                                className="inline-block w-2 h-5 bg-primary ml-6"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.a
                            href="#about"
                            className="bg-primary text-background font-semibold px-8 py-4 rounded-xl glow-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Дізнатися більше
                        </motion.a>
                        <motion.a
                            href="#easter-eggs"
                            className="border border-primary/30 text-primary font-semibold px-8 py-4 rounded-xl hover:bg-primary/10 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            🥚 Знайти пасхалки
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
                    <motion.div
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
