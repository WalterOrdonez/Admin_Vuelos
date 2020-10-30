

Imports System.Data.SqlClient

Public Class Cls_Reserva
    Private opeDB As New Ope_DB()
    Public Function getRegion()
        Dim SQL As String = ""
        Dim comando As New SqlCommand()
        Dim dt As DataTable

        SQL = "SELECT ID_REGION,NOMBRE FROM PROYECTO2020.dbo.REGIONES"
        comando.CommandText = SQL

        dt = opeDB.BDget_datos_sql(comando)

        Return dt
    End Function


    Public Function getPais(region As String)
        Dim SQL As String = ""
        Dim comando As New SqlCommand()
        Dim dt As DataTable
        SQL = "SELECT ID_PAIS, NOMBRE, ID_REGION FROM PROYECTO2020.dbo.PAISES"
        comando.CommandText = SQL

        dt = opeDB.BDget_datos_sql(comando)

        Return dt
    End Function

    Public Function getAeropuerto(pais As String)
        Dim SQL As String = ""
        Dim comando As New SqlCommand()
        Dim dt As DataTable
        SQL = "SELECT ID_AEROPUERTO,ID_PAIS,DIRECCION, NOMBRE FROM PROYECTO2020.dbo.AEROPUERTOS"

        comando.CommandText = SQL

        dt = opeDB.BDget_datos_sql(comando)

        Return dt
    End Function

    Public Function setReserva(asiento As String, usuario As String, id_clase As String, id_pasajero As Pasajero)
        Dim SQL As String = ""
        Dim comando As New SqlCommand()

        SQL = "INSERT INTO PROYECTO2020.dbo.BOLETOS(ASIENTO,ID_USUARIO,ID_VUELO,ID_CLASE,ID_PASAJERO) " &
                "VALUES(@ASIENTO,(SELECT ID_USUARIOS FROM USUARIOS WHERE NOMBRE_USUARIO=@USUARIO),@ID_VUELO,@ID_CLASE,@ID_PASAJERO)"

        comando.CommandText = SQL
        comando.Parameters.AddWithValue("@USUARIO", usuario)
        comando.Parameters.AddWithValue("@ID_PASAJERO", id_pasajero)
        comando.Parameters.AddWithValue("@ID_CLASE", id_clase)
        comando.Parameters.AddWithValue("@ID_PASAJERO", id_pasajero)


        Return opeDB.BDset_insert_sql(comando)
    End Function

    Public Function getClase()
        Dim SQL As String = ""
        Dim comando As New SqlCommand()
        Dim dt As DataTable
        SQL = "SELECT ID_CLASE,NOMBRE FROM PROYECTO2020.dbo.CLASES"

        comando.CommandText = SQL

        dt = opeDB.BDget_datos_sql(comando)

        Return dt
    End Function
End Class
