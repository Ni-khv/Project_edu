const nubersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: nubersOfFilms,
	movies: {},
	actors:{},
	genres:[],
	privat: false 
};


for(let i=0; i < 2; i++){
	const a = prompt('Один из последних просмотренных фильмов?', ''), 
		b = prompt('Насколько оцените его?', '');
	if(a !=null && b !== null && a !==''&& b !=='' &&a.length<50 && b.length<50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else{
		console.log('Error');
		i--;
	}

	
	personalMovieDB.movies[a] = b;
}
if(personalMovieDB.count <10){
	console.log('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count>=10 && personalMovieDB.count< 30){
	console.log('Вы класический зритель');
} else if(personalMovieDB.count>= 30){
	console.log('Вы киноман!');
}else 
	console.log('Произошла ошибка!');


console.log(personalMovieDB);

// const num = 50;
// switch (num) {
// case 49:
// 	console.log('Неверно');
// 	break;
// case 100:
// 	console.log('Много');
// 	break;
// case 50:
// 	console.log('Ok!');
// 	break;
// default:
// 	console.log('Не в этот раз');
// 	break;
// }

// Пример работы функции
let num =20;

function showFirstMessage(text){
	console.log(text);
	num =10;
}
showFirstMessage('Hello World');
console.log(num);

// function calc(a,b){
// 	return(a+b);
// }
// console.log(calc(4,3));
// console.log(calc(5,7));
// console.log(calc(2,15));

// const calc =(a,b) => {
// 	console.log(1);
// 	return a + b;

// };

function sayHello(name) {
	return 'Привет,' + name + '!';
}
const greeting = sayHello('Антон');
console.log(greeting);

	
	
function returnNeighboringNumbers(number) {
	const prevNumber = number - 1;
	const nextNumber = number + 1;
	return [prevNumber, number, nextNumber];
}
const result = returnNeighboringNumbers(5);
console.log(result); 

function getMathResult(base, repetitions) {
	if (typeof repetitions !== 'number' || repetitions <= 0) {
		return base;
	}


	const resultArray = [];
	for (let i = 0; i < repetitions; i++) {
		resultArray.push(base + i * base);
	}

	return resultArray.join('---');
}

// Примеры использования функции
console.log(getMathResult(5, 3)); // Вывод: "5---10---15"
console.log(getMathResult(3, 10)); // Вывод: "3---6---9---12---15---18---21---24---27---30"
console.log(getMathResult(10, 5)); // Вывод: "10---20---30---40---50"
console.log(getMathResult(10, '5')); // Вывод: 10
console.log(getMathResult(10, 0)); // Вывод: 10
console.log(getMathResult(20, -5)); // Вывод: 20
