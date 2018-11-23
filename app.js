//strikethrough when clicked

$("ul").on("click", "li", function() {
	$(this).toggleClass("clicked");
});

// click on x to delete a todo

$("ul").on("click", "span", function() {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});  
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-arrow-down").click(function(){
	$("input[type='text']").fadeToggle();
});