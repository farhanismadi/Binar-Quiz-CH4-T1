const text = "nama saya adalah farhan, saya bekerja sebagai frontend engineer";

const array = [1000, 20, 15, 18, 1, 9, 35];

const isObject = {
  nama_mobil: "ferrari",
  kecepatan: "6000 cc",
  harga: 20000000000,
  tipe: "tidak diketahui",
};
const arrayOf = [
  {
    nama_mobil: "lamborgini",
    kecepatan: "8000 cc",
    harga: 70000000000,
    tipe: "aventador",
  },
];

//1 . gunakan metode replaceAll() pada input variable text diatas:
//output: "nama saya adalah budi saya bekerja sebagai javascript engineer"
// const replaceText = text.replaceAll(",", "");
// console.log(replaceText);
const replace = function (string, before, after) {
  const text = string.replaceAll(before, after);
  return `"${text}"`;
};
console.log("Nomor 1");
console.log(replace(text, ",", ""));
console.log("");

//2. gunakan metode substring() pada input variable text diatas:
// output : "saya bekerja sebagai frontend engineer"
// const substringText = text.substring(25, text.length);
// console.log(substringText);
const substring = function (string, number) {
  const text = string.substring(number, string.length);
  return `"${text}"`;
};
console.log("Nomor 2");
console.log(substring(text, 25));
console.log("");

//3. gunakan metode toUpperCase() pada input variable text diatas:
// output : "NAMA SAYA ADALAH BUDI, SAYA BEKERJA SEBAGAI FRONTEND ENGINEER"
// const toUpperCaseText = text.toUpperCase();
// console.log(toUpperCaseText);
const toUpperCase = function (string) {
  const text = string.toUpperCase();
  return `"${text}"`;
};
console.log("Nomor 3");
console.log(text);
console.log("");

//4. gunakan metode sorting berdasarkan descending dan ascending pada input variable array diatas:
// output : ascending :[1, 9, 15, 18, 20, 35, 1000]
// output : descending: [1000, 35, 20, 18, 15, 9, 1]
// array.sort((a, b) => a - b);
// console.log(array);
// array.sort((a, b) => b - a);
// console.log(array);
const ascending = function (array) {
  const arrayOutput = array.sort((a, b) => a - b);
  return `Ascending : [${arrayOutput}]`;
};
const descending = function (array) {
  const arrayOutput = array.sort((a, b) => b - a);
  return `Descending : [${arrayOutput}]`;
};
console.log("Nomor 4");
console.log(ascending(array));
console.log(descending(array));
console.log("");

//5. gunakan metode indexOf() untuk pencarian nama pada input variable text diatas:
// output : temukan string "frontend engineer" = (number of character)
// const indexOfText = text.indexOf("frontend engineer");
// console.log(indexOfText);
const indexOfText = function (string) {
  const number = text.indexOf(string);
  return `Temukan string "frontend engineer" = ${number}`;
};
console.log("Nomor 5");
console.log(indexOfText("frontend engineer"));
console.log("");

//7. gunakan metode includes() untuk pencarian nama pada input variable text diatas:
// output : temukan string "frontend engineer" : (boolean value)
// const includesText = text.includes("frontend engineer");
// console.log(includesText);
const includesText = function (string) {
  const boolean = string.includes("frontend engineer");
  return `Temukan string "frontend engineer" = ${boolean}`;
};
console.log("Nomor 7");
console.log(includesText("frontend engineer"));
console.log("");

//5. gunakan metode indexOf() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai 18 = [nilainya]
// const indexOfArray = array.indexOf(18);
// console.log(indexOfArray);
const indexOfArray = function (number, arr) {
  const hasil = arr.indexOf(number);
  return `Temukan nilai ${number} = ${hasil}`;
};
console.log("Nomor 5");
console.log(indexOfArray(18, array));
console.log("");

//7. gunakan metode includes() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai 2000 = false
// const includesArray = array.includes(2000);
// console.log(includesArray);
const includesArray = function (number, arr) {
  const boolean = arr.includes(2000);
  return `Temukan nilai ${number} = false ${boolean}`;
};
console.log("Nomor 7");
console.log(includesArray(2000, array));
console.log("");

//8. gunakan metode filter() untuk pencarian nama pada input variable array diatas:
// output : hapus nilai selain 1000 = [35, 20, 18, 15, 9, 1]
// const filterArray = array.filter((nilai) => nilai < 1000);
// console.log(filterArray);
const filter1 = function (number, arr) {
  const hasil = arr.filter((nilai) => nilai < number);
  return `hapus nilai selain ${number} = [${hasil}]`;
};
console.log("Nomor 8");
console.log(filter1(1000, array));
console.log("");

//9. gunakan metode filter() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai sama dengan 1000 = [1000]
// const filterArray2 = array.filter((nilai) => nilai == 1000);
// console.log(filterArray2);
const filter2 = function (number, arr) {
  const output = arr.filter((nilai) => nilai == number);
  return `temukan nilai sama dengan ${number} = [${output}]`;
};
console.log("Nomor 9");
console.log(filter2(1000, array));
console.log("");

//10. gabungkan variable isObject kedalam variable arrayOf dengan menggunakan method push atau spread operator
/**
    output:
     const arrayOf = [{
        nama_mobil: "lamborgini",
        kecepatan: "8000 cc",
        harga: 70000000000,
        tipe: "aventador"
    },{
        nama_mobil: "ferrari",
        kecepatan: "6000 cc",
        harga: 20000000000,
        tipe: "tidak diketahui"
    }]
 * */
const connectObject = function (arr, obj) {
  arr.push(obj);
  return arr;
};
console.log("Nomor 10");
console.log(connectObject(arrayOf, isObject));
console.log("");

//11. Buat metode Function() dari sebuah semua methode algorithma yg telah di kerjakan lalu return setiap kondisinya dan berikan nama function yg sesuai denga kebutuhan
/**
    output : 
        function(){
            // isilah metode tersebut kedalam function()///
            // berikan return valuenya
        } 
* */
