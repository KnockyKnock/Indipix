$(document).ready(function() {
	
	$(".menu li a").each(function () {
		if (this.href == location.href) {
			this.className = "active";
		}
	});
	
	$(".main .image-phone").click(function () {
		$(this).toggleClass("small");
		// $(".main-content, .form").toggleClass("wide");
	});
	
	
})