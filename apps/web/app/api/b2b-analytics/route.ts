export async function GET(req: Request) {
  try {
    const analyticsData = {
      partners: [
        {
          name: "Selfridges",
          sales: 95000,
          tier: "Gold",
          lastContact: "2025-09-25",
          revenue: 14250,
          commissionRate: 15
        },
        {
          name: "Urban Outfitters",
          sales: 45000,
          tier: "Bronze",
          lastContact: "2025-09-20",
          revenue: 4500,
          commissionRate: 10
        },
        {
          name: "Harrods",
          sales: 150000,
          tier: "Platinum",
          lastContact: "2025-09-28",
          revenue: 30000,
          commissionRate: 20
        }
      ],
      totalRevenue: 490000,
      monthlyGrowth: 23.5,
      activeDeals: 12
    };

    return Response.json(analyticsData, {
      headers: {
        'Cache-Control': 'public, max-age=300'
      }
    });
  } catch (error) {
    console.error("B2B Analytics API error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
