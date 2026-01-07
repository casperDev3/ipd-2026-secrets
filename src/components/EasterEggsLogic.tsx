'use client';

import { useEffect, useState } from 'react';
import { useEasterEggs } from './EasterEggContext';

export default function EasterEggsLogic() {
    const { unlockEgg } = useEasterEggs();
    const [keys, setKeys] = useState<string[]>([]);

    useEffect(() => {
        // Keyboard Konami
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

        const handleKeyDown = (e: KeyboardEvent) => {
            setKeys((prev) => {
                const newKeys = [...prev, e.key].slice(-10);
                if (JSON.stringify(newKeys) === JSON.stringify(konamiCode)) {
                    unlockEgg('konami', 'Konami Code', 'Ви ввели Konami Code!');
                }
                return newKeys;
            });
        };
        window.addEventListener('keydown', handleKeyDown);

        // Mobile Swipe Konami
        let touchStartX = 0;
        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        };
        const handleTouchEnd = (e: TouchEvent) => {
            const diffX = e.changedTouches[0].screenX - touchStartX;
            const diffY = e.changedTouches[0].screenY - touchStartY;
            let swipe = '';
            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (Math.abs(diffX) > 30) swipe = diffX > 0 ? 'ArrowRight' : 'ArrowLeft';
            } else {
                if (Math.abs(diffY) > 30) swipe = diffY > 0 ? 'ArrowDown' : 'ArrowUp';
            }
            if (swipe) {
                setKeys(prev => {
                    const newKeys = [...prev, swipe].slice(-10);
                    const konamiMobile = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
                    if (JSON.stringify(newKeys.slice(-6)) === JSON.stringify(konamiMobile)) {
                        unlockEgg('konami', 'Konami Code (Swipe)', 'Ви виконали секретні свайпи!');
                    }
                    return newKeys;
                });
            }
        };
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        // Selection
        const handleSelection = () => {
            if (window.getSelection()?.toString().includes('День Програміста')) {
                unlockEgg('selection', 'Selection Master', 'Ви виділили правильний текст!');
            }
        };
        document.addEventListener('selectionchange', handleSelection);

        // Console
        (window as any).unlockConsoleEgg = () => {
            unlockEgg('console', 'Console Master', 'Ви знайшли секрет у консолі.');
            return "Access Granted 🔓";
        };

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
            document.removeEventListener('selectionchange', handleSelection);
        };
    }, [unlockEgg, keys]);

    return null;
}
