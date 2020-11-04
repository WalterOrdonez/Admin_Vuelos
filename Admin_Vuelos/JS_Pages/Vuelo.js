//************************************************************** Inicia Reutilizado ***************************************************************************//

// -- **************************** Elementos de la Página **************************** -- //

var txt_Origen;
var txt_Destino;
var txt_Escalas;
var txt_Duracion;
var txt_Fecha;
var cb_Avion;
var cb_RegionDestino;
var cb_PaisDestino;
var cb_AeropuertoD;
var cb_RegionOrigen;
var cb_PaisOrigen;
var cb_AeropuertoO;
var btn_Aceptar;
var btn_Guardar;
var btn_AceptarO;
var btn_AceptarD;


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
    txt_Origen = document.getElementById("txtOrigen");
    txt_Destino = document.getElementById("txtDestino");
    txt_Duracion = document.getElementById("txtDuracion");
    txt_Escalas = document.getElementById("txtEscalas");
    txt_Fecha = document.getElementById("txtFecha");
    cb_Avion = document.getElementById("cbAvion");
    cb_RegionDestino = document.getElementById("cbRegionDestino");
    cb_PaisDestino = document.getElementById("cbPaisDestino");
    cb_AeropuertoD = document.getElementById("cbAeropuertoD");
    cb_RegionOrigen = document.getElementById("cbRegionOrigen");
    cb_PaisOrigen = document.getElementById("cbPaisOrigen");
    cb_AeropuertoO = document.getElementById("cbAeropuertoO");
    btn_AceptarD = document.getElementById("btnAceptarD");
    btn_AceptarO = document.getElementById("btnAceptarO");
    btn_Aceptar = document.getElementById("btnAceptar");
    btn_Guardar = document.getElementById("btnGuardar");
};


//Crea los eventos para los elementos HTML
function crearEventos() {

    txt_Origen.onclick = () => {
        $("#modal-Origen").modal("show");
    };

    txt_Destino.onclick = () => {
        $("#modal-Destino").modal("show");
    };

    btn_AceptarO.onclick = () => {
        txt_Origen.value = cb_AeropuertoO.options[cb_AeropuertoO.selectedIndex].text;
        txt_Origen.setAttribute("idAerO", cb_AeropuertoO.value);
        $("#modal-Origen").modal("hide");
    };

    btn_AceptarD.onclick = () => {
        txt_Destino.value = cb_AeropuertoD.options[cb_AeropuertoD.selectedIndex].text;
        txt_Destino.setAttribute("idAerD", cb_AeropuertoD.value);
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

    //Valida campos vacios
    btn_Guardar.onclick = () => {
        var idAroO = txt_Origen.getAttribute("idAerO");
        console.log(idAroO);
        if (txt_Origen.value != "") {
            if (txt_Fecha.value != "") {
                if (txt_Destino.value != "") {
                    if (txt_Duracion.value != "") {
                        if (txt_Escalas.value != "") {
                            
                            if (cb_Avion.value != 0) {
                                guardarVuelo();
                            } else {
                                Swal.fire("¡Info!", "Debe seleccionar un Avion", "info");
                            }
                        } else {
                            Swal.fire("¡Info!", "Debe establecer el numero de escalas del vuelo", "info");
                        }
                    } else {
                        Swal.fire("¡Info!", "Debe establecer una Duracion para el vuelo", "info");
                    };

                } else {
                    Swal.fire("¡Info!", "Debe seleccionar un Destino del vuelo", "info");
                }
            } else {
                Swal.fire("¡Info!", "Debe ingresar una fecha del vuelo", "info");
            }
        } else {
            Swal.fire("¡Info!", "Debe seleccionar un origen del vuelo", "info");
        }
    };
};

//Funcion que se ejecuta al terminar de cargar la página
window.ready(() => {
    // -- **************************** Elementos de la Página **************************** -- //
    instaciarElementos();

    //Crea todos los eventos de los elementos HTML
    crearEventos();
    getAvion();
    getRegion();
});

function getRegion() {
    var url = 'Reserva.aspx/getRegion';
    //Parametros a Web Method
    var data = {};
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
            cb_RegionDestino.empty();
            if (obj.data.length > 0) {
                var regionDef = document.createElement("option");
                regionDef.value = 0;
                regionDef.text = "- Seleccione -";
                var regionDefD = document.createElement("option");
                regionDefD.value = 0;
                regionDefD.text = "- Seleccione -";
                cb_RegionOrigen.appendChild(regionDef);
                cb_RegionDestino.appendChild(regionDefD);
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
    var data = { 'region': cb_RegionOrigen.value };
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
            cb_PaisOrigen.empty();
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
};

//****************************************************************** Fin reutilizado *****************************************************************************************//
function getAvion() {
    var url = 'Vuelos.aspx/getAviones';
    //Parametros a Web Method
    var data = {};
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
            cb_Avion.empty();
            if (obj.data.length > 0) {
                var avionDef = document.createElement("option");
                avionDef.value = 0;
                avionDef.text = "- Seleccione -";
                cb_Avion.appendChild(avionDef);
                for (var i = 0; i < obj.data.length; i++) {
                    var region = obj.data[i];
                    var opt_avion = document.createElement("option");
                    opt_avion.value = region.id_region;
                    opt_avion.text = region.nombre;

                    cb_Avion.appendChild(opt_avion);
                };
            } else {
                Swal.fire("¡ERROR!", "Hubo un error y no se pudo obtener los datos de los aviones", "error");
            }
        });
};



function guardarVuelo() {
    var url = 'Vuelos.aspx/guardaVuelo';
    //Parametros a Web Method
    var data = { 'origen': txt_Origen.getAttribute("idAerO"), 'destino': txt_Destino.getAttribute("idAerD"), 'duracion': txt_Duracion.value, 'fecha':txt_Fecha.value,'escala':txt_Escalas.value,'avion':cb_Avion.value};
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
            if (obj != "0") {
                Swal.fire("¡EXITO!", "Vuelo programado exitosamente!", "success");
            } else {
                Swal.fire("¡ERROR!", "Hubo un error y no se pudo programar el vuelo", "error");
            }
        });
}