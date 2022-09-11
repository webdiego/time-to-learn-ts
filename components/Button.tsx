import { useRouter } from 'next/router';

interface TButton {
  route: string;
  title?: string;
}
export default function Button({ route, title }: TButton) {
  const router = useRouter();
  return (
    <div className="my-2">
      {title === 'Home' ? (
        <p onClick={() => router.push(`${route}`)} className="cursor-pointer text-2xl font-bold">
          🌍 Home
        </p>
      ) : (
        <button
          onClick={() => router.push(`${route}`)}
          className="bg-[#3078C6] py-2 px-4 text-white rounded-md"
        >
          {title}
        </button>
      )}
    </div>
  );
}
