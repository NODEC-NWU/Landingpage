import { useState, useEffect } from 'react';

const BackgroundColorFetcher = () => {
    const [bgColor, setBgColor] = useState('');

    useEffect(() => {
        const getBackgroundColorAtPoint = (event: MouseEvent) => {
            const x = event.clientX; // Mausposition X
            const y = event.clientY; // Mausposition Y

            const elementAtPoint = document.elementFromPoint(x, y);

            if (elementAtPoint) {
                const style = getComputedStyle(elementAtPoint);
                setBgColor(style.backgroundColor); // Hintergrundfarbe des Elements abfragen
            }
        };

        // Event-Listener für Mausbewegung
        window.addEventListener('mousemove', getBackgroundColorAtPoint);

        // Aufräumen: Event-Listener entfernen, wenn die Komponente unmontiert wird
        return () => {
            window.removeEventListener('mousemove', getBackgroundColorAtPoint);
        };
    }, []);

    return (
        <div>
            <h1>Bewege die Maus, um die Hintergrundfarbe zu sehen</h1>
            <p>Aktuelle Hintergrundfarbe: {bgColor}</p>
        </div>
    );
};

export default BackgroundColorFetcher;
