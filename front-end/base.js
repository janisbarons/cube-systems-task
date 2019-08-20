
function renderErrors(errors) {
	for (var i=0; i < errors.length; i++) {
		$("#errors").append("<div> &raquo; " + errors[i] + "</div>").show();
	};
}

function validateForm() {
	result = true;
	var errors = [];

	if (document.getElementById("full_name").value == '') {
		errors.push("Lauks 'Vārds, Uzvārds' ir jānorāda obligāti");
		result = false;
	}
	if (document.getElementById("phone_number").value == '') {
		errors.push("Lauks 'Telefona numurs' ir jānorāda obligāti");
		result = false;
	}
	if (document.getElementById("message").value == '') {
		errors.push("Lauks 'Ziņojums' ir jānorāda obligāti");
		result = false;
	}

	if (errors[0] == undefined) {
		return true;
	} else {
		renderErrors(errors);
		return false;
	}
}

window.onload = function() {
	null;
}
