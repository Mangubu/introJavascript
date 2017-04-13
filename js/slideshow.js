
var main=document.getElementsByTagName("img")[0];
var mainCaption = document.getElementsByTagName("figcaption")[0];


var vis1=document.getElementsByTagName("figure")[1];
var vis2=document.getElementsByTagName("figure")[2];
var vis3=document.getElementsByTagName("figure")[3];


vis1.onclick = function(){
    main.src = vis1.childNodes[1].src;
    mainCaption.textContent="Blue pillow";
}

vis2.onclick = function(){
    main.src = vis2.childNodes[1].src;
    mainCaption.textContent="Burj Khalifa";
}

vis3.onclick = function(){
    main.src = vis3.childNodes[1].src;
    mainCaption.textContent="Peacock";
}

