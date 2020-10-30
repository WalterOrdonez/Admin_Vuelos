// -- **************************** Elementos de la Página **************************** -- //

var txt_Origen;
var txt_Destino;
var btn_AceptarO;
var btn_AceptarD;
var cb_RegionDestino;
var cb_PaisDestino;
var cb_AeropuertoD;
var cb_RegionOrigen;
var cb_PaisOrigen;
var cb_AeropuertoO;
var btn_Aceptar;
var cb_Clase;
var cd_Pasajero;
var btn_Continuar;
var btn_Guardar;
var btn_Buscar;


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
    txt_Destino = document.getElementById("txt_Destino");
    cb_RegionDestino = document.getElementById("cb_RegionDestino");
    cb_PaisDestino = document.getElementById("cb_PaisDestino");
    cb_AeropuertoD = document.getElementById("cb_AeropuertoD");
    cb_RegionOrigen = document.getElementById("cb_RegionOrigen");
    cb_PaisOrigen = document.getElementById("cb_PaisOrigen");
    cb_AeropuertoO = document.getElementById("cb_AeropuertoO");
    btn_AceptarD = document.getElementById("btn_AceptarD");
    btn_AceptarO = document.getElementById("btn_AceptarO");
    btn_Aceptar = document.getElementById("btn_Aceptar");
    cb_Clase = document.getElementById("cb_Clase");
    cd_Pasajero = document.getElementById("cd_Pasajero");
    btn_Continuar = document.getElementById("btn_Continuar");
    btn_Guardar = document.getElementById("btn_Guardar");
    btn_Buscar = document.getElementById("btn_Buscar");
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

    cb_RegionOrigen.onchange = () => {
        getPaisO();
    };

    cb_RegionDestino.onchange = () => {
        getPaisD();
    };

    cb_PaisDestino.onchange = () => {
        getAeropuertoD();
    };

    cb_PaisOrigen.onchange = () => {
        getAeropuertoO();
    };

    btn_Continuar.onclick = () => {
        cd_Vuelos.setAttribute("style", "display:block");
    };

    btn_Aceptar.onclick = () => {
        cd_Pasajero.setAttribute("style", "display:block");
    };

    btn_Guardar.onclick = () => {
        if (txt_Origen.value != "") {
            if (txt_Fecha.value != "") {
                if (cb_clase.value != "") {
                    if (titulo_informe.getAttribute("no_informe") == "") {
                        guardarInforme();
                    } else {
                        actualizarInforme();
                    };

                } else {
                    Swal.fire("¡Info!", "Debe ingresar un recurso", "info");
                }
            } else {
                Swal.fire("¡Info!", "Debe seleccionar un destino", "info");
            }
        } else {
            Swal.fire("¡Info!", "Debe seleccionar un origen", "info");
        }
    };
};

//Funcion que se ejecuta al terminar de cargar la página
window.ready(() => {
    // -- **************************** Elementos de la Página **************************** -- //
    instaciarElementos();

    //Crea todos los eventos de los elementos HTML
    crearEventos();
    getRegion();
    cd_Pasajero.setAttribute("style", "display:none");
});

function getRegion() {
    var url = 'Reserva.aspx/getRegion';
    //Parametros a Web Method
    var data = { };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log(response);
            var obj = JSON.parse(response.d);
            cb_RegionOrigen.empty();
            opt_regionD.empty();
            if (obj.data.length > 0) {
                var regionDef = document.createElement("option");
                regionDef.value = 0;
                regionDef.text = "- Seleccione -";
                cb_RegionOrigen.appendChild(regionDef);
                for (var i = 0; i < obj.data.length; i++) {
                    var region = obj.data[i];
                    var opt_regionO = document.createElement("option");
                    var opt_regionD = document.createElement("option");
                    opt_regionO.value = region.id_region;
                    opt_regionO.text = region.nombre;

                    opt_regionD.value = region.id_region;
                    opt_regionD.text = region.nombre;

                    cb_RegionOrigen.appendChild(opt_regionO);
                    cb_RegionDestino.appendChild(opt_regionD);
                };
            } else {
                Swal.fire("¡ERROR!", "Hubo un error y no se pudo obtener los datos de las regiones", "error");
            }
        });
};


