const link = document.querySelector('a');
link.textContent = 'Best website in the World!';
link.href = 'https://programmingmentor.com';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoy the ride.';
sect.appendChild(para);


const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
const clonedText = text.cloneNode(true);
sect.appendChild(clonedText);

setTimeout( () => clonedText.parentNode.removeChild(clonedText), 2000);
para.classList.add('selected');

//Clock
const clockContainer = document.querySelector('.clock');
setInterval( () => clockContainer.innerText = (new Date()).toLocaleTimeString(), 1000 );


const products = [
    {
        title: 'Tesla X',
        price: 12000
    },
    {
        title: 'Honda Acord',
        price: 4000
    },
    {
        title: 'Honda Civik',
        price: 8000
    },
    {
        title: 'Handa Civik',
        price: 8500
    },
    {
        title: 'Lexus NX',
        price: 36000
    }
    ];
    
products.sort( (a, b) => a.title < b.title
                          ? -1
                          : a.title > b.title
                          ? 1
                          : 0 );    
    
const priceList =document.querySelector('.price-list');  
for(const product of products) {
    const productPara = document.createElement('p');
    productPara.textContent = `Title: ${product.title}, Price: ${product.price}`;
    priceList.appendChild(productPara);
};

