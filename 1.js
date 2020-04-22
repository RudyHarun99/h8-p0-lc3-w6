/**
 * ================
 * COUNT VOKAL DESC
 * ================
 * Function ini memiliki parameter `words` berupa Array. Buatlah function ini yang bertugas untuk menghitung tiap huruf vokal 
 * pada String dalam Array dan mengurutkan secara descending (dari yang terbesar ke yang lebih kecil).
 * Total dari masing-masing huruf vokal akan di simpan dalam array multidimensi.
 * Jika jumlah setiap huruf vokal sama maka urutannya A I U E O.
 * 
 * RULES:
 * - Wajib menuliskan PSEUDOCODE!!
 * - Dilarang menggunakan built-in function selain .push() , toUpperCase , toLoweCase dan built-in for Math 
 */

/*  
PSEUDOCODE
===========
SET vokal as array multi dimensi

FOR loop k < vokal.length
    FOR loop i < words.length
        FOR loop j < words[i].length
            IF words[i][j].toUpperCase() equals vokal[k][0]
                THEN vokal[k][1] plus 1
            END IF
        END FOR
    END FOR
END FOR

FOR loop i < vokal.length
    FOR loop j < vokal.length-1
        IF vokal[j][1] less than vokal[j+1][1]
            THEN SET temp as vokal[j+1][1]
                SET vokal[j+1][1] as vokal[j][1]
                SET vokal[j][1] as temp
        END IF
    END FOR
END FOR

RETURN vokal
*/

function countVokalDesc(words) {
    var vokal = [['A', 0], ['I', 0], ['U', 0], ['E', 0], ['O', 0]];

    for (var k = 0; k < vokal.length; k++) {
        for (var i = 0; i < words.length; i++) {
            for (var j = 0; j < words[i].length; j++) {
                // console.log(words[i][j].toUpperCase());
                if (words[i][j].toUpperCase() == vokal[k][0]) {
                    vokal[k][1]++;
                }
            }
        }
    }
    // console.log(vokal);

    for (var i = 0; i < vokal.length; i++) {
        for (var j = 0; j < vokal.length-1; j++) {
            if (vokal[j][1] < vokal[j+1][1]) {
                var temp = vokal[j+1];
                vokal[j+1] = vokal[j];
                vokal[j] = temp;
            }
        }
    }
    // console.log(vokal);

    return vokal;
}


console.log(countVokalDesc(['Aiueo', 'Audrick', 'Josep'])) 
// [ [ 'A', 2 ], [ 'I', 2 ], [ 'U', 2 ], [ 'E', 2 ], [ 'O', 2 ] ]

console.log(countVokalDesc(['Kari', 'Luffi', 'PomPom', 'HamTaro', 'RabbitA', 'Rabbit'])) 
// // [ [ 'A', 6 ], [ 'I', 4], [ 'O', 3 ], [ 'U', 1 ], [ 'E', 0 ] ]

console.log(countVokalDesc(['hello', 'world', 'foo', 'bar', 'lorem' ,'ipsum', 'john', 'doe','and', 'alice']))
//  // [ [ 'O', 7 ], [ 'E', 4 ], [ 'A', 3 ], [ 'I', 2 ], [ 'U', 1 ] ]