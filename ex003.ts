import readline from 'readline';

const readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function ask(question:string,answerKey:string) {
    return new Promise(resolve => {
        readLineInterface.question(question, input => resolve(`${answerKey} ${input}`));
    });
  }



ask("What is your name?",`Your name is `)
    .then(result => { console.log(result); return ask("What is your age?",`Your age is `); })
    .then(result => { console.log(result); return ask("What is your pet?",`Your pet is `); })
    .then(result => { console.log(result); readLineInterface.close() });




