'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const facts = [
    {
        icon: '🐛',
        title: 'Перший баг',
        description: 'У 1947 році справжня міль застрягла в комп\'ютері Mark II. Так народився термін "bug"!',
        color: 'primary',
    },
    {
        icon: '☕',
        title: 'Каватворці',
        description: 'Середній програміст випиває близько 3 чашок кави на день. Код на каві працює краще!',
        color: 'secondary',
    },
    {
        icon: '🔢',
        title: 'Магічне число',
        description: '256 = 2⁸ — максимальне значення одного байта. Тому міжнародний День програміста — 256-й день року.',
        color: 'accent',
    },
    {
        icon: '🌙',
        title: 'Нічні сови',
        description: '65% програмістів вважають себе найпродуктивнішими пізно ввечері або вночі.',
        color: 'primary',
    },
    {
        icon: '🤖',
        title: 'AI-революція',
        description: 'GitHub Copilot допомагає писати до 40% коду. Але творча робота — за людиною!',
        color: 'secondary',
    },
    {
        icon: '🎮',
        title: 'Геймери-кодери',
        description: '70% програмістів грають у відеоігри. Це розвиває логічне мислення та рефлекси!',
        color: 'accent',
    },
];

const colorClasses = {
    primary: 'border-primary/30 hover:border-primary/50',
    secondary: 'border-secondary/30 hover:border-secondary/50',
    accent: 'border-accent/30 hover:border-accent/50',
};

export default function FactsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section id="facts" className="py-20 relative" ref={ref}>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>

            <div className="container-mobile relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary font-mono text-sm mb-4 block">// цікаві факти</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Факти</span> про програмістів
                    </h2>
                    <p className="text-text-dim max-w-2xl mx-auto text-lg">
                        Дізнайся щось нове про світ програмування та тих, хто створює код!
                    </p>
                </motion.div>

                {/* Facts grid */}
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {facts.map((fact, index) => (
                        <motion.div
                            key={fact.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`glass rounded-2xl p-6 border transition-all duration-300 cursor-default ${colorClasses[fact.color as keyof typeof colorClasses]}`}
                        >
                            <motion.div
                                className="text-4xl mb-4"
                                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.4 }}
                            >
                                {fact.icon}
                            </motion.div>
                            <h3 className="text-lg font-bold mb-2">{fact.title}</h3>
                            <p className="text-text-dim text-sm leading-relaxed">{fact.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Fun counter */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="glass rounded-2xl p-8 max-w-md mx-auto">
                        <div className="text-primary font-mono text-sm mb-2">console.log(</div>
                        <div className="text-3xl sm:text-4xl font-bold mb-2">
                            <span className="gradient-text">"300,000+"</span>
                        </div>
                        <div className="text-primary font-mono text-sm mb-4">);</div>
                        <p className="text-text-dim">
                            програмістів працюють в Україні 🇺🇦
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
