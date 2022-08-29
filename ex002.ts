import fs from 'fs';
import readline from 'readline';

// const readLineInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// export function readlinePromise(question:string) {
//     return new Promise(resolve => {
//         readLineInterface.question(question, answer => resolve(`${answer}`));
//     })
//   }


export async function listAllJsRecursive (path:string){ 
    try {
       const files = await fs.promises.readdir(path)
       files.map(async file=>{
         let stat = await fs.promises.stat(`${path}/${file}`)
         if(stat.isDirectory()){
             listAllJsRecursive(`${path}/${file}`)
         }else{
             let filePath = file.split('.').pop()
             if(filePath == "ts"){
                console.log(`${path}/${file}`);
                 
             }}
         })
 
    }catch(err) {
     console.log(err)
    }
 }





// listAllJsRecursive('/Users/mattchung/Desktop/c22/WSP/WSP003');

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

// listAllJsRecursive2('/Users/mattchung/Desktop/c22/WSP/WSP003');