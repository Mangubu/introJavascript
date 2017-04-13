//javascript
//variable de type String
var title = String("Cours javascript");

//création de variable en fonction des balises du fichier HTML
var myTitle=document.getElementsByTagName("title")[0];
var header_title=document.getElementsByTagName("h1")[0];
var p_first=document.getElementsByTagName("p")[0]; 
var p_second=document.getElementsByTagName("p")[1];

//ajoute le texte de la variable title dans le title de la page HTML
myTitle.textContent=title;

//ajoute le texte de la variable title dans le premier h1 de la page HTML
header_title.textContent=title;

//Ajout du texte sur le premier paragraphe de la page HTML
p_first.textContent="Lorem ispum dolor sit amet.";
//Ajout d'un texte gras sur le premier paragraphe (annule l'effet de la ligne ci dessus)
p_first.innerHTML="<strong>Lorem ispum</strong> dolor sit amet";
//Ajout du texte sur le premier paragraphe
p_second.textContent="test test test test test.";
//Modification de la couleur du texte du 2e paragraphe
p_second.style.color = "red";


//création de variable en fonction du strong ajouter dans l'innerHTML
var p_strong=document.querySelector("strong");

//selectionner un noeud enfant d'un élément body p{texte} et l'affiche en console log
console.log(p_first.childNodes[1].nodeValue);
console.log("Strong"+p_strong);
console.log(p_strong.childNodes[0].nodeValue);

//ajouter un élément dans HTML
var element=document.createElement("p");
//ajouter du contenu
var contenu=document.createTextNode("Ajouter du contenu");
//Ajouter mon contenu à mon element
element.appendChild(contenu);
//Ajoute l'element et son contenu dans le body de la page HTML
document.body.appendChild(element);

var target=document.getElementsByTagName("container");