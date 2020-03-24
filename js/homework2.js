//Задача 1 найти максимальный эл-т
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