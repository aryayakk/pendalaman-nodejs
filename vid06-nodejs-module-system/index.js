// PENGGUNAAN MODULE SYSTEM


// const fs = require('fs'); // core module
// const cetakNama = require('./coba'); // local module
// const moment = require('moment'); // third party module / npm module / node_modules

// console.log(cetakNama('Arya'));


// MENGGUNAKAN 2 FUNGSIONALITAS DARI 1 MODULE ('coba.js')


const coba = require('./coba'); // module 'coba' di sini sudah berbentuk object

console.log(
    coba.cetakNama('Arya Dharma'),
    coba.PI,
    coba.mahasiswa.cetakMhs(),
    new coba.Orang(),
); // Perhatikan bahwa module '.coba.js' diekspor dengan nama method / property 'coba'