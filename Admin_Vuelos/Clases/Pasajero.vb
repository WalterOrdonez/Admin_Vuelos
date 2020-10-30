Public Class Pasajero
    Private _id_pasajero As Integer
    Public Property Id_Pasajero() As Integer
        Get
            Return _id_pasajero
        End Get
        Set(ByVal value As Integer)
            _id_pasajero = value
        End Set
    End Property

    Private _nombre As String
    Public Property Nombre() As String
        Get
            Return _nombre
        End Get
        Set(ByVal value As String)
            _nombre = value
        End Set
    End Property
    Private _apellido As String
    Public Property Apellido() As String
        Get
            Return _apellido
        End Get
        Set(ByVal value As String)
            _apellido = value
        End Set
    End Property
    Private _email As String
    Public Property Email() As String
        Get
            Return _email
        End Get
        Set(ByVal value As String)
            _email = value
        End Set
    End Property
    Private _genero As String
    Public Property Genero() As String
        Get
            Return _genero
        End Get
        Set(ByVal value As String)
            _genero = value
        End Set
    End Property
    Private _fechaNac As String
    Public Property FechaNacimiento() As String
        Get
            Return _fechaNac
        End Get
        Set(ByVal value As String)
            _fechaNac = value
        End Set
    End Property
    Private _nacionalidad As String
    Public Property Nacionalidad() As String
        Get
            Return _nacionalidad
        End Get
        Set(ByVal value As String)
            _nacionalidad = value
        End Set
    End Property
    Private _telefono As String
    Public Property Telefono() As String
        Get
            Return _telefono
        End Get
        Set(ByVal value As String)
            _telefono = value
        End Set
    End Property
    Private _id_tipoPasajero As Integer
    Public Property id_TipoPasajero() As String
        Get
            Return _id_tipoPasajero
        End Get
        Set(ByVal value As String)
            _id_tipoPasajero = value
        End Set
    End Property
End Class
