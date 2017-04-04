$(document).ready(function() {

$("#left").click(function(){
	var pno= $("#photoNo").val();
	if(pno!=1)
		pno--;
	else
		pno=7;
	
	var desc="top "+pno+" wonder of the world";
	var imgno= pno+".jpg";
	//alert(imgno);
	$("span.desc").html(desc);
	
	$("#photoNo").val(pno);
	$("#photo").attr("src", imgno );
	
});



$("#right").click(function(){
	var pno= $("#photoNo").val();
	if(pno!=7)
		pno++;
	else
		pno=1;
	var desc="top "+pno+" wonder of the world";
	var imgno= pno+".jpg";
	//alert(imgno);
	$("span.desc").html(desc);
	
	//alert(imgno);
	$("#photoNo").val(pno);
	$("#photo").attr("src", imgno );
});



$("#b1").click(function() {
	$("#photo").attr("src", "1.jpg" );
	$("#photoNo").val("1");
	$("span.desc").html("top 1 wonder of the world");
});

$("#b2").click(function() {
	$("#photo").attr("src", "2.jpg" );
	$("#photoNo").val("2");
	$("span.desc").html("top 2 wonder of the world");
});


$("#b3").click(function() {
	$("#photo").attr("src", "3.jpg" );
	$("#photoNo").val("3");
	$("span.desc").html("top 3 wonder of the world");
});

$("#b4").click(function() {
	$("#photo").attr("src", "4.jpg" );
	$("#photoNo").val("4");
	$("span.desc").html("top 4 wonder of the world");
});

$("#b5").click(function() {
	$("#photo").attr("src", "5.jpg" );
	$("#photoNo").val("5");
	$("span.desc").html("top 5 wonder of the world");
});

$("#b6").click(function() {
	$("#photo").attr("src", "6.jpg" );
	$("#photoNo").val("6");
	$("span.desc").html("top 6 wonder of the world");
});

$("#b7").click(function() {
	$("#photo").attr("src", "7.jpg" );
	$("#photoNo").val("7");
	$("span.desc").html("top 7 wonder of the world");
});





});
