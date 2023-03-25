
// // const cpuInformation = process.memoryUsage();
// // const firstName = process.argv[2];
// // const lastName = process.argv[3];
// // const Tiger = require('./tiger')
// // const Wolf = require('./wolf')
// // const tiger = new Tiger();
// // const wolf = new Wolf();
// // const moment = require('moment');
// // const date = moment().format("MMM Do YY");
// // const _ = require('lodash')
// // const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
// // const { EventEmitter } = require('events');
// // const myEventEmitter = new EventEmitter();
// // const makeCoffee = ({ name }) => {
// //     console.log(`Kopi ${name} telah dibuat!`);
// // };
// // const billCoffe = ({bill}) =>{
// //     console.log(`Bill sebesar ${bill}`)
// // }
// // // myEventEmitter.on('coffee-order', makeCoffee);
// // // myEventEmitter.on('coffee-order',billCoffe)
// // //ditampung di listener
// // const onConffeOrderListener = ({name , bill})=>{
// //     makeCoffee(name)
// //     billCoffe(bill)
// // }
// // myEventEmitter.on('coffee-order',onConffeOrderListener)
 


// // const fighting = (tiger,wolf) =>{
// //     if(tiger.strength > wolf.strength){
// //         console.log(tiger.strength + " dan " +wolf.strength)
// //         tiger.growl()
// //         return
// //     }
// //     if(tiger.strength < wolf.strength){
// //         console.log(tiger.strength + " dan " +wolf.strength)
// //         wolf.howl()
// //         return
// //     }
// //     console.log('Tiger and Wolf have same strength');
// // }


// // const fs = require('fs');

// // const fileReadCallback = (error, data) => {
// //     if(error) {
// //         console.log('Gagal membaca berkas');
// //         return;
// //     }
// //     console.log(data);
// // };

// // server.requestListener= (request,response)=>{
// //     const { method } = request;

// //     response.setHeader('Content-Type', 'text/html');
// //     response.statusCode = 200;

// //     if(method === 'GET') {
// //         response.end('<h1>Hello Get!</h1>')
// //     }
 
// //     if(method === 'POST') {
// //         response.end('<h1>Hai Post!</h1>')
// //     }


// //     if(method === 'PUT') {
// //         response.end('<h1>Bonjour!</h1>');
// //     }
 
// //     if(method === 'DELETE') {
// //         response.end('<h1>Salam!</h1>');
// //     }

// //     const server = http.createServer(requestListener)

// //     const port = 3001;
// //     const host = 'localhost';

// //     server.listen(port,host,()=>{
// //         console.log(`Server Berjalan pada http//${host}:${port}`);
// //     })
// // }
   
//     // response.end("cpuInformation")
//     // console.log(cpuInformation)
//     // console.log(`Hello ${firstName} ${lastName}`);
//     // fighting(tiger,wolf)
//     // console.log(date);
//     // console.log(myOddEvenArray);
//     // // Memicu event 'coffee-order' terjadi.
//     // myEventEmitter.emit('coffee-order', { name: 'Tubruk',bill: '150000' });

//     // fs.readFile('notes.txt', 'UTF-8', fileReadCallback);    
// // }).listen(3001);


// const http = require('http');
// const host  = 'localhost';
// const port = 3001;
// const rpFormat = require('rupiah-format')
// const os = require('os')
// const server = http.createServer(function(request,response){
//     response.statusCode = 200;
//     const sisaRam  = os.freemem();
//     const sisaCpu = os.cpus();
//     let myCpu = [];
//     function checkCpu(){
//         sisaCpu.map((cpu,i)=>{
//             myCpu.push(cpu.model)
//         })
//         return myCpu[0]
//     }

//     response.setHeader('Content-Type', 'text/html');
//     response.statusCode = 200;

//     const { method } = request;
 
//     if(method === 'GET') {
//         response.end('<h1>Hello!</h1>');
//     }
 
//     if(method === 'POST') {
//         let body = [];
          
//         request.on('data', (chunk) => {
//             body.push(chunk);
//         });
       
//         request.on('end', () => {
//             body = Buffer.concat(body).toString();
//             response.end(`<h1>Hai, ${body}!</h1>`);
//         });
//       }

//     // response.end(`Ini adalah response node js 200 dengan status cpu ${checkCpu()} dan ram ${sisaRam}`);
// });

// server.listen(port,host,function(){
//     console.log(`Server menyala di http://${host}:${port}`);
    
// })
