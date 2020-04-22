/*
============
JUALAN TAHU
============
Function jualanTahu memiliki tiga parameter yaitu baris, kolom dan calonPembeli. baris dan kolom merupakan Number yang menjadi ukuran dari box tahu. 
Sebelum memulai jualan, isi box tahu penuh dan box merupakan Array 2 Dimensi, Setiap tahu yang ada pada box di wakili dengan elemen '#'.	
Namun jika tahu terjual, maka elemen '#' berubah menjadi ' ' dan omzet bertambah 2000. Parameter ketiga yaitu calonPembeli merupakan object. 
Object dengan key berupa nama pembeli dan value Number yang merupakan kuantitas tahu yang akan di beli, Calon pembeli dapat membeli tahu apabila 
jumlah tahu yang dibeli tidak lebih dari stok tahu yang tersedia. Output dari function ini merupkan object dengan key hasil dan box setelah berjualan.
seperti contoh berikut : 

	INPUT :
	calonPembeli = {ryan: 2, indri: 3, bagas : 4, daniel : 1}
	baris = 4
	kolom = 3

	*SEBELUM BERJUALAN : 
	Box
	[
		[ '#', '#', '#' ],
		[ '#', '#', '#' ],
		[ '#', '#', '#' ],
		[ '#', '#', '#' ]
	]
	Total tahu dalam box = 12
	*SETELAH BERJUALAN : 
	[
		[ '#', '#', ' ' ],
		[ ' ', ' ', ' ' ],
		[ ' ', ' ', ' ' ],
		[ ' ', ' ', ' ' ]
	]
	Terjual : 10 
    Omzet : 20000
    Sisa : 2
	dari pembeli ryan, indri, bagas dan daniel'

	OUPUT : 
	{
		hasil: {
			pembeli: [ 'ryan', 'indri', 'bagas', 'daniel' ],
			omzet: 20000,
			sisa: 2
		},
		box: [
			[ '#', '#', ' ' ],
			[ ' ', ' ', ' ' ],
			[ ' ', ' ', ' ' ],
			[ ' ', ' ', ' ' ]
		]
	}

RULES:
Dilarang menggunakan built-in function, kecuali:
	.push()
	.toUpperCase() dan .toLowerCase()
	Built-in for Math
	Built-in Informative (isNaN(), isArray(), isInteger)
	Built-in function yang mengubah type data ( string --> number / number --> string )
*/

function jualanTahu(baris, kolom, calonPembeli) { 
	// your code here cek
	
	var total = baris * kolom;
	var obj = {}
	var pembeli = [];
	var jumlah = 0;
	for (var key in calonPembeli) {
		if (total > calonPembeli[key]) {
			pembeli.push(key);
			jumlah += calonPembeli[key];
			total -= calonPembeli[key];
		}
	}

	obj['pembeli'] = pembeli;
	obj['omzet'] = jumlah * 2000;
	obj['sisa'] = total;

	var objHasil = {};
	objHasil['hasil'] = obj;

	var tahu = [];
	for (var i = 0; i < baris * kolom; i++) {
		if (i < total) {
			tahu.push('#');
		} else {
			tahu.push(' ');
		}
	}
	// console.log(tahu);

	var kotak = [];
	var temp = [];
	var mulai = 0;
	for (var i = 0; i < tahu.length; i++) {
		mulai++;
		if (mulai % kolom == 0) {
			temp.push(tahu[i]);
			kotak.push(temp);
			temp = [];
		} else {
			temp.push(tahu[i]);
		}
	}
	// console.log(pecah);
	objHasil['box'] = kotak;

	return objHasil;
}


console.log(jualanTahu(8, 5, { alvi: 20, alun: 15 }));
/* {
	hasil: { pembeli: [ 'alvi', 'alun' ], omzet: 70000, sisa: 5 },
	box: [
      [ '#', '#', '#', '#', '#' ],
      [ ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ' ]
    ]
} */


console.log(jualanTahu(4, 10, { untung: 55, ardi: 3, ari: 39, josep: 24, audrick: 10 }));
/* {
	hasil: { pembeli: ['ardi', 'josep', 'audrick'], omzet: 74000, sisa: 3 },
	box: [
		['#', '#', '#', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
		[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
	]
} */
