export default function Page() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">HOTMESS Admin</h1>
      <p className="opacity-80">Sign in to start bossing the airwaves.</p>
      <a href="/auth" className="inline-block px-4 py-2 rounded-xl bg-white text-black">Login</a>
    </main>
  );
}
