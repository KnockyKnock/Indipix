$(document).ready(function() {
	$('.menu li').each(function () {
		if (this.getElementsByTagName("a")[0].href == location.href) {
			this.className = "active";
		}
	});
})