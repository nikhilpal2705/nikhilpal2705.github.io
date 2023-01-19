function showabout() {
	$("#about_container").css("display", "inherit");
	$("#about_container").addClass("animated slideInLeft");
	setTimeout(function() {
		$("#about_container").removeClass("animated slideInLeft");
	}, 400);
}

function closeabout() {
	$("#about_container").addClass("animated slideOutLeft");
	setTimeout(function() {
		$("#about_container").removeClass("animated slideOutLeft");
		$("#about_container").css("display", "none");
	}, 400);
}

function showblog() {
	window.open("blog.html");
}

function showwork() {
	$("#work_container").css("display", "inherit");
	$("#work_container").addClass("animated slideInRight");
	setTimeout(function() {
		$("#work_container").removeClass("animated slideInRight");
	}, 400);
}

function closework() {
	$("#work_container").addClass("animated slideOutRight");
	setTimeout(function() {
		$("#work_container").removeClass("animated slideOutRight");
		$("#work_container").css("display", "none");
	}, 400);
}

function showresume() {
	window.open("https://drive.google.com/");
}

function showcontact() {
	$("#contact_container").css("display", "inherit");
	$("#contact_container").addClass("animated slideInUp");
	setTimeout(function() {
		$("#contact_container").removeClass("animated slideInUp");
	}, 400);
}

function closecontact() {
	$("#contact_container").addClass("animated slideOutDown");
	setTimeout(function() {
		$("#contact_container").removeClass("animated slideOutDown");
		$("#contact_container").css("display", "none");
	}, 400);
}
setTimeout(function() {
	$("#loading").addClass("animated zoomOut");
	setTimeout(function() {
		$("#loading").removeClass("animated zoomOut");
		$("#loading").css("display", "none");
	}, 500);
}, 350);
