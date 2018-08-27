$(document).ready(function() 
{

   $('.slick-carousel').slick({
      arrows: true,
      nextArrow: '<img src="../img/right.png" class="prevArrow"></img>',
      prevArrow: '<img src="../img/left.png" class="nextArrow"></img>'   
});
    $('.next-button-slick').click(function(){
        $('.carsoule').slickNext();
    });
    $('.prev-button-slick').click(function(){
        $('.carsoule').slickPrev();
    });

});




var arr = ["Welcome", "Willkomen", "Bienvenido", "Bienvenue", "Huanying guangllin", "Aloha", "Bemvindos", "Croeso", "добро пожаловать"];
var elem = document.getElementById("changeText");
var counter = [Math.floor(Math.random() * (arr.length))]
elem.innerHTML = arr[counter];
var inst = setInterval(change, 1000);

function change() {
    elem.innerHTML = arr[counter];
    counter++;
    if (counter >= arr.length) {
        counter = 0;
    }
};