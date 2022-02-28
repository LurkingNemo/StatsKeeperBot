const Session=require('./Session')

class GroupSession extends Session{
    constructor(key, ctx){
        super(key, ctx)
    }

    handler(bot, id){
        if(this.wait){
            switch(this.type){
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

module.exports=GroupSession