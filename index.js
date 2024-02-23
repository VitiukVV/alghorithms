// Сума всіх чисел в діапазоні
// Вам буде надано масив з двох чисел. Поверніть суму цих двох чисел плюс суму всіх чисел між ними. Найменше число не завжди буде на першому місці.

// Наприклад, sumAll([4,1]) має повертати 10, оскільки сума всіх чисел між 1 і 4 (включно з ними) дорівнює 10.

// function sumAll(arr) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   let newArr = [];
//   for (let i = sortedArr[0]; i <= sortedArr[sortedArr.length - 1]; i += 1) {
//     newArr.push(i);
//   }
//   const sum = newArr.reduce((prev, item) => {
//     return prev + item;
//   }, 0);
//   return sum;
// }

// console.log(sumAll([1, 4]));

// Різниця між двома масивами
// Порівняйте два масиви і поверніть новий масив з елементами, знайденими лише в одному з двох наданих масивів. Іншими словами, поверніть симетричну різницю двох масивів.

// Примітка: ви можете повернути масив з його елементами в будь-якому порядку.
// function diffArray(arr1, arr2) {
//   const newArr = [...arr1, ...arr2];
//   const unique = newArr.filter((item) => {
//     return !arr1.includes(item) || !arr2.includes(item);
//   });
//   return unique;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(
//   diffArray(
//     ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )
// );

// Пошук та знищення
// Вам буде надано початковий масив як перший аргумент до функції destroyer, який супроводжується одним або більше аргументами. Видаліть всі елементи з початкового масиву, які мають таке ж значення, як ці аргументи.

// Функція має приймати невизначену кількість аргументів; таку функцію часто називають варіадичною. Ви можете отримати доступ до додаткових аргументів, додавши залишковий параметр до визначення функції або використавши об’єкт arguments.
// function destroyer(arr, ...args) {
//   const newArr = arr.filter((item) => !args.includes(item));
//   return newArr;
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// Де ж ти, Ромео?
// Напишіть функцію, яка проглядає масив об’єктів (перший аргумент) і повертає масив усіх об’єктів, які мають однакові пари імен та значень (другий аргумент). Кожна пара імен та значень вихідного об'єкта повинна бути в об’єкті з колекції, якщо він необхідний у повернутому масиві.

// Наприклад, якщо першим аргументом є [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }] та другим аргументом є { last: "Capulet" }, тоді потрібно повернути третій об’єкт з масиву (перший аргумент), оскільки він містить ім’я та його значення, яке було передане до другого аргументу.

// function whatIsInAName(collection, source) {
//   return collection.filter((item) => {
//     return Object.keys(source).every((key) => item[key] === source[key]);
//   });
// }

// console.log(
//   whatIsInAName(
//     [
//       { first: "Romeo", last: "Montague" },
//       { first: "Mercutio", last: null },
//       { first: "Tybalt", last: "Capulet" },
//     ],
//     { last: "Capulet" }
//   )
// );

// Шашличний регістр
// Перетворіть рядок в шашличний регістр. У шашличному регістрі всі-слова-в-нижньому-регістрі-та-розділені-рискою.
// function spinalCase(str) {
//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }

// console.log(spinalCase("This Is Spinal Tap"));

// Поросяча латина
// Поросяча латина — це спосіб шифрування англійських слів. Правила такі:

// - Якщо слово починається з приголосного звуку, то перший приголосний або сполучення приголосних переміщуються в кінець слова і додається ay.

// - Якщо слово починається з голосного звуку, то вкінці просто додається way.

// Перекладіть поданий рядок на поросячу латину. Відомо, що при вводі всі рядки будуть складатись з англійських слів у нижньому регістрі.

// function translatePigLatin(str) {
//   const indexOfLetter = str.search(/[aeiou]/);
//   if (indexOfLetter > 0) {
//     const firstPartOfStr = str.slice(0, indexOfLetter);
//     const secondPartOfStr = str.slice(indexOfLetter, str.length);
//     return secondPartOfStr + firstPartOfStr + "ay";
//   } else if (indexOfLetter === -1) {
//     return str + "ay";
//   } else {
//     return str + "way";
//   }
// }

