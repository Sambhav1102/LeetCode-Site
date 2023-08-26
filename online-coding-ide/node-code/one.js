// console.log('Hello World!');
// FS module 
const fs = require('fs'); // used to import a file 2009 feature // Sync
const filepath='C:/Users/nilerd1/Desktop/react/online-coding-ide/node-code/sample.txt' // Sync
// Async
fs.readFile(filepath,(err,content)=>{
    if(err){
        console.log('Unable to read the file ',err);

    }
    else{
        console.log('file content is ', content.toString());
    }
});
fs.readFile(__filename,(err,content)=>{
    if(err){
        console.log('Unable to read the file ',err);

    }
    else{
        console.log('file content is ', content.toString());
    }
});

console.log('Code Ends here');
