import fs from 'fs';


async function listAllJs (path: string){
    await fs.promises.readdir(path) 
    // await fs.promises.stat(path)
    .then(filenames => { 
        filenames.map(filename => {
           let filePath =  filename.split('.').pop()
           if(filePath == "ts"){
            console.log(path+filename)
        }
    })})
    

    .catch(err => {  
        console.log(err) 
    })

}

listAllJs('/Users/mattchung/Desktop/c22/WSP/WSP003/');



