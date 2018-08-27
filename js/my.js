$(document).ready(function() {
    $('#progressbar1').LineProgressbar({
        percentage: 85,
        width: '500px',
        duration: 3000,
        height: '20px',
        radius: '15px',
        fillBackgroundColor: '#e67e22'

    });
    $('#progressbar2').LineProgressbar({
        percentage: 60,
        width: '500px',
        duration: 3000,
        height: '20px',
        radius: '15px',
        fillBackgroundColor: '#e67e22'


    });
    $('#progressbar3').LineProgressbar({
        percentage: 60,
        width: '500px',
        duration: 3000,
        height: '20px',
        radius: '15px',
        fillBackgroundColor: '#e67e22'


    });
    $('#progressbar4').LineProgressbar({
        percentage: 60,
        width: '500px',
        duration: 3000,
        height: '20px',
        radius: '15px',
        fillBackgroundColor: '#e67e22'


    });
    $('#progressbar').LineProgressbar({
        percentage: 60,
        width: '500px',
        duration: 3000,
        height: '20px',
        radius: '15px',
        fillBackgroundColor: '#e67e22'


    });

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