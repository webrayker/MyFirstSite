function confirm() 
{
	var inv = true;
	var form = document.querySelector('.dataform');
	var firstname = document.getElementById('first-name');
	var surname = document.getElementById('surname');
	var patronymic = document.getElementById('patronymic');
	var fields = form.querySelectorAll('.fields');
	var confirmbtn = document.getElementById('confirmbtn');
	// Remove validation
	var errors = form.querySelectorAll('.error');
	for (var i = 0; i < errors.length; i++)
	{
		errors[i].remove();
  	}
  	for (var i = 0; i < fields.length; i++)
	{
  		// Check field presence
  		if (!fields[i].value) 
		{
			inv = false;
			console.log('field is blank', fields[i]);
			form[i].parentElement.insertBefore(SetError(fields[i], 'Поле не заполнено'), fields[i]);
			continue;
    	}
    	// Check characters
		if(fields[i].value.match(/[^A-Za-z]+/))
		{
			inv = false;
			console.log('сontains invalid character', fields[i]);
			form[i].parentElement.insertBefore(SetError(fields[i], 'Недопустимый символ'), fields[i]);
			continue;
		}
	}
	return inv;
}
function SetError(field, str) 
{
	var error = document.createElement('div');
	error.className = 'error';
	error.style.color = 'red';
	error.innerHTML = str;
	return error;
}