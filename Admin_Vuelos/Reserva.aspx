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
                            <label for="">Región de Origen</label>
                            <select class="form-control" id="cb_RegionOrigen">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="RegionOHelp" class="form-text text-muted">Seleccione la región de origen</small>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="">País de Origen</label>
                            <select class="form-control" id="cb_PaisOrigen">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="PaisOHelp" class="form-text text-muted">Seleccione el país de origen</small>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="">Aeropuerto</label>
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
                            <label for="">Región de Destino</label>
                            <select class="form-control" id="cb_RegionDestino">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="RegionDHelp" class="form-text text-muted">Seleccione la región de origen</small>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="">País de Destino</label>
                            <select class="form-control" id="cb_PaisDestino">
                                <option value="0">- Seleccione -</option>
                            </select>
                            <small id="PaisDHelp" class="form-text text-muted">Seleccione el país de origen</small>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="">Aeropuerto Destino</label>
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
