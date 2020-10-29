Imports System.Data.Odbc

Public Class Cls_Reserva
    Private opeDB As New Ope_DB()
    Public Function getRegion()
        Dim SQL As String = ""
        Dim comando As New OdbcCommand()
        Dim dt As DataTable

        SQL = "SELECT ID_REGION,NOMBRE FROM PROYECTO2020.REGIONES"
        comando.CommandText = SQL

        dt = opeDB.BDget_datos_sql(comando)

        Return dt
    End Function


    Public Function getPais(region As String)
        Dim SQL As String = ""
        Dim comando As New OdbcCommand()
        Dim dt As DataTable
        SQL = "SELECT ID_PAIS, NOMBRE, ID_REGION FROM PROYECTO2020.PAISES"
        comando.CommandText = SQL

        dt = opeDB.BDget_datos_sql(comando)

        Return dt
    End Function

    Public Function getAeropuerto(pais As String)
        Dim SQL As String = ""
        Dim comando As New OdbcCommand()
        Dim dt As DataTable
        SQL = "SELECT ID_AEROPUERTO,ID_PAIS,DIRECCION, NOMBRE FROM PROYECTO2020.AEROPUERTO"

        comando.CommandText = SQL

        dt = opeDB.BDget_datos_sql(comando)

        Return dt
    End Function

    Public Function setReserva()
        Dim SQL As String = ""
        SQL = "INSERT INTO PROYECTO2020.BOLETOS(ID_BOLETO,ASIENTO,ID_USUARIO,ID_VUELO,ID_CLASE,ID_PASAJERO) " &
                "VALUES((SELECT MAX(ID_BOLETO)+1 FROM PROYECTO2020.BOLETOS),@ASIENTO,())"


    End Function

    Public Function getClase()
        Dim SQL As String = ""
        Dim comando As New OdbcCommand()
        Dim dt As DataTable
        SQL = "SELECT ID_CLASE,NOMBRE FROM PROYECTO2020.CLASES"

        comando.CommandText = SQL

        dt = opeDB.BDget_datos_sql(comando)

        Return dt
    End Function
End Class
