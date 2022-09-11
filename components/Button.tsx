import React from 'react';
import { useRouter } from 'next/router';
interface TButton {
  route: string;
  title: string;
}
export default function Button({ route, title }: TButton) {
  const router = useRouter();
  return (
    <div className="m-2">
      <button
        onClick={() => router.push(`${route}`)}
        className="bg-[#3078C6] py-2 px-4 text-white rounded-md"
      >
        {title}
      </button>
    </div>
  );
}
