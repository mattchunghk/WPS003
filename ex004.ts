

// import { readlinePromise } from './ex002'; // from previous exercise
import { listAllJsRecursive } from './ex002'; 
import readline from 'readline';
import os from 'os'
import fs from 'fs';

const readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout

    
})


function readlinePromise(question:string) {
    return new Promise<string>(resolve => {
        readLineInterface.question(question, (answer:string )=> resolve(`${answer}`));
        
    })
  }


const readCommand = async ()=>{

    while(true){ // game-loop, eval-loop
        // Exit by Ctrl+C
        const answer = await readlinePromise("Please choose read the report(1) or run the benchmark(2):");
        const option = parseInt(answer, 10)
        console.log(`Option ${answer} chosen.`);
        if(option == 1){
            await readTheReport();  
        }else if(option == 2){
            await runTheBenchmark(); 
        }else{
            console.log("Please input 1 or 2 only.");
        }
    }
}

readCommand();

let array:Report = [];

async function runTheBenchmark(){


      for(let i = 1; i <=1000000; i*=10){
        let start = new Date().getTime()
        let startMem = os.freemem()

        let a ={
            "startDate":`${new Date().toISOString()}`,
             "endDate":"",
             "timeNeeded":"",
             "extraMemUsed":"",
             "name":""
          }


     await listAllJsRecursive('/Users/mattchung/Desktop/c22/WSP/WSP003') 
     let endMem = os.freemem() 

      a["endDate"] =`${new Date().toISOString()}`
      a["timeNeeded"] = `${(new Date().getTime()- start).toString()}`
      a["extraMemUsed"]=`${ startMem - endMem}`
      a["name"] = `${i} times`

      array.push(a)


    }
    //   console.log(JSON.stringify(array))
    try{
        await fs.promises.writeFile('result.json',"",{flag:'w'})
    await fs.promises.writeFile('result.json',JSON.stringify(array),{flag:'w'})
    }catch(err){
        console.log(err)
    }

}



type Report = Trial[]

interface Trial{
    "startDate":string,
    "endDate":string,
    "timeNeeded":string,
    "extraMemUsed":string,
    "name":string
}

async function readTheReport(){
    try{
        let a = await fs.promises.readFile('result.json')
        console.table(JSON.parse(a.toString("utf-8")))


    }catch(err){
        console.log(err)
    }
    
}
