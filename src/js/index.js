//yandex map
let myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.760550, 37.614144], // Москва
        zoom: 13.5
    });

    let myPlacemark = new ymaps.Placemark([55.769535, 37.633900],{},{
        iconLayout:'default#image',
        iconImageHref:'images/sprite.svg#map-point',
        iconImageSize:[80,80]
        
    });

    myMap.geoObjects.add(myPlacemark);

    myMap.controls.remove('searchControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl')

}

//search
let start = document.getElementById('search-icon');
let finish = document.getElementById('search-close');
let finishMobile = document.getElementById('search-close_mobile');
let input = document.getElementById('search_input');
let nav = document.getElementById('nav-list');
let logo = document.getElementById('logo');

start.addEventListener('click', function(){
    if (window.screen.width >= 769){

        nav.classList.add('close');
        input.classList.add('open');
        finish.classList.add('open');
    
    }else if(window.screen.width <= 768 && window.screen.width >=733){
        
        input.classList.add('open');
        finish.classList.add('open');
 
    }else{
        start.classList.add('close');
        logo.classList.add('opacity');
        input.classList.add('open');
        finishMobile.classList.add('open');
    
    }
});

finish.addEventListener('click', function(){
    input.classList.remove('open');
    finish.classList.remove('open');
    nav.classList.remove('close');       
});

finishMobile.addEventListener('click',function(){
    start.classList.remove('close');
    logo.classList.remove('opacity');
    input.classList.remove('open');
    finishMobile.classList.remove('open');
});



//burger
let burgerLine = gsap.timeline({paused:true});

let open = document.getElementById('burger_open');
let close = document.getElementById('burger_close');

burgerLine
    .to('.burger-content', {duration:0.01, display:"block"})
    .from(".burger-item", { duration: 0.5, ease: "sine.in", y: -100, opacity:0 })
    .to(".nav",{display:"block", duration:0.5, ease:"sine.in", opacity:1});
    

open.onclick = function(){
    burgerLine.play();
};

close.onclick = function () {
    burgerLine.reverse();
};

//adress map

let adress = document.getElementById('adress');
let closeAdress = document.getElementById('close-adress');

closeAdress.addEventListener('click', function(){
    adress.style.display="none";
})