import fs from 'fs';

function readFileSync(){
    const data = fs.readFileSync('./test.txt, "ust-8')
    console.log(data);
}

