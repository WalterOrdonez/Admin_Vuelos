<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/Site.Master" CodeBehind="Vuelos.aspx.vb" Inherits="Admin_Vuelos.Vuelos" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div class="card bg-info text-white mt-3" >
        <div class="card-header">
            Programacion de vuelo
        </div>
        <div class="card-body">
            <div class="row">
                <div class="form form-group col-md-4">
                    <label>Origen</label>
                    <input type="text" disabled id="TxtOrigen" class="form-control" placeholder="Seleccione un origen"/>
                </div>
                <div class="form form-group col-md-4">
                    <label>Destino</label>
                    <input type="text" disabled id="TxtDestino" class="form-control" placeholder="Seleciones un destino" />
                </div>
                <div class="form form-group col-md-4">
                    <label>Avion</label>
                    <select id="CmbAvion" class="form-control"></select>
                </div>
                <div class="form form-group col-md-4">
                    <label>Numero de Escalas</label>
                    <input type="number" id="TxtEscalas" class="form-control"/>
                </div>
                <div class="form form-group col-md-4">
                    <label>Duracion de vuelo</label>
                    <input type="text" id="TxtDuracion" class="form-control" placeholder="Ingrese la duracion del vuelo en numeros" />
                </div>
                <div class="form form-group col-md-4">
                    <label>Destino</label>
                    <input type="text" disabled id="TxtDestino" class="form-control" placeholder="Seleciones un destino" />
                </div>
            </div>
        </div>

    </div>
</asp:Content>
