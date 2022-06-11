// CORE MODULE
// File System
const fs = require('fs');
const { stdin, stdout } = require('process');


// Menuliskan string ke file (Synchronous)

// try {
//     fs.writeFileSync('data/test.txt', 'Ini file test (synchronous) yang dibuatkan oleh NodeJS nya sendiri lho!');
// } catch(err) {
//     console.log(err);
// }


// Menuliskan string ke file (Asynchronous)

// fs.writeFile('data/test.txt', 'Ini menuliskan file secara asynchronous lho!', (err) => {
//     console.log(err);
// });


// Membaca isi file (Synchronous)

// const data = fs.readFileSync('data/test.txt'); // penulisan ini hanya menampilkan isi file Buffer
// console.log(data);

// const data = fs.readFileSync('data/test.txt'); // penulisan ini sudah menampilkan isi dari 'test.txt' dengan method Javascript '.toString'
// console.log(data.toString());

// const data = fs.readFileSync('data/test.txt', 'utf-8'); // penulisan ini sudah menampilkan isi dari 'test.txt' dengan menggunakan parameter encoding 'utf-8'
// console.log(data);


// Membaca isi file (Asynchronous)

// const data = fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });


// Readline

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// rl.question('Masukkan nama anda : ', (nama) => {
//     console.log(`Terima kasih ${nama}!`);

//     rl.close();
// });

// rl.question('Masukkan nama anda : ', (nama) => { // menggunakan lebih dari 1 readline sekaligus
//     rl.question('Masukkan nomor HP anda : ', (noHP) => {
//         console.log(`Terima kasih ${nama}! Nomor HP anda adalah ${noHP}.`);
//         rl.close();
//     })
// });


// Menggabungkan core module yang dipelajari di atas (fs, process, readline)

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan nomor HP anda : ', (noHP) => {
        const contact = {nama, noHP};
        const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(fileBuffer);

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log('Terima kasih sudah memasukkan data baru!')

        rl.close();
    })
});