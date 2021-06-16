// Домашнее задание №1: (код надо раскоментировать)
// let name = prompt('Ваше имя:', '');
// let surname = prompt('Ваша фамилия:', '');
// let age = prompt('Ваш возраст:', '');
// console.log(`Вы ${name} ${surname}. Вам ${age} лет!`);


// Домашнее задание №2: Создать программу, которая запрашивает у пользователя число, в консоль выводит числа от 1 до этого числа, но пропускает числа, которые кратны (делятся без остатка) 4-м.
// let number;
// number = prompt('Введите число', '');
// while (isNaN(+number)) {
//     number = prompt('Пожалуйста введите число цифрами', '');
// } if (number == null) {
//     alert('Отменено');
// } else {
//     for (let i = 0; i < number; i++) {
//         if (i % 4 == 0) continue;
//         console.log( i );
//     }
// }


// Домашнее задание №2: Написать программу, которая будет получать число и с помощью цикла while считать его факториал.
// let x = prompt('Введите число', '');
// while (isNaN(+x)) {
//     x = prompt('Пожалуйста введите число цифрами', '');
// } if (x == null) {
//     alert('Отменено');
// } else {
// let nthFl = 1;
// for(let i = 1; i <= x; i++) {
//     nthFl *= i;
// }
// console.log(nthFl);
// }



// Домашнее задание №2: Написать программу, которая будет получать число и его степень, с помощью цикла for возвести число в степень.
// let n = prompt('Введите число', ''); 
// while (isNaN(+n)) { 
//     n = prompt('Пожалуйста введите число цифрами', '');
// } if (n == null) {
//     alert('Отменено');
//     } else {
//     let degree = prompt('Введите степень', '');
//     while (isNaN(+degree)) {
//         degree = prompt('Пожалуйста введите степень цифрами', '');
//         } if (degree == null) {
//         alert('Отменено');
//         } else {
//         let soughtFor = 1;
//         for (let i = 1; i <= degree; i++) {
//             soughtFor *= n;
//         } console.log(soughtFor);
//     }
// }

// Домашнее задание №2: Написать игру “Угадай число”. Игра должна продолжаться до тех пор, пока пользователь не укажет правильное число.
// let rand = Math.floor(1 + Math.random() * 10);
// let userAnsver = prompt('Угадайте число и введите его', '');
// while ((userAnsver == null) || (isNaN(+userAnsver)) || (+rand !== +userAnsver)) {
//     userAnsver = prompt('Попробуйте еще раз.', '');
// } alert('Поздравляем! Вы угадали.');

// Домашнее задание №3: Используя рекурсию попросите пользователя ввести возраст, если он больше 18, то покажите сообщение об успехе, если меньше, то запустите функцию снова.
// function addAge() {
//     let userAge = prompt('Введите ваш возраст', '');
//     if ((+userAge <= 18) || (isNaN(+userAge))) {
//         alert('Вы не ввели необходимый возраст цифрами');
//         addAge();
//     } else {
//         alert('Вы получили доступ');
//     }
// }
// addAge();

// Домашнее задание №3: Напишите 4 чистые функции, add (сложение 2 чисел), subtract (вычитание из первого аргумента второго), divide (деление первого аргумента на второй) и multiply (умножение). В комментариях напишите, почему эти функции чистые.
// function add(a,b) { // Функция является чистой, т.к. никак не влияет на состояние страницы, не пользуется глобальными переменными, не взаимодействует с пользователем, возвращает одинаковые значения с одинаковыми переменными.
//     return (a + b);
// }
// function subtract(a,b) {
//     return (a - b);
// }
// function divide(a,b) {
//     return (a / b);
// }
// function multiply(a,b) {
//     return (a * b);
// }


// оживляет инпуты навыков на главной
// 1 навык
let sliderHtml = document.getElementById('skill-input_html');
let outputHtml = document.getElementById('skill-value_html');

outputHtml.innerHTML = sliderHtml.value;

sliderHtml.oninput = function() {
    outputHtml.innerHTML = this.value;
}

sliderHtml.addEventListener('mousemove', function() {
    let x = sliderHtml.value;
    let color = 'linear-gradient(90deg, rgba(7, 7, 7, 1)' + x + '%, rgba(229, 229, 229, 1)' + x + '%)';
    sliderHtml.style.background = color;
})


// 2 навык
let sliderCss = document.getElementById('skill-input_css');
let outputCss = document.getElementById('skill-value_css');

outputCss.innerHTML = sliderCss.value;

sliderCss.oninput = function() {
    outputCss.innerHTML = this.value;
}


sliderCss.addEventListener('mousemove', function() {
    let x = sliderCss.value;
    let color = 'linear-gradient(90deg, rgba(7, 7, 7, 1)' + x + '%, rgba(229, 229, 229, 1)' + x + '%)';
    sliderCss.style.background = color;
})

