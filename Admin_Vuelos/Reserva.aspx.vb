Imports System.Web.Script.Serialization
Imports System.Web.Script.Services
Imports System.Web.Services
Imports System.Web.Services.Protocols

Public Class Reserva
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub


    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    <SoapHeader("authentication")>
    Public Shared Function getRegion()
        Dim excepcion As String = ""
        Try
            Dim cls_reserva As New Cls_Reserva()
            Dim dt As DataTable = Nothing
            Dim dt_detalle As DataTable = Nothing
            Dim arraylista As New ArrayList
            Dim serializer As New JavaScriptSerializer
            Dim Usuario As String = HttpContext.Current.User.Identity.Name

            dt = cls_reserva.getRegion()

            If Not dt Is Nothing Then
                For Each r As DataRow In dt.Rows
                    Dim region = New With {.id_region = Nothing, .nombre = Nothing}
                    region.id_region = r("ID_REGION")
                    region.nombre = r("NOMBRE")

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
    Public Shared Function getPais(region As String)
        Dim excepcion As String = ""
        Try
            Dim cls_reserva As New Cls_Reserva()
            Dim dt As DataTable = Nothing
            Dim dt_detalle As DataTable = Nothing
            Dim arraylista As New ArrayList
            Dim serializer As New JavaScriptSerializer
            Dim Usuario As String = HttpContext.Current.User.Identity.Name

            dt = cls_reserva.getPais(region)

            If Not dt Is Nothing Then
                For Each r As DataRow In dt.Rows
                    Dim pais = New With {.id_region = Nothing, .nombre = Nothing, .id_pais = Nothing}
                    pais.id_region = r("ID_REGION")
                    pais.nombre = r("NOMBRE")
                    pais.id_pais = r("ID_PAIS")

                    arraylista.Add(pais)
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
    Public Shared Function getAeropuerto(pais As String)
        Dim excepcion As String = ""
        Try
            Dim cls_reserva As New Cls_Reserva()
            Dim dt As DataTable = Nothing
            Dim dt_detalle As DataTable = Nothing
            Dim arraylista As New ArrayList
            Dim serializer As New JavaScriptSerializer
            Dim Usuario As String = HttpContext.Current.User.Identity.Name

            dt = cls_reserva.getAeropuerto(pais)

            If Not dt Is Nothing Then
                For Each r As DataRow In dt.Rows
                    Dim aeropuerto = New With {.id_aeropuerto = Nothing, .id_pais = Nothing, .direccion = Nothing, .nombre = Nothing}
                    aeropuerto.id_aeropuerto = r("ID_AEROPUERTO")
                    aeropuerto.id_pais = r("ID_PAIS")
                    aeropuerto.direccion = r("DIRECCION")
                    aeropuerto.nombre = r("NOMBRE")

                    arraylista.Add(aeropuerto)
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
    Public Shared Function getClase()
        Dim excepcion As String = ""
        Try
            Dim cls_reserva As New Cls_Reserva()
            Dim dt As DataTable = Nothing
            Dim dt_detalle As DataTable = Nothing
            Dim arraylista As New ArrayList
            Dim serializer As New JavaScriptSerializer
            Dim Usuario As String = HttpContext.Current.User.Identity.Name

            dt = cls_reserva.getClase()

            If Not dt Is Nothing Then
                For Each r As DataRow In dt.Rows
                    Dim clase = New With {.id_clase = Nothing, .nombre = Nothing}
                    clase.id_clase = r("ID_CLASE")
                    clase.nombre = r("NOMBRE")

                    arraylista.Add(clase)
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
    Public Shared Function getVuelos(origen As String, destino As String)
        Dim excepcion As String = ""
        Try
            Dim cls_reserva As New Cls_Reserva()
            Dim dt As DataTable = Nothing
            Dim dt_detalle As DataTable = Nothing
            Dim arraylista As New ArrayList
            Dim serializer As New JavaScriptSerializer
            Dim Usuario As String = HttpContext.Current.User.Identity.Name

            dt = cls_reserva.getVuelos(origen, destino)

            If Not dt Is Nothing Then
                For Each r As DataRow In dt.Rows
                    Dim vuelo = New With {.id_vuelo = Nothing, .fecha = Nothing, .id_destino = Nothing, .destino = Nothing,
                        .id_origen = Nothing, .origen = Nothing, .duracion = Nothing, .escala = Nothing, .id_avion = Nothing,
                        .avion = Nothing}
                    vuelo.id_vuelo = r("ID_VUELO")
                    vuelo.fecha = r("FECHA")
                    vuelo.id_destino = r("ID_DESTINO")
                    vuelo.destino = r("DESTINO")
                    vuelo.id_origen = r("ID_ORIGEN")
                    vuelo.origen = r("ORIGEN")
                    vuelo.duracion = r("DURACION")
                    vuelo.escala = r("ESCALA")
                    vuelo.id_avion = r("ID_AVION")
                    vuelo.avion = r("AVION")

                    arraylista.Add(vuelo)
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
    Public Shared Function reservarBoleto(pasajero As Object, vuelo As String, origen As String, destino As String, clase As String)
        Dim excepcion As String = ""
        Try
            Dim cls_reserva As New Cls_Reserva()
            Dim res As Integer = 0
            Dim dt_detalle As DataTable = Nothing
            Dim arraylista As New ArrayList
            Dim serializer As New JavaScriptSerializer
            Dim Usuario As String = HttpContext.Current.User.Identity.Name

            Res = cls_reserva.setReserva(pasajero, "", Usuario, vuelo, clase)

            Dim variable = res
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

End Class