"use strict"
// Рядки 
let someString = `Я вивчаю JS на курсі Євгена Андріканича!`;
/*
console.log(someString.length);// повертає кількість символів у рядку
console.log(someString[5]);// повертає 4й символ рядку
console.log(someString.toLowerCase());// toLowerCase переводить всі символи рядку в нижній регістр
console.log(someString.toUpperCase());//toUpperCase переводить всі символи рядку у верхній регістр
console.log(someString.includes('Євгена')); // includes поевртає булевий вираз (логічне значення)
console.log(someString.slice(10, 15)); // "Вирізає" частину рядка і повертає її
console.log(someString.replace('JS', 'основи JavaScript')); // replace замінює значення в рядку
let someNewString = `Я вивчаю JavaScript з Євгеном Андріканичем!`;
console.log(someString > someNewString); // порівняння двох рядків. Повретає булевий вираз.
*/
/*================================ */
// Числа
/*
let someNumber = 10e8;
let someText = `Населення планети Земля складає ${someNumber} людей!`;
console.log(someText);
*/
/*
let numOne = 15.7;
let numTwo = 78.1;
let numThree = 5.6;
console.log(Math.floor(numOne));// Округлення в меншу сторону
console.log(Math.ceil(numTwo));//Округлення в більшу сторону
console.log(Math.round(numThree));//Округлення до найближчого цілого числа
*/
/*
let someNum = 33.62;
console.log(Math.abs(someNum)); // Повертає модуль числа
*/
/*
console.log(Math.random());//Повертається випадкове число з плаваючою крапкою від 0, включаючи сам нуль до 1, не включаючи 1.
let randomNum = Math.random() * 10;//Повертається випадкове число з плаваючою крапкою від 1 до 10.
console.log(randomNum);
*/
/*
let randomNumOne = Math.random() * 10;
console.log(randomNumOne);
let randomNumTwo = Math.random() * 10;
console.log(randomNumTwo);
let randomNumThree = Math.random() * 10;
console.log(randomNumThree);
console.log(Math.max(randomNumOne, randomNumTwo, randomNumThree)); // метод повертає найбільше число
console.log(Math.min(randomNumOne, randomNumTwo, randomNumThree)); // метод повертає найменше число
*/
/*
let someValue = `90.999%`;
let someNumOne = parseInt(someValue); //Повертає ціле число без плаваючої крапки.
let someNumTwo = parseFloat(someValue); //Повертає число з плаваючою крапкою.
console.log(someNumOne);
console.log(typeof someNumOne);
console.log(someNumTwo);
*/
/*
let someExpression = `Павло` / 5;
console.log(isNaN(someExpression)); // метод перевіряє чи результат обчислення NaN.
console.log(typeof someExpression);
*/
/*
let someCalculation = ((99 - 15.5) * 100) / 0;
console.log(isFinite(someCalculation)); // метод перевірє чи є результат обчислення цілим числом.
*/
/*
let someNumber = Math.random() * 10;
console.log(someNumber);
let someDegreeNum = Math.pow(someNumber, 2); //Повертає випадкове число зведене до ступеня 2
console.log(someDegreeNum);
*/
/*
let someNum = 1.0006 + Number.EPSILON; // властивість Number.EPSILON представляє різницю між одиницею. З її допомогою можна отримати вірний результат округлення невеликих числе
let someRoundNum = Math.round(someNum * 1000) / 1000;
console.log(someRoundNum);
*/
/*
let value = 58 + "Фрилансер";
if (isNaN(value)) {
	console.log('Результат виразу NaN.');
}
console.log(Math.max(10, 58, 39, -150, 0));
*/
// Оператори
/*
let a = 15;
let b = 8;
let result = a + b;
console.log(result);
result = a - b;
console.log(result);
result = a * b;
console.log(result);
result = a / b;
console.log(result);
result = a % b;
console.log(result);//залишок від ділення
*/
/*
let someNumberOne = Math.random();
console.log(someNumberOne);
console.log(someNumberOne++);//Збільшує випадкове число на 1 та повертає початкове значення
console.log(++someNumberOne);//Збільшує випадкове число на 1 та повертає нове значення
let someNumberTwo = Math.random();
console.log(someNumberTwo);
console.log(someNumberTwo--);//Зменшує випадкове число на 1 та повертає початкове значення
console.log(--someNumberTwo);//Збільшує випадкове число на 1 та повертає нове значення
*/
/*
let x = 0;
let y = 1;
let compair = x > y;
console.log(compair);
compair = x < y;
console.log(compair);
compair = x >= y;
console.log(compair);
compair = x <= y;
console.log(compair);
compair = x <= y;
console.log(compair);
compair = x === y;
console.log(compair);
compair = x !== y;
console.log(compair);
*/
//Умовне розгалуження
/*
let randomNumOne = Math.random();
let randomNumTwo = Math.random();

if (randomNumOne === randomNumTwo) {
	console.log(`Нічія`);
} else if (randomNumOne > randomNumTwo) {
	console.log(`Перший переміг`);
} else if (randomNumOne < randomNumTwo) {
	console.log(`Другий переміг`);
} else {
	с(`Щось пішло не так:(`);
}
*/
/*
let a = Math.random();
console.log(a);
let b = Math.random();
console.log(b);
let x = Math.random();
console.log(x);
console.log(Boolean(x));
let y = Math.random();
console.log(y);
console.log(Boolean(y));

if (a > b || b < x && Boolean(x) == Boolean(y) || null) {
	console.log(`Умова вірна`);
} else {
	console.log(`Написав якусь фігню`);
}
*/
/*
let someVar = Math.random() === Math.random() ? "Числа рівні" : null;
console.log(typeof someVar);
*/
/*
let message = (0 < 1 || 1 === 1 && 5 > 3 || 0 !== -1) ? true : false;
console.log(message);
*/
/*
let message = (Math.random() < Math.random() || Math.random() > Math.random()) ? true : false;
console.log(message);
*/
//Цикл for
/*
let numberOfUsers = 6;
for (let e = 0; e < numberOfUsers; ++e) {
	console.log(e);
}
*/
/*
let randomNum = Math.random() * 20;
for (let i = 0; i <= randomNum; ++i) {
	console.log(i);
}
*/
/*
let messageOne = `Привіт! Я вчу JS!`;
let messageTwo = `Привіт! Я вчу HTML!`;
let messageCompair = messageOne > messageTwo;
if (messageCompair) {
	for (let i = 0; i < messageOne.length; ++i) {
		console.log(messageOne[i]);
	}
} else {
	for (let i = 0; e < messageTwo.length; ++i) {
		console.log(messageTwo[i]);
	}
}
*/
/*
let num;
for (num = 0; num < 10; num++) {
	console.log(num);
	if (num == 5) break;
}
let numTwo;
for (numTwo = 0; numTwo < 10; numTwo++) {
	console.log(numTwo);
	if (numTwo == 5) continue;
}
*/
//Задача № 1 (2 способи)
/*
let counter;
for (counter = 1; counter < 6; counter++) {
	console.log(counter);
}
*/
/*
let counter = 1;
while (counter < 6) {
	console.log(counter);
	counter++;
}
*/
// Задача № 2 (1, тому що булеве значення 0 false)
/*
let num = 8;
while (num) {
	console.log(num);
	num--;
}
*/
//Задача №3
/*
let num = 0;
while (num < 3) {
	console.log(`Число: ${num}`);
	num++;
}
*/
//Задача № 4 
/* 
firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 1) {
			break firstFor;
		}
		console.log(size);
	}
}
*/