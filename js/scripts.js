$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var number = $("#userInput").val();
    var length = parseInt($("#userInput").val());
    if(number!=0){
      var input = number.split("");
      for (var index = 0; index < length; index++) {
        if(input[index]==="1"){
        input[index]=("boop");
        }else if (input[index]%3===0) {
          input[index]=("Sorry I cant do that");
        }
        $("#results").append(input);
      }
    }else{
      input=("beep");
    }

  });
});
