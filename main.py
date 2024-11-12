import os
import telebot
from flask import Flask, request

TOKEN = '7580167697:AAGQhpoMI4Oq-WpulwP5uPMOz_edLlpWJ8Q'
APP_URL = f'https://my-app-game-ef1ec4b42519.herokuapp.com/{TOKEN}'
bot = telebot.Telebot(TOKEN)
server = Flask(__name__)

@server.route('/')
def webhook():
    bot.remove_webhook()
    bot.set_webhook(url=APP_URL)
    return '!', 200


if __name__ == '__main__':
    server.run(host='0.0.0.0', post=int(os.environ.get('PORT', 5000)))