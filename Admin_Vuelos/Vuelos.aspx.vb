Imports System.Web.Script.Serialization
Imports System.Web.Script.Services
Imports System.Web.Services
Imports System.Web.Services.Protocols

Public Class Vuelos
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    <SoapHeader("authentication")>
    Public Shared Function getAviones()
        Dim excepcion As String = ""
        Try
            Dim cls_reserva As New Cls_Vuelo()
            Dim dt As DataTable = Nothing
            Dim dt_detalle As DataTable = Nothing
            Dim arraylista As New ArrayList
            Dim serializer As New JavaScriptSerializer
            Dim Usuario As String = HttpContext.Current.User.Identity.Name

            dt = cls_reserva.getAvion()

            If Not dt Is Nothing Then
                For Each r As DataRow In dt.Rows
                    Dim region = New With {.id_region = Nothing, .nombre = Nothing}
                    region.id_region = r("ID_AVION")
                    region.nombre = r("MODELO")

                    arraylista.Add(region)
                Next

            End If
            Dim variable = New With {.data = arraylista}
            Dim cadena As String = serializer.Serialize(variable).ToString()
            Return cadena

        Catch ex As Exception
            Dim httpCon As HttpContext = HttpContext.Current
            httpCon.Response.StatusCode = 410
            httpCon.Response.End()
            excepcion = ex.Message
        End Try
        Return excepcion
    End Function

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function guardaVuelo(fecha As String, destino As String, escala As String, origen As String, duracion As String, avion As String)
        Dim excepcion As String = ""
        Dim cls_vuelo As New Cls_Vuelo()
        Dim VDestino As Integer = Convert.ToInt32(destino)
        Dim VEscala As Integer = Convert.ToInt32(escala)
        Dim VOrigen As Integer = Convert.ToInt32(origen)
        Dim VDuracion As Integer = Convert.ToInt32(duracion)
        Dim VAvion As Integer = Convert.ToInt32(avion)
        Try
            Dim cadena As String = cls_vuelo.guardaVuelo(fecha, VDestino, VEscala, vorigen, vduracion, vavion)
            Return cadena

        Catch ex As Exception
            Dim httpCon As HttpContext = HttpContext.Current
            httpCon.Response.StatusCode = 410
            httpCon.Response.End()
            excepcion = ex.Message
        End Try
        Return excepcion
    End Function

End Class