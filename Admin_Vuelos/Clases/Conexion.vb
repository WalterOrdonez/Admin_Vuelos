Imports System.Data.Odbc

Public Class Conexion
    Dim oraDb As String = "Dsn=PROYECTO2020;UID=PROYECTO2020;PWD=1234;DATABASE=ConexioOracle"
    Dim conn As OdbcConnection
    Public Function Conectar()
        Try
            conn = New OdbcConnection With {
                .ConnectionString = oraDb
            }
            conn.Open()
        Catch ex As Exception
            conn.Close()
        End Try
        Return conn
    End Function

    Public Sub Cerrar()
        If Not conn Is Nothing Then
            conn.Close()
        End If
    End Sub
End Class
