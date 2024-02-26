// Касовий апарат
// Розробіть функцію касового апарату checkCashRegister(), яка приймає ціну покупки як перший аргумент (price), оплату як другий аргумент (cash) та суму готівки в касі як третій аргумент (cid).

// cid — це 2D масив, який містить список доступного обігу.

// Функція checkCashRegister() завжди повинна повертати об’єкт з ключем status та ключем change.

// Поверніть {status: "INSUFFICIENT_FUNDS", change: []}, якщо сума готівки в касі менша за здачу, або ви не можете віддати здачу.

// Поверніть {status: "CLOSED", change: [...]} з сумою в касі як значення ключа change, якщо воно дорівнює здачі.

// В іншому випадку, поверніть {status: "OPEN", change: [...]} зі здачею в монетах і банкнотах, в порядку від найбільшої до найменшої, як значення ключа change.

// Грошовий обіг	Сума
// Пенні	$0.01 (ПЕННІ)
// Нікель	$0.05 (НІКЕЛЬ)
// Дайм	$0.1 (ДАЙМ)
// Чверть	$0.25 (ЧВЕРТЬ)
// Долар	$1 (ОДИН)
// П’ять доларів	$5 (П’ЯТЬ)
// Десять доларів	$10 (ДЕСЯТЬ)
// Двадцять доларів	$20 (ДВАДЦЯТЬ)
// Сто доларів	$100 (СТО)
// Подивіться нижче на приклад масиву з сумою в касі:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
    const cashInCid = {
        PENNY: 0.01,
        NICKEL: 0.05,
        DIME: 0.1,
        QUARTER: 0.25,
        ONE: 1,
        FIVE: 5,
        TEN: 10,
        TWENTY: 20,
        "ONE HUNDRED": 100,
    };
    let changeDue = cash - price;
    let totalCID = Number(cid.reduce((sum, el) => sum + el[1], 0).toFixed(2));

    if (totalCID < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalCID === changeDue) {
        return { status: "CLOSED", change: cid };
    } else {
        let changeArr = [];
        for (let i = cid.length - 1; i >= 0; i--) {
            let currencyUnitName = cid[i][0];
            let currencyUnitValueTotal = cid[i][1];
            let currencyUnitValue = cashInCid[currencyUnitName];
            let currencyUnitAmount = Number(
                (currencyUnitValueTotal / currencyUnitValue).toFixed(0)
            );
            let currencyUnitsToReturn = 0;

            while (changeDue >= currencyUnitValue && currencyUnitAmount > 0) {
                changeDue -= currencyUnitValue;
                changeDue = Number(changeDue.toFixed(2));
                currencyUnitAmount--;
                currencyUnitsToReturn++;
            }

            if (currencyUnitsToReturn > 0) {
                changeArr.push([
                    currencyUnitName,
                    currencyUnitValue * currencyUnitsToReturn,
                ]);
            }
        }
        if (changeDue > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
        return { status: "OPEN", change: changeArr };
    }
}

console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
    ])
);

// console.log(
//     checkCashRegister(19.5, 20, [
//         ["PENNY", 0.5],
//         ["NICKEL", 0],
//         ["DIME", 0],
//         ["QUARTER", 0],
//         ["ONE", 0],
//         ["FIVE", 0],
//         ["TEN", 0],
//         ["TWENTY", 0],
//         ["ONE HUNDRED", 0],
//     ])
// );

// console.log(
//     checkCashRegister(19.5, 20, [
//         ["PENNY", 0.01],
//         ["NICKEL", 0],
//         ["DIME", 0],
//         ["QUARTER", 0],
//         ["ONE", 1],
//         ["FIVE", 0],
//         ["TEN", 0],
//         ["TWENTY", 0],
//         ["ONE HUNDRED", 0],
//     ])
// );
