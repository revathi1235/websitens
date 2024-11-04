// src/useAOS.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false,    // Allows the animation to trigger multiple times
        });

        const handleScroll = () => {
            AOS.refresh(); // Refresh AOS on scroll
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};

export default useAOS;
