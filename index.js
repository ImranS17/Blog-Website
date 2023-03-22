let ham = document.querySelector('.hamburger')
let menu = document.querySelector('.menu')
let container = document.querySelector('.nav-h')

ham.addEventListener('click', () => {
    menu.classList.toggle('main');
    container.classList.toggle('nav-h');
})

function store() {
    var inputEmail = document.getElementById("Name");
    localStorage.setItem("Name", inputEmail.value);

    var inputEmail = document.getElementById("Title");
    localStorage.setItem("Title", inputEmail.value);

    var inputEmail = document.getElementById("Images");
    localStorage.setItem("Images", inputEmail.value);

    var inputEmail = document.getElementById("Message");
    localStorage.setItem("Message", inputEmail.value);
}

function retrieve() {

    var x = localStorage.getItem("Title");
    document.getElementById("Heading").innerHTML = x;

    
    var x = localStorage.getItem("Name");
    document.getElementById("Author").innerHTML = x;

    var x = localStorage.getItem("Images");
    document.getElementById("Gallery").innerHTML = x;

    var x = localStorage.getItem("Message");
    document.getElementById("Desc").innerHTML = x;

}

