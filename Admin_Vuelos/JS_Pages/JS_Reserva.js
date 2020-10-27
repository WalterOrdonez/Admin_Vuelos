// -- **************************** Elementos de la Página **************************** -- //

var txt_Origen;
var btn_AceptarO;
var btn_AceptarD;
var cb_RegionDestino;
var cb_PaisDestino;
var cb_AeropuertoD;
var cb_RegionOrigen;
var cb_PaisOrigen;
var cb_AeropuertoO;
//var tbl_Informes_body;
//var titulo_informe;
//var btn_Nuevo;
//var cb_Categoria;



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
    txt_Origen = document.getElementById("txt_Origen");
    cb_RegionDestino = document.getElementById("cb_RegionDestino");
    cb_PaisDestino = document.getElementById("cb_PaisDestino");
    cb_AeropuertoD = document.getElementById("cb_AeropuertoD");
    cb_RegionOrigen = document.getElementById("cb_RegionOrigen");
    cb_PaisOrigen = document.getElementById("cb_PaisOrigen");
    cb_AeropuertoO = document.getElementById("cb_AeropuertoO");
    btn_AceptarD = document.getElementById("btn_AceptarD");
    btn_AceptarO = document.getElementById("btn_AceptarO");
    //txt_Recurso = document.getElementById("txt_Recurso");
    //lbl_Recurso = document.getElementById("lbl_Recurso");
    //btn_Guardar = document.getElementById("btn_Guardar");
    //tbl_Informes_body = document.getElementById("tbl_Informes_body");
    //titulo_informe = document.getElementById("titulo_informe");
    //btn_Nuevo = document.getElementById("btn_Nuevo");
    //cb_Categoria = document.getElementById("cb_Categoria");
};


//Crea los eventos para los elementos HTML
function crearEventos() {
    //cb_Tipo.onchange = () => {
    //    if (cb_Tipo.value > 0) {
    //        if (cb_Tipo.options[cb_Tipo.selectedIndex].text == "Gráfica") {
    //            lbl_Recurso.innerHTML = 'Enbebido de Gráfica';
    //        };
    //        if (cb_Tipo.options[cb_Tipo.selectedIndex].text == "Página") {
    //            lbl_Recurso.innerHTML = 'Dirección de la Página (URL)';
    //        };
    //    }
    //};

    txt_Origen.onclick = () => {
        $("#modal-Origen").modal("show");
    };

    txt_Destino.onclick = () => {
        $("#modal-Destino").modal("show");
    };

    btn_AceptarO.onclick = () => {
        txt_Origen.value = cb_AeropuertoO.options[cb_AeropuertoO.selectedIndex].text;
        txt_Origen.setAttribute("idAO", cb_AeropuertoO.value);
        $("#modal-Origen").modal("hide");
    };

    btn_AceptarD.onclick = () => {
        txt_Destino.value = cb_AeropuertoD.options[cb_AeropuertoD.selectedIndex].text;
        txt_Destino.setAttribute("idAD",cb_AeropuertoD.value);
        $("#modal-Destino").modal("hide");
    };

    //btn_Guardar.onclick = () => {
    //    if (txt_Nombre.value != "") {
    //        if (cb_Tipo.value > 0) {
    //            if (txt_Recurso.value != "") {
    //                if (titulo_informe.getAttribute("no_informe") == "") {
    //                    guardarInforme();
    //                } else {
    //                    actualizarInforme();
    //                };

    //            } else {
    //                Swal.fire("¡Info!", "Debe ingresar un recurso", "info");
    //            }
    //        } else {
    //            Swal.fire("¡Info!", "Debe seleccionar el tipo", "info");
    //        }
    //    } else {
    //        Swal.fire("¡Info!", "Debe ingresar un nombre para el informe", "info");
    //    }
    //};
};

//Funcion que se ejecuta al terminar de cargar la página
window.ready(() => {
    // -- **************************** Elementos de la Página **************************** -- //
    instaciarElementos();

    //Crea todos los eventos de los elementos HTML
    crearEventos();
    //cargarTipo();
    //cargarInformes();
});


