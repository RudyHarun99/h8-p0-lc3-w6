/*
================
MASS MEDIA FITUR
================
massMediaFitur merupakan sebuah function yang memiliki dua parameter yaitu:
    - writerName : String
    - pageSize : Number

Fungsi ini bertujuan untuk memfilter database surat kabar online berdasarkan nama writer, 
dengan format date yang telah diubah menjadi 'DD Month YYYY' dan disertai lokasi page. 
Pada fungsi tersebut telah terdapat variable database artikel yang berbentuk Array of Objects seperti di bawah:
    [
        { title: 'Harga Masker Udah Gak Wajar', writer: 'Dewi', date: '12-04-2020' },
        { title: 'Kucing & Anjing Bisa Bersaudara', writer: 'Acong', date: '09-04-2020' },
        { title: 'Jantung Robot', writer: 'Adrian', date: '08-04-2020' }, ...
    ]

Function massMediaFitur merupakan bagian dari soal (tidak boleh diubah-ubah) dan 
merupakan driver function yang berbentuk modular, dimana didalamnya menjalankan fungsi-fungsi berikut:
- getPagination
- changeFormatDate
- filterWriter

NOTES: - Soal ini tidak membatasi penggunaan built-in function
       - Perhatikan TEST CASE yang telah disediakan untuk memahami output yang diharapkan dari masing-masing function.
*/

console.log('Soal 4 Modular Function \n')

/*Function getPagination
  Melakukan pagination, yaitu memisahkan artikel-artikel tersebut ke dalam page-page tertentu, 
  sesuai dengan jumlah maksimal artikel yang dapat ditampung oleh suatu page (limit).
  Tujuan dari pagination ini adalah mengurangi waktu tunggu dari pembaca saat loading list berita.
  Sebagai contoh:
    Jika jumlah artikel adalah 8, serta limit artikel dalam sebuah page adalah 3, maka akan terdapat 3 buah page.
    (coba lihat test case function getPagination)
*/
function getPagination(limit, articles) {
  var hal = 1;
  var mulai = 0;
  var batas = limit;
  var sisa = articles.length;

  if (limit > sisa) {
    return articles;
  } else {
    for (var i = 0; i < articles.length; i++) {
      for (var j = mulai; j < batas; j++) {
        articles[j]['page'] = hal;
      }
      hal++;
      mulai = batas;
      sisa -= limit;
      if (sisa > limit) {
        batas += limit;
      } else {
        batas += sisa;
      }
    }
    return articles;
  }

    // for (var i = mulai; i < batas; i++) {
    //   articles[i]['page'] = hal;
    // }
    // hal++;
    // mulai = batas;
    // sisa -= limit;
    // if (sisa > limit) {
    //   batas += limit;
    // } else {
    //   batas += sisa;
    // }
 
    // for (var i = mulai; i < batas; i++) {
    //   articles[i]['page'] = hal;
    // }
    // hal++;
    // mulai = batas;
    // sisa -= limit;
    // if (sisa > limit) {
    //   batas += limit;
    // } else {
    //   batas += sisa;
    // }

    // for (var i = mulai; i < batas; i++) {
    //   articles[i]['page'] = hal;
    // }

    // articles[0]['page'] = hal;
    // articles[1]['page'] = hal;
    // articles[2]['page'] = hal;
    // hal++;
    // articles[3]['page'] = hal;
    // articles[4]['page'] = hal;
    // articles[5]['page'] = hal;
    // hal++;
    // articles[6]['page'] = hal;

    // console.log(articles);
}

