$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var length = parseInt($("#userInput").val());
    var resultArray=[];
    if(length!=0){
      for (var index = 1; index <= length; index++) {
        if(index===1){
          resultArray.push(" boop ");
        }else if (index%3===0) {
          resultArray.push(" sorry i cant do that ");
        }else {
          resultArray.push(index);
        }
      }
    }else{
      resultArray=("beep");
    }
    $("#results").append(resultArray.join(" "));

  });
});
