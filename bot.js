const MyBot=require('./utilities/MyBot')
const File=require('./utilities/File')
const Session=require('./utilities/Session')

const auth=require('./auth.json')
const TOKEN=auth.token

const bot=new MyBot(TOKEN)

bot.use((ctx, next)=>{
    var message=bot.getMessage(ctx)
    var id=message.chat.id
    var session
    var group

    console.log(message.text)
    //File.log('callBackQuery.json', JSON.stringify(ctx, null, 4)+'\n')
    
    if(!bot.sessions.has(id)){
        message.chat.type==='private'? group=false : group=true

        bot.openSession(id, ctx, group)
    }
    else{
        session=bot.sessions.get(id)
        session.ctx=ctx
        session.handler(bot, id)
    }

    return next()
})

bot.start(ctx=>{
    var id=ctx.message.chat.id
    var users=bot.users
    var user
    
    if(ctx.message.chat.type==='private'){
        if(users.has(id)){
            user=File.load(bot.dirs.users, id)
            bot.sendMessage(id, `Bentornato ${user.name}`)
        }
        else{
            bot.createUser(id)
        }
    }
    else{
        //Initialization in group
    }
})
//bot.on('text', ctx=>File.log(bot.logFile, 'text: '+JSON.stringify(ctx.update, null, 4)+'\n', ctx.update))
//bot.on('text', ctx=>bot.createPG(ctx.update.message.chat.id))

bot.launch()