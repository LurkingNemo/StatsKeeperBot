const Telegraf=require('telegraf')
const Markup=require('telegraf/markup')

const User=require('./User')
const File=require('./File')
const Session=require('./Session')
const PrivateSession=require('./PrivateSession')
const GroupSession=require('./GroupSession')


const PG=require('../campaign/PG')
const Capmaign=require('../campaign/Campaing')

class MyBot extends Telegraf {
    constructor(token, options){
        super(token, options)

        this.sessions=new Map()     //<ID, Session>
        this.users=new Map()        //<ID, User>
        this.pgs=new Map()          //<ID, PG>
        this.campaigns=new Map()    //<ID, Campaign>

        this.logFile='./log.txt'
        this.dirs={
            users: 'Users',
            pgs: 'PGs',
            campaigns: 'Campaigns'
        }
    }

    launch(){
        super.launch()
        this.start=new Date()
        console.log('BOT: LAUNCHED')

        File.log(this.logFile, `BOT: STARTED, ${this.start}`, 'BOT: READY\n')
    }

    getMessage(ctx){
        var msg

        switch(ctx.updateType){
            case 'message':
                msg=ctx.update.message
            break;
            case 'callback_query':
                msg=ctx.update.callback_query.message
            break;
            default:
            break;
        }

        return msg
    }

    sendMessage(id, text, extra){
        return this.telegram.sendMessage(id, text, extra)
    }

    getUpdates(){
        return this.telegram.getUpdates()
    }

    openSession(key, ctx, group){
        var session

        group? session=new GroupSession(key, ctx) : session=new PrivateSession(key, ctx)

        this.sessions.set(key, session)

        console.log('opened '+ group)

        return session
    }
    
    closeSession(id){
        this.sessions.delete(id)

        console.log('closed')
    }

    saveUser(name, id){
        var user=new User(name)

        File.save(this.dirs.users, id, user)
    }

    createUser(id){
        var session=this.sessions.get(id)

        session.type=Session.types.newUser
        
        this.sendMessage(id, 'Nickname:')

        session.wait=true
    }

    createPG(id){
        var session=this.sessions.get(id)
        var keyboard=Markup.inlineKeyboard([
            {text: 'Classe', callback_data: 'class'},
            {text: 'Razza', callback_data: 'race'}
        ])

        session.type=Session.types.newPG

        session.menu=this.telegram.sendMessage(id, 'Scegli', {reply_markup: keyboard})
    }

    selectClass(id){

    }

    selectRace(id){
        
    }

    createCampaign(){

    }

    startSession(){

    }

    closeSession(){

    }

    deleteCampaign(){

    }

    exportCampaign(){

    }
}

module.exports=MyBot