<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/Site.Master" CodeBehind="Reserva.aspx.vb" Inherits="Admin_Vuelos.Reserva" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div class="card mt-3">
        <div class="card-header">
            Reserva tu Boleto
        </div>
        <div class="card-body">
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="">Origen</label>
                    <input type="text" class="form-control" id="txt_Origen" aria-describedby="Origen" readonly>
                    <small id="OrigenHelp" class="form-text text-muted">Seleccione su Origen</small>
                </div>
                <div class="form-group col-md-6">
                    <label for="">Destino</label>
                    <input type="text" class="form-control" id="txt_Destino" aria-describedby="Destino" readonly>
                    <small id="DestinoHelp" class="form-text text-muted">Seleccione su Destino</small>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="">Fecha de Vuelo</label>
                    <input type="date" class="form-control" id="txt_Fecha" aria-describedby="Fecha de Vuelo" >
                    <small id="FechaHelp" class="form-text text-muted">Seleccione la fecha del Vuelo</small>
                </div>
                <div class="form-group col-md-6">
                    <label for="">Clase</label>
                    <select class="form-control" name="" id="cb_Clase">
                    </select>
                    <small id="ClaseHelp" class="form-text text-muted">Seleccione la Clase del asiento</small>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button type="button" id="btn_Continuar" class="btn btn-lg btn-block btn-primary" >Continuar</button>
        </div>
    </div>
    <div id="cd_Vuelos" class="card mt-3" style="display:none">
        <div class="card-header">
            Vuelos
        </div>
        <div class="card-body pt-0">
            <div class="row">
                <div class="table-responsive">
                    <table class="table table-sm mt-0" id="tbl_Vuelos">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Fecha</th>
                                <th scope="col">Origen</th>
                                <th scope="col">Destino</th>
                                <th scope="col">Escalas</th>
                                <th scope="col">Duración</th>
                                <th scope="col">Avión</th>
                            </tr>
                        </thead>
                        <tbody id="tbl_Vuelos_body">
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button type="button" id="btn_Aceptar" class="btn btn-lg btn-block btn-primary" >Aceptar</button>
        </div>
    </div>
    <div id="cd_Pasajero" class="card mt-3" style="display:none">
        <div class="card-header">
            Datos del Pasajero
        </div>
        <div class="card-body">
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="cb_Genero">Genero</label>
                    <select class="form-control" name="" id="cb_Genero">
                        <option value="0">- Seleccione -</option>
                        <option value="F">Femenino</option>
                        <option value="M">Masculino</option>
                    </select>
                    <small id="GeneroHelp" class="form-text text-muted">Seleccione su Genero</small>
                </div>
                <div class="form-group col-md-6">
                    <label for="txt_Nacionalidad">Nacionalidad</label>
                    <input type="text" class="form-control" name="" id="txt_Nacionalidad"/>
                    <small id="NacionalidadHelp" class="form-text text-muted">Seleccione su Nacionalidad</small>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="txt_Apellidos">Apellido(s)</label>
                    <input type="text" class="form-control" name="" id="txt_Apellidos"/>
                    <small id="ApellidosHelp" class="form-text text-muted">Ingrese apellidos</small>
                </div>
                <div class="form-group col-md-6">
                    <label for="txt_Nombres">Nombre(s)</label>
                    <input type="text" class="form-control" name="" id="txt_Nombres"/>
                    <small id="NombresHelp" class="form-text text-muted">Ingrese nombres</small>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="txt_FechaNacimiento">Fecha Nacimiento</label>
                    <input type="date" class="form-control" name="" id="txt_FechaNacimiento"/>
                    <small id="FechaNacimientoHelp" class="form-text text-muted">Ingrese fecha de Nacimiento</small>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button type="button" id="btn_Reservar" class="btn btn-lg btn-block btn-success" >Reservar</button>
        </div>
    </div>

    <div class="modal fade" id="modal-Origen" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-header">Seleccione el origen</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="cb_RegionOrigen">Región de Origen</label>
                            <select class="form-control" id="cb_RegionOrigen">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="RegionOHelp" class="form-text text-muted">Seleccione la región de origen</small>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="cb_PaisOrigen">País de Origen</label>
                            <select class="form-control" id="cb_PaisOrigen">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="PaisOHelp" class="form-text text-muted">Seleccione el país de origen</small>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="cb_AeropuertoO">Aeropuerto</label>
                            <select class="form-control" id="cb_AeropuertoO">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="AeropuertoOHelp" class="form-text text-muted">Seleccione el Aeropuerto</small>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="btn_AceptarO" class="btn btn-success" >Aceptar</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modal-Destino" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-header">Seleccione el Destino</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="cb_RegionDestino">Región de Destino</label>
                            <select class="form-control" id="cb_RegionDestino">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="RegionDHelp" class="form-text text-muted">Seleccione la región de origen</small>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="cb_PaisDestino">País de Destino</label>
                            <select class="form-control" id="cb_PaisDestino">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="PaisDHelp" class="form-text text-muted">Seleccione el país de origen</small>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="cb_AeropuertoD">Aeropuerto Destino</label>
                            <select class="form-control" id="cb_AeropuertoD">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="AeropuertoDHelp" class="form-text text-muted">Seleccione el Aeropuerto</small>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="btn_AceptarD" class="btn btn-success" >Aceptar</button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
