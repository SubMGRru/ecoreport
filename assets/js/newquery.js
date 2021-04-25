$("#blocked").hide();
navigator.geolocation.getCurrentPosition(success, error, {
  // высокая точность
  enableHighAccuracy: true
})

function success({ coords }) {
  // получаем широту и долготу
  const { latitude, longitude } = coords
  const position = [latitude, longitude]
  console.log(position) // [широта, долгота]
  tata.success('Получено', 'Теперь можно прикрепить изображение', {
			  duration: 5000
			});
}

function error({ message }) {
  console.log(message);
  $("#waiting").hide();
  $("#blocked").show();

}