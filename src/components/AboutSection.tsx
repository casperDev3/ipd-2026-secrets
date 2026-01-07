'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const historyItems = [
    {
        year: '2006',
        title: 'Народження свята',
        description: 'День програміста в Україні вперше відзначили як неофіційне свято IT-спільноти.',
    },
    {
        year: '7 січня',
        title: 'Особлива дата',
        description: 'В Україні День програміста святкують 7 січня, символізуючи новий початок року програмування.',
    },
    {
        year: 'Сьогодні',
        title: 'IT-нація',
        description: 'Україна — один з найбільших IT-хабів Європи з понад 300,000 розробників!',
    },
];

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-20 relative" ref={ref}>
            <div className="container-mobile">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-mono text-sm mb-4 block">{/* // про свято */}</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Що таке <span className="gradient-text">День Програміста</span>?
                    </h2>
                    <p className="text-text-dim max-w-2xl mx-auto text-lg">
                        Професійне свято всіх, хто створює цифрове майбутнє — від розробників до DevOps інженерів, від дизайнерів до тестувальників.
                    </p>
                </motion.div>

                {/* Info cards */}
                <div className="grid gap-6 md:grid-cols-2 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass rounded-2xl p-6 sm:p-8"
                    >
                        <div className="text-4xl mb-4">🇺🇦</div>
                        <h3 className="text-xl font-bold mb-3 text-primary">Українське IT</h3>
                        <p className="text-text-dim">
                            Україна займає 4-те місце у світі за кількістю сертифікованих IT-спеціалістів.
                            Наші розробники працюють в найбільших tech-компаніях світу!
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="glass rounded-2xl p-6 sm:p-8"
                    >
                        <div className="text-4xl mb-4">💻</div>
                        <h3 className="text-xl font-bold mb-3 text-secondary">Код — це мистецтво</h3>
                        <p className="text-text-dim">
                            Кожен день програмісти пишуть мільйони рядків коду, створюючи застосунки,
                            ігри, веб-сайти та системи, що змінюють світ.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
                >
                    <h3 className="text-2xl font-bold text-center mb-10">
                        <span className="text-primary font-mono">{'<'}</span>
                        Історія свята
                        <span className="text-primary font-mono">{'/>'}</span>
                    </h3>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

                        {historyItems.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                                className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-primary rounded-full glow-primary z-10" />

                                {/* Content */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                                    }`}>
                                    <div className="glass rounded-xl p-5">
                                        <span className="text-primary font-mono font-bold text-lg">{item.year}</span>
                                        <h4 className="text-lg font-semibold mt-1 mb-2">{item.title}</h4>
                                        <p className="text-text-dim text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
