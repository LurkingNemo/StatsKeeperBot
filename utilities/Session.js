const Markup=require('telegraf/markup')

class Session{
    constructor(key, ctx){
        this.key=key
        this.ctx=ctx
        this.start=new Date()

        this.type=Session.types.born
        this.wait=false

        this.menu
    }

    static types={
        born: 0,
        newUser: 1,
        confirmUser: 2,
        newPG: 3
    }

    equals(arr1, arr2){
        var i=0
        var flag

        arr1.length==arr2.length? flag=true:flag=false
        
        while(flag && i<arr1.length){
            arr1[i]==arr2[i]? i++:flag=false
        }

        return flag
    }
}

module.exports=Session