// SYNCHRONOUS====================


// Cara 1----------
// const getUserSync = (id) => {
//     let nama = '';
//     if(id === 1) {
//         nama = 'Arya';
//     } else {
//         nama = 'Dharma';
//     }
//     return {id, nama};
// };


// Cara 2----------
// const getUserSync = (id) => {
//     const nama = id === 1 ? 'Arya' : 'Dharma';
//     return {id, nama};
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = 'Hello World!';
// console.log(halo);





// ASYNCHRONOUS====================


// const getUser = (id, callback) => {
//     const time = id === 1 ? 5000 : 2000;
//     setTimeout(() => {
//         const nama = id === 1 ? 'Arya' : 'Dharma';
//         callback({id, nama});
//     }, time);
// }

// const userSatu = getUser(1, (result) => {
//     console.log(result);
// });

// const userDua = getUser(2, (result) => {
//     console.log(result);
// });

// const halo = 'Hello World!';
// console.log('selesai', halo);





// PENGGUNAAN MODULE SYSTEM


function cetakNama(nama) {
    return `Halo, namaku ${nama} !`;
}

const PI = 3.14;

const mahasiswa = {
    nama: 'Arya Dharma',
    umur: 29, 
    cetakMhs() {
        return `Selamat pagi! Nama saya ${this.nama}, umur saya ${this.umur} tahun.`; // penggunaan 'this' adalah pemanggilan property dari local method / functtion
    },
}

class Orang {
    constructor() {
        console.log('Objek Orang telah dibuat!!');
    }
}

//module.exports = cetakNama; // module exports bersifat kompleks (keseluruhan fungsionalitas dari 1 file module)


// module.exports.cetakNama = cetakNama; // mengekspor lebih dari 1 fungsionalitas dalam 1 file module harus dibuat dalam bentuk object property / method yang ditangkap dalam bentuk variabel (ada tanda titik setelah 'module.exports)
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = { cetakNama, PI, mahasiswa, Orang } // penulisan JS ES6