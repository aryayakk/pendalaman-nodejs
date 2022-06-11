const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//  Third-party Middleware
app.use(expressLayouts);
app.use(morgan('dev'));

// Built-in Middleware
app.use(express.static('public'));

// Application level Middleware
app.use((req, res, next) => {   // ciri middleware adalah memiliki parameter 'next', namun tidak selalu
    console.log('MidWare-Time: ', Date.now());
    next();
});

app.use((req, res, next) => {
    console.log('Midware: Ini middleware lapis ke-2');
    next();
});

app.get('/', (req, res) => {
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


app.use('/', (req, res) => {    // 'app.use' merupakan method untuk mencegat program yang akan dijalankan berikutnya (middleware), hati-hati untuk menuliskan code ini JANGAN SEBELUM route yang ingin dijalankan
    res.status(404);
    res.send('Halaman dengan route ini belum you bikin woy!');
});
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
