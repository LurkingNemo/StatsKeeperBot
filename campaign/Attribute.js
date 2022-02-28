class Attribute{
    constructor(val, bonus=0){
        this.val=val
        this.bonus=bonus
        this.mod=(val+bonus-10)/2
    }

    set val(val){
        this.points=points
        this.modificator()
    }
    get val(){
        return `${this.val}+${this.bonus}`
    }

    set bonus(bonus){
        this.bonus=bonus
        this.setModificator()
    }
    get bonus(){
        return this.bonus
    }

    setModificator(){
        this.mod=(this.points+this.bonus-10)/2
    }
    get modificator(){
        return this.mod
    }

    toString(){
        return `${this.points}+${this.bonus} (${this.mod})`
    }
}

module.exports=Attribute