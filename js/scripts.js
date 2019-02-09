$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    $("#results").empty(resultArray);
    var length = parseInt($("#userInput").val());
    var resultArray=[];
    if(length=>0){

      for (var index = 0; index <= length; index++) {
        if(index===0){
          resultArray.push("Beep!");
        }
        else if(index%3===0){
          resultArray.push(" Sorry Dave i cant do that! ");
        }else if (index===1|| index%10==0) {
          resultArray.push(" Boop!!");
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
