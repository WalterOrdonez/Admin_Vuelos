﻿

Imports System.Data.SqlClient

Public Class Conexion
    Dim oraDb As String = "Server = LAPTOP-1ED0HQP6\SQLEXPRESS;Database=PROYECTO2020;User Id=SA;Password=1234;"

    Dim conn As SqlConnection
    Public Function Conectar()
        Try
            conn = New SqlConnection(oraDb)
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
