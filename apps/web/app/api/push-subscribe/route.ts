export async function POST(req) {
  const { userId, subscription } = await req.json();
  // Store subscription in DB
  return new Response(JSON.stringify({ status: "subscribed" }), { headers: { "Content-Type": "application/json" } });
}
  } catch (error) {
    console.error("Push subscribe error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}