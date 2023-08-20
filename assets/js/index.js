function showabout() {
    $("#about_container").css("display", "inherit");
    $("#about_container").addClass("animate__slideInLeft animate__animated");
    setTimeout(function () {
        $("#about_container").removeClass("animate__slideInLeft animate__animated");
    }, 400);
}

function closeabout() {
    $("#about_container").addClass("animate__slideOutLeft animate__animated");
    setTimeout(function () {
        $("#about_container").removeClass("animate__slideOutLeft animate__animated");
        $("#about_container").css("display", "none");
    }, 400);
}

function showskill() {
    $("#skill_container").css("display", "inherit");
    $("#skill_container").addClass("animate__slideInLeft animate__animated");
    setTimeout(function () {
        $("#skill_container").removeClass("animate__slideInLeft animate__animated");
    }, 400);
}

function closeskill() {
    $("#skill_container").addClass("animate__slideOutLeft animate__animated");
    setTimeout(function () {
        $("#skill_container").removeClass("animate__slideOutLeft animate__animated");
        $("#skill_container").css("display", "none");
    }, 400);
}

// function showblog() {
// 	window.open("https://nikhilpal2705.github.io/blog");
// }

function showwork() {
    $("#work_container").css("display", "inherit");
    $("#work_container").addClass("animate__slideInRight animate__animated");
    setTimeout(function () {
        $("#work_container").removeClass("animate__slideInRight animate__animated");
    }, 400);
}

function closework() {
    $("#work_container").addClass("animate__slideOutRight animate__animated");
    setTimeout(function () {
        $("#work_container").removeClass("animate__slideOutRight animate__animated");
        $("#work_container").css("display", "none");
    }, 400);
}

function showresume() {
    window.open("https://drive.google.com/drive/folders/1ShUGu7phuU3IquAm8sgZ8kkeNOzv5U0_?usp=share_link");
}

function showcontact() {
    $("#contact_container").css("display", "inherit");
    $("#contact_container").addClass("animate__slideInUp animate__animated");
    setTimeout(function () {
        $("#contact_container").removeClass("animate__slideInUp animate__animated");
    }, 400);
}

function closecontact() {
    $("#contact_container").addClass("animate__slideOutDown animate__animated");
    setTimeout(function () {
        $("#contact_container").removeClass("animate__slideOutDown animate__animated");
        $("#contact_container").css("display", "none");
    }, 400);
}
setTimeout(function () {
    $("#loading").addClass("animate__zoomOut animate__animated");
    setTimeout(function () {
        $("#loading").removeClass("animate__zoomOut animate__animated");
        $("#loading").css("display", "none");
    }, 500);
}, 350);