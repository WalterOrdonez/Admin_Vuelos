var btnLogin;
var txt_usuario;
var txt_pass;

// -- **************************** Funciones Generales **************************** -- //
//función para verificar que ya se terminó de cargar la página
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState != 'loading')
                fn();
        });
    }
};

//Metodo para quitar los hijos de un elemento DOM HTML
HTMLElement.prototype.empty = function () {
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
};


//Crea la referencia de los elementos HTML
function instaciarElementos() {
    btnLogin = document.getElementById("btnLogin");
    txt_usuario = document.getElementById("txt_usuario");
    txt_pass = document.getElementById("txt_pass");
};


//Crea los eventos para los elementos HTML
function crearEventos() {

    btnLogin.onclick = () => {
        validarLogin();
    };

    
};

//Funcion que se ejecuta al terminar de cargar la página
window.ready(() => {
    // -- **************************** Elementos de la Página **************************** -- //
    instaciarElementos();

    //Crea todos los eventos de los elementos HTML
    crearEventos();
    
});


function validarLogin(){

    var url = 'Login.aspx/ValidarLogin';
    //Parametros a Web Method
    var data = {
        'usuario':txt_usuario.value , 'pass': txt_pass.value};
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            var obj = JSON.parse(response.d);
            if (obj > 0) {
                window.location.href = "../Reserva.aspx";
            } else {
                Swal.fire("¡Info!", "Usuario Invalido", "warning");
            }
        });
};

