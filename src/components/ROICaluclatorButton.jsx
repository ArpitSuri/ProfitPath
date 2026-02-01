import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ROICalculatorButton = () => {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    const symbols = [
        { char: '+', dir: { y: -15, x: 0 } },  // From Top
        { char: '-', dir: { y: 0, x: 15 } },   // From Right
        { char: '=', dir: { y: 15, x: 0 } },   // From Bottom
        { char: '/', dir: { y: 0, x: -15 } },  // From Left
        { char: '*', dir: { y: -10, x: -10 } } // From Diagonal
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % symbols.length);
        }, 1500);
        return () => clearInterval(timer);
    }, []);

    return (
        <button
            onClick={() => navigate('/roi-calculator')}
            className="group px-6 py-2 border border-zinc-500/50 text-white text-[14px] cursor-pointer font-black tracking-widest rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-3 bg-transparent"
        >
            
            <span>ROI CALCULATOR</span>
            {/* Animated Icon Container */} 
            <div className="w-5 h-5 flex items-center justify-center overflow-hidden relative ">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={symbols[index].char}
                        initial={{ opacity: 0, x: symbols[index].dir.x, y: symbols[index].dir.y }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block text-lg"
                    >
                        {symbols[index].char}
                    </motion.span>
                </AnimatePresence>
            </div>

        </button>
    );
};

export default ROICalculatorButton;