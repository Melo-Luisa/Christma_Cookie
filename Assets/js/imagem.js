var imgAtual = " ./Assets/img/pilha_cookies.jpg";
var img02 = "./Assets/img/cookies_mesa.jpg";
var img03 = "./Assets/img/tabua_biscoitos.jpg";

function troca(){
    document.getElementById("banner").src = imgAtual;
    let aux = imgAtual;
    imgAtual = img02;
    img02 = img03;
    img03 = aux;

}