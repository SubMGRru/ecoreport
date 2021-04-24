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
		$("#regpassword").show();
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
    data:{email:localStorage.getItem("email"),password:$("#password").val()},
	success: function(data){
		alert(data);
	}
});
}