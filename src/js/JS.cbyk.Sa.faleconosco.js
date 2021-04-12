




function ClientCreate() {

	var cl_name = $("#cl_name").val();
	var cl_email = $("#cl_email").val();
	var cl_description = $("#cl_description").val();

	var cl_json = {
		"email": cl_email,
		"message": cl_description,
		"name": cl_name
	};

	var cl_url = "/api/dataentities/FC/documents/";

	$.ajax({
		headers: {
			"Accept": "application/vnd.vtex.ds.v10+json",
			"Content-Type": "application/json"
		},
		data: JSON.stringify(cl_json),
		type: 'PATCH',
		url: cl_url,
		success: function (data, textStatus, xhr) {
			console.log(data);
			alert("Formulário enviado!")
			
		},
		error: function (data) {
			console.log(data);
			alert("Erro no envio de formulário")
			
		}
	});
}



function IsEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

function FormValidate() {
	var isFormValidate = true;

	if ($("#cl_name").val() == "") {
		isFormValidate = false;
		$("#cl_name").focus();
	}

	if ((isFormValidate) && ($("#cl_email").val() == "")) {
		isFormValidate = false;
		$("#cl_email").focus();
	}
	if ((isFormValidate) && (!IsEmail($("#cl_email").val()))) {
		isFormValidate = false;
		$("#cl_email").val("");
		$("#cl_email").focus();
	}
	
	if ((isFormValidate) && ($("#cl_description").val() == "")) {
		isFormValidate = false;
		$("#cl_description").focus();
	}

	if (isFormValidate) {
	
		
		ClientCreate();
	} else {
		alert("Formulário preenchido incorretamente! Revise seus dados")
	}

	return false;
}


$("#enviarform").click(function(){
	FormValidate()
})
