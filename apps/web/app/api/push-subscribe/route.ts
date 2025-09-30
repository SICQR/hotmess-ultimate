export async function POST(req: Request) {
  try {
    const { userId, subscription } = await req.json();
    // Store subscription in DB
    return Response.json({ status: "subscribed" });
  } catch (error) {
    console.error("Push subscribe error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
