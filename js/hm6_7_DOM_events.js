//Игра
let someObj = {
    cat: "Кот",
    book: "Книга",
    car: "Машина",
};
 function generateField(n) {
    let price = ['cat', 'book', 'car'];
    let a;
    let b;
    let c;
    do {
        a = Math.floor(Math.random() * (n * n));
        b = Math.floor(Math.random() * (n * n));
        c = Math.floor(Math.random() * (n * n));
    } while (a===b || b===c ||c===a);
    let j=0;
    console.log(a,b,c);
    let mainsection = document.getElementById('lotery');
    mainsection.style.cssText = `grid-template-columns: repeat(${n},100px); grid-template-rows: repeat(${n},50px);`;
    for (let i = 0; i < n * n; i++) {
        let div = document.createElement('div');
        let defaultTitle = document.createElement('p');
        defaultTitle.classList.add('card');
        defaultTitle.innerText = 'Подарок';
        div.append(defaultTitle);
        switch (i) {
            case a:
                defaultTitle.setAttribute('data-price', `${price[j]}`);
                j++;
                break;
            case b:
                defaultTitle.setAttribute('data-price', `${price[j]}`);
                j++;
                break;
            case c:
                defaultTitle.setAttribute('data-price', `${price[j]}`);
                j++;
        }
        mainsection.append(div);
    }
}
let n = 4;
generateField(n);
let lotery = document.getElementById("lotery");
let k=5;
let lost = document.getElementById('try');
lost.innerText=`поппыток осталось ${k}`;
lotery.addEventListener("click",showPresent);
function showPresent(event) {
    console.log(k,event);
       let clickElem=event.target;
       let price = clickElem.dataset.price;
        k--;
        if (price) {
            clickElem.innerText = someObj[price];
            clickElem.classList.remove('card');
            clickElem.classList.add('pricecard');
            lost.innerText = `вы выйграли ${someObj[price]}`;
            this.removeEventListener("click", showPresent);
        } else if(k>0)
            lost.innerText =`осталось попыток ${k}`;
        else {
            lost.innerText=`Попытки закончились`;
            this.removeEventListener("click", showPresent);
        }
}


//Таблицы

let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

function generateTable(arrObj) {
    let tableArea = document.getElementById('table');
    let table = document.createElement('table');
    table.classList.add('table');
    let caption = table.createCaption();
    caption.innerText = 'Товары';
    let cell;
    let row = table.insertRow(0);
    for (let el in arrObj[0]) {
        cell = row.insertCell(-1);
        cell.innerText = el;
        cell.setAttribute('data-name', 'sort');
    }
      for(let el of arrObj){
       row=table.insertRow(-1);
       for (let el1 in el)
       {
           cell=row.insertCell(-1);
           cell.innerText=el[el1];
       }
      }
  tableArea.append(table);
      table.addEventListener('click', sortTbl);
}
function sortTbl(event) {
 if(event.target.dataset.name === 'sort') {
     let sortedRows = Array.from(this.rows).slice(1).sort((rowA, rowB) =>{
         console.log(isNaN(rowA.cells[event.target.cellIndex].innerHTML));
         console.log(isNaN(rowB.cells[event.target.cellIndex].innerHTML));
         if(isNaN(rowA.cells[event.target.cellIndex].innerHTML)){
             return rowA.cells[event.target.cellIndex].innerHTML.toLowerCase().localeCompare(rowB.cells[event.target.cellIndex].innerHTML.toLowerCase());
         } else return Number(rowA.cells[event.target.cellIndex].innerHTML)-Number(rowB.cells[event.target.cellIndex].innerHTML);});
     this.tBodies[0].append(...sortedRows);
 }
}
generateTable(articles);