blockname = "tution.js: ";
console.log(blockname + 'приветствуем пользователя на обучении.');
$("#tution2").hide();
$("#tution3").hide();
$("#tution4").hide();

function goto2(){
	$("#tution1").hide();
	$("#tution2").show();
}
function goto3(){
	$("#tution2").hide();
	$("#tution3").show();
}
function goto4(){
	$("#tution3").hide();
	$("#tution4").show();
}

function complete_tution(){
	console.log(blockname + 'обучение пройдено, записываем..');
	localStorage.setItem('tution', 'passed');
	console.log(blockname + 'покидаем скрипт, переадресация в приложение..');
	window.location.href = "app.html";
}