// 3 навык
let sliderJs = document.getElementById('skill-input_js');
let outputJs = document.getElementById('skill-value_js');

outputJs.innerHTML = sliderJs.value;

sliderJs.oninput = function() {
    outputJs.innerHTML = this.value;
}

sliderJs.addEventListener('mousemove', function() {
    let x = sliderJs.value;
    let color = 'linear-gradient(90deg, rgba(7, 7, 7, 1)' + x + '%, rgba(229, 229, 229, 1)' + x + '%)';
    sliderJs.style.background = color;
})

// 4 навык
let sliderGithub = document.getElementById('skill-input_github');
let outputGithub = document.getElementById('skill-value_github');

outputGithub.innerHTML = sliderGithub.value;

sliderGithub.oninput = function() {
    outputGithub.innerHTML = this.value;
}

sliderGithub.addEventListener('mousemove', function() {
    let x = sliderGithub.value;
    let color = 'linear-gradient(90deg, rgba(7, 7, 7, 1)' + x + '%, rgba(229, 229, 229, 1)' + x + '%)';
    sliderGithub.style.background = color;
})

// 5 навык
let sliderFigma = document.getElementById('skill-input_figma');
let outputFigma = document.getElementById('skill-value_figma');

outputFigma.innerHTML = sliderFigma.value;

sliderFigma.oninput = function() {
    outputFigma.innerHTML = this.value;
}

sliderFigma.addEventListener('mousemove', function() {
    let x = sliderFigma.value;
    let color = 'linear-gradient(90deg, rgba(7, 7, 7, 1)' + x + '%, rgba(229, 229, 229, 1)' + x + '%)';
    sliderFigma.style.background = color;
})

//scroll-up

const offset = 1500;
const scrollUp = document.querySelector('.scroll-up');
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

//listener-scroll-window
window.addEventListener('scroll', () => {
    if (getTop() > offset) {
        scrollUp.classList.add('scroll-up_active');
    } else {
        scrollUp.classList.remove('scroll-up_active');
    }
});


//scroll-up_click
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//open/close-popups

let btnSignIn = document.querySelector('.js__sign-in_link');
let popupSignIn = document.querySelector('.js__sign-in');
let btnRegister = document.querySelector('.js__register_link');
let popupRegister = document.querySelector('.js__register');
let btnMessage = document.querySelector('.js__message_link');
let popupMessage = document.querySelector('.js__message');
let btnCloseSignIn = document.querySelector('.form__button-close_sign-in');
let btnCloseRegister = document.querySelector('.form__button-close_register');
let btnCloseMessage = document.querySelector('.form__button-close_message');

btnSignIn.addEventListener('click', function() { // открываем
    popupSignIn.classList.add('open');
});
btnRegister.addEventListener('click', function() {
    popupRegister.classList.add('open');
});
btnMessage.addEventListener('click', function() {
    popupMessage.classList.add('open');
});
btnCloseSignIn.addEventListener('click', function() {  // закрываем
    popupSignIn.classList.remove('open');
});
btnCloseRegister.addEventListener('click', function() {
    popupRegister.classList.remove('open');
});
btnCloseMessage.addEventListener('click', function() {
    popupMessage.classList.remove('open');
});
window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27 ) {
        popupSignIn.classList.remove('open');
        popupRegister.classList.remove('open');
        popupMessage.classList.remove('open');
        document.body.style.overflow = 'initial';
    }
})




// let login = prompt('Напишите вашу должность', '');


// let message = (login == 'Сотрудник') ? 'Привет':
// (login == 'Директор') ? 'Здравствуйте':
// (login == '') ? 'Нет логина': 'Такого логина не существует';


// alert(message);

// let login = prompt('Your login', '');
// if (login == 'Админ') {

//     let password = prompt('Your password', '');

//     if (password == 'Я главный') {
//         alert('Здравствуйте!');
//     } else if (password == null) {
//         alert('Отменено');
//     } else alert('Неверный пароль');
    
// } else if (login == null) {
//     alert('Отменено');
// } else alert('Я вас не знаю');



// let login = prompt('Your login', '');
// if (login == 'Админ') {

//     let password = prompt('Your password', '');

//     if (password == 'Я главный') {
//         alert('Здравствуйте!');
//     } else alert('Неверный пароль' ?? 'Отменено');
    
// } else if (login == null) {
//     alert('Отменено');
// } else alert('Я вас не знаю');

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }

// let figure;
// do {
//     figure = prompt('Enter number that will be more then 100', '');

// } while (figure <= 100 && figure);
// alert('Good job');

// let n = prompt('dfvdf', '');

// nextPrime:

// for (let i = 2; i <= n; i++) {
//     for (let s = 2; s < i; s++) {
//         if (i % s == 0) continue nextPrime;
//     }
//     console.log( i );
// }

// let name = prompt('your name', '');
// alert(name);




