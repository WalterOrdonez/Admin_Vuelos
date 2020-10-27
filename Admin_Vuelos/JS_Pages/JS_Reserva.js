// -- **************************** Elementos de la Página **************************** -- //

//var txt_Nombre;
//var txt_Descripcion;
//var cb_Tipo;
//var txt_Recurso;
//var lbl_Recurso;
//var btn_Guardar;
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
    //txt_Nombre = document.getElementById("txt_Nombre");
    //txt_Descripcion = document.getElementById("txt_Descripcion");
    //cb_Tipo = document.getElementById("cb_Tipo");
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

    //btn_Nuevo.onclick = () => {
    //    limpiar();
    //};

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
    cargarTipo();
    cargarInformes();
});