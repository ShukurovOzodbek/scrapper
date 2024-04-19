import {Bot} from "grammy";

const bot = new Bot("6648912671:AAE3CGAZKkuoBnYSgKnA3XPd8zknYQY3zSk");

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running bitch."));
bot.on("message", (ctx) => ctx.reply("Got another message!"));

bot.start();