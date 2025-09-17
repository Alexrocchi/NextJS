
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1>Hello world!</h1>
      <h2 className="font-luckiest-guy">Welcome to my app built with Next.js!</h2>

      <div className="mt-24 flex gap-4">
        <Link
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          href="/todos"
        >
          Go to Todos App
        </Link>
      </div>
    </main>
  );
}
