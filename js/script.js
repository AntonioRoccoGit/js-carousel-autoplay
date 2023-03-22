//creiamo il nostro array di immagini
const userImages = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg",];

//seleziono gli elementi del dom che andranno manipolati
let sliderItemsContainer = document.querySelector(".slider-items"); //contenitore img
let thumbNailsItems = document.querySelector(".thumbnails-image");
const nextUp = document.querySelector(".next-up");// bottone next
const prevDown = document.querySelector(".prev-down");//bottone prev

//grid img and thumbnail generator
for (let i = 0; i < userImages.length; i++) {
    
    let currentImg = userImages[i];
    
    sliderItemsContainer.innerHTML +=  
    `<div class="item">
    <img src="${currentImg}" alt="">
    </div>`;
    thumbNailsItems.innerHTML +=  
    `<div class="thumb-item">
        <img src="${currentImg}" alt="">
    </div>`;
};

//setto stato iniziale ultimo bonus
const thumbNailsItemsArrey = document.querySelectorAll(".thumb-item");
console.log(thumbNailsItemsArrey);
//setto lo stato iniziale dove appare almeno la prima immagine
const sliderItemsArray = document.querySelectorAll(".item");

let itemCounter = 0;

sliderItemsArray[itemCounter].classList.add("active");
thumbNailsItemsArrey[itemCounter].classList.add("active");

myAutoInterval = setInterval(goPreviousl, 3000);

//impostiamo il bottone next
nextUp.addEventListener("click", function(){
    goNext();
    clearInterval(myAutoInterval);
    myAutoInterval = setInterval(goPreviousl, 3000);
});

//imposto il bottone prev
prevDown.addEventListener("click", function(){
    //do al bottone la possibilita di tornrare indietro
    goPreviousl();
    //blocco il vecchio intervallo
    clearInterval(myAutoInterval);
    myAutoInterval = setInterval(goPreviousl, 3000);

});    

sliderItemsContainer.addEventListener("mouseenter", function(){
    clearInterval(myAutoInterval);
});
sliderItemsContainer.addEventListener("mouseout", function(){
    myAutoInterval = setInterval(goPreviousl, 3000);
});




////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////AUTO PLAY

//setto stato iniziale del mio intervallo
// let myAutoInterval = false;

// const autoPrevElm = myAutoPrev();

// //imposto l'autoplay
// function myAutoPrev() {
//     if(myAutoInterval === false) {
//         myAutoInterval = setInterval(goPreviousl, 3000);    
//     }

// }

//aggiungiamo la possibilita di avere un clear on hover sullo slider

//gestiamo lo scorrimento a tempo delle slide
//itemCounter è la variabile che mi permette di scorrere tra le immagini


////////////////////////////////////////////////////////////////////////////////
///////////////////////////MY FUNCTION
function goPreviousl() {
    if (itemCounter === 0){

        sliderItemsArray[itemCounter].classList.remove("active");
        thumbNailsItemsArrey[itemCounter].classList.remove("active");

        itemCounter = sliderItemsArray.length - 1;

        sliderItemsArray[itemCounter].classList.add("active");
        thumbNailsItemsArrey[itemCounter].classList.add("active");

    }else {

        sliderItemsArray[itemCounter].classList.remove("active");
        thumbNailsItemsArrey[itemCounter].classList.remove("active");
        
        //aumento il contantore
        itemCounter--;

        //aggiungo la classe  al nuovo item
        sliderItemsArray[itemCounter].classList.add("active");
        thumbNailsItemsArrey[itemCounter].classList.add("active");
    };
}

function goNext() {
    if (itemCounter === sliderItemsArray.length - 1){

        sliderItemsArray[itemCounter].classList.remove("active");
        thumbNailsItemsArrey[itemCounter].classList.remove("active");

        itemCounter = 0; 

        sliderItemsArray[itemCounter].classList.add("active");
        thumbNailsItemsArrey[itemCounter].classList.add("active");
    }else {

        //rimuovo classe precedente
        sliderItemsArray[itemCounter].classList.remove("active");
        thumbNailsItemsArrey[itemCounter].classList.remove("active");

        //aumento il contantore
        itemCounter++;

        //aggiungo la classe  al nuovo item
        sliderItemsArray[itemCounter].classList.add("active");
        thumbNailsItemsArrey[itemCounter].classList.add("active");
    }
}