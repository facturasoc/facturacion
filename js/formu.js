function verificarPasswords() {
 
    
		
	// Ontenemos los valores de los campos de contraseñas 
    pass1 = document.getElementById('pass1');
    pass2 = document.getElementById('pass2');
	correo1 = document.getElementById('correo1');
    correo2 = document.getElementById('correo2');
	venta = document.getElementById('venta2');
	razon = document.getElementById('razon');
	domicilio = document.getElementById('domi2');
	validar = document.getElementById('validar');
	


if (venta.value == 0){
		
		  // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error5").classList.add("mostrar");
		
		
	
	return false;
	
	}
	else{
		
		document.getElementById("error5").classList.remove("mostrar");
		document.getElementById("ok5").classList.remove("ocultar");
		
		
		
		
	}


if (razon.value == 0){
		
		  // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error4").classList.add("mostrar");
		
		
	
	return false;
	
	}
	else{
		
		document.getElementById("error4").classList.remove("mostrar");
		document.getElementById("ok4").classList.remove("ocultar");
		
		
		
		
	}
 
    // Verificamos si las constraseñas no coinciden 
    if (pass1.value != pass2.value) {
 
        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar");
		
		return false;
	
	}
	
	else if (pass1.value == 0){
		
		
		document.getElementById("error").classList.add("mostrar");
		
		
	
	
	
	
	
	
	}
	
	else {
 
       	pass1.disabled=true;
   		
	   
	 
	 
	 
	   // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");
 
        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.remove("ocultar");
		
	
       
		
		
	
		
	
	   
	}
	   
	 if (domicilio.value == 0){
		
		  // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error3").classList.add("mostrar");
		
		
	return false;
	}
	else{
		
		document.getElementById("error3").classList.remove("mostrar");
		document.getElementById("ok3").classList.remove("ocultar");
		
		
		
		
	
	}  
	   
	  if (correo1.value != correo2.value){  
	   
	   
	    // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error2").classList.add("mostrar");
		
	  }
	  else if (correo1.value == 0){
		
		
		document.getElementById("error2").classList.add("mostrar");
		return false;
	   
	  }
	  
	  else{

;


 

	  document.getElementById("error2").classList.remove("mostrar");
 
        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok2").classList.remove("ocultar");
	  
	  
	   
	   
	   document.getElementById("btnenviar").classList.remove("ocultar");
// Si las contraseñas coinciden ocultamos el mensaje de error
        
		document.getElementById("validar").classList.remove("mostrar");
		
 	
	  

domicilio.disabled=false;	  
razon.disabled=false;

correo2.disabled=false;
correo1.disabled=true;

validar.disabled=true
  
	  
	  
 return true;	

 }
	
	
		
	

   // Verificamos si las constraseñas no coinciden 	
}