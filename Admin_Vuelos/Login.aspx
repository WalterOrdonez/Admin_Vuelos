<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Login.aspx.vb" Inherits="Admin_Vuelos.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Login</title>
    <script src="Scripts/bootstrap.js"></script>
    <script src="Scripts/jquery-3.4.1.js"></script>

    <link href="Content/style.css" rel="stylesheet" />
</head>
<body>
        <img class="wave" src="img/wave.png"/>
	    <div class="container">
		    <div class="img">
			    <img src="img/airplane.png"/>
		    </div>
		    <div class="login-content">
			    <form id="Form1" runat="server">
				    <img src="img/avatar.svg"/>
				    <h2 class="title">Bienvenido</h2>
           		    <div class="input-div one">
           		       <div class="i">
           		   		    <i class="fas fa-user"></i>
           		       </div>
           		       <div class="div">
           		   		    <h5>Nombre de Usuario</h5>
           		   		    <input type="text" class="input"/>
           		       </div>
           		    </div>
           		    <div class="input-div pass">
           		       <div class="i"> 
           		    	    <i class="fas fa-lock"></i>
           		       </div>
           		       <div class="div">
           		    	    <h5>Contraseña</h5>
           		    	    <input type="password" class="input"/>
            	       </div>
            	    </div>
            	    <a href="#">¿Olvidaste la Contraseña?</a>
            	    <input type="submit" class="btn" value="Inicia Sesión"/>
                  <input type="submit" class="btn" value="Registrate"/>

                </form>
            </div>
        </div>
</body>
</html>
