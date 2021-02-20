
const overlay = document.querySelector('.overlay');
const overlayMenu = document.querySelector('.header-left__overlay');
const menu = document.querySelector('.basketS');
let itemsInBasket = new Map;
let masListOfProducts=[
    ["img/IMGMAGN1.jpg", 1090,"Soundmax SM-CCR3057"],
    ["img/IMGMAGN2.jpg", 1990,"Soundmax SM-CCR3057"],
    ["img/IMGMAGN3.jpg", 4490,"Soundmax SM-CCR3057"],
    ["img/IMGMAGN4.jpg", 8390,"Soundmax SM-CCR3057"],
    ["img/IMGMAGN5.jpg", 1990,"Soundmax SM-CCR3057"],
    ["img/IMGMAGN6.jpg", 4490,"Soundmax SM-CCR3057"]
];
function openPopUp()
{
        menu.classList.add('active');
        overlay.classList.add('active');
}
function closeBasket() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
}
function closePopUp() {
    closeBasket();
}
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.basketS.active');
    modals.forEach(modals => {
        closeBasket(modals);
    })
});
function addToBasket(id){
itemsInBasket.set(id,[masListOfProducts[id][0],masListOfProducts[id][1],masListOfProducts[id][2]]); 

}
function inputItemsFromMapToBasket(){
let mapArray = Array.from(itemsInBasket.values());
let chickenBasket = document.getElementById("products")
chickenBasket.innerHTML="";
mapArray.forEach((item)=>{
    let picture = `<img src=${item[0]} class ="pict_bascket">`
    let price = `<div class ="price_basket"> ${item[1]} </div>`
    let name = `<div class ="price_basket"> ${item[2]}</div>` 
    chickenBasket.insertAdjacentHTML("beforeend",`<div>${picture}${name}${price}</div>`)
    
})


}