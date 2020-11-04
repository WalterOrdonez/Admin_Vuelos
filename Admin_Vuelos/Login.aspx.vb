Imports System.Data.SqlClient
Imports System.Web.Script.Serialization
Imports System.Web.Script.Services
Imports System.Web.Services

Public Class Login
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        'Session.Add("UsuarioLog", "walter")
        'FormsAuthentication.RedirectFromLoginPage("walter", False)


    End Sub

    <WebMethod()>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Shared Function ValidarLogin(usuario As String, pass As String)
        Dim excepcion As String = ""
        Try
            Dim cls_reserva As New Cls_Reserva()
            Dim opeDB As New Ope_DB()
            Dim res As Integer = 0
            Dim dt_detalle As DataTable = Nothing
            Dim arraylista As New ArrayList
            Dim serializer As New JavaScriptSerializer
            'Dim Usuario As String = HttpContext.Current.User.Identity.Name

            Dim SQL As String = ""
            Dim comando As New SqlCommand()

            SQL = "SELECT COUNT(*) FROM PROYECTO2020.dbo.USUARIOS WHERE NOMBRE_USUARIO=@USUARIO AND CONTRASENIA=@PASS "
            comando.CommandText = SQL
            comando.Parameters.AddWithValue("@USUARIO", usuario)
            comando.Parameters.AddWithValue("@PASS", pass)

            res = opeDB.BDget_escalar_sql(comando)

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