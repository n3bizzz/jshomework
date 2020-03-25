//Задача 1
let myArr=[[],[],[]];
let max;
let maxi;
let maxj;
for(let i=0; i<3; i++)
    for (let j=0; j<6; j++)
    {
        myArr[i][j] = Math.floor( Math.random()*199-99);
    }
console.log(myArr);
max=myArr[0][0];
for(let i=0; i<3; i++)
    for (let j=0; j<6; j++)
    {
        if (myArr[i][j]>max ){max = myArr[i][j]; maxi=i; maxj=j; }
    }
console.log('elem',max,'index',maxi,maxj);


//Задача 2
let str1=prompt('Введите исходную строку');
let str2=prompt('Введите искомую подстроку');
str1=str1.trim();
str2=str2.trim();
console.log(str1);
console.log(str2);
let a=str1.indexOf(str2);
if (a>=0) {
    console.log('Найдено совпадение на позиции',a);
    let b=1;
    while (a >= 0 && a+1<str1.length) {
        a = str1.indexOf(str2, a + 1);
        if (a >= 0) {
            console.log('Найдено совпадение на позиции', a);
            b++;
        }
    }
    console.log('всего  совпадений',b);
}
else
    console.log('Совпадений не найдено');

//Задача 3
str1=prompt('Введите строку');
str1=str1.trim();
let stArr=str1.split("");
a = stArr.shift();
str1=a.toUpperCase()+stArr.join('');
console.log(str1);

//Задача 4
let anArr = ['dog','cat', 'rabbit','mouse'];
//если знаем индекс 'cat'
anArr.splice(1,1);
console.log(anArr);
//если не знаем индекс 'cat'
for(let i=0; i<anArr.length; i++)
{
    if(anArr[i] === 'cat'){anArr.splice(i,1);}
}
console.log(anArr);