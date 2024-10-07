document.addEventListener("DOMContentLoaded", function(event) {
    
    const containerPassword = document.getElementById("container-password"); 
	containerPassword.addEventListener('click', (e) => {
	    let checkboxShowPassword = document.getElementById('g_cu_mot_pas-show');
		let passwordInput = document.getElementById('g_cu_mot_pas');
		if (checkboxShowPassword.checked) {
			passwordInput.type = "text";
		} else {
			passwordInput.type = "password";
		}
	})

});