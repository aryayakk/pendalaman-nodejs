const fs = require('fs');

// Membuat folder data jika belum ada
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
};

// Membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
};

// Ambil semua data di contact.json
const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;
};

// Cari contact berdasarkan nama
const findContact = (nama) => {
    const contacts = loadContact();
    const contact = contacts.find(
        (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
    );
    return contact;
};

// Menuliskan/menimpa file contacts.json dengan data yang baru
const saveContacts = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
};

// Menambahkan data contact baru ke dalam array
const addContact = (contact) => {
    const contacts = loadContact();
    contacts.push(contact);
    saveContacts(contacts);
};

// Cek nama yang duplikat
const cekDuplikat = (nama) => {
    const contacts = loadContact();
    return contacts.find((contact) => contact.nama === nama);
};

// Hapus contact
const deleteContact = (nama) => {
    const contacts = loadContact();
    const filterContacts = contacts.filter((contact) => contact.nama !== nama);
    // console.log('filterContacts', filterContacts);
    saveContacts(filterContacts);
};

// Mengubah/edit contacts
const updateContacts = (contactBaru) => {
    const contacts = loadContact();
    // Hilangkan contact nama yang namanya sama dengan oldNama
    const filterContacts = contacts.filter((contact) => contact.nama !== contactBaru.oldNama);
    // console.log('filterContacts', filterContacts);
    // console.log('contactBaru', contactBaru);
    delete contactBaru.oldNama;
    filterContacts.push(contactBaru);
    saveContacts(filterContacts);
};

module.exports = { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts }
