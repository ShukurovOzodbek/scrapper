import {Bot} from "grammy";
import {utils} from "./utils";

const bot = new Bot("6648912671:AAE3CGAZKkuoBnYSgKnA3XPd8zknYQY3zSk");


bot.use(utils);

bot.start();
