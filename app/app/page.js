export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
        Rob Treese
      </h1>
      <p className="text-xl md:text-3xl mb-16 text-center max-w-3xl opacity-90">
        Builder of things that win. Automation. Scripts. Snipers. Chaos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full">
        <div className="border border-accent/30 rounded-2xl p-10 bg-background/50 backdrop-blur-lg">
          <h2 className="text-4xl font-bold mb-6 text-accent">RTX 5080 Sniper Bot</h2>
          <p className="text-lg mb-6">Live 24/7 on the server. Checks NVIDIA every 15 seconds. Gmail blast on drop.</p>
          <p className="text-sm opacity-70">Current status: <span className="text-red-500 font-bold">HUNTING</span></p>
        </div>

        <div className="border border-accent/30 rounded-2xl p-10 bg-background/50 backdrop-blur-lg">
          <h2 className="text-4xl font-bold mb-6 text-accent">More Coming Soon</h2>
          <p className="text-lg mb-6">Next-level automation tools. Stock hunters. Pure wins.</p>
          <p className="text-sm opacity-70">Stay ready.</p>
        </div>
      </div>

      <footer className="mt-24 text-center opacity-60">
        <p>robtreese.space • Built with blood, sweat, and Next.js</p>
      </footer>
    </main>
  )
}
