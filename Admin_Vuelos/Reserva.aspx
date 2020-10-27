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
</asp:Content>