// console.log(translatePigLatin("california"));
// console.log(translatePigLatin("paragraphs"));
// console.log(translatePigLatin("glove")); //має повертати рядок oveglay
// console.log(translatePigLatin("rhythm")); //має повертати рядок rhythmay.
// console.log(translatePigLatin("schwartz")); //має повертати рядок artzschway.
// console.log(translatePigLatin("eight")); //має повертати рядок eightway.

// Пошук та заміна
// Виконайте пошук та заміну на реченні, використовуючи надані аргументи, та поверніть нове речення.

// Першим аргументом є речення, над яким потрібно виконати пошук і заміну.

// Другим аргументом є слово, яке ви будете заміняти (до).

// Третім аргументом є слово, яким ви заміните другий аргумент (після).

// Примітка: збережіть регістр першого символу початкового слова, коли ви замінюєте його. Наприклад, якщо ви хочете замінити слово Book словом dog, його потрібно замінювати як Dog

// function myReplace(str, before, after) {
//   const beforeFirstCapital = before.search(/[A-Z]/);
//   if (beforeFirstCapital === 0) {
//     const afterFirstCapital = after.charAt(0).toUpperCase() + after.slice(1);
//     return str.replace(before, afterFirstCapital);
//   }
//   return str.replace(before, after.toLowerCase());
// }

// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); //He is Sitting on the couch
// console.log(
//   myReplace("Let us get back to more Coding", "Coding", "algorithms")
// ); //Let us get back to more Algorithms.
// console.log(myReplace("I think we should look up there", "up", "Down")); //має повертати рядок I think we should look down there.

// Формування пар ДНК
// Пари ланцюжків ДНК складаються з нуклеотидів. Базові пари позначаються символами AT та CG, які утворюють будівельні блоки подвійної спіралі ДНК.

// В ланцюжку ДНК відсутній один елемент. Напишіть функцію для пошуку відсутніх базових пар для наданого ланцюжка ДНК. Знайдіть відповідний символ для кожного символу в наданому рядку. Поверніть результати як 2d-масив.

// Наприклад, при введенні GCG поверніть [["G", "C"], ["C","G"], ["G", "C"]]

// Символ та його пара об’єднуються в масив, і всі масиви згруповані в один інкапсульований масив.

// function pairElement(str) {
//   const pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C",
//   };
//   return str.split("").map((symb) => [symb, pairs[symb]]);
// }

// console.log(pairElement("GCG"));

// Пропущені літери
// Знайдіть пропущену літеру в переданому діапазоні літер та поверніть її.

// Якщо у діапазоні наявні всі літери, поверніть undefined.

// function fearNotLetter(str) {
//   for (let i = 0; i < str.length; i++) {
//     const charCode = str.charCodeAt(i);
//     if (charCode !== str.charCodeAt(0) + i) {
//       return String.fromCharCode(str.charCodeAt(0) + i);
//     }
//   }
// }
// console.log(fearNotLetter("abcdefghjklmno"));
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
// console.log(fearNotLetter("abce"));

// Сортування масиву
// Напишіть функцію, яка приймає два або більше масивів та повертає новий масив унікальних значень у порядку наданих початкових масивів.

// Іншими словами, усі значення, що є в масиві, повинні бути в початковому порядку, але в кінцевому масиві не повинно бути повторень.

// Унікальні числа повинні бути відсортовані за початковим порядком, але кінцевий масив не повинен бути відсортованим за числовим порядком.

// Ознайомтеся з тестами тверджень для прикладу.

// function uniteUnique(...arr) {
//   const newArr = [...arr]
//     .flatMap((el) => el)
//     .filter((el, index, arr) => arr.indexOf(el) === index);
//   return newArr;
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //має повертати [1, 3, 2, 5, 4].
// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); //має повертати [1, 2, 3, 5, 4, 6, 7, 8].

