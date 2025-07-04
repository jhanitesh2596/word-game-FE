import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid bg-secondary-gray grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href={"/wordly"}>
        <div className="bg-white cursor-pointer hover:scale-105 transition-all flex flex-col items-center gap-3 p-3 mt-[5rem] rounded-md shadow-lg">
          <Image
            src="/wordle-icon.svg"
            alt="wordly-icon"
            width={50}
            height={50}
          />
          <h2 className="font-semibold text-2xl">Wordly</h2>
          <p>Get 6 chances to guess a 5-letter word.</p>
          <button className="bg-black px-6 cursor-pointer font-semibold py-2 text-white rounded-md">
            Play
          </button>
        </div>
      </Link>
    </div>
  );
}
