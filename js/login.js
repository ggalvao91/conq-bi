function validaLogin() {
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	
	if (email == "teste@conquer.com.br" && password == "123") {
		window.location="cursos.html";
		event.preventDefault();
		}
	else if (email == "" || email == null) {
		return true;
	}
	else if (password == "" || password == null) {
		return true;
	}
	else {
		document.getElementById("error").innerHTML="Login Incorreto!";
		event.preventDefault();
	}
}