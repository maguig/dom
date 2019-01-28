function alertBotonTocado() {
    alert('boton tocado!!!');
}

function cambiarColorParrafo2() {
    document.getElementById('p2').style = "color:red;";
}

function alertSacameDeEncima() {
    console.log('Ey Sacame el mouse de encima puto!');
}


var btn = document.getElementById("btnTocame");

btn.onclick = alertBotonTocado;