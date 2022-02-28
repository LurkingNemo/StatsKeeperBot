const Attribute=require('./Attribute')

class Stats{
    constructor(){
        this.attributes=new Map()   //<Name, Attribute>
    }

    static loadStats(stats){

    }

    set hp(hp){
        this.hp=hp
    }
    get hp(){
        return this.hp
    }

    set tmpHp(tmpHp){
        this.tmpHp=tmpHp
    }
    get tmpHp(){
        return this.tmpHp
    }

    set ca(ca){
        this.ca=ca
    }
    get ca(){
        return this.ca
    }

    set init(bonus){
        this.init=this.dex+bonus
    }
    get init(){
        return this.init
    }

    set speed(speed){
        this.speed=speed
    }
    get speed(){
        return this.speed
    }

    addAttribute(attName, val, bonus=0){
        this.attributes.set(attName, new Attribute(val, bonus))
    }
}

module.exports=Stats