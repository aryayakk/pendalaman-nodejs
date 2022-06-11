const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));

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
    const contacts = loadContact();
    // console.log('contacts', contacts);
    res.render('contact', {
        title: 'Halaman Contact',
        layout: 'layouts/main-layout',
        contacts,
    });
});

app.get('/contact/:nama', (req, res) => {
    const contact = findContact(req.params.nama);
    res.render('detail', {
        title: 'Halaman Detail Contact',
        layout: 'layouts/main-layout',
        contact,
    });
});

app.use('/', (req, res) => {    // 'app.use' merupakan method untuk mencegat program yang akan dijalankan berikutnya (middleware), hati-hati untuk menuliskan code ini JANGAN SEBELUM route yang ingin dijalankan
    res.status(404);
    res.send('Halaman dengan route ini belum you bikin woy!');
});
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
