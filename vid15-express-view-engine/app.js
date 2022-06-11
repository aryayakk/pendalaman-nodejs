const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// Gunakan EJS
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
    // res.sendFile('./index.html', { root: __dirname});
    const mahasiswa = [
        {
            nama: 'Arya',
            email: 'arya@gmail.com'
        },
        {
            nama: 'Dharma',
            email: 'dharma@gmail.com'
        },
        {
            nama: 'Pamungkas',
            email: 'pamungkas@gmail.com'
        },
    ];
    res.render('index', {
        nama: 'Arya Dharma',
        title: 'Halaman Home',
        mahasiswa,
        layout: 'layouts/main-layout',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Halaman About',
        layout: 'layouts/main-layout',
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Halaman Contact',
        layout: 'layouts/main-layout',
    });
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req. params.id} <br> Category : ${req.query.category}`)
})

app.get('/contohjson', (req, res) => {
    res.json({
        nama: 'Arya',
        email: 'arya@gmail.com',
        noHP: '081234567890',
    });
});


app.use('/', (req, res) => {    // 'app.use' merupakan method untuk mencegat program yang akan dijalankan berikutnya, hati-hati untuk menuliskan code ini JANGAN SEBELUM route yang ingin dijalankan
    res.status(404);
    res.send('Halaman dengan route ini belum you bikin woy!');
});
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
