import fs from 'fs';

//  function listAllJsRecursive2 (path:string){
//     return new Promise((resolve,reject)=>{
//          fs.readdir(path,(err,files)=>{if(err) reject(err);
//             files.map(file=>{fs.stat(`${path}/${file}`,(err,stats)=>{if(err) reject(err);
//                     if(stats.isDirectory()){
//                             listAllJsRecursive2(`${path}/${file}`)
//                     }else{
//                         let filePath =  file.split('.').pop()
//                         if(filePath == "ts"){
//                             resolve(console.log(path+file));   
//                      }                
//                     }
//                 })                
//             })
//         })
//     })   
// }

function listAllJsRecursive2 (path:string){
    return new Promise((resolve,reject)=>{
        let files = fs.readdirSync(path)
        for (let file of files){
           fs.stat(`${path}/${file}`, (error, stats)=>{if(error) reject(error);
            if(stats.isDirectory()){
                listAllJsRecursive2 (`${path}/${file}`)
            }else{
                let filePath =  file.split('.').pop()
                 if(filePath == "ts"){
                resolve(console.log(path+file));   

            }
        }
        })
           
        }
 
    })

}





//  let listAllJsRecursive = async (path:string) =>
//     await Promise.all((await fs.promises.readdir(path)).map(async file =>
//        (await fs.promises.stat(`${path}/${file}`)).isDirectory() ?
//        listAllJsRecursive(`${path}/${file}`) : console.log(file)
//     ))





listAllJsRecursive2('/Users/mattchung/Desktop/c22/WSP/WSP003/');

