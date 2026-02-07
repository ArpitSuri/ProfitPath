import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AnimatedCalcButton = () => {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    const symbols = [
        { char: '+', dir: { y: -20, x: 0 } },  // From Top
        { char: '-', dir: { y: 0, x: 20 } },   // From Right
        { char: '=', dir: { y: 20, x: 0 } },   // From Bottom
        { char: '/', dir: { y: 0, x: -20 } },  // From Left
        { char: '*', dir: { y: -15, x: -15 } } // From Diagonal
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % symbols.length);
        }, 800); // Changes every 1.5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <button
            onClick={() => { navigate('/roi-calculator'); }}
            className="w-8 h-8 rounded-full border border-gray-900 flex items-center justify-center text-lg bg-gray-200 shadow-sm overflow-hidden"
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={symbols[index].char}
                    initial={{ opacity: 0, x: symbols[index].dir.x, y: symbols[index].dir.y }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                    className="text-gray-600 font-extrabold font-serif"
                >
                    {symbols[index].char}
                </motion.span>
            </AnimatePresence>
        </button>
    );
};

export default AnimatedCalcButton;