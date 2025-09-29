import LuxButton from "@/components/LuxButton";

export default function CustomLanding() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="relative text-center">
        <h1 className="text-6xl font-black text-orange-glow drop-shadow-glow mb-6">Welcome to HOTMESS PRO</h1>
        <p className="text-gray-300 mb-8">Premium features. Unlimited possibilities.</p>
        <LuxButton onClick={() => window.location.href = '/admin/b2b-dashboard'}>
          Enter Dashboard
        </LuxButton>
      </div>
    </main>
  );
}