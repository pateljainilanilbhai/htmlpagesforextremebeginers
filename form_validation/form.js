function validateForm() {
	var email = document.signUp.mail;
	var mobileNumber = document.signUp.Mobile_Number;
	var dontCall = document.signUp.doNotCall;

	if (email.value.indexOf(".", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address containing '.'");
        email.focus();
        return false;
    }

	
	if ((dontCall.checked == false) && (mobileNumber.value == ""))
		{
			window.alert("Please enter your telephone number.");
			mobileNumber.focus();
			return false;
		}
}

function passwordValidate() {
	var pass1 = document.getElementById("password1").value;
	var pass2 = document.getElementById("password2").value;

	if (pass2.length < 8 ) {
		alert("Password to small.");
	}

	if (pass1 != pass2) {
		alert("Passwords do not match.");
		return false;
	}
	return true;
}

function enableDisableCall(chkbx) {
	if(chkbx.checked == true) {
		document.signUp.Mobile_Number.disabled = true;
	}
	else {
		document.signUp.Mobile_Number.disabled = false;
	}
}