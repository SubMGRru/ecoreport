$("#loginpassword").hide();
$("#regname").hide();
$("#reglastname").hide();
$("#regpassword").hide();
function lets_start_auth(){
	console.log('processing.');
	$.post('https://api.sllc.cloud/ecoreport/isRegistered.php', {email: $("#email").val()}, function(data){
	localStorage.setItem('email', $("#email").val());
	if(data == 1){
		$("#login").hide();
		$("#loginpassword").show();
		localStorage.setItem('auth_mode', data);
	}else if(data == 0){
		$("#login").hide();
		$("#regname").show();
		localStorage.setItem('auth_mode', data);
	}
});
}

function login(){
	console.log('signing in.');
	$.ajax({
	url:'https://api.sllc.cloud/ecoreport/login.php',
    type:'post',
    xhrFields: { withCredentials: true },
    crossDomain: true,
    data:{username:localStorage.getItem("email"),password:$("#password").val()},
	success: function(data){
		if(data == 1 || data == 2){
			tata.success('Успешно!', 'Вы вошли в свою учетную запись', {
			  duration: 5000
			});
		localStorage.setItem('auth', 'loggedin');
		window.location.href = "app.html";
		}else{
			console.log(data);
			tata.error('Ошибка', 'Неправильный пароль, попробуйте еще раз', {
			  duration: 5000
			});
		}
	}
});
}

if(localStorage.getItem("auth") == 'loggedin'){
	window.location.href = "app.html";
}

function show_reglastname(){
	if($("#firstname").val() != ''){
		$("#regname").hide();
		$("#reglastname").show();
	}else{
		tata.error('Ошибка', 'Введите свое имя, чтобы продолжить', {
			  duration: 5000
			});
	}
}

function show_reglastname(){
	if($("#lastname").val() != ''){
		$("#reglastname").hide();
		$("#regpassword").show();
	}else{
		tata.error('Ошибка', 'Введите свою фамилию, чтобы продолжить', {
			  duration: 5000
			});
	}
}

function register(){
	if($("#regpassword").val() != ''){
		$.ajax({
			url:'https://api.sllc.cloud/ecoreport/register.php',
		    type:'post',
		    xhrFields: { withCredentials: true },
		    crossDomain: true,
		    data:{firstname:localStorage.getItem("firstname"),lastname:$("#lastname").val(),email:localStorage.getItem("email"),password:$("#regpassword").val(),passwordConfirm:$("#regpassword").val()},
			success: function(data){
				alert(data);
			}
		});
	}else{
		tata.error('Ошибка', 'Придумайте пароль, чтобы продолжить', {
			  duration: 5000
			});
	}
}