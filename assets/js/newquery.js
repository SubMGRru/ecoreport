$("#blocked").hide();
$("#queryform").hide();
$("#about_incident").hide();
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
  $("#waiting").hide();
  $("#queryform").show();
  
}

function error({ message }) {
  console.log(message);
  $("#waiting").hide();
  $("#blocked").show();

}

$(document).ready(function(){
  //You might want to do if check to see if localstorage set for theImage here
  var img = new Image();                
  img.src = localStorage.theImage;

  $('.imagearea').html(img);

  $("body").on("change",".classhere",function(){
      //Equivalent of getElementById
      var fileInput = $(this)[0];//returns a HTML DOM object by putting the [0] since it's really an associative array.
      var file = fileInput.files[0]; //there is only '1' file since they are not multiple type.

      var reader = new FileReader();
      reader.onload = function(e) {
           // Create a new image.
           var img = new Image();

           img.src = reader.result;
           localStorage.theImage = reader.result; //stores the image to localStorage
           $(".imagearea").html(img);
           $("#letsupload").hide();
           $("#about_incident").show();
       }

       reader.readAsDataURL(file);//attempts to read the file in question.
    });
});
