const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
// res.send('Hello World!')
// });

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname});
});

app.get('/about', (req, res) => {
// res.send('Ini halaman About!')
res.sendFile('./about.html', { root: __dirname});

});

app.get('/contact', (req, res) => {
// res.send('Ini halaman Contact!')
res.sendFile('./contact.html', { root: __dirname});
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req. params.id} <br> Category : ${req.query.category}`)
})

// app.get('/contohjson', (req, res) => {
//     res.json({
//         nama: 'Arya',
//         email: 'arya@gmail.com',
//         noHP: '081234567890',
//     });
// });


app.use('/', (req, res) => {    // 'app.use' merupakan method untuk mencegat program yang akan dijalankan berikutnya, hati-hati untuk menuliskan code ini JANGAN route yang ingin dijalankan
    res.status(404);
    res.send('Halaman dengan route ini belum you bikin woy!');
});
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});









// const http = require('http');
// const fs = require('fs');
// const port = 3001;

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err) {
//             res.writeHead(404);
//             res.write('Error: page not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// }

// http
// .createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//     });

//     const url = req.url;

//     switch(url) {   // Menggunakan method 'switch'
//         case '/about':
//             renderHTML('./about.html', res);
//             break;
//         case '/contact':
//             renderHTML('./contact.html', res);
//             break;
//         default:
//             renderHTML('./index.html', res);
//     }

//     // if(url === '/about') {   // Menggunakan method 'if else'
//     //     renderHTML('./about.html', res);
//     // } else if (url === '/contact') {
//     //     renderHTML('./contact.html', res);
//     // } else {
//     //     renderHTML('./index.html', res);
//     // }
// })
// .listen(port, () => {
//     console.log(`Server is listening on ${port}...`)
// });
