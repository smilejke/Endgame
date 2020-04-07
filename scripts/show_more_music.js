var showMoreLink = document.getElementById("show_more_music1");
var open_1 = document.querySelector(".hidden_1");
showMoreLink.addEventListener("click", func);

function func() {
    if(!open_1.classList.contains("none")) {
        open_1.classList.add("visible");
    }
    else {
        open_1.classList.remove("visible");
    }
}

//

var showMoreLink2 = document.getElementById("show_more_music2");
var open_2 = document.querySelector(".hidden_2");
showMoreLink2.addEventListener("click", func2);

function func2() {
    if(!open_2.classList.contains("none")) {
        open_2.classList.add("visible");
    }
    else {
        open_2.classList.remove("visible");
    }
}

//

var showMoreLink3 = document.getElementById("show_more_music3");
var open_3 = document.querySelector(".hidden_3");
showMoreLink3.addEventListener("click", func3);

function func3() {
    if(!open_3.classList.contains("none")) {
        open_3.classList.add("visible");
    }
    else {
        open_3.classList.remove("visible");
    }
}

//

document.getElementById('show_more_music1').onclick = function() {
document.getElementById('show_more_music1').style.display = 'none';
}
//
document.getElementById('show_more_music2').onclick = function() {
document.getElementById('show_more_music2').style.display = 'none';
}
//
document.getElementById('show_more_music3').onclick = function() {
document.getElementById('show_more_music3').style.display = 'none';
}
