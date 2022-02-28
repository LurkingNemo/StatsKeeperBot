const Stats=require('./Stats')
const Item=require('./Item')

class PG{
    constructor(user, name){
        this.user=user
        this.name=name
        this.stats=new Stats()
        this.items=new Set()
        this.spells=new Set()
    }

    static loadPG(pgName){

    }

    set description(description){
        this.description=description
    }
    get description(){
        return description
    }

    set ispiration(isp){
        this.ispiration=isp
    }

    set prof(prof){
        this.prof=prof
        //ability update
    }
    get prof(){
        return this.prof
    }

    set lvl(lvl){
        this.lvl=lvl
    }
    get lvl(){
        return this.lvl
    }

    set exp(exp){
        this.exp=exp
    }
    get exp(){
        return this.exp
    }

    addItems(...items){
        this.items.add(item)
    }

    addSpells(...spells){
        this.spells.add(spell)
    }
}

module.exports=PG