// Перетворення символів для HTML
// Перетворіть символи &, <, >, " (подвійні лапки) та ' (апостроф) у відповідне позначення символів для HTML.

// function convertHTML(str) {
//   const htmlSymbols = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;",
//   };

//   return str
//     .split("")
//     .map((el) => htmlSymbols[el] || el)
//     .join("");
// }

// console.log(convertHTML("Dolce & Gabbana")); //Dolce &amp; Gabbana.
// console.log(convertHTML('Stuff in "quotation marks"')); // має повертати рядок Stuff in &quot;quotation marks&quot;.

// Сума всіх непарних чисел Фібоначчі
// Маючи додатнє ціле число num, поверніть суму всіх непарних чисел Фібоначчі, які менші чи дорівнюють num.

// Першими двома числами в послідовності Фібоначчі є 0 та 1. Кожне додаткове число у послідовності є сумою двох попередніх чисел. Першими сімома числами в послідовності Фібоначчі є 1, 1, 2, 3, 5 і 8.

// Наприклад, sumFibs(10) має повертати 10, оскільки всі непарні числа Фібоначчі, які менші або дорівнюють 10 — це 1, 1, 3 і 5.

// function sumFibs(num) {
//   if (num <= 1) {
//     return num;
//   }
//   const fibonacci = [0, 1];
//   for (let i = 2; i <= num; i++) {
//     const nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
//     if (nextNumber > num) {
//       break;
//     }
//     fibonacci.push(nextNumber);
//   }
//   return fibonacci
//     .filter((number) => number % 2 !== 0 && number <= num)
//     .reduce((prev, num) => {
//       return prev + num;
//     }, 0);
// }

// console.log(sumFibs(75025));

// Сума всіх простих чисел
// Просте число — це ціле число, яке більше за 1 та має два дільники: 1 і саме число. Наприклад, 2 є простим числом, оскільки воно ділиться лише на 1 і 2. І навпаки, 4 не є простим числом, оскільки воно ділиться на 1, 2 і 4.

// Перепишіть sumPrimes таким чином, щоб поверталася сума всіх простих чисел, які менші або дорівнюють num.

// function sumPrimes(num) {
//   let result = 0;

//   function isPrime(n) {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
//     return n > 1;
//   }

//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       result += i;
//     }
//   }

//   return result;
// }

// console.log(sumPrimes(10)); //має повертати 17

// Найменше спільне кратне
// Знайдіть найменше спільне кратне заданих параметрів, яке можна поділити на обидва з них, а також на всі послідовні числа в діапазоні між цими параметрами.

// Діапазоном буде масив з двох чисел, які необов’язково будуть у числовому порядку.

// Наприклад, якщо дано 1 і 3, знайдіть найменше спільне кратне обох чисел(1 і 3), яке рівно ділиться на всі числа між 1 і 3. Тут відповіддю буде 6.

// function smallestCommons(arr) {
//   const [min, max] = [...arr].sort((a, b) => a - b);
//   let fullArr = [];
//   for (let i = min; i <= max; i++) {
//     fullArr.push(i);
//   }

//   function gcd(a, b) {
//     console.log(a, b);
//     return b === 0 ? a : gcd(b, a % b);
//   }

//   function lcm(a, b) {
//     return (a * b) / gcd(a, b);
//   }

//   return fullArr.reduce((multiple, num) => lcm(multiple, num), 1);
// }

// console.log(smallestCommons([1, 3])); //має повертати 6.
// console.log(smallestCommons([1, 5])); //має повертати 60.
// console.log(smallestCommons([10, 2])); //має повертати 2520.

// Облиште
// Переберіть масив arr та вилучіть кожен елемент, починаючи з першого елемента (індекс 0), допоки функція func не поверне true, коли ітерований елемент пройде крізь.

