//Задача 1
function sumNum(x) {
    if(x<10) {
        return x;
    }
    else {
        return x%10+Math.floor(sumNum(x/10));}
}
n=33222441010;
console.log(sumNum(n));


//Задача 2
/*function spamDetect(sometext, ...words) {
    console.log(sometext);
    let arrText=sometext.split(' ');
    let i=0;
    for(let el of words){

    }
    console.log(arrText);
}
let text = 'Вот дом, который построил Джек. А это пшеница, которая в темном чулане хранится в доме, который построил Джек. А это веселая птица-синица, которая часто ворует пшеницу, которая в темном чулане хранится в доме, который построил Джек.';
let word1 = 'Джек';
let word2 = 'доме';
let word3 = 'веселая';
let rating = spamDetect(text,word1,word2,word3);
console.log(rating);*/


let users = [
    {
        login: "qwe",
        age: 34,
        city: "Москва",
        favouriteLangs: ["php", "js"]
    },
    {
        login: "asd",
        age: 23,
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
        age: 45,
        city: "Владивосток",
        favouriteLangs: ["php", "ruby"]
    },
];


//Задача 5
function searchLogin(userArr, favouriteLangs) {
    let logins = [];
 for (let el of userArr){
     if (el.favouriteLangs.includes(favouriteLangs)){
         logins.push(el.login);
     }
 }
 return logins;
}
let favouriteLangs = 'c';
let logins = searchLogin(users, favouriteLangs);
for(let el of logins) {
    console.log(`Указанный язык является любимым у пользователя ${el}`)
}


//Задача 6
function citySort(usersArr) {
    let arrLetter = [];
    let sortUsers= [];
    for(let i=0;i<usersArr.length;i++)
        arrLetter[i]=usersArr[i].city[0];
    arrLetter.sort();
    for(let i=0;i<arrLetter.length;i++)
        for(let j=0; j<usersArr.length;j++)
        if(usersArr[j].city[0] === arrLetter[i]){
            sortUsers[i]=usersArr[j];
        }
    return sortUsers;
}
users=citySort(users);
console.log(users);

