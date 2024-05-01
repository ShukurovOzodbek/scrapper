import {Bot, webhookCallback} from "grammy";

const token = "6648912671:AAE3CGAZKkuoBnYSgKnA3XPd8zknYQY3zSk";
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token);

export default webhookCallback(bot, "std/http");