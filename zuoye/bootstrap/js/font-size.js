	var wid = document.documentElement.clientWidth
	document.documentElement.style.fontSize = wid / 342 * 100 + "px"
	window.onresize = function() {
		document.location.reload()
	}