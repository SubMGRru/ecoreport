function lets_start_auth(){
	console.log('processing.');
	$.post('https://api.sllc.cloud/ecoreport/isRegistered.php', {email: $("#email").val()}, function(data){
	alert(data);
});
}