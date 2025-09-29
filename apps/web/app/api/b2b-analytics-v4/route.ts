export async function GET(req) {
  return new Response(JSON.stringify({
    partners: [
      { name: "ASOS", sales: 120, tier: "Gold", lastContact: "2025-09-22" },
      { name: "Amazon", sales: 80, tier: "Silver", lastContact: "2025-09-19" }
    ],
    totalRevenue: 200
  }), { 
    headers: { "Content-Type": "application/json" }
  });
}