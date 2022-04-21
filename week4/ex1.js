/*function zege(){
    var element=document.getElementById('zege');
    element.firstChild.nodeValue='zege';
    
}
function zege2(){
    var element1=document.getElementById('winter');
    element1.firstChild.nodeValue='summer';
}
function zege1(){
    var element=document.getElementById('zege');
    var element1=document.getElementById('winter');
element1.addEventListener('click',zege2);
element.addEventListener('click',zege);}


document.addEventListener('DOMContentLoaded',zege1);*/

    function loadfunction(){
        var element=document.getElementById('myinput');
        element.addEventListener('keyup',clickfunction);
    }
    function clickfunction(){
        var element=document.getElementById('myinput');
        var div=document.getElementById('result');
        div.firstChild.nodeValue=element.value;

    }
    document.addEventListener('DOMContentLoaded',loadfunction)