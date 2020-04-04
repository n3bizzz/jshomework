//Дополнительные задачи 2


//Задача 1
let word1 = 'привет';
let word2 = 'пользователь';
let word3 = word1.slice(0, word1.length/2) + word2.slice(word2.length/2);
console.log(word3);


//Задача 2
let str = 'Какой сегодня прекрасный день';
str=str.trim();
let arr = str.split(' ');
str = arr[0];
for (let el of arr)
    if (el.length>str.length) {str=el;}
console.log(str);


//Задача 3
//вариант когда числа необязательно отделены пробелами
str = '8я советская дом 14 кв11 индекс:191036.';
str=str.trim();
arr= [];
let j=0;
let num= '';
for (let i=0; i<str.length; i++)
{
    if (str[i]>='0' && str[i]<='9') {
        num+=str[i];
        if (!(str[i+1]>='0' && str[i+1]<='9'))
        {
            arr[j]=+num;
            j++;
            num='';
        }
    }
}
console.log(arr);


//Задача 4
arr = [[],[],[]];
let p = [];
let index=0;
for(let i=0; i<3; i++) {
    p[i]=1;
    for (let j = 0; j<6; j++) {
        arr[i][j] = Math.floor(Math.random() * 199 - 99);
        p[i]=Math.abs(p[i]*arr[i][j]);
    }
}
console.log(arr);
console.log(p); //Массив с произведениями для наглядности
for(let i=1; i<p.length; i++) {
    if (p[i] > p[index]) {
        index = i;
    }
}
console.log('индекс строки:',index);



//Задача 5
arr=[];
p=[0,0,0];
for (let i=0; i<11; i++) {
    arr[i] = Math.floor(Math.random() * 3 - 1);
    switch (arr[i]) {
        case -1:
            p[0]++;
            break;
        case 0:
            p[1]++;
            break;
        case 1:
            p[2]++;
    }
}
console.log(arr);
if (p[0]>p[1] && p[0]>p[2]){console.log('Чаще встречается -1');}
else if (p[1]>p[2]){console.log('Чаще встречается 0');}
else if (p[2]>p[1]){console.log('Чаще встречается 1');}