import Image from "next/image";

// src/app/page.tsx

const hands = [
  [
    "AA",
    "AKs",
    "AQs",
    "AJs",
    "ATs",
    "A9s",
    "A8s",
    "A7s",
    "A6s",
    "A5s",
    "A4s",
    "A3s",
    "A2s",
  ],
  [
    "AKo",
    "KK",
    "KQs",
    "KJs",
    "KTs",
    "K9s",
    "K8s",
    "K7s",
    "K6s",
    "K5s",
    "K4s",
    "K3s",
    "K2s",
  ],
  [
    "AQo",
    "KQo",
    "QQ",
    "QJs",
    "QTs",
    "Q9s",
    "Q8s",
    "Q7s",
    "Q6s",
    "Q5s",
    "Q4s",
    "Q3s",
    "Q2s",
  ],
  [
    "AJo",
    "KJo",
    "QJo",
    "JJ",
    "JTs",
    "J9s",
    "J8s",
    "J7s",
    "J6s",
    "J5s",
    "J4s",
    "J3s",
    "J2s",
  ],
  [
    "ATo",
    "KTo",
    "QTo",
    "JTo",
    "TT",
    "T9s",
    "T8s",
    "T7s",
    "T6s",
    "T5s",
    "T4s",
    "T3s",
    "T2s",
  ],
  [
    "A9o",
    "K9o",
    "Q9o",
    "J9o",
    "T9o",
    "99",
    "98s",
    "97s",
    "96s",
    "95s",
    "94s",
    "93s",
    "92s",
  ],
  [
    "A8o",
    "K8o",
    "Q8o",
    "J8o",
    "T8o",
    "98o",
    "88",
    "87s",
    "86s",
    "85s",
    "84s",
    "83s",
    "82s",
  ],
  [
    "A7o",
    "K7o",
    "Q7o",
    "J7o",
    "T7o",
    "97o",
    "87o",
    "77",
    "76s",
    "75s",
    "74s",
    "73s",
    "72s",
  ],
  [
    "A6o",
    "K6o",
    "Q6o",
    "J6o",
    "T6o",
    "96o",
    "86o",
    "76o",
    "66",
    "65s",
    "64s",
    "63s",
    "62s",
  ],
  [
    "A5o",
    "K5o",
    "Q5o",
    "J5o",
    "T5o",
    "95o",
    "85o",
    "75o",
    "65o",
    "55",
    "54s",
    "53s",
    "52s",
  ],
  [
    "A4o",
    "K4o",
    "Q4o",
    "J4o",
    "T4o",
    "94o",
    "84o",
    "74o",
    "64o",
    "54o",
    "44",
    "43s",
    "42s",
  ],
  [
    "A3o",
    "K3o",
    "Q3o",
    "J3o",
    "T3o",
    "93o",
    "83o",
    "73o",
    "63o",
    "53o",
    "43o",
    "33",
    "32s",
  ],
  [
    "A2o",
    "K2o",
    "Q2o",
    "J2o",
    "T2o",
    "92o",
    "82o",
    "72o",
    "62o",
    "52o",
    "42o",
    "32o",
    "22",
  ],
];

const raiseHands = [
  "AA",
  "AKs",
  "AQs",
  "AJs",
  "ATs",
  "A9s",
  "A8s",
  "A7s",
  "A6s",
  "A5s",
  "A4s",
  "A3s",
  "A2s",
  "AKo",
  "KK",
  "KQs",
  "KJs",
  "KTs",
  "K9s",
  "K8s",
  "K7s",
  "K6s",
  "K5s",
  "K4s",
  "K3s",
  "K2s",
  "AQo",
  "KQo",
  "QQ",
  "QJs",
  "QTs",
  "Q9s",
  "Q8s",
  "Q7s",
  "Q6s",
  "Q5s",
  "Q4s",
  "Q3s",
  "Q2s",
  "AJo",
  "KJo",
  "QJo",
  "JJ",
  "JTs",
  "J9s",
  "J8s",
  "J7s",
  "J6s",
  "J5s",
  "J4s",
  "J3s",
  "J2s",
  "ATo",
  "KTo",
  "QTo",
  "JTo",
  "TT",
  "T9s",
  "T8s",
  "T7s",
  "T6s",
  "T5s",
  "T4s",
  "T3s",
  "T2s",
  "99",
  "98s",
  "88",
  "87s",
  "77",
];

function getHandStyle(hand: string) {
  if (raiseHands.includes(hand)) return "bg-red-500 text-white";
  return "bg-gray-300 text-black";
}

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        プリフロップレンジ表（Raise 17.5%）
      </h1>
      <div className="grid grid-cols-13 gap-1">
        {hands.flat().map((hand, i) => (
          <div
            key={i}
            className={`text-center p-2 text-sm font-semibold rounded ${getHandStyle(
              hand
            )}`}
          >
            {hand}
          </div>
        ))}
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <span className="inline-block w-4 h-4 bg-red-500 mr-2 align-middle"></span>{" "}
        Raise（17.5%）
        <br />
        <span className="inline-block w-4 h-4 bg-gray-300 mr-2 align-middle"></span>{" "}
        Fold
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
