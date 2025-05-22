"use client";
import React, { useState } from "react";

export type Phrase = {
  id: string;
  phrase: string;
  example: string;
  translation: string;
};

export default function PhraseCard({ phrase, example, translation }: Phrase) {
  const [flipped, setFlipped] = useState(false);
  
  return (
    <div className="w-72 h-40 mb-6">
      <button 
        type="button"
        className="relative w-full h-full p-0 bg-transparent border-0 cursor-pointer focus:outline-none"
        onClick={() => setFlipped(!flipped)}
        aria-label="フレーズカード 表裏切替"
      >
        <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? 'rotate-y-180' : ''
        }`}>
          {/* 表面 */}
          <div className="absolute w-full h-full rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center p-6 [backface-visibility:hidden]">
            <div className="text-xl font-bold text-center">{phrase}</div>
          </div>
          
          {/* 裏面 */}
          <div className="absolute w-full h-full rounded-xl shadow-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="font-semibold text-center mb-2">{example}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 text-center">{translation}</div>
          </div>
        </div>
      </button>
    </div>
  );
}
