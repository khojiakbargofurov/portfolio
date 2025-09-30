import { useState, useEffect } from 'react';

export const useTypingEffect = (words, { typeSpeed = 150, deleteSpeed = 100, delay = 1500 } = {}) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                if (charIndex > 0) {
                    setText(currentWord.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            } else {
                if (charIndex < currentWord.length) {
                    setText(currentWord.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            }
        };

        const speed = isDeleting ? deleteSpeed : typeSpeed;
        const typingTimeout = setTimeout(handleTyping, speed);

        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, charIndex, wordIndex, words, typeSpeed, deleteSpeed, delay]);

    return text;
};
