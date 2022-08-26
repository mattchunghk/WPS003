import fs from 'fs';

 function listAllJsRecursive2 (path:string){
    return new Promise((resolve,reject)=>{
         fs.readdir(path,(err,files)=>{
            if(err) reject(err);
            files.map(file=>{
                fs.stat(`${path}/${file}`,(err,stats)=>{
                    if(err) reject(err);
                    if(stats.isDirectory()){
                            listAllJsRecursive2(`${path}/${file}`)
                    }else{
                        let filePath =  file.split('.')
                        if(filePath[1] == "ts"){
                            resolve(console.log(path+file));   
                     }                
                    }
                })                
            })
        })
    })   
}




//  let listAllJsRecursive = async (path:string) =>
//     await Promise.all((await fs.promises.readdir(path)).map(async file =>
//        (await fs.promises.stat(`${path}/${file}`)).isDirectory() ?
//        listAllJsRecursive(`${path}/${file}`) : console.log(file)
//     ))





listAllJsRecursive2('/Users/mattchung/Desktop/c22/WSP/WSP003/');

