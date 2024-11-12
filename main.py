import os
import telebot
from flask import Flask, render_template, request

TOKEN = '7580167697:AAGQhpoMI4Oq-WpulwP5uPMOz_edLlpWJ8Q'
APP_URL = f'https://my-app-game-ef1ec4b42519.herokuapp.com/{TOKEN}'
bot = telebot.TeleBot(TOKEN)
server = Flask(__name__)

app = Flask(__name__, template_folder='.')

@app.route("/")
def web():
    return render_template('index.html')


@server.route('/' + TOKEN, methods=['POST'])
def get_message():
    json_string = request.get_data().decode('utf-8')
    update = telebot.types.Update.de_json(json_string)
    bot.process_new_updates([update])
    return '!', 200


@server.route('/')
def webhook():
    bot.remove_webhook()
    bot.set_webhook(url=APP_URL)
    return '!', 200


if __name__ == '__main__':
    server.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))