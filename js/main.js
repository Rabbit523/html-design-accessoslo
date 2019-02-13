var Controllers = {};

Controllers.carouselTab = function () {
    var content, pageWidth, current, totalPages;

    var navigateBack = function () {
        if (current > 0) {
            current--;
            if (current != 0) {
                $(".carousel-wrapper .navigation .next").removeClass("hidden").addClass("show");
            } else if (current == 0) {
                $(".carousel-wrapper .navigation .next").removeClass("hidden").addClass("show");
                //$(".carousel-wrapper .navigation .prev").addClass("hidden");
            }
            navigate();

        }
    };

    var navigateNext = function () {
        if (current < totalPages - 1) {
            current++;
            if (current >= 0) {
                $(".carousel-wrapper .navigation .prev").removeClass("hidden").addClass("show");
                console.log(totalPages, current);
                if (current == totalPages - 1) {
                    $(".carousel-wrapper .navigation .next").addClass("hidden");
                }
            }
            navigate();
        }
    };

    var navigate = function () {
        content.css("left", -current * pageWidth);
    };

    var initNavigation = function () {
        current = 0;
        $(".carousel-wrapper .navigation .prev").click(navigateBack);
        $(".carousel-wrapper .navigation .next").click(navigateNext);
    };

    var init = function () {
        var itemsPerPage,widthItems;

        widthItems = $(".nav-tabs li").outerWidth();
        pageWidth = $(".carousel-tabs").outerWidth();
        itemsPerPage = Math.round(pageWidth / widthItems);
        content = $(".carousel-tabs .nav-tabs");
        totalPages = $(".nav-tabs li").length / itemsPerPage;

        content.css("width", totalPages * pageWidth);
        initNavigation();
        navigate();
    };
    init();
};

Controllers.MakeNewRequest = function(){
    var init = function(){
        new AccessOslo.Controllers.carouselTab();
    };  
    init();
};

var AccessOslo = {
    Controllers: Controllers
};