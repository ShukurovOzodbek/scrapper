import {Composer} from "grammy";

export const utils = new Composer();

utils.on('message', async (ctx) => {
    const message: any = ctx.message.text;
    
    await ctx.reply(message)
});