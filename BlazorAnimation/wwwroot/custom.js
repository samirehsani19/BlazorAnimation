var container;
var pagination;

// getting pegination class name
//function GetPagination(className) {
//    pagination = className;
//    SwipeImages();
//}

//Getting container class name
function GetContainer(className) {
    container = className;
    pagination = "swiper-pagination"; // accessing by class name 
    SwipeImages();
}


//swiping image
function SwipeImages() {

    var swiper = new Swiper("." + container, {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 50,
            shadowScale: 1,
        },
        pagination: {
            el: "." + pagination,
        },
    });
}