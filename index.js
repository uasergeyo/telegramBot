const axios = require('axios');
var TelegramBot = require('node-telegram-bot-api');

var token = '1292690273:AAEcUwj4uz9ANX4VCpx79qSujWRHKad2FzA';
var bot = new TelegramBot(token, { polling: true });
var express = require('express');
var app = express();

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);

});

bot.on('message', (msg) => {
    if (msg.text.toString().toLowerCase().indexOf("привет") === 0) {
        bot.sendMessage(msg.chat.id, "Привет рад видеть.");
    }
});


bot.onText(/\/work/,(msg) => {
    bot.sendPhoto(msg.chat.id,'./images/work.png',{caption:"https://www.work.ua/ru/jobs-kharkiv-junior+javascript+developer/?advs=1"})
})

bot.onText(/\/dou/,(msg) => {
    bot.sendPhoto(msg.chat.id,"./images/dou.png",{caption:"https://jobs.dou.ua/vacancies/?category=Front%20End&exp=0-1"})
})

bot.onText(/\/about_me/,(msg) => {
    bot.sendPhoto(msg.chat.id,"./images/job.jpg",{caption:"Если есть идеи, как улучшить бота пишите в чат. GIT: git@github.com:uasergeyo/telegramBot.git"})
})

bot.onText(/\/jooble/,(msg) => {
    bot.sendPhoto(msg.chat.id,"./images/jooble.jpg",{caption:"https://ua.jooble.org/работа-junior-fullstack-javascript/Харьков"})
})

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, `Привет ${msg.from.first_name} рад видеть тебя. Здесь ты можешь просмотреть свежие вакансии для FullStack разработчиков с минимальными навыками`, {
        "reply_markup": {
            "keyboard": [["/work", "/dou"],["/jooble","/about_me"]],
            "resize_keyboard":true,
        }
    });

});