// Потім поверніть решту масиву, якщо умову виконано. В іншому випадку arr має повертатися у вигляді порожнього масиву.

// function dropElements(arr, func) {
//   let sliceIndex = arr.findIndex(func);
//   return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
// }

// console.log(
//   dropElements([1, 2, 3], function (n) {
//     return n <= 3;
//   })
// );

// console.log(
//   dropElements([1, 2, 3, 4], function (n) {
//     return n > 5;
//   })
// ); //має повертати []

// Нездоланна сила
// Вирівняйте вкладений масив.Ви повинні врахувати різні рівні вкладення.
// У вашому рішенні не повинні використовуватися методи Array.prototype.flat() або Array.prototype.flatMap().

// function steamrollArray(arr) {
//   const result = [];
//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       result.push(...steamrollArray(element));
//     } else {
//       result.push(element);
//     }
//   });
//   return result;
// }

// console.log(steamrollArray([1, [2], [3, [[4]]]])); //має повертати [1, 2, 3, 4]

// Бінарні агенти
// Поверніть переданий бінарний рядок, перекладений англійською мовою.

// Бінарний рядок буде розділений пробілом.

// function binaryAgent(str) {
//   return str
//     .split(" ")
//     .map((el) => String.fromCharCode(parseInt(el, 2)))
//     .join("");
// }

// console.log(
//   binaryAgent(
//     "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
//   )
// ); //має повертати рядок Aren't bonfires fun!?

// console.log(
//   binaryAgent(
//     "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
//   )
// ); //має повертати рядок I love FreeCodeCamp!

// Усе вірно
// Перевірте, чи предикат (другий аргумент) є істинним для усіх елементів колекції (перший аргумент).

// Іншими словами, вам надано колекцію масивів об’єктів. Предикат pre буде властивістю об’єкта і вам потрібно повернути true, якщо його значення truthy (істинне). В іншому випадку поверніть false.

// Значення truthy у JavaScript — це значення, які перетворюються на true при оцінці в булевому контексті.

// Пам’ятайте, ви можете отримати доступ до властивостей об’єкта, використовуючи точкову нотацію або дужкову нотацію ([]).

// function truthCheck(collection, pre) {
//   return collection.every((el) => Boolean(el[pre]));
// }

// console.log(
//   truthCheck(
//     [
//       { name: "Quincy", role: "Founder", isBot: false },
//       { name: "Naomi", role: "", isBot: false },
//       { name: "Camperbot", role: "Bot", isBot: true },
//     ],
//     "isBot"
//   )
// ); //має повертати false.

// console.log(
//   truthCheck(
//     [
//       { name: "Quincy", role: "Founder", isBot: false },
//       { name: "Naomi", role: "", isBot: false },
//       { name: "Camperbot", role: "Bot", isBot: true },
//     ],
//     "name"
//   )
// ); //має повертати true.

// console.log(
//   truthCheck(
//     [
//       { name: "Pikachu", number: 25, caught: 3 },
//       { name: "Togepi", number: 175, caught: 1 },
//     ],
//     "number"
//   )
// ); //має повертати true.

// Додаткові аргументи
// Створіть функцію, яка додає два аргументи. Якщо вказано лише один аргумент, то поверніть функцію, яка очікує один аргумент і повертає суму.

// Наприклад, addTogether(2, 3) має повертати 5, а addTogether(2) має повертати функцію.

// Якщо викликати функцію, повернуту з одним аргументом, то повернеться сума:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) повертає 5.

// Якщо жоден з аргументів не є дійсним числом, поверніть undefined.

// function addTogether() {
//   const [first, second] = arguments;
//   if (typeof first === "number") {
//     if (typeof second === "number") return first + second;
//     if (arguments.length === 1) return (second) => addTogether(first, second);
//   }
// }

// console.log(addTogether(2)(7));

