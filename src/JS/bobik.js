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