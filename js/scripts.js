$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var number = $("#userInput").val();
    if(number!=0){
      var input = number.split("");
      for (var index = 0; index < input.length; index++) {
        if(input[index]==="1"){
        alert("boop");
      }else{

      }
    }
    }else{
  alert("beep");
}
  });
});
