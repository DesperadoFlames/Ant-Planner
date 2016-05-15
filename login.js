var emailValid = false;
var passwordValid = false;

function validateEmail() {
	var emailValidation = /^\w+@[a-zA-Z0-9_]+?\.[a-zA-Z]{2,3}$/;
	if(!emailValidation.test($('#email')[0].value)) {
		$('#emailWarning').html(" Please enter a valid email address");
		$('#emailWarning').removeClass('validText');
		$('#emailWarning').addClass('invalidText');
		emailValid = false;
	} else {
		$('#emailWarning').html(" Valid email Address");
		$('#emailWarning').removeClass('invalidText');
		$('#emailWarning').addClass('validText');
		emailValid = true;
		// Check if the email already exists. (After setting up database)
	}
}

function validatePassword() {
	var str = $('#password')[0].value;
	if(!(/[0-9]/.test(str) && /[a-zA-Z]/.test(str))){
		$('#passwordWarning').html(" The password should be alphanumeric");
		passwordValid = false;
	} else if (str.length < 6) {
		$('#passwordWarning').html(" The password should contain at least 6 characters");
		passwordValid = false;
	} else if (str.length > 15) {
		$('#passwordWarning').html(" The password should contain at most 15 characters");
		passwordValid = false;
	} else {
		passwordValid = true;
	}
	if(passwordValid){
		$('#passwordWarning').removeClass('invalidText');
		$('#passwordWarning').addClass('validText');
	} else {
		$('#passwordWarning').removeClass('validText');
		$('#passwordWarning').addClass('invalidText');
	}
}

function confirmSubmission() {
	if(emailValid&&passwordValid){
		$('#loginForm')[0].submit();
	}
}

function validate() {
	validateEmail();
	validatePassword();
}

setInterval(validate, 100);