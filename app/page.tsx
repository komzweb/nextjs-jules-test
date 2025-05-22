import PhraseCard from "./PhraseCard";
import { phrases } from "./phrases";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">英語定型句カード100選</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {phrases.map((item) => (
            <PhraseCard key={item.id} {...item} />
          ))}
        </div>
        <footer className="mt-20 mb-8 text-center text-gray-500 dark:text-gray-400 text-xs">
          © {new Date().getFullYear()} 英語定型句カード
        </footer>
      </div>
    </div>
  );
}