// // TEST CASE getPagination
// console.log(getPagination(3, [
//     { title: 'Nastar Enak Rasanya', writer: 'Dewi', date: '12 June 2018' },
//     { title: 'Fe-male is Iron Man', writer: 'Acong', date: '24 May 2018' },
//     { title: 'Kucing', writer: 'Bagus', date: '23 May 2018' },
//     { title: 'Bumi', writer: 'Kuncoro', date: '2 May 2018' },
//     { title: 'Ikan Jalan', writer: 'Bagus', date: '2 May 2018' },
//     { title: 'Larva', writer: 'Djoko', date: '29 April 2018' },
//     { title: 'Polio', writer: 'Siti', date: '12 April 2018' }
// ]))
/* [
    { title: 'Nastar Enak Rasanya', writer: 'Dewi', date: '12 June 2018', page: 1 },
    { title: 'Fe-male is Iron Man', writer: 'Acong', date: '24 May 2018', page: 1 },
    { title: 'Kucing', writer: 'Bagus', date: '23 May 2018', page: 1 },
    { title: 'Bumi', writer: 'Kuncoro', date: '2 May 2018', page: 2 },
    { title: 'Ikan Jalan', writer: 'Bagus', date: '2 May 2018', page: 2 },
    { title: 'Larva', writer: 'Djoko', date: '29 April 2018', page: 2 },
    { title: 'Polio', writer: 'Siti', date: '12 April 2018', page: 3 }
]*/


/* Function changeFormatDate
  menerima input berupa array of objects yang setiap object didalam memiliki key benama date,
  date memiliki format DD-MM-YYYY. Function ini akan mengubah value tersebut menjadi format DD Month YYYY 
  Output berupa array of objects dengan value dari key date sudah berubah.
  Month dalam bahasa inggris January, February, March, dst.
  (coba lihat test case changeFormatDate, silahkan uncomment jika ingin mencoba)
*/
function changeFormatDate(articles) {
    for (var i = 0; i < articles.length; i++) {
      // var date = [];
      // var tanggal = articles[i]['date'];
      // var pecah = '';
      // for (var j = 0; j < tanggal.length; j++) {
      //   if (tanggal[j] !== '-') {
      //     pecah += tanggal[j];
      //     if (j == tanggal.length-1) {
      //       date.push(pecah);
      //     }
      //   } else {
      //     date.push(pecah);
      //     pecah = '';
      //   }
      // }
      // // console.log(tanggal);
      // // console.log(date);
      // // var convertDate = '';
      var day = '';
      day += articles[i]['date'][0];
      day += articles[i]['date'][1];

      var month = '';
      month += articles[i]['date'][3];
      month += articles[i]['date'][4];
      switch (month) {
        case '01' : {month = 'January'; break; }
        case '02' : {month = 'February'; break; }
        case '03' : {month = 'March'; break; }
        case '04' : {month = 'April'; break; }
        case '05' : {month = 'May'; break; }
        case '06' : {month = 'June'; break; }
        case '07' : {month = 'July'; break; }
        case '08' : {month = 'August'; break; }
        case '09' : {month = 'September'; break; }
        case '10' : {month = 'October'; break; }
        case '11' : {month = 'November'; break; }
        case '12' : {month = 'December'; break; }
      }

      var year = '';
      year += articles[i]['date'][6];
      year += articles[i]['date'][7];
      year += articles[i]['date'][8];
      year += articles[i]['date'][9];

      var convertDate = `${day} ${month} ${year}`;
      // console.log(convertDate);
      articles[i]['date'] = convertDate;
    }

    return articles;
}
// // TEST CASE changeFormatDate
// console.log(changeFormatDate([
//     { title: 'Kucing', writer: 'Siti', date: '12-01-2020' },
//     { title: 'Kunci Rumah', writer: 'Adrian', date: '11-02-2017' },
//     { title: 'Lantai Emas', writer: 'Dewi', date: '10-05-2019' },
//     { title: 'Dunia Lain', writer: 'Ardi', date: '09-12-2018' },
//     { title: 'Negara Api', writer: 'Daniel', date: '08-07-2019' },
//     { title: 'Ayam Suka Bakar Bumi', writer: 'Djoko', date: '07-04-2020' },
// ]))
/* [
  { title: 'Kucing', writer: 'Siti', date: '12 January 2020' },
  { title: 'Kunci Rumah', writer: 'Adrian', date: '11 February 2017' },
  { title: 'Lantai Emas', writer: 'Dewi', date: '10 May 2019' },
  { title: 'Dunia Lain', writer: 'Ardi', date: '09 December 2018' },
  { title: 'Negara Api', writer: 'Daniel', date: '08 July 2019' },
  { title: 'Ayam Suka Bakar Bumi', writer: 'Djoko', date: '07 April 2020'}
]*/


