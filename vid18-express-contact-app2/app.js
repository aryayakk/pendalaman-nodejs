const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact, addContact, cekDuplikat } = require('./utils/contacts');
const { body, validationResult, check } = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);    // Third Party Middleware
app.use(express.static('public'));  // Built-in Middleware
app.use(express.urlencoded({ extended: true }));

// Konfigurasi flash
app.use(cookieParser('secret'));
app.use(
    session({
        cookie: { maxAge: 6000 },
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    })
);
app.use(flash());

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
        msg: req.flash('msg'),
    });
});

// Halaman form tambah data contact
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        title: 'Form Tambah Data Contact',
        layout: 'layouts/main-layout',
    });
});

// Proses data contact
app.post('/contact', [
        body('nama').custom((value) => {
            const duplikat = cekDuplikat(value);
            if(duplikat) {
                throw new Error('Nama contact sudah digunakan!');
            };
            return true;
        }),
        check('email', 'Email tidak valid!').isEmail(),
        check('nohp', 'Nomor HP tidak valid!').isMobilePhone('id-ID'),
    ],
    (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        // return res.status(400).json({errors: errors.array()});
        res.render('add-contact', {
            title: 'Form Tambah Data Contact',
            layout: 'layouts/main-layout',
            errors: errors.array(),
        });
    } else {
        addContact(req.body);
        // Kirimkan flash message
        req.flash('msg', 'Data contact berhasil ditambahkan!')
        res.redirect('/contact');
    };
});

// Halaman detail contact
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
  console.log(`Application listening on port ${port}...`)
});
