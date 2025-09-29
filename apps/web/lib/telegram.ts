export async function sendTelegramMessage(text: string, eventType: string = "info") {
  const token = process.env.TELEGRAM_BOT_TOKEN!;
  const chatId = process.env.NEXT_PUBLIC_TG_ANNOUNCE_CHANNEL!;
  
  if (!token || !chatId) {
    console.warn("Telegram bot not configured - missing token or chat ID");
    return;
  }

  let emoji = "ℹ️";
  if (eventType === "sale") emoji = "💸";
  if (eventType === "payout") emoji = "💰";
  if (eventType === "leaderboard") emoji = "🏆";
  if (eventType === "signup") emoji = "🆕";
  if (eventType === "milestone") emoji = "🎯";

  const message = `${emoji} HOTMESS ${eventType.toUpperCase()}\n\n${text}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
        disable_web_page_preview: true
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }

    const result = await response.json();
    console.log("Telegram message sent successfully:", result);
    return result;
  } catch (error) {
    console.error("Failed to send Telegram message:", error);
    throw error;
  }
}

export async function sendAffiliateAlert(type: "sale" | "payout" | "milestone", data: any) {
  let message = "";
  
  switch (type) {
    case "sale":
      message = `🛍️ **SALE TRACKED**\nAffiliate: \`${data.ref}\`\nAmount: £${data.amount}\nProduct: ${data.product}`;
      break;
    case "payout":
      message = `💰 **PAYOUT PROCESSED**\nAffiliate: \`${data.ref}\`\nAmount: £${data.amount}\nStatus: ${data.status}`;
      break;
    case "milestone":
      message = `🎯 **MILESTONE REACHED**\nAffiliate: \`${data.ref}\`\nAchievement: ${data.milestone}\nTotal Sales: £${data.total}`;
      break;
  }
  
  return sendTelegramMessage(message, type);
}