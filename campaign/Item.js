class Item{
    constructor(itemName){
        this.name=name
    }

    static loadItem(itemName){
        
    }

    set description(description){
        this.description=description
    }
    get description(){
        return this.description
    }

    set effect(effect){
        this.effect=effect
    }
    get effect(){
        return this.effect
    }

    set hp(hp){
        this.hp=hp
    }
    get hp(){
        return this.hp
    }

    set str(bonus){
        this.str.points=bonus
    }
    get str(){
        return this.str
    }

    set dex(bonus){
        this.dex.points=bonus
    }
    get dex(){
        return this.dex
    }

    set cos(bonus){
        this.cos.points=bonus
    }
    get cos(){
        return this.cos
    }

    set int(bonus){
        this.int.points=bonus
    }
    get int(){
        return this.int
    }

    set wis(bonus){
        this.wis.points=bonus
    }
    get wis(){
        return this.wis
    }

    set cha(bonus){
        this.cha.points=bonus
    }
    get cha(){
        return this.cha
    }

    set active(bool){
        this.active=bool
    }
    get active(){
        return this.active
    }

    set num(num){
        this.num=num
    }
    get num(){
        return this.num
    }
}

module.exports=Item