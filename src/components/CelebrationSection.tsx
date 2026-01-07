'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const celebrationIdeas = [
    {
        emoji: '🎂',
        title: 'Торт з кодом',
        description: 'Замов торт з улюбленим синтаксисом або логотипом мови програмування!',
    },
    {
        emoji: '🎮',
        title: 'Ігровий марафон',
        description: 'Зібратися з колегами на LAN-party або онлайн-сесію в улюблену гру.',
    },
    {
        emoji: '🍕',
        title: 'Піца-пятниця',
        description: 'Класична традиція IT-компаній — піца для всієї команди!',
    },
    {
        emoji: '🎁',
        title: 'Мерч-подарунки',
        description: 'Кружки, худі, стікери з IT-гумором — ідеальний подарунок!',
    },
    {
        emoji: '📚',
        title: 'Навчальний день',
        description: 'Витратити день на вивчення нової технології або фреймворку.',
    },
    {
        emoji: '🏠',
        title: 'Home Office Day',
        description: 'Працювати з дому в піжамі — заслужений привілей!',
    },
];

export default function CelebrationSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [selectedIdea, setSelectedIdea] = useState<number | null>(null);

    return (
        <section id="celebrate" className="py-20 relative overflow-hidden" ref={ref}>
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 7, repeat: Infinity }}
                />
            </div>

            <div className="container-mobile relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-mono text-sm mb-4 block">// святкування</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Як <span className="gradient-text">святкувати</span>?
                    </h2>
                    <p className="text-text-dim max-w-2xl mx-auto text-lg">
                        Ідеї для ідеального Дня Програміста — від класичних до креативних!
                    </p>
                </motion.div>

                {/* Ideas grid */}
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-16">
                    {celebrationIdeas.map((idea, index) => (
                        <motion.div
                            key={idea.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedIdea(selectedIdea === index ? null : index)}
                            className={`glass rounded-2xl p-6 cursor-pointer transition-all duration-300 ${selectedIdea === index
                                    ? 'ring-2 ring-primary bg-primary/5'
                                    : 'hover:bg-surface-light/50'
                                }`}
                        >
                            <motion.div
                                className="text-4xl mb-4"
                                animate={selectedIdea === index ? { scale: [1, 1.3, 1] } : {}}
                                transition={{ duration: 0.4 }}
                            >
                                {idea.emoji}
                            </motion.div>
                            <h3 className="text-lg font-bold mb-2">{idea.title}</h3>
                            <p className="text-text-dim text-sm">{idea.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Greeting card generator */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="glass rounded-2xl p-8 text-center max-w-2xl mx-auto"
                >
                    <h3 className="text-2xl font-bold mb-4">
                        🎊 Привітання дня
                    </h3>
                    <div className="code-block p-6 mb-6 text-left">
                        <pre className="font-mono text-sm sm:text-base overflow-x-auto">
                            <code>
                                <span className="text-secondary">if</span> (today === <span className="text-primary">&quot;7 січня&quot;</span>) {'{\n'}
                                {'  '}<span className="text-secondary">console</span>.<span className="text-accent">log</span>(<span className="text-primary">&quot;🎉 З Днем Програміста!&quot;</span>);{'\n'}
                                {'  '}<span className="text-secondary">return</span> happiness++;{'\n'}
                                {'}'}
                            </code>
                        </pre>
                    </div>
                    <p className="text-text-dim mb-6">
                        Поділись цим привітанням з друзями-програмістами!
                    </p>
                    <motion.button
                        className="bg-primary text-background font-semibold px-8 py-3 rounded-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            navigator.clipboard.writeText('🎉 З Днем Програміста! 7 січня — свято всіх, хто пише код! 💻🇺🇦');
                            alert('Привітання скопійовано! 🎉');
                        }}
                    >
                        📋 Скопіювати привітання
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
