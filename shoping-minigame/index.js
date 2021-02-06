const section = document.querySelector('.list');
const shirt = document.querySelector('.btn1.shirt');
const pants = document.querySelector('.btn1.pants');
const skirt = document.querySelector('.btn1.skirt');
const blue = document.querySelector('.btn2.blue');
const yellow = document.querySelector('.btn2.yellow');
const pink = document.querySelector('.btn2.pink');


let shop =[];

function makelist(datas){

    //console.log(datas);
    while(section.hasChildNodes()){
        section.removeChild(section.firstChild);
    }
    datas.forEach(e => {

        const card = document.createElement('li');
        card.classList.add('card');

        const img = document.createElement('img');
        img.setAttribute('src' , e.image);

        const qul =document.createElement('span');
        qul.innerText = `${e.gender}, ${e.size} ${e.color}  `;
        qul.classList.add('span-font');

        card.appendChild(img);
        card.appendChild(qul);

        section.appendChild(card);
    });
}

let llist = fetch('./data/data.json')
.then( (res) =>{
   return res.json();
})
.then( (data) =>{
    shop = data.items;
    makelist(shop);
})

shirt.addEventListener('click' , (e)=>{
    //console.log("hello");
    //console.log(shop);
    let sample = shop.filter( (r) =>{
        if(r.type === 'tshirt'){
            return r;
        }
    })
    //console.log(sample);
    makelist(sample);
})

pants.addEventListener('click' , (e)=>{

    let sample = shop.filter( (r) =>{
        if(r.type === 'pants'){
            return r;
        }
    })
    makelist(sample);
})

skirt.addEventListener('click' , (e)=>{
    
    let sample = shop.filter( (r) =>{
        if(r.type === 'skirt'){
            return r;
        }
    })
    makelist(sample);
})

blue.addEventListener('click' , (e)=>{
    
    let sample = shop.filter( (r) =>{
        if(r.color === 'blue'){
            return r;
        }
    })
    makelist(sample);
})

yellow.addEventListener('click' , (e)=>{
    
    let sample = shop.filter( (r) =>{
        if(r.color === 'yellow'){
            return r;
        }
    })
    makelist(sample);
})

pink.addEventListener('click' , (e)=>{
    
    let sample = shop.filter( (r) =>{
        if(r.color === 'pink'){
            return r;
        }
    })
    makelist(sample);
})

