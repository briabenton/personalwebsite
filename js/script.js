$(function(){
	$("a.navBar").click(function(e){
		console.log("it clicked");
		e.preventDefault();
		var $name = $(this).attr("href"),
			name = $name.replace("#", ""),
			selectorString = "a[name='" + name + "']",
			navToElement = $(selectorString),
			navToElementOffset = navToElement.offset();
		console.log(selectorString);

		$('html, body').animate({
	        scrollTop: navToElementOffset.top
	    }, 500);
	});
})