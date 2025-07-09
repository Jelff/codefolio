import React, { useState, useEffect } from "react";

interface TypewriterEffectProps {
    texts: string[];
    speed?: number;
    delay?: number;
    deleteSpeed?: number;
    pauseTime?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
    texts,
    speed = 100,
    delay = 0,
    deleteSpeed = 50,
    pauseTime = 2000,
}) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsStarted(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!isStarted) return;

        const currentText = texts[textIndex];

        if (!isDeleting) {
            // Escrevendo
            if (currentIndex < currentText.length) {
                const timeout = setTimeout(() => {
                    setDisplayText((prev) => prev + currentText[currentIndex]);
                    setCurrentIndex((prev) => prev + 1);
                }, speed);

                return () => clearTimeout(timeout);
            } else {
                // Terminou de escrever, aguarda e começa a apagar
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseTime);

                return () => clearTimeout(timeout);
            }
        } else {
            // Apagando
            if (displayText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayText((prev) => prev.slice(0, -1));
                }, deleteSpeed);

                return () => clearTimeout(timeout);
            } else {
                // Terminou de apagar, vai para próximo texto
                setIsDeleting(false);
                setCurrentIndex(0);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        }
    }, [currentIndex, displayText, textIndex, isDeleting, texts, speed, deleteSpeed, pauseTime, isStarted]);

    return (
        <span className="inline-block">
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

export default TypewriterEffect;
