const fs=require('fs')

class File{
    static log(logFile, logText, consoleLog=''){
        var logErr
        
        fs.open(logFile, 'a', (err, id)=>{
            if(err){
                logErr=`LOGFILE: ERROR {${err}}\nTEXT: "${logText}"`
                console.log(logErr)

                //contact admins

                throw err
            }
            else{
                console.log('LOGFILE: OPENED')

                fs.write(id, logText+'\n', null, 'utf8', err=>{
                    if(err){
                        logErr=`LOGFILE: ERROR {${err}}\nTEXT: "${logText}"`
                        console.log(logErr)

                        //contact admins

                        throw err
                    }
                    else{
                        console.log('LOGFILE: UPDATED')

                        fs.close(id, err=>{
                            if(err){
                                logErr=`LOGFILE: ERROR {${err}}`
                                console.log(logErr)

                                //contact admins

                                throw err
                            }
                            else{
                                console.log('LOGFILE: CLOSED')

                                console.log(consoleLog)
                            }
                        })
                    }
                })
            }
        })
    }

    static updateMaterial(type, id){
        var material=require(`../Material/${type}.json`)

        material[id]={
            modified: new Date(),
            path: `./Material/${type}/${id}.json`
        }

        File.save('.', type, material)
    }

    static save(type, id, obj){
        var text=JSON.stringify(obj, null, 4)
        var file=`./Material/${type}/${id}.json`
        var logErr

        fs.open(file, 'w', (err, fid)=>{
            if(err){
                logErr=`FILE: ERROR {${err}}\nTEXT: "${text}"`
                console.log(logErr)

                //contact admins

                throw err
            }
            else{
                console.log(`file:${file}`)
                console.log('FILE: OPENED')

                fs.write(fid, text, null, 'utf8', err=>{
                    if(err){
                        logErr=`FILE: ERROR {${err}}\nTEXT: "${text}"`
                        console.log(logErr)

                        //contact admins

                        throw err
                    }
                    else{
                        console.log('FILE: UPDATED')

                        fs.close(fid, err=>{
                            if(err){
                                logErr=`FILE: ERROR {${err}}`
                                console.log(logErr)

                                //contact admins

                                throw err
                            }
                            else{
                                console.log('FILE: CLOSED\n')

                                if(type!=='.'){
                                    this.updateMaterial(type, id)
                                }
                            }
                        })
                    }
                })
            }
        })
    }

    static load(type, id){
        return require(`../Material/${type}/${id}.json`)
    }
}

module.exports=File