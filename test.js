const Telegraf=require('telegraf')

const auth=require('./auth.json')
const TOKEN=auth.token

const bot = new Telegraf(TOKEN)

bot.use((ctx, next) => {
    ctx.state.name = ctx.message.from.username
    return next()
})
  
bot.on('text', (ctx) => {
    return ctx.reply(`Hello ${ctx.state.role}`)
})
bot.launch()