function getPaisO() {
    var url = 'Reserva.aspx/getPais';
    //Parametros a Web Method
    var data = {'region':cb_RegionOrigen.value};
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
            cb_RegionOrigen.empty();
            if (obj.data.length > 0) {
                var paisDef = document.createElement("option");
                paisDef.value = 0;
                paisDef.text = "- Seleccione -";
                cb_PaisOrigen.appendChild(paisDef);
                for (var i = 0; i < obj.data.length; i++) {
                    var pais = obj.data[i];
                    var opt_paisO = document.createElement("option");
                    opt_paisO.value = pais.id_pais;
                    opt_paisO.text = pais.nombre;

                    cb_PaisOrigen.appendChild(opt_paisO);
                };
            } else {
                Swal.fire("¡ERROR!", "Hubo un error y no se pudo obtener los datos de los paises", "error");
            }
        });
};


function getPaisD() {
    var url = 'Reserva.aspx/getPais';
    //Parametros a Web Method
    var data = { 'region': cb_RegionDestino.value };
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
            cb_PaisDestino.empty();
            if (obj.data.length > 0) {
                var paisDef = document.createElement("option");
                paisDef.value = 0;
                paisDef.text = "- Seleccione -";
                cb_PaisDestino.appendChild(paisDef);
                for (var i = 0; i < obj.data.length; i++) {
                    var pais = obj.data[i];
                    var opt_paisD = document.createElement("option");
                    opt_paisD.value = pais.id_pais;
                    opt_paisD.text = pais.nombre;

                    cb_PaisDestino.appendChild(opt_paisD);
                };
            } else {
                Swal.fire("¡ERROR!", "Hubo un error y no se pudo obtener los datos de los paises", "error");
            }
        });
};

function getAeropuertoO() {
    var url = 'Reserva.aspx/getAeropuerto';
    //Parametros a Web Method
    var data = { 'pais': cb_PaisOrigen.value };
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
            cb_AeropuertoO.empty();
            if (obj.data.length > 0) {
                var aeroDef = document.createElement("option");
                aeroDef.value = 0;
                aeroDef.text = "- Seleccione -";
                cb_AeropuertoO.appendChild(aeroDef);
                for (var i = 0; i < obj.data.length; i++) {
                    var aeropuerto = obj.data[i];
                    var opt_paisO = document.createElement("option");
                    opt_paisO.value = aeropuerto.id_aeropuerto;
                    opt_paisO.text = aeropuerto.nombre;

                    cb_AeropuertoO.appendChild(opt_paisO);
                };
            } else {
                Swal.fire("¡ERROR!", "Hubo un error y no se pudo obtener los datos de los aeropuertos", "error");
            }
        });
}

function getAeropuertoD() {
    var url = 'Reserva.aspx/getAeropuerto';
    //Parametros a Web Method
    var data = { 'pais': cb_PaisDestino.value };
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
            cb_AeropuertoD.empty();
            if (obj.data.length > 0) {
                var aeroDef = document.createElement("option");
                aeroDef.value = 0;
                aeroDef.text = "- Seleccione -";
                cb_AeropuertoD.appendChild(aeroDef);
                for (var i = 0; i < obj.data.length; i++) {
                    var aeropuerto = obj.data[i];
                    var opt_paisD = document.createElement("option");
                    opt_paisD.value = aeropuerto.id_aeropuerto;
                    opt_paisD.text = aeropuerto.nombre;

                    cb_AeropuertoD.appendChild(opt_paisD);
                };
            } else {
                Swal.fire("¡ERROR!", "Hubo un error y no se pudo obtener los datos de los aeropuertos", "error");
            }
        });
}


function getVuelos() {
    var url = 'Reserva.aspx/getVuelos';
    //Parametros a Web Method
    var data = { 'pais': cb_PaisDestino.value };
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
            cb_AeropuertoD.empty();
            if (obj.data.length > 0) {
                var aeroDef = document.createElement("option");
                aeroDef.value = 0;
                aeroDef.text = "- Seleccione -";
                cb_AeropuertoD.appendChild(aeroDef);
                for (var i = 0; i < obj.data.length; i++) {
                    var aeropuerto = obj.data[i];
                    var opt_paisD = document.createElement("option");
                    opt_paisD.value = aeropuerto.id_aeropuerto;
                    opt_paisD.text = aeropuerto.nombre;

                    cb_AeropuertoD.appendChild(opt_paisD);
                };
            } else {
                Swal.fire("¡ERROR!", "Hubo un error y no se pudo obtener los datos de los aeropuertos", "error");
            }
        });
};