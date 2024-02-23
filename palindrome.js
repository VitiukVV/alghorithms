// Перевірка паліндрому
// Поверніть true, якщо заданий рядок є паліндромом. В іншому випадку, поверніть false.

// Паліндром — це слово чи речення, що однаково пишеться в обох напрямках (зліва направо та справа наліво), незважаючи на розділові знаки, велику/малу літеру чи пробіли.

// Примітка: вам потрібно прибрати всі символи, що не є абетко-цифровими (розділові знаки, пробіли та символи) і написати весь текст одинаково (великими або малими літерами) для перевірки паліндромів.

// Ми будемо передавати рядки з різними форматами (наприклад, racecar, RaceCar та race CAR).

// Ми також будемо передавати рядки зі спеціальними символами (наприклад, 2A3*3a2, 2A3 3a2 та 2_A3*3#A2).

function palindrome(str) {
    const formatedStr = str
        .split(/[^a-zA-Z0-9]/g)
        .join("")
        .toLowerCase();
    const reversedStr = formatedStr.split("").reverse().join("");
    if (formatedStr === reversedStr) {
        return true;
    }
    return false;
}

console.log(palindrome("eye"));
console.log(palindrome("A man, a plan, a canal. Panama")); //має повертати true.
console.log(palindrome("not a palindrome"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("_eye"));
console.log(palindrome("0_0 (: /- :) 0-0"));
