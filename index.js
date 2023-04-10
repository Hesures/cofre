var chest = [];

var items = [" Collar"," Corona", " Antorcha", " Yesca", " Pedernal", " Cantimplora", " Comida", " Cuerda", " Garfio", " Manta", " Anillo", " Monedas", " Pergamino", " Tinta", " Pluma"];

document.querySelector("#text-button").addEventListener("click", function () {
    var queryChest = document.querySelector(".chest-content");
    chest = [];
    randomItem = Math.floor(Math.random()*items.length);
    chest.push(items[randomItem]);
    queryChest.textContent=chest;
    queryChest.classList.add("golden-flash");
    setTimeout(function(){
        queryChest.classList.remove("golden-flash");
    }, 200);
});