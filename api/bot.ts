import {Bot, webhookCallback} from "grammy";
import {utils} from "./utils";

const token = "6648912671:AAE3CGAZKkuoBnYSgKnA3XPd8zknYQY3zSk";
if (!token) throw new Error("BOT_TOKEN is unset");

const bot = new Bot(token);

bot.use(utils);

bot.start();
export default webhookCallback(bot, "std/http");