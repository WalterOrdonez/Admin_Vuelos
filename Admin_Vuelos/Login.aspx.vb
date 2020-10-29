Public Class Login
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Session.Add("UsuarioLog", "walter")
        FormsAuthentication.RedirectFromLoginPage("walter", False)


    End Sub



End Class