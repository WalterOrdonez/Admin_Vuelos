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
var btn_Reservar;
var btn_Buscar;
var tbl_Vuelos_body;
var tbl_Vuelos;
var cb_Genero;
var txt_Nacionalidad;
var txt_Apellidos;
var txt_Nombres;
var txt_FechaNacimiento;


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
    btn_Reservar = document.getElementById("btn_Reservar");
    btn_Buscar = document.getElementById("btn_Buscar");
    tbl_Vuelos_body = document.getElementById("tbl_Vuelos_body");
    tbl_Vuelos = document.getElementById("tbl_Vuelos");
    cb_Genero = document.getElementById("cb_Genero");
    txt_Nacionalidad = document.getElementById("txt_Nacionalidad");
    txt_Apellidos = document.getElementById("txt_Apellidos");
    txt_Nombres = document.getElementById("txt_Nombres");
    txt_FechaNacimiento = document.getElementById("txt_FechaNacimiento");
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
        getVuelos();
        cd_Vuelos.setAttribute("style", "display:block");
    };

    btn_Aceptar.onclick = () => {
        cd_Pasajero.setAttribute("style", "display:block");
    };

    btn_Reservar.onclick = () => {
        if (txt_Origen.value != "") {
            if (txt_Destino.value != "") {
                if (cb_Clase.value > 0) {
                    if (tbl_Vuelos.getAttribute("id_vuelo") != "") {
                        if (txt_Apellidos.value != "" && txt_Nombres.value != "") {
                            if (txt_FechaNacimiento.value != "") {
                                if (cb_Genero.value != "0") {
                                    reservar();
                                } else {
                                    Swal.fire("¡Info!", "Debe seleccionar un genero", "info");
                                }
                            } else {
                                Swal.fire("¡Info!", "Debe ingresar su fecha de nacimiento", "info");
                            }
                            
                        } else {
                            Swal.fire("¡Info!", "Debe ingresar un nombre y un apellido", "info");
                        }
                    } else {
                        Swal.fire("¡Info!", "Debe seleccionar un vuelo", "info");
                    };

                } else {
                    Swal.fire("¡Info!", "Debe seleccionar la clase del boleto", "info");
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
    getClase();
    cd_Pasajero.setAttribute("style", "display:none");
});

function getClase() {
    var url = 'Reserva.aspx/getClase';
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
            var obj = JSON.parse(response.d);
            cb_Clase.empty();
            if (obj.data.length > 0) {
                var claseDef = document.createElement("option");
                claseDef.value = 0;
                claseDef.text = "- Seleccione -";
                cb_Clase.appendChild(claseDef);
                for (var i = 0; i < obj.data.length; i++) {
                    var cla = obj.data[i];
                    var clase = document.createElement("option");
                    clase.value = cla.id_clase;
                    clase.innerHTML = cla.nombre;

                    cb_Clase.appendChild(clase);
                };
            } else {
                Swal.fire("¡ERROR!", "Hubo un error y no se pudo obtener los datos de las clases", "error");
            }
        });
};

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
            cb_RegionDestino.empty();
            cb_RegionOrigen.empty();
            cb_PaisDestino.empty();
            cb_PaisOrigen.empty();
            cb_AeropuertoD.empty();
            cb_AeropuertoO.empty();
            if (obj.data.length > 0) {
                var regionODef = document.createElement("option");
                regionODef.value = 0;
                regionODef.text = "- Seleccione -";
                cb_RegionOrigen.appendChild(regionODef);
                var regionDDef = document.createElement("option");
                regionDDef.value = 0;
                regionDDef.text = "- Seleccione -";
                cb_RegionDestino.appendChild(regionDDef);
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
}


function getVuelos() {
    var url = 'Reserva.aspx/getVuelos';
    //Parametros a Web Method
    var data = { 'origen': txt_Origen.getAttribute("idao"), 'destino': txt_Destino.getAttribute("idad") };
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
            tbl_Vuelos_body.empty();
            if (obj.data.length > 0) {
                for (var i = 0; i < obj.data.length; i++) {
                    var vuelo = obj.data[i];
                    var fila = document.createElement("tr");

                    var fecha = document.createElement("td");
                    var destino = document.createElement("td");
                    var escala = document.createElement("td");
                    var origen = document.createElement("td");
                    var duracion = document.createElement("td");
                    var avion = document.createElement("td");

                    fila.setAttribute("id_vuelo", vuelo.id_vuelo);
                    fecha.innerHTML = vuelo.fecha;
                    destino.setAttribute("id_destino", vuelo.id_destino);
                    destino.innerHTML = vuelo.destino;
                    escala.innerHTML = vuelo.escala;
                    origen.setAttribute("id_origen", vuelo.id_origen);
                    origen.innerHTML = vuelo.origen;
                    duracion.innerHTML = vuelo.duracion;
                    avion.setAttribute("id_avion", vuelo.id_avion);
                    avion.innerHTML = vuelo.avion;

                    fila.appendChild(fecha);
                    fila.appendChild(origen);
                    fila.appendChild(destino);
                    fila.appendChild(escala);
                    fila.appendChild(duracion);
                    fila.appendChild(avion);

                    fila.setAttribute("onclick","seleccionarVuelo(this);")

                    tbl_Vuelos_body.appendChild(fila);
                };
            } else {
                Swal.fire("¡ERROR!", "Hubo un error y no se pudo obtener los datos de los vuelos", "error");
            }
        });
};


function seleccionarVuelo(fila) {
    Swal.fire({
        title: '¿Seguro?',
        text: "¿Quiere seleccionar este vuelo?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            tbl_Vuelos.setAttribute("id_vuelo", fila.getAttribute("id_vuelo"));
            for (var i = 0, row; row = tbl_Vuelos_body.rows[i]; i++) {
                row.setAttribute("style", "");
            };
            fila.setAttribute("style", "background-color: #6699ff;color: #fff;");
        }
    })
};



function reservar() {
    Swal.fire({
        title: '¿Seguro?',
        text: "¿Desea reservar un lugar en este vuelo?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            
            reservarBoleto();
        }
    })
};

function reservarBoleto() {
    var pasajero = {};
    pasajero.nombres = txt_Nombres.value;
    pasajero.apellidos = txt_Apellidos.value;
    pasajero.fechaNacimiento = txt_FechaNacimiento.value;
    pasajero.nacionalidad = txt_Nacionalidad.value;
    pasajero.genero = cb_Genero.value;

    var url = 'Reserva.aspx/reservarBoleto';
    //Parametros a Web Method
    var data = {
        'pasajero': pasajero, 'vuelo': tbl_Vuelos.getAttribute("id_vuelo"), 'origen': txt_Origen.getAttribute("idao"),
        'destino': txt_Destino.getAttribute("idad"),'clase':cb_Clase.value
    };
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
                Swal.fire("¡Ok!", "Se realizó la reservación con exito", "success");
                limpiar();
            } else {
                Swal.fire("¡ERROR!", "Hubo un error y no se pudo realizar la reservación", "error");
            }
        });
}


function limpiar() {
    txt_Origen.value = "";
    txt_Destino.value = "";
    txt_Nacionalidad.value="";
    txt_Apellidos.value="";
    txt_Nombres.value="";
    txt_FechaNacimiento.value="";
    tbl_Vuelos_body.empty();
    txt_Fecha.value = "";
    cb_Clase.value = 0;
    cb_PaisDestino.empty();
    cb_PaisOrigen.empty();
    cb_AeropuertoD.empty();
    cb_AeropuertoO.empty();
};