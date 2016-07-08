$(document).ready(function() {
	
	$('.menu li a').each(function () {
		if (this.href == location.href) {
			this.className = "active";
		}
	});
	
	
})