//Задача 1
function sumNum(x) {
    if(x<10) return x;
    return x%10+Math.floor(sumNum(x/10));
}
n=112299880;
console.log(sumNum(n));


//Задача 2
function spamDetect(sometext, ...words) {
    let arrText=sometext.split(' ');
    let rate=0;
    for (let i=0; i<arrText.length; i++)
    arrText[i]=arrText[i].replace(',','').replace('.','').replace('?','').replace('!','');
    for(let eltext of words){
        for(let elarr of arrText){
            if(eltext === elarr){
              rate++;
            }
        }
    }
return Math.round(5/(arrText.length/rate));
}
let text = 'Вот дом, который построил Джек. А это пшеница, которая в темном чулане хранится в доме, который построил Джек. А это веселая птица-синица, которая часто ворует пшеницу, которая в темном чулане хранится в доме, который построил Джек.';
let word1 = 'Джек';
let word2 = 'доме';
let word3 = 'веселая';
let rating = spamDetect(text,word1,word2,word3);
console.log(`оценка содержания спама ${rating} из 5`);


//Задача 3
function wordEndSelect (count){
    if(count % 10 === 1 && count % 100 !== 11) {
        console.log(count,'товар');
    } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
        console.log(count,'товара');
    } else console.log(count,'товаров');
 }
let a =11117;
wordEndSelect(a);



let users = [
    {
        login: "qwe",
        age: 34,
        city: "Москва",
        favouriteLangs: ["php", "js"]
    },
    {
        login: "asd",
        age: 12,
        city: "Москва",
        favouriteLangs: ["python", "javascript"]
    },
    {
        login: "rty56",
        age: 58,
        city: "Тверь",
        favouriteLangs: ["java", "c"]
    },
    {
        login: "rty56",
        age: 58,
        city: "Тверь",
        favouriteLangs: ["java", "scala"]
    },
    {
        login: "ght",
        age: 16,
        city: "Владивосток",
        favouriteLangs: ["php", "ruby"]
    },
];


//Задача 4
function ageFilter(userArr, from, to=999) {
let logins=[];
console.log(to);
for(let el of users){
    if (el.age>=from && el.age<to)
        logins.push(el.login);
}
return logins;
}
let to;
let from=18;
let logins = ageFilter(users,from,to);
for (let el of logins)
    console.log(`Пользователь ${el} подходит по возрасту`);




//Задача 5
function searchLogin(userArr, favouriteLangs) {
    let logins1 = [];
 for (let el of userArr){
     if (el.favouriteLangs.includes(favouriteLangs)){
         logins1.push(el.login);
     }
 }
 return logins1;
}
let favouriteLangs = 'c';
let logins1 = searchLogin(users, favouriteLangs);
for(let el of logins1) {
    console.log(`Указанный язык является любимым у пользователя ${el}`)
}


//Задача 6
function citySort(usersArr1) {
    let arrLetter = [];
    let sortUsers= [];
    for(let i=0;i<usersArr1.length;i++)
        arrLetter[i]=usersArr1[i].city[0];
    arrLetter.sort();
    for(let i=0;i<arrLetter.length;i++)
        for(let j=0; j<usersArr1.length;j++)
        if(usersArr1[j].city[0] === arrLetter[i]){
            sortUsers[i]=usersArr1[j];
        }
    return sortUsers;
}
users=citySort(users);
console.log(users);


//Задачки по методам массивов
//TODO каждый элемент вложенного массива больше 0
//TODO каждый элемент вложенного массива увеличить на 2
arr = [[1,3,4],
    [3,-7,9],
    [-90,12,-12]
];
let moreZero = (elem, index, array) => elem>0;
arr.forEach(function (elem,index,array) {
    array[index]=elem.filter(moreZero);
});
console.log(arr);

arr = [[1,3,4],
    [3,7,9],
    [-90,12,-12]
];
arr.forEach(function(elem,index,array) {
    elem.forEach(function(elem1,index1,array1) {
        array1[index1]+=2;
    });
});
console.log(arr);
// TODO:: возраст всех пользователей больше или равен 18
arr = [
    {
        name: "qwe",
        age: 19
    },
    {
        name: "qwe",
        age: 45
    },
    {
        name: "qwe",
        age: 16
    }
];

let eightMore =  (elem,index,array)  => elem.age>=18;
if(arr.every(eightMore)) console.log('Все пользователи совершеннолетние');
else console.log('Не все пользователи совершеннолетние');

