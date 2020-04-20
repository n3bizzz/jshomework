let someObj = {
    cat: "Кот",
    book: "Книга",
    car: "Машина",
    generateField: function (n) {
        let price = ['cat', 'book', 'car'];
        let a = Math.floor(Math.random()*(n*n));
        let b = Math.floor(Math.random()*(n*n));
        let c = Math.floor(Math.random()*(n*n));
        let j=0;
        let title;
        console.log(a,b,c);
        let mainsection = document.getElementById('lotery');
        mainsection.style.cssText = `grid-template-columns: repeat(${n},1fr); grid-template-rows: repeat(${n},1fr);`;
        for (let i = 0; i < n * n; i++) {
            let div = document.createElement('div');
            div.classList.add('card');
            switch (i) {
                case a:
                    div.setAttribute('price', `${price[j]}`);
                    title = document.createElement('h2');
                    title.innerText = this[price[j]];
                    j++;
                    div.append(title);
                    break;
                case b:
                    div.setAttribute('price', `${price[j]}`);
                    title = document.createElement('h2');
                    title.innerText = this[price[j]];
                    div.append(title);
                    j++;
                    break;
                case c:
                    div.setAttribute('price', `${price[j]}`);
                    title = document.createElement('h2');
                    title.innerText = this[price[j]];
                    div.append(title);
                    j++;
            }
            mainsection.append(div);
        }
    }
};
let n = 6;
someObj.generateField(n);