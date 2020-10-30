
Imports System.Data.SqlClient

Public Class Ope_DB
    Private connexion As New Conexion()
    Public BD_RPI As String = String.Empty

    ''' <summary>
    ''' Obtener la informacion de una tabla de datos
    ''' </summary>
    ''' <param name="comando"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>

    Public Function BDget_datos_sql(ByVal comando As SqlCommand) As DataTable
        Dim tabla As DataTable = New DataTable()
        Dim resultado As String = String.Empty
        Dim conexion As SqlConnection = connexion.Conectar()

        Try
            If conexion.State <> System.Data.ConnectionState.Open Then conexion.Open()
            Dim comand As SqlCommand = New SqlCommand()
            comand = comando
            comand.Connection = conexion
            Dim adap As SqlDataAdapter = New SqlDataAdapter(comand)
            adap.Fill(tabla)
        Catch ex As Exception
            tabla = Nothing
            Throw ex
        Finally
            If conexion.State <> System.Data.ConnectionState.Closed Then conexion.Close()
        End Try

        Return tabla
    End Function


    ''' <summary>
    ''' Obtener la informacion de una unica columna
    ''' </summary>
    ''' <param name="comando"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>

    Public Function BDget_escalar_sql_object(ByVal comando As SqlCommand) As Object
        Dim element As Object
        Dim conexion As SqlConnection = connexion.Conectar()

        Try
            If conexion.State <> System.Data.ConnectionState.Open Then conexion.Open()
            Dim comand As SqlCommand = New SqlCommand()
            comand = comando
            comand.Connection = conexion
            element = comando.ExecuteScalar()
        Catch ex As Exception
            Throw ex
        Finally
            If conexion.State <> System.Data.ConnectionState.Closed Then conexion.Close()
        End Try

        Return element
    End Function



    ''' <summary>
    ''' Obtener la informacion de una unica columna
    ''' </summary>
    ''' <param name="comando"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function BDget_escalar_sql(ByVal comando As SqlCommand) As String
        Dim resultado As String = String.Empty
        Dim conexion As SqlConnection = connexion.Conectar()

        Try
            If conexion.State <> System.Data.ConnectionState.Open Then conexion.Open()
            Dim comand As SqlCommand = New SqlCommand()
            comand = comando
            comand.Connection = conexion
            Dim element As Object
            element = comando.ExecuteScalar()
            resultado = (If(element Is Nothing, Nothing, element.ToString()))
        Catch ex As Exception
            resultado = Nothing
            Throw ex
        Finally
            If conexion.State <> System.Data.ConnectionState.Closed Then conexion.Close()
        End Try

        Return resultado
    End Function



    ''' <summary>
    ''' Inserta en la base de datos, devuelve la cantidad de registros - Operaciones basicas ejecutadas en base de datos.
    ''' </summary>
    ''' <param name="comando"></param>
    ''' <returns></returns>
    ''' <remarks></remarks>
    Public Function BDset_insert_sql(ByVal comando As SqlCommand) As Integer
        Dim conexion As SqlConnection = connexion.Conectar()
        Dim bandera As Integer = 0

        Try
            If conexion.State <> System.Data.ConnectionState.Open Then conexion.Open()
            Dim command As SqlCommand = New SqlCommand()
            command = comando
            command.Connection = conexion
            bandera = command.ExecuteNonQuery()
        Catch ex As Exception
            bandera = 0
            Throw ex
        Finally
            If conexion.State <> System.Data.ConnectionState.Closed Then conexion.Close()
        End Try

        Return bandera
    End Function
End Class
