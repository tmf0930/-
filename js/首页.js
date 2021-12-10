var swiper = document.getElementById('swiper-container-2');
var fc = document.getElementsByClassName('fc')[0];
var fc_close = document.getElementsByClassName('fc_close')[0];

swiper.onclick = function () {
    fc.style.display = 'block';
}
fc_close.onclick = function () {
    fc.style.display = 'none';
}




var btnMenu = document.getElementsByClassName('btnMenu')[0];
var body = document.getElementsByTagName('body')[0];
var b_block = document.getElementsByClassName('b_block')[0];

btnMenu.onclick = function () {
    b_block.style.display = 'block';
    body.style.transform = 'translateX(16rem)';
}
b_block.onclick = function () {
    b_block.style.display = 'none'
    body.style.transform = 'none';
}

