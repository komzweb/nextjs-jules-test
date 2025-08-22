"use client";
import { useState, useEffect } from "react";
import PhraseCard from "./PhraseCard";
import { phrases } from "./phrases";
import type { Phrase } from "./PhraseCard";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPhrases, setFilteredPhrases] = useState<Phrase[]>(phrases);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = phrases.filter(item =>
      item.phrase.toLowerCase().includes(lowercasedQuery) ||
      item.example.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredPhrases(filtered);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-gradient-blue-purple">英語定型句100</h1>
        <div className="mb-12 flex justify-center">
          <input
            type="text"
            placeholder="英語で検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredPhrases.map((item) => (
            <PhraseCard key={item.id} {...item} />
          ))}
        </div>
        <footer className="mt-20 mb-8 text-center text-gray-500 dark:text-gray-400 text-xs">
          © {new Date().getFullYear()} 英語定型句100
        </footer>
      </div>
    </div>
  );
}
