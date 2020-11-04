

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
        SQL = "SELECT ID_PAIS, NOMBRE, ID_REGION FROM PROYECTO2020.dbo.PAISES WHERE ID_REGION=@ID_REGION ORDER BY NOMBRE"
        comando.CommandText = SQL
        comando.Parameters.AddWithValue("@ID_REGION", region)
        dt = opeDB.BDget_datos_sql(comando)

        Return dt
    End Function

    Public Function getAeropuerto(pais As String)
        Dim SQL As String = ""
        Dim comando As New SqlCommand()
        Dim dt As DataTable
        SQL = "SELECT ID_AEROPUERTO,ID_PAIS,DIRECCION, NOMBRE FROM PROYECTO2020.dbo.AEROPUERTOS WHERE ID_PAIS=@PAIS ORDER BY NOMBRE"

        comando.CommandText = SQL
        comando.Parameters.AddWithValue("@PAIS", pais)

        dt = opeDB.BDget_datos_sql(comando)

        Return dt
    End Function

    Public Function setReserva(pasajero As Object, asiento As String, usuario As String, vuelo As String, clase As String)
        Dim SQL As String = ""
        Dim SQLI As String = ""
        Dim comando As New SqlCommand()
        Dim comandoI As New SqlCommand()

        SQLI = "INSERT INTO PROYECTO2020.dbo.PASAJEROS(NOMBRE,APELLIDO,GENERO,FECHA_NACIMIENTO,NACIONALIDAD,ID_TIPO_PASAJERO) " &
                "VALUES(@NOMBRES,@APELLIDOS,@GENERO,@FECHA_NACIMIENTO,@NACIONALIDAD,1); SELECT CAST(SCOPE_IDENTITY() AS INT);"

        comandoI.CommandText = SQLI
        comandoI.Parameters.AddWithValue("@NOMBRES", pasajero.Item("nombres"))
        comandoI.Parameters.AddWithValue("@APELLIDOS", pasajero.Item("apellidos"))
        comandoI.Parameters.AddWithValue("@GENERO", pasajero.Item("genero"))
        comandoI.Parameters.AddWithValue("@FECHA_NACIMIENTO", pasajero.Item("fechaNacimiento"))
        comandoI.Parameters.AddWithValue("@NACIONALIDAD", pasajero.Item("nacionalidad"))

        Dim id_pasajero As Integer = opeDB.BDget_escalar_sql(comandoI)

        SQL = "INSERT INTO PROYECTO2020.dbo.BOLETOS(ASIENTO,ID_USUARIO,ID_VUELO,ID_CLASE,ID_PASAJERO) " &
                "VALUES(@ASIENTO,(SELECT ID_USUARIO FROM USUARIOS WHERE NOMBRE_USUARIO=@USUARIO),@ID_VUELO,@ID_CLASE,@ID_PASAJERO)"

        comando.CommandText = SQL
        comando.Parameters.AddWithValue("@USUARIO", usuario)
        comando.Parameters.AddWithValue("@ID_PASAJERO", id_pasajero)
        comando.Parameters.AddWithValue("@ID_CLASE", clase)
        comando.Parameters.AddWithValue("@ID_VUELO", vuelo)
        comando.Parameters.AddWithValue("@ASIENTO", asiento)



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

    Public Function getVuelos(origen As String, destino As String)
        Dim SQL As String = ""
        Dim comando As New SqlCommand()
        Dim dt As DataTable
        SQL = "SELECT ID_VUELO, " &
                "CONVERT(VARCHAR(12),FECHA,103) + ' ' + CONVERT(VARCHAR(10),FECHA,108) FECHA, " &
                "ID_DESTINO, " &
                "AD.NOMBRE DESTINO, " &
                "NUMERO_ESCALA ESCALA, " &
                "ID_ORIGEN, " &
                "AO.NOMBRE ORIGEN, " &
                "DURACION, " &
                "V.ID_AVION, " &
                "A.MODELO AVION " &
            "FROM PROYECTO2020.dbo.VUELOS V " &
            "JOIN PROYECTO2020.dbo.AEROPUERTOS AD " &
                "ON V.ID_DESTINO=AD.ID_AEROPUERTO " &
            "JOIN PROYECTO2020.dbo.AEROPUERTOS AO " &
                "ON V.ID_ORIGEN=AO.ID_AEROPUERTO " &
            "JOIN PROYECTO2020.dbo.AVIONES A " &
                "ON A.ID_AVION=V.ID_AVION " &
            "WHERE ID_ORIGEN=@ID_ORIGEN " &
                "AND ID_DESTINO=@ID_DESTINO " &
            "ORDER BY FECHA,ORIGEN,DESTINO "

        comando.CommandText = SQL
        comando.Parameters.AddWithValue("@ID_ORIGEN", origen)
        comando.Parameters.AddWithValue("@ID_DESTINO", destino)

        dt = opeDB.BDget_datos_sql(comando)

        Return dt
    End Function

End Class
