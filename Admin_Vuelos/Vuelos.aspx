<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/Site.Master" CodeBehind="Vuelos.aspx.vb" Inherits="Admin_Vuelos.Vuelos" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div class="card mt-3" >
        <div class="card-header">
            Programacion de vuelo
        </div>
        <div class="card-body">
            <div class="row">
                <div class="form form-group col-md-4">
                    <label>Origen</label>
                    <input type="text" class="form-control" id="txtOrigen" aria-describedby="Origen" readonly />
                    <small id="OrigenHelp" class="form-text text-muted">Seleccione un Origen</small>
                </div>
                <div class="form form-group col-md-4">
                    <label>Destino</label>
                    <input type="text" class="form-control" id="txtDestino" aria-describedby="Destino" readonly/>
                    <small id="DestinoHelp" class="form-text text-muted">Selecione un Destino</small>
                </div>
                <div class="form form-group col-md-4">
                    <label>Avion</label>
                    <select id="cbAvion" class="form-control"></select>
                    <small id="AvionHelp" class="form-text text-muted">Selecione un Avion</small>
                </div>
                <div class="form form-group col-md-4">
                    <label>Numero de Escalas</label>
                    <input type="number" id="txtEscalas" class="form-control"/>
                </div>
                <div class="form form-group col-md-4">
                    <label>Duracion de vuelo</label>
                    <input type="text" id="txtDuracion" class="form-control"/>
                    <small id="DuracionHelp" class="form-text text-muted">Ingrese la duracion del vuelo en horas</small>
                </div>
                <div class="form form-group col-md-4">
                    <label>Fecha</label>
                    <input type="date" id="txtFecha" class="form-control"/>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button type="button" id="btnGuardar" class="btn btn-lg btn-block btn-success" >Guardar</button>
        </div>
    </div>
    <div class="modal fade" id="modal-Origen" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-header text-center">Seleccione el origen</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="">Región de Origen</label>
                            <select class="form-control" id="cbRegionOrigen">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="RegionOHelp" class="form-text text-muted">Seleccione la región de origen</small>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="">País de Origen</label>
                            <select class="form-control" id="cbPaisOrigen">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="PaisOHelp" class="form-text text-muted">Seleccione el país de origen</small>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="">Aeropuerto</label>
                            <select class="form-control" id="cbAeropuertoO">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="AeropuertoOHelp" class="form-text text-muted">Seleccione el Aeropuerto</small>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="btnAceptarO" class="btn btn-success" >Aceptar</button>
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
                            <label for="">Región de Destino</label>
                            <select class="form-control" id="cbRegionDestino">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="RegionDHelp" class="form-text text-muted  text-center">Seleccione la región de origen</small>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="">País de Destino</label>
                            <select class="form-control" id="cbPaisDestino">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="PaisDHelp" class="form-text text-muted">Seleccione el país de origen</small>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="">Aeropuerto Destino</label>
                            <select class="form-control" id="cbAeropuertoD">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="AeropuertoDHelp" class="form-text text-muted">Seleccione el Aeropuerto</small>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="btnAceptarD" class="btn btn-success" >Aceptar</button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
