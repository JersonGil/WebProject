/* Init the mobile menu */
var clase = false;
$(function() {
  $(".fa").click(function(event) {
    if(clase === false){
	event.stopPropagation();
	$("#nave").addClass("open");
	clase = true;
	}else{
	console.log("hola-->"+clase+"<--");	
	event.preventDefault();
	$("#nave").removeClass("open");
	clase = false;	
	}
    $("#nave .menu-list").toggleClass("active");
  });
});