/* Function filterWriter 
  Menerima 2 input berupa articles (array-of-objects) dan name (String). Setiap article telah dipastikan memiliki key writer. 
  Tugasmu mencari article yang di buat oleh seseorang bernama dari input 'name'. Ouput berupa object dengan key writer dan articles 
  dengan format berikut:
  {
   writer : (String),
   articles : (Array of Objects)
  }
  Namun jika tidak temukan article dari writer tersebut value dari key articles merupakan array kosong.
*/
function filterWriter(articles, name) {
    // your code here
    var obj = {writer: name};
    var judul = [];
    for (var i = 0; i < articles.length; i++) {
      // var judul = [];
      if (name == articles[i]['writer']) {
        var buku = {};
        buku['title'] = articles[i]['title'];
        buku['date'] = articles[i]['date'];
        buku['page'] = articles[i]['page'];
        judul.push(buku);
      }
      // obj['articles'] = judul;
    }
    // console.log(obj);
    obj['articles'] = judul
    
    return obj;
}
// // TEST CASE filterWriter 
// console.log(filterWriter([
//     { title: 'Crash Landing On Me', writer: 'Dewi' },
//     { title: 'Ditelepon Nomer 666666', writer: 'Acong' },
//     { title: 'Listrik Vs Air', writer: 'Bagus' },
// ], 'Acong'))  
// { writer: 'Acong', articles: [ { title: 'Ditelepon Nomer 666666' } ] }


/* Function massMediaFitur
  massMediaFitur merupakan driver function (tidak di perbolehkan untuk mengubah bentuk function ini). 
  Function ini memiliki 2 paramater writerName (String) dan pageSize (Number, yang sudah dipastikan lebih besar dari 0). 
  di dalam test case juga sudah ada variable database (Array of Objects). Ouput berupa object dengan key name writer dan articles. 
  Namun value dari articles sudah memiliki page dan format date yang berubah, tanpa ada keyname writer. 
*/
function massMediaFitur(writerName, pageSize) {
    var database = [
        { title: 'Harga Masker Udah Gak Wajar', writer: 'Dewi', date: '12-04-2020' },
        { title: 'Kucing & Anjing Bisa Bersaudara', writer: 'Acong', date: '09-04-2020' },
        { title: 'Jantung Robot', writer: 'Adrian', date: '08-04-2020' },
        { title: 'Sayur Bayam Yang Terbaik', writer: 'Kuncoro', date: '26-03-2020' },
        { title: 'Corona Menjadi Pandemik', writer: 'Bagus', date: '14-03-2020' },
        { title: 'Berbagai Macam Rasa Coklat', writer: 'Djoko', date: '13-03-2020' },
        { title: 'Kucing Bisa Berenang', writer: 'Siti', date: '12-03-2020' },
        { title: 'Face Detection', writer: 'Adrian', date: '11-03-2020' },
        { title: 'Excelator Tinggi 15 Lantai', writer: 'Dewi', date: '10-03-2020' },
        { title: 'Pintu Kemana Saja', writer: 'Ardi', date: '09-03-2020' },
        { title: 'Virtual Keyboard Sensor', writer: 'Daniel', date: '08-03-2020' },
        { title: 'Suhu Badan 31 Celcius', writer: 'Djoko', date: '07-03-2020' },
        { title: 'Daging Vegetarian', writer: 'Bagas', date: '04-03-2020' },
        { title: 'Kacamata Anti Radiasi', writer: 'Ari', date: '03-03-2020' },
        { title: 'Macbook Touch Screen', writer: 'Adrian', date: '02-04-2020' }
    ]
    return filterWriter(getPagination(pageSize, changeFormatDate(database)), writerName)
}


console.log(massMediaFitur('Adrian', 4))
// /*
// {
//   writer: 'Adrian',
//   articles: [
//     { title: 'Jantung Robot', date: '08 April 2020', page: 1 },
//     { title: 'Face Detection', date: '11 March 2020', page: 2 },
//     { title: 'Macbook Touch Screen', date: '02 April 2020', page: 4 }
//   ]
// }*/


console.log(massMediaFitur('Devita', 20)) // { writer: 'Devita', articles: [] }


console.log(massMediaFitur('Ari', 8))
// /*
// {
//   writer: 'Ari',
//   articles: [
//     { title: 'Kacamata Anti Radiasi', date: '03 March 2020', page: 2 }
//   ]
// }*/