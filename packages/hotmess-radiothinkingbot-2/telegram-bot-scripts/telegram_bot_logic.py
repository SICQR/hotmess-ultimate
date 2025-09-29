import telegram
from telegram.ext import Updater, CommandHandler

def start(update, context):
    update.message.reply_text("Welcome to HOTMESS Radio Bot. Use /wet /drop /confess.")

def wet(update, context):
    update.message.reply_text("Pulling a sweaty morning track...")

def drop(update, context):
    update.message.reply_text("Here’s your affiliate care package...")

def confess(update, context):
    update.message.reply_text("Confession logged. We hear you. Track incoming.")

updater = Updater("YOUR_BOT_TOKEN", use_context=True)
dp = updater.dispatcher

dp.add_handler(CommandHandler("start", start))
dp.add_handler(CommandHandler("wet", wet))
dp.add_handler(CommandHandler("drop", drop))
dp.add_handler(CommandHandler("confess", confess))

updater.start_polling()
updater.idle()