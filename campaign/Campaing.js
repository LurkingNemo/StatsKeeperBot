const PG=require('./PG')
const Item=require('./Item')

class Campaign{
    constructor(title, DM, id){
        this.title=title
        this.id=id
        this.DM=DM
        this.pgs=new Map()  //<PG, User>
        this.items=new Set()
    }

    addPGs(...pgs){
        for(pg in pgs){
            this.pgs.set(pg, pg.user)
        }
    }

    addItems(...items){
        this.items.add(item)
    }
}

module.exports=Campaign