'ues stric';
const tshirt_btn = document.querySelector('.btn.tshirt');
const pants_btn = document.querySelector('.btn.pants');
const skirt_btn = document.querySelector('.btn.skirt');
const blue_btn = document.querySelector('.btn.blue');
const yellow_btn = document.querySelector('.btn.yellow');
const pink_btn = document.querySelector('.btn.pink');


const a = async() =>{
    try{
        const shopData = await fetch('../data/data.json')  
        const jsonData = await shopData.json();
        
        return jsonData.items;
    }
    catch(e){
        console.log(e);
    }
}


function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML= items.map((item)=>{
        return (
            `<li class="item " data-type ='${item.type}' data-color ='${item.color}'>
            <img src=".${item.image}" alt="${item.type}" class="item_thumbnail">
            <span class="item_description">${item.gender}, ${item.size}</span>
            </li>
            `
        )
    }).join('');
}

function setEventListeners(items){
    const logo = document.querySelector('.logo');

    const buttons = document.querySelector('.btns');

     logo.addEventListener('click', ()=>{
         displayItems(items)
     });

    buttons.addEventListener('click', (event)=> onButtonClick(event));

}

function onButtonClick(event){
   const dataset = event.target.dataset;

   const key = dataset.key;
   const value = dataset.value;

   if(key == null || value == null) return ;


   updateItems(key , value);
}

function updateItems( key , value){

    const items = document.querySelectorAll('.item');

    items.forEach( item => {
        if(item.dataset[key] === value){
            item.classList.remove('invisible');
        }
        else{
            item.classList.add('invisible');
        }

    });

}



a()
.then( (res) =>{
    //console.log(res);
    displayItems(res);  
    setEventListeners(res);
    // tshirt_btn.addEventListener('click', () =>{
    //     displayItems(res.filter( (item) => item.type === 'tshirt'))
    // })
    // pants_btn.addEventListener('click', () =>{
    //     displayItems(res.filter( (item) => item.type === 'pants'))
    // })
    // skirt_btn.addEventListener('click', () =>{
    //     displayItems(res.filter( (item) => item.type === 'skirt'))
    // })
    // blue_btn.addEventListener('click', () =>{
    //     displayItems(res.filter( (item) => item.color === 'blue'))
    // })
    // yellow_btn.addEventListener('click', () =>{
    //     displayItems(res.filter( (item) => item.color === 'yellow'))
    // })
    // pink_btn.addEventListener('click', () =>{
    //     displayItems(res.filter( (item) => item.color === 'pink'))
    // })

})