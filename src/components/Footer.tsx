'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border relative">
            <div className="container-mobile">
                {/* Main footer content */}
                <div className="text-center mb-8">
                    <motion.div
                        className="text-4xl mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                    >
                        {'</>'}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">
                        День Програміста <span className="text-primary">2026</span>
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
                        На цьому сайті заховано <span className="text-primary font-bold">12 пасхалок!</span>
                        <br />
                        Знайдеш їх усі?
                    </p>
                    <div className="flex justify-center gap-2 flex-wrap">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-6 h-6 rounded-full bg-surface-light border border-border flex items-center justify-center text-xs"
                                whileHover={{ scale: 1.2, borderColor: 'var(--primary)' }}
                            >
                                ?
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Copyright */}
                <div className="text-center text-text-dim text-xs">
                    <p className="font-mono">
                        © {currentYear} IPD-2026-Secrets |
                        <span className="text-primary"> v1.0.0</span>
                    </p>
                    <p className="mt-2 opacity-50">
                        console.log(&quot;Happy Programmer&apos;s Day!&quot;);
                    </p>
                </div>
            </div>
        </footer>
    );
}
