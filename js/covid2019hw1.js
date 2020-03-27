//Задача 1
let n = 777;
n=String(n);
let sum=0;
for (let el of n)
    sum+=(+el);
console.log(sum);


//Задача 2
let a = Math.floor( Math.random()*118+5);
console.log(a);
if (a>25 && a<100) {console.log('число попадает в интервал (25,100)'); }
else console.log('число не поппадает в интервал (25,100)');


//Задача 3
n=prompt('Введите кол-во эл-в в массиве');
let arr =[];
for (let i=0; i<n;i++)
    arr[i] = Math.floor( Math.random()*201-100);
let max=arr[0];
let min=arr[0];
sum=0;
console.log(arr);
for (let el of arr)
{
    if (el > max){max=el;}
    else if (el < min){min=el;}
    sum+=el;
}
console.log('Максимальное значение', max, 'Минимальное значение', min, 'Среднее значение', sum/n );


//Задача 4
arr=[];
let arr1 = [];
n = prompt('Введите натуральное число больше 3х');
while (n<=3)
    n = prompt('Вы ввели неверное значение, введите число больше 3х');
for(let i=0; i<n; i++)
    arr[i]=Math.floor( Math.random()*(+n+1));
console.log(arr);
i=0;
for(let el of arr) {
    if (!(el%2) && el){
        arr1[i]=el;
        i++;
    }
}
console.log(arr1);