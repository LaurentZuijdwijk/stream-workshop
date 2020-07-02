const fs = require('fs');

const stream = fs.createReadStream('./homes.csv');
stream.pipe(process.stdout)


const { pipeline, Transform } = require('stream');

process.stdin.pipe(process.stdout)


// const toUppercaseTransform = new Transform({
//     transform(chunk, encoding, callback){
//         this.push(chunk.toString().toUpperCase());
//         callback()
//     }
// });


// pipeline(
//     process.stdin,
//     toUppercaseTransform,
//     process.stdout
// )
