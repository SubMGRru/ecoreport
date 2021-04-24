blockname = "required.js: ";
if (localStorage.getItem("tution") === null || localStorage.getItem("tution") != 'passed') {
	console.log(blockname + 'будет выполнена переадресация.');
	window.location.href = "tution.html";
} else{
	console.log(blockname + 'задачи завершены.');
}