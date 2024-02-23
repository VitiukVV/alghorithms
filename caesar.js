// Шифр Цезаря
// Одним з найпростіших і найпоширеніших шифрів є шифр Цезаря, також відомий як шифр зсуву. У шифрі зсуву значення літери зміщене на встановлену кількість.

// Часто використовують шифр ROT13, який зміщує літеру на 13 місць. Таким чином, A ↔ N, B ↔ O і так далі.

// Напишіть функцію, яка приймає закодований рядок ROT13 як вхідні дані та повертає декодований.

// Всі літери повинні бути великими. Не замінюйте неалфавітні символи (пробіли, знаки пунктуації), але перенесіть їх.

function rot13(str) {
    const shiftCount = 13;
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(((code - 65 + shiftCount) % 26) + 65);
        } else {
            result += String.fromCharCode(code);
        }
    }
    return result;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
