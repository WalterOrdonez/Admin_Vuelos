Imports System.Data.SqlClient
Public Class Cls_Vuelo
    Private opeDB As New Ope_DB()
    Public Function guardaVuelo(fecha As String, destino As Integer, escala As Integer, origen As Integer, duracion As Integer, avion As Integer)
        Dim SQL As String = ""
        Dim comando As New SqlCommand()
        Dim result As Integer

        SQL = "INSERT INTO [PROYECTO2020].[dbo].[VUELOS]([FECHA],[ID_DESTINO],[NUMERO_ESCALA],[ID_ORIGEN],[DURACION],[ID_AVION])" &
            "VALUES (@FECHA,@DESTINO,@ESCALA,@ORIGEN,@DURACION,@AVION)"
        comando.CommandText = SQL
        comando.Parameters.AddWithValue("@FECHA", fecha)
        comando.Parameters.AddWithValue("@DESTINO", destino)
        comando.Parameters.AddWithValue("@ESCALA", escala)
        comando.Parameters.AddWithValue("@ORIGEN", origen)
        comando.Parameters.AddWithValue("@DURACION", duracion)
        comando.Parameters.AddWithValue("@AVION", avion)

        result = opeDB.BDset_insert_sql(comando)

        Return result
    End Function

    Friend Function getAvion() As DataTable
        Dim SQL As String = ""
        Dim comando As New SqlCommand()
        Dim dt As DataTable

        SQL = "SELECT ID_AVION,MODELO FROM PROYECTO2020.dbo.AVIONES"
        comando.CommandText = SQL

        dt = opeDB.BDget_datos_sql(comando)

        Return dt
    End Function
End Class
