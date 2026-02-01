import React from 'react';
import { motion } from 'framer-motion';

const TalkToUsButton = () => {
    return (
        <button className=" mt-10 group relative px-6 py-2 bg-white text-black text-[18px] font-black tracking-wider rounded-full hover:scale-105 transition-all cursor-pointer flex items-center gap-2 overflow-hidden shadow-sm">

            {/* Messaging Icon Animation */}
            <div className="relative flex items-center justify-between gap-2">
                {/* The "Ping" Ring (Pulse) */}
                {/* <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span> */}
                <span className="relative">Talk To Us</span>

                {/* The Message Icon */}
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{
                        y: [0, -2, 0],
                        rotate: [0, -10, 10, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </motion.svg>
            </div>



        </button>
    );
};

export default TalkToUsButton;