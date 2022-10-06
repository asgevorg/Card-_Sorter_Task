let main_content = document.getElementById("main");
let elements = [];

function createCard(number = Math.round(Math.random() * 1000)){
    addCard(number, main_content);
    elements.push(number);
    localStorage.setItem("elements", JSON.stringify(elements));
}

function load(){
    elements = JSON.parse(localStorage.getItem("elements"));
    onReloadCreate(elements);
}

function onReloadCreate(arr){
    arr.forEach(val => {
        addCard(val, main_content);
    })
}

function addCard(number, target){
    let card = document.createElement("div");
    card.className = "card";
    card.id = number;
    let close_x = document.createElement("span");
    close_x.className = "close";
    close_x.contains = "x";

    let divContent = document.createElement("div");
    divContent.innerText = number;
    divContent.className = "innertxt_card";
    card.appendChild(divContent);
    card.appendChild(close_x);
    target.appendChild(card);
}

function sort_a__b(){
    elements.sort((a, b) => {
        return a - b
    });
    localStorage.setItem("elements", JSON.stringify(elements));
    display();
}

function sort_b__a(){
    elements.sort((a, b) => {
        return b - a
    });
    localStorage.setItem("elements", JSON.stringify(elements));
    display();
}

function display() {
    let a = main_content.getElementsByClassName("innertxt_card");
    for(let i = 0; i < a.length; i++){
        a[i].innerText = elements[i];
    }
}

main_content.addEventListener('click', (target) => {
    if(target.path[0].className === "close"){
        let tr = parseInt(target.path[1].id);
        document.getElementById(JSON.stringify(tr)).remove();
        let ind = elements.indexOf(tr);
        elements.splice(ind, 1);
        localStorage.setItem("elements", JSON.stringify(elements));
    }
})