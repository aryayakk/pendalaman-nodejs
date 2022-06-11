const http = require('http');
const fs = require('fs');
const port = 3001;

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404);
            res.write('Error: page not found');
        } else {
            res.write(data);
        }
        res.end();
    });
}

http
.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });

    const url = req.url;

    switch(url) {   // Menggunakan method 'switch'
        case '/about':
            renderHTML('./about.html', res);
            break;
        case '/contact':
            renderHTML('./contact.html', res);
            break;
        default:
            renderHTML('./index.html', res);
    }

    // if(url === '/about') {   // Menggunakan method 'if else'
    //     renderHTML('./about.html', res);
    // } else if (url === '/contact') {
    //     renderHTML('./contact.html', res);
    // } else {
    //     renderHTML('./index.html', res);
    // }
})
.listen(port, () => {
    console.log(`Server is listening on ${port}...`)
});
