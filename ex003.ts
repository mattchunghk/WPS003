import readline from 'readline';

const readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function ask(question:string,answerKey:string) {
    return new Promise(resolve => {
        readLineInterface.question(question, input => resolve(`${answerKey} ${input}`));
    })
  }



// ask("What is your name?",`Your name is `)
//     .then(result => { console.log(result); return ask("What is your age?",`Your age is `); })
//     .then(result => { console.log(result); return ask("What is your pet?",`Your pet is `); })
//     .then(result => { console.log(result); readLineInterface.close() });



async function main () {
    
    try{
        await ask("What is your age? ",`Your age is `);
        await ask("What is your pet? ",`Your pet is `);
        await ask("where is your home? ",`Your home is `);
        readLineInterface.close()


    }catch(err){
        console.log(err);
    }
    
}

main()






