//const main =document.querySelector('div.main');
//main.addEventListener('keydown',someFunction);
window.addEventListener('keydown',onPlay);
var isplay = false;
function onPlay(e) {
    if(!isplay){
    if(e.key == 'a')
    {
        const ele = document.querySelector('#' + e.key);
        ele.setAttribute('class','butpress');
        makeForeground(ele);
        var audio = new Audio('sounds\\boom.wav');
        audio.play();
    }
    if(e.key=='s')
    {
        const ele = document.querySelector('#' + e.key);
        ele.setAttribute('class', 'butpress');
        makeForeground(ele);
        var audio = new Audio('sounds\\clap.wav');
        audio.play();
    }
    if (e.key == 'd') {
        const ele = document.querySelector('#' + e.key);
        ele.setAttribute('class', 'butpress');
        makeForeground(ele);
        var audio = new Audio('sounds\\hihat.wav');
        audio.play();
    }
    if (e.key == 'f') {
        const ele = document.querySelector('#' + e.key);
        ele.setAttribute('class', 'butpress');
        makeForeground(ele);
        var audio = new Audio('sounds\\kick.wav');
        audio.play();
    }
    if (e.key == 'g') {
        const ele = document.querySelector('#' + e.key);
        ele.setAttribute('class', 'butpress');
        makeForeground(ele);
        var audio = new Audio('sounds\\openhat.wav');
        audio.play();
    }
    if (e.key == 'h') {
        const ele = document.querySelector('#' + e.key);
        ele.setAttribute('class', 'butpress');
        makeForeground(ele);
        var audio = new Audio('sounds\\ride.wav');
        audio.play();
    }
    isplay = true;
}
}
window.addEventListener('keyup',offPlay);
function offPlay(e){
    const ele = document.querySelector('#' + e.key);
    ele.setAttribute('class', 'but')
    const divele = document.querySelectorAll('.foreground')
    divele.forEach(divele => {
        ele.removeChild(divele);
    });
    isplay = false;
}
function makeForeground(ele)
{ 
    const divele = document.createElement('div');
    divele.setAttribute('class', 'foreground');
    divele.innerHTML = ele.innerHTML;
    ele.appendChild(divele);
    
}