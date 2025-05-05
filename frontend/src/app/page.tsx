'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState<string | null>(null);

  const getName = async () => {
    const res =  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/name/`);
    const data = await res.json()
    setName(data.name);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2 className='text-center font-[family-name:var(--font-geist-mono)]'>
          Goal: Make a website someone can visit anywhere in the world
        </h2>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        Planned Steps
          <li className=" tracking-[-.01em]">
            Get this frontend code working. DONE
          </li>
          <li className="tracking-[-.01em]">
            Add the backend. DONE
          </li>
          <li className="tracking-[-.01em]">
            Make a route that goes from frontend to backend. DONE
          </li>
          <li className='tracking-[-0.1em]'>
            Put frontend and backend on AWS. DONE
          </li>
          <li className='tracking-[-0.1em]'>
            Practice turn EC2s off, then turn them back on and see if it still works.
          </li>
          <li className='tracking-[-0.1em]'>
            See if pushing to git then pulling in EC2s wipes the .env and .env.local
          </li>
          <li className='tracking-[-0.1em]'>
            Add a reverse proxy - nginx
          </li>
          <li className='tracking-[-0.1em]'>
            Add SSL (possible a DNS)
          </li>
        </ol>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        Side Quests
          <li className=" tracking-[-.01em]">
            Add security group info to my ssh config so I can easily ssh into FE and BE EC2s
          </li>
          <li className=" tracking-[-.01em]">
            Script that replaces AWS security group allowed IPs with my current internet connection.
          </li>
          <li className=" tracking-[-.01em]">
            Manually add .env and .env.local to EC2s - automate this with CI/CD?
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
