/* global $ */

function adjuster() {
    $(window).on("resize", onResize);
    
    activateMobileMenu();
}

function onResize() {
    try {
        
    } catch(err) {
        console.log(err);
    }
}

function activateMobileMenu() {
    $(".mobile-menu-trigger").on("click", toggleMobileMenu);
}

function toggleMobileMenu() {
    if ($(".topnav").hasClass("active")) {
        $(".topnav").removeClass("active");
    } else {
        $(".topnav").addClass("active");
    }
}

$(document).ready(adjuster);
// $(window).on("load", adjuster);