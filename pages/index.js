export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-purple-500 mb-4 text-center">
        Welcome to Revolt Hub ⚡
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 text-center max-w-xl">
        Your multipurpose digital hub for everything Fintech, Social, and Games — all in one place.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-lg">
        <a href="/fintech" className="bg-purple-600 hover:bg-purple-700 rounded-xl py-4 text-center text-white shadow-md transition">
          💸 Fintech
        </a>
        <a href="/social" className="bg-blue-600 hover:bg-blue-700 rounded-xl py-4 text-center text-white shadow-md transition">
          💬 Social
        </a>
        <a href="/games" className="bg-green-600 hover:bg-green-700 rounded-xl py-4 text-center text-white shadow-md transition">
          🎮 Games
        </a>
      </div>
    </main>
  );
}
