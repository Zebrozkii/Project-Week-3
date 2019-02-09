$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    $("#results").empty(resultArray);
    var length = parseInt($("#userInput").val());
    var resultArray=[];
    if(length=>0){

      for (var index = 0; index <= length; index++) {
        if(index===0){
          resultArray.push("beep!");
        }
        else if(index===1){
          resultArray.push(" boop! ");
        }else if (index%3===1) {
          resultArray.push(" sorry i cant do that Dave ");
        }else {
          resultArray.push(index);
        }
      }
    }else{
    alert("Please Enter a Number!!!");
    }
    $("#results").append(resultArray.join(" "));

  });
});
