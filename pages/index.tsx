export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-900">Welcome to eDiscoveryQC</h1>
        <p className="text-gray-600 mt-4">A modern toolkit for litigation support and review QC professionals.</p>
        <a href="/dashboard" className="inline-block mt-6 px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">Go to Dashboard</a>
      </div>
    </main>
  );
}
