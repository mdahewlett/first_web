'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState<string | null>(null);

  const getName = async () => {
    const res =  await fetch('/api/name');
    const data = await res.json()
    setName(data.name);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className=" tracking-[-.01em]">
            Get this frontend code working.
          </li>
          <li className="tracking-[-.01em]">
            Add the backend.
          </li>
          <li className="tracking-[-.01em]">
            Make a route that goes from frontend to backend.
          </li>
        </ol>

        <button
          onClick={getName}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Get name
        </button>

        {name && <p className='mt-4 text-lg font-semibold'>{name}</p>}
      </main>
    </div>
  );
}
