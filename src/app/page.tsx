export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-8 text-blue-600">
          Hello World! 👋
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to your new landing page
        </p>
        <div className="space-y-4">
          <p className="text-lg">
            This is a simple, clean hello world landing page built with Next.js and Tailwind CSS.
          </p>
          <div className="mt-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
