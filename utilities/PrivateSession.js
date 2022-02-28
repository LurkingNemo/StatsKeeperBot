const Markup=require('telegraf/markup')

const Session=require('./Session')

class PrivateSession extends Session{
    constructor(key, ctx){
        super(key, ctx)

        this.newName
    }

    handler(bot, id){
        var keyboard

        if(this.wait){
            switch(this.type){
                case Session.types.newUser:
                    if(this.ctx.updateType==='message' && this.equals(this.ctx.updateSubTypes, ['text'])){
                        keyboard=Markup.inlineKeyboard([
                            {text: 'Si', callback_data: 'yes'},
                            {text: 'No', callback_data: 'no'}
                        ])

                        bot.sendMessage(this.key, 'Sei Sicuro?', {reply_markup: keyboard})

                        this.newName=this.ctx.message.text
                        this.type=Session.types.confirmUser
                    }
                break;
                case Session.types.confirmUser:
                    if(this.ctx.updateType==='callback_query'){
                        if(this.ctx.update.callback_query.data==='yes'){
                            this.wait=false

                            bot.saveUser(this.newName, this.key)
                            bot.closeSession(this.key)
                        }
                        else if(this.ctx.update.callback_query.data==='no'){
                            bot.createUser(this.key)
                        }
                    }
                break;
                default:
                break;
            }
        }
        else{
            switch(this.type){
                default:
                break;
            }
        }
    }
}

module.exports=PrivateSession