$(function() {
  $("form").submit(function(event){
    var countBy = parseInt($("#number1").val());
    var countTo = parseInt($("#number2").val());

    var values =[];
    for (var i = countBy; i <= countTo; i += countBy) {
     values.push(i);
   };
  // console.log(values);
  $(".result").text(values);
    event.preventDefault();
  });

});
