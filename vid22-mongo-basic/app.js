const { Result } = require('express-validator');
const { MongoClient, ClientSession, ObjectID } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'wpu';

const client = new MongoClient(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if(error) {
        return console.log('Koneksi gagal!');        
    }

    // Pilih database
    const db = client.db(dbName);

    //  MENAMBAHKAN 1 data/document ke collection 'mahasiswa'
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: 'Sempak',
    //         email: 'sempak@gmail.com',
    //     },
    //     (error, result) => {
    //         if(error) {
    //             return console.log('Gagal menambahkan data!');
    //         }
    //         console.log(result);
    //     }
    // );

    // MENAMBAHKAN lebih dari 1 data/document ke collection 'mahasiswa'
    // db.collection('mahasiswa').insertMany(
    //     [
    //         {
    //             nama: 'Terserah',
    //             email: 'terserah@gmail.com'
    //         },
    //         {
    //             nama: 'Cuma Coba',
    //             email: 'cumacoba@gmail.com'
    //         },
    //         {
    //             nama: 'Siapaya',
    //             email: 'siapaya@gyahoo.com'
    //         }
    //     ],
    //     (error, result) => {
    //         if(error) {
    //             return console.log('Data gagal ditambahkan!');
    //         }
           
    //         console.log(result);
    //     }
    // );


    // MENAMPILKAN semua data/document yang ada di collection 'mahasiswa'
    // console.log(
    //     db
    //     .collection('mahasiswa')
    //     .find()
    //     .toArray((error, result) => {
    //         console.log('result', result);
    //     })
    // );
   
    // MENAMPILKAN 1 data/document berdasarkan kriteria/field yang ada di collection 'mahasiswa'
    // console.log(
    //     db
    //     .collection('mahasiswa')
    //     .find({ _id: ObjectID('62a94e85d402c2f5026e295f') })
    //     .toArray((error, result) => {
    //         console.log('result', result);
    //     })
    // );


    // MENGUBAH 1 data/document berdasarkan kriteria/field
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectID('62a94e85d402c2f5026e295f'),
    //     },
    //     {
    //         $set: {
    //             email: 'siapaya@yahoo.co.id',
    //         },
    //     }
    // );

    // updatePromise
    // .then((result) => {
    //     console.log(result);
    // })
    // .catch((error) => {
    //     console.log('error', error)
    // })

    // MENGUBAH data/document lebih dari 1 berdasarkan kriteria/field
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: 'Nata Bagus',
    //         _id: ObjectID('62a9403e5b6445971006fd46'),   // Saat method ini dibuat, terdapat 2 data dengan field nama yang sama, yaitu 'Nata Bagus', maka, di baris ini yang diubah adalah 'Nata Bagus' dengan 'id' tersebut
    //     },
    //     {
    //         $set: {
    //             nama: 'Bagus Kediri',
    //         },
    //     },
    // );


    // MENGHAPUS 1 data/document pada collection 'mahasiswa'
    // db.collection('mahasiswa')
    // .deleteOne(
    //     {
    //         _id: ObjectID('62a9403e5b6445971006fd46'),
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //     console.log(error);
    // });
   
    // MENGHAPUS lebih dari data/document pada collection 'mahasiswa'
    db.collection('mahasiswa')
    .deleteMany(
        {
            nama: 'Nata Bagus', // Kasus ini ketika ada 2 field 'nama' yang sama ('Nata Bagus'), maka method 'deleteMany()' menghapus keduanya walau id ataupun field yang lain berbeda
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
        console.log(error);
    });
});
