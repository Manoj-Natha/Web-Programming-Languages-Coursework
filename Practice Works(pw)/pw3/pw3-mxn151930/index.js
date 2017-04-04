$(document).ready(function() {

$("#loadButton").click(function() {
	
	$.ajax({

		 url: "books.xml",
		 dataType: "xml",
		 success: function(data) {
		 		alert("file is loaded");
		        $(data).find('book').each(function(){
					var title = $(this).find('title').text();
					//var authorslist = $(this).find('author').text();
					var year = $(this).find('year').text();
					var price = $(this).find('price').text();
					var category = $(this).attr("category");
					var authors="";
					$(this).find('author').each(function(){
						authors+=$(this).text()+", ";	
					});

					authors=authors.substr(0, authors.length-2);
					
					var info = '<tr><td>'+ title +'</td><td>' + authors +'</td><td>' + year + '</td><td>' + price +'</td><td>' + category +'</td></tr>';
					$("#books_info").append(info);
		        });
		        
		 },
		 error: function() { alert("error loading file");  }
     });
});



$("#content").append("<h1>Hello</h1>");


});