// IF/Else Statement

let = 10;

if (let >=10) {
    console.log("nilainya sama dengan atau lebih dari 10");
} else {
    console.log("nilai kurang");
}

// --------------------------------------------------------------------------

// Switch Case
const inputan = 3;

switch (inputan) {
    case 1:
        console.log("Anda memasukkan angka 1");
        break;
    case 2:
        console.log("Anda memasukkan angka 2");
        break;
    default:
        console.log("Angka tersebut tidak ada");
}

// --------------------------------------------------------------------------

// Loop

let coba = [];
for (let i = 0; i < 5; i++) {
    coba.push(i);
}

console.log(coba);

// While

let wail = 1;
while (wail < 5) {
    console.log("nilai ", wail ," kurang dari 5");
    wail++;
}

// do while
let dowail = 10
do {
    console.log("Nilai", dowail, "lebih dari 5");
    dowail--;
} while (dowail > 5);


// --------------------------------------------------------------------------

// Object

const admin = {
    namaDepan: "Ronaldo",
    namaBelakang: "Firmansyah",
    umur: 22,
    Menikah: false,
};

admin["umur"]= 23;
console.log(`Namaku adalah ${admin.namaDepan} Umurku ${admin.umur}`);

const restaurant = {
    nama: "Bakso Mang Dicoding",
    city: "Bandung",
    "favorite drink": "Es Teh",
    "favorite food": "Bakso",
    isVegan: false,
};

let nama = restaurant.nama;
let favoriteDrink = restaurant["favorite drink"];
console.log(nama);
console.log(favoriteDrink);

// --------------------------------------------------------------------------

// Array
const tes = ["Trouble","Maker",23];
tes.pop(); // untuk mengeluarkan index terakhir dari array
tes.shift(); // untuk mengeluarkan index pertama dari array
tes.unshift("Problem"); // untuk menambahkan index pertama dari array
delete tes[1]; // untuk menghpus nilai pada index tertentu
tes.splice(1,1);
console.log(tes);

const angka = [1,3,4];
angka.splice(1,0,2); // menambahkan elemen pada index tertentu
console.log(angka);

console.log(...tes,...angka);

const evenNumber = [];
let genap = 1;

for (let i = 0; i <= 100 ; i++) {
    if (genap%2 == 0) {
        evenNumber.push(genap);
    }
    genap++;
    
}
console.log(evenNumber);

// --------------------------------------------------------------------------

// function

function persegi(a){
    return total = a*a;
}

function perpanjang(p,l){
    let hitung = p * l;
    console.log(`${p} dikali ${l} adalah:${hitung}`);
}

function jumlah(...tumpukan){
    let result = 0;
    for (const tumpuk of tumpukan) {
        result += tumpuk;
    }
    return result;
}

function min(a,b){
    if (a > b) {
        console.log(b,"merupakan bilangan terkecil");
    } else if (a < b) {
        console.log(a,"merupakan bilangan terkecil");
    } else {
        return a;
    }
}

function findIndex (array,number){
    for (let index = 0; index < array.length; index++) {
       if (array[index]==number) {
            return console.log(array[index]);
        }
       }
       return console.log(-1);
        
    }

findArray = [1,2,3,4,5];
let find = 6;
let result = findIndex(findArray,6);

console.log(jumlah(1,2,3,4,5));

let hasil = persegi(2);
console.log(hasil);
perpanjang(2,4);

// --------------------------------------------------------------------------

// OOP


