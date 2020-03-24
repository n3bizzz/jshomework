//1. Задача на if else
let sum=1500;
if (sum<1000) {console.log("Сумма к оплате", sum);}
else if (sum>=1000 && sum<2000){console.log("Сумма к оплате", sum-sum*0.05);}
else if (sum>=2000 && sum<3000) {console.log("Сумма к оплате", sum-sum*0.1)}
else if (sum>=3000) {console.log("Сумма к оплате", sum-sum*0.1, "+ подарок")}



//2. Задача на switch
let month= 'март';
switch (month) {
    case "декабрь":
    case "январь":
    case "февраль": console.log("зима"); break;
    case "март":
    case "апрель":
    case "май": console.log("весна"); break;
    case "июнь":
    case "июль":
    case "август": console.log("лето"); break;
    case "сентябрь":
    case "октябрь":
    case "ноябрь": console.log("осень");
}



// 3. Задача на циклы
let a = Math.floor( Math.random()*7+1) ;
console.log(a);
let b;
do {
    b = +prompt('Угадайте загаданое число от 1 до 7;  введите 0 для выхода');
    if (!b) {console.log('Выход');}
    else if (a === b) {console.log("Вы угадали");}
    else if (a>b) {console.log("Загаданое число больше")}
    else if (a<b) {console.log("Загаданное число меньше");}
    else console.log ("Введите число")
} while(a!==b && b)



//4. Задача на массивы

let mas =[];
let length = +prompt("Введите желаюмую длинну массива");
let f = true;
for (let i=0; i<length;i++)
{mas[i]=Math.floor( Math.random()*10)}
console.log(mas);
for(i=0;i<length-1 && f;i++)
    for (let j=i+1;j<length && f;j++) {
        if(mas[i]+mas[j]===7) {
            console.log('elements',mas[i],mas[j],'index',i,j);
            f = false;
        }
    }
