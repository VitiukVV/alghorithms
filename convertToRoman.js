// Конвертер римських чисел
// Перетворіть подане число в римське число.

// Римські числа	Арабські числа
// M	1000
// CM	900
// D	500
// CD	400
// С	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// Всі римські числа повинні бути написаними великими літерами.

const romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

function convertToRoman(num) {
    let result = "";
    for (const [symbol, value] of Object.entries(romanNumbers)) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

console.log(convertToRoman(44)); //має повертати рядок XLIV
console.log(convertToRoman(1004));
