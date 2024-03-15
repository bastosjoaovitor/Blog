document.getElementById('div-img-1').addEventListener('mouseover', function() {
    document.getElementById('img-1').style.filter = 'brightness(65%)';
});

document.getElementById('div-img-1').addEventListener('mouseout', function() {
    document.getElementById('img-1').style.filter = 'brightness(50%)';
});

document.getElementById('div-img-2').addEventListener('mouseover', function() {
    document.getElementById('img-2').style.filter = 'brightness(50%)';
});

document.getElementById('div-img-2').addEventListener('mouseout', function() {
    document.getElementById('img-2').style.filter = 'brightness(40%)';
});

document.getElementById('div-img-3').addEventListener('mouseover', function() {
    document.getElementById('img-3').style.filter = 'brightness(60%)';
});

document.getElementById('div-img-3').addEventListener('mouseout', function() {
    document.getElementById('img-3').style.filter = 'brightness(50%)';
});

function abrir_menu() {
    let nav = document.getElementById("botoes");
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    nav.style.opacity = "1";
    nav.style.visibility = "visible";
}

function fechar_menu() {
    let nav = document.getElementById("botoes");
    nav.style.opacity = "0";
    nav.style.visibility = "hidden";
    document.body.style.overflow = 'auto';
}

function abrir_pesquisa() {
    let nav = document.getElementById("pesquisa");
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    nav.style.opacity = "1";
    nav.style.visibility = "visible";
}

function fechar_pesquisa() {
    let nav = document.getElementById("pesquisa");
    nav.style.opacity = "0";
    nav.style.visibility = "hidden";
    document.body.style.overflow = 'auto';
}