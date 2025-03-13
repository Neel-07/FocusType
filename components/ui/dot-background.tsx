'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const DotBackground = () => {
  const rows = 20;
  const cols = 20;

  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute h-full w-full dark:bg-black bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full relative">
            {Array.from({ length: rows }).map((_, i) => (
              <div key={i} className="flex justify-around w-full absolute">
                {Array.from({ length: cols }).map((_, j) => (
                  <motion.div
                    key={`${i}-${j}`}
                    className="h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-800"
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      y: [-10, 0, 10],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: (i + j) * 0.1,
                    }}
                    style={{
                      top: `${(i / rows) * 100}%`,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};