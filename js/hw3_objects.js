let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

//Задача 1
let from = prompt("введите значение 'от':");
from=from.trim();
while (isNaN(Number(from)) && from !== 'exit'){
       from=prompt("Введите верное значение (число); для выхода введите 'exit'");
       from=from.trim();
}
let to = prompt("введите значение 'до':");
to=to.trim();
while (isNaN(Number(to)) && to !== 'exit'){
    to=prompt("Введите верное значение (число); для выхода введите 'exit'");
    to=to.trim();
}
let filtered = {};
for (let prod in goods){
    if (goods[prod].price>=from && goods[prod].price<=to){
        filtered[prod]=goods[prod];
    }
}
console.log(filtered);



//Задача 2
let tittle  = prompt("Введите название товара");
let countToCart  = prompt("Введите желаемое кол-во");
tittle=tittle.trim();
countToCart=countToCart.trim();
for (let prod in goods){
    if (tittle=== goods[prod].title){
        if (countToCart <= goods[prod].count){goods[prod].count-=countToCart;}
        else console.log('Кол-во товара на складе меньше желаемого');
    }
}
console.log(goods);



//Задача 3
let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];
let author = prompt('Введите фамилию автора');
author=author.trim();
let booksNew = [];
i=0;
let l=false;
for(let el of books){
    if(el.author === author){
        booksNew[i]=el;
        i++;
        l=true;
    }
}
if(l){console.log(booksNew);}
else console.log('Книг такого автора нет');