// Створіть людину
// Заповніть конструктор об’єкта, використовуючи наведені нижче методи:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(first, last)
// Запустіть тести, щоб побачити очікуваний вивід для кожного методу. Ці методи повинні бути єдиними доступними засобами для взаємодії з об’єктом. Кожен тест оголосить новий екземпляр Person як new Person('Bob', 'Ross').
// Ви не повинні змінювати сигнатуру функції.
// Ви не повинні перепризначати параметр first.
// Ви не повинні перепризначати параметр last.
// Не треба додавати жодних властивостей. Object.keys(Person).length завжди має повертати 6.
// Ви повинні мати можливість створити об’єкт Person.
// Об’єкт Person не повинен мати властивість firstName.
// Об’єкт Person не повинен мати властивість lastName.
// Метод .getFirstName() має повертати рядок Bob.
// .getLastName() має повертати рядок Ross.
// Метод .getFullName() має повертати рядок Bob Ross.
// Метод .getFullName() має повертати рядок Haskell Ross після виклику .setFirstName('Haskell').
// Метод .getFullName() має повертати рядок Bob Curry після виклику .setLastName('Curry').
// Метод .getFullName() має повертати рядок Haskell Curry після виклику .setFullName('Haskell', 'Curry').
// Метод .getFirstName() має повертати рядок Haskell після виклику .setFullName('Haskell', 'Curry').
// Метод .getLastName() має повертати рядок Curry після виклику .setFullName('Haskell', 'Curry').
// Метод .getFullName() має повертати рядок Emily Martinez de la Rosa після виклику .setFullName('Emily Martinez', 'de la Rosa').
// Властивість .getFirstName() має повертати рядок Emily Martinez після виклику .setFullName('Emily Martinez', 'de la Rosa').
//  Властивість.getLastName() має повертати рядок de la Rosa після виклику.setFullName('Emily Martinez', 'de la Rosa').

// const Person = function (first, last) {
//   let firstName = first;
//   let lastName = last;
//   this.getFirstName = function () {
//     return firstName;
//   };
//   this.getLastName = function () {
//     return lastName;
//   };

//   this.getFullName = function () {
//     return this.getFirstName() + " " + this.getLastName();
//   };

//   this.setFirstName = function (newFirst) {
//     return (firstName = newFirst);
//   };

//   this.setLastName = function (newLast) {
//     return (lastName = newLast);
//   };
//   this.setFullName = function (newFirstName, newLastName) {
//     this.setFirstName(newFirstName);
//     this.setLastName(newLastName);
//     return this.getFullName();
//   };
// };

// const bob = new Person("Bob", "Ross");

// Карта орбіт
// Згідно з третім законом Кеплера, орбітальним періодом  T
//   двох точкових мас, що обертаються навколо одна одної по круговій або еліптичній орбіті, є:

// T=2πa3μ−−−√

// a
//   — велика піввісь орбіти
// μ=GM
//   — стандартний гравітаційний параметр
// G
//   — гравітаційна стала,
// M
//   — маса масивнішого тіла.
// Поверніть новий масив, який трансформує середню висоту елементів у їхні орбітальні періоди (у секундах).

// Масив міститиме об’єкти у форматі {name: 'name', avgAlt: avgAlt}.

// Значення потрібно округлити до найближчого цілого числа. Тіло, навколо якого потрібно обертатися, — Земля.

// Радіус Землі становить 6367.4447 кілометрів, а значення GM Землі — 398600.4418 км3с-2.

// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
//   return arr.map(({ name, avgAlt }) => {
//     const earth = earthRadius + avgAlt;
//     const orbitalPeriod = Math.round(
//       2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM)
//     );
//     return { name: name, orbitalPeriod: orbitalPeriod };
//   });
// }

// console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])); //має повертати [{name: "sputnik", orbitalPeriod: 86400}]
// console.log(
//   orbitalPeriod([
//     { name: "iss", avgAlt: 413.6 },
//     { name: "hubble", avgAlt: 556.7 },
//     { name: "moon", avgAlt: 378632.553 },
//   ])
// ); //має повертати [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
