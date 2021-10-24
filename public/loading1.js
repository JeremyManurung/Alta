(function(){
	var preload = document.getElementsByClassName("preload");
	var loading = 0;
	var id = setInterval(frame, 64);

	function frame(){
		if (loading == 100) {
			clearInterval(id);
			window.open("Contact_Us.html", "_self");
		}
		else{
			loading = loading + 1;
		if (loading == 90) {
			preload.style.animation = "fadeout 0.5s ease"
		}
		}
	}
})();