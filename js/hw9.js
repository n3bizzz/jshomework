// задача на вывод книг
let books = [
    {author: 'Пушкин', title: 'Пир во время чумы', count: 2},
    {author: 'Толстой', title: 'Война и мир', count: 0},
    {author: 'Лермонтов', title: 'Тамань', count: 3},
    {author: 'Гончаров', title: 'Обломов', count: 10}
];
let allBooksCard=document.getElementById('books');
let aut,tit,cnt,booksCard,formCount,btnPlus,btnMinus,cntValue,formsInvar;
let forms=[];
let i=0;
do{
    booksCard=document.createElement('div');
    aut=document.createElement('h3');
    tit=document.createElement('h2');
    cnt=document.createElement('h4');
    aut.innerText=books[i].author;
    tit.innerText=books[i].title;
    cnt.innerText=books[i].count;
    formCount=document.createElement('form');
    formCount.setAttribute('action', '#');
    formCount.setAttribute('method', 'post');
    formCount.setAttribute('name',`${i}`);
    btnMinus=document.createElement('button');
    btnMinus.setAttribute('disabled','');
    btnMinus.innerText='-';
    cntValue=document.createElement('input');
    cntValue.setAttribute('type','number');
    cntValue.setAttribute('min','0');
    cntValue.setAttribute('max',`${books[i].count}`);
    cntValue.setAttribute('value','0');
    cntValue.setAttribute('name',`${i}`);
    btnPlus=document.createElement('button');
    btnPlus.innerText='+';
    if(books[i].count===0) btnPlus.setAttribute('disabled','');
    btnPlus.setAttribute('name','btnplus');
    btnMinus.setAttribute('name','btnminus');
    formCount.append(btnMinus,cntValue,btnPlus);
    booksCard.append(aut,tit,cnt,formCount);
    allBooksCard.append(booksCard);
    forms[i]=document.forms[`${i}`];
    formsInvar=changeCount.bind(forms[i],i);
    forms[i].addEventListener('click',formsInvar);
    i++;
}while(i<books.length)
function changeCount(j,event) {
    console.log(j);
    console.log(this.elements[j]);
    if (event.target === this.elements.btnminus || event.target === this.elements.btnplus) {
        event.preventDefault();
    }
    if (event.target === this.elements.btnminus) {
        this.elements[j].value--;
    }
    if (event.target === this.elements.btnplus) {
        this.elements[j].value++;
    }
}//в инпут не получается вывести новое value
//при значении i=3, неполучается считать инпут с именем 3



// задание на вывод данных
let jsonFromServer = `[{"name":"Люся","age":"1 год","color":"трехцветная","additional_info":{"vaccinations":true,"passport":true}},{"name":"Том","age":"3 месяца","color":"белый","additional_info":{"vaccinations":false,"passport":false}},{"name":"Макс","age":2,"color":"серый","additional_info":{"vaccinations":false,"passport":true}},{"name":"Василий","age":3,"color":"черный","additional_info":{"vaccinations":true,"passport":true}}]`;
let objFromJson = JSON.parse(jsonFromServer); // вывод информации по массиву объектов
// вывести информацию по каждой кошке
// Имя кошки | возраст
// картинка       Дополнительная информация:
//                Цвет:  цвет кошки
//                Документы: да / нет
//                Прививик: да / нет
