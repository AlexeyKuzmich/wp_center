
jQuery(document).ready(function($) {

     function sliderHeightDetect() {
      var sliderHeight = $(window).height() - $("header").height() - $("nav").height();
      $(".owl-mainSlider .item").css("height", sliderHeight);
    };


// adaptive menu
function adjustMenu() {
  var ww = $(window).width(),
  $directionItem = $(".direction .item"),
  $scheduleInner = $(".schedule .inner"),
  $scrollBlock = $(".scrollBlock"),
  $counter = 0;

  if (ww < 751) { // = 768 - 17 (verticasl scroll width)
    $(".toggleMenu").css("display", "block");

    $(".toggleMenu").click(function(e) {
      e.preventDefault();
      if ( $counter === 0 ) {
        $(this).css("transform", "rotate(180deg)");
        $(".nav").addClass("activeMenu");
        $counter = 1;
      } else {
        $(this).css("transform", "rotate(0deg)");
        $(".nav").removeClass("activeMenu");
        $counter = 0;
      }
    });

    $(".nav li").off('mouseenter mouseleave');
    $(".nav li a.parent")
    .off('click')
    .on('click', function(e) {
      // Необходимоо привязать к элементу ссылки для предотвращения "всплывания"
      e.preventDefault();

      $(this)
      .parent("li")
      .toggleClass("hover");
    });

    $directionItem.each(function() { // equal height of .direction
      $(this)
      .removeClass("largeScreen")
      .removeAttr("style");
    });

    $scheduleInner.each(function() { // equal height of .schedule
      $(this)
      .removeClass("largeScreen")
      .removeAttr("style");
    });

  } else if ( ww >= 751 ) { // = 768 - 17 (verticasl scroll width)

    // topInfo scroll
    $(window).scroll(function() {
      var $nav = $("nav");
      if ( $(this).scrollTop() > 147 ) {
        $nav.addClass("fixedMenu");
        $scrollBlock.show();
      } else {
        $nav.removeClass("fixedMenu");
        $scrollBlock.hide();
      }
    });
    
    $(".toggleMenu").css("display", "none");
    $(".nav")
    .show()
    .css("display", "block");

    $(".nav li a").off('click');
    $(".nav li")
    .removeClass("hover")
    .off('mouseenter mouseleave')
    .on('mouseenter mouseleave', function() {
      // Необходимо привязать к элементу li для предотвращения запуска события mouseleave при перемещении курсора мыши над подменю
      $(this).toggleClass('hover');
    });

    $directionItem.each(function() { // equal height of .direction
      $(this).addClass("largeScreen");
    });

    $scheduleInner.each(function() { // equal height of .schedule
      $(this).addClass("largeScreen");
    });

  }
}


// EqualHeight
function setEqualHeight(columns) {
  var tallestColumn = 0;
  columns.each(function() {
    columns.removeAttr("style");
    currentHeight = $(this).height();
    if ( currentHeight > tallestColumn ) {
      tallestColumn = currentHeight;
    }
  });
  columns.height( tallestColumn );
}



// parallaxImage loading depending on screen size
function imageSizeDetect() {
  var ww = $(window).width(),
  imageSize = "";
  if (ww <= 599) {
    imageSize = "sm";
  } else if (ww > 600 && ww <= 992) {
    imageSize = "md";
  } else if (ww > 993) {
    imageSize = "lg";
  }
  return imageSize;
}






var preload = 15;

(function () {      
  $(".greeting").css("opacity", 1);
  $("#preload")
  .delay(preload)
  .fadeOut(preload);
})();






/*var ww = document.body.clientWidth;*/
  // navigation
  (function () {
    var $navRef = $(".nav li a");
    $navRef.each(function() {
      if ( $(this).next().length > 0 ) {
        $(this).addClass("parent");
      }
    });
  })();






  // tab lighting
  (function() {
    var location = window.location.href,
    $navRef = $(".nav li li a"),
    $navMainRef = $(".nav > li > a");

    $navRef.each(function() {
      if (location.search($(this).attr("href")) > -1) {
        $navRef.removeClass("activeMenuItem");
        $(this).addClass("activeMenuItem");
        $(this).parent().parent().parent().find(".parent").addClass("activeMenuItem");
      }
    });

    $navMainRef.each(function() {
      if (location.search($(this).attr("href")) > -1) {
        $navMainRef.removeClass("activeMenuItem");
        $(this).addClass("activeMenuItem");
      }
    });
  })();







  sliderHeightDetect();
  adjustMenu();
  setEqualHeight( $(".largeScreen") );






  // mainSlider
  $(".owl-mainSlider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1
  });




  // owl-doctors
  var $owl = $(".owl-doctors");
  $(".owl-doctors").owlCarousel({
    onRefresh: function () { // установка одинаковой высоты owl-item
      $owl.find(".owl-item").height("");
    },
    onRefreshed: function () {
      $owl.find(".owl-item").height($owl.height() + 45);
    },
    loop: true,
    margin: 10,
    nav: false,
    touchDrag: true,
    autoplay: false,
    responsive:{
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      575: {
        items: 3
      },
      767: {
        items: 4
      },
      991: {
        items: 5
      },
      1199: {
        items: 6
      }
    }
  });
  // исчезают значки навигации (причина непонятна). решение:
  var $owlNav = $owl.find('.owl-nav');
  $owlNav.removeClass('disabled');
  $owl.on('changed.owl.carousel', function(event) {
    $owlNav.removeClass('disabled');
  });
  // убрать текст с кнопок навигации
  $(".owl-prev").text("");
  $(".owl-next").text("");




  // parallax
  $(".parallax-window").parallax({ imageSrc: "wp-content/themes/perinatalcenter-dnepr.com/images/parallax/" + imageSizeDetect() + ".jpg"}); // в parallaxImageDetect() определяестся загружаемое изображение в зависимости от ширины экрана




  // toggleText
  (function() {
    var $testShow = $(".descriptionText p");
    for (var i = 0; i < 2; i++) {
      $testShow.eq(i).addClass("textShow");
    }

    var $button = $(".descriptionText button"),
    $text = $button.siblings().not(".textShow");
    $text.hide();
    $button.click(function() {
      if ( $text.is(":hidden") ) {
        $text.slideDown();
        $button.text("Згорнути");
      } else {
        $text.slideUp();
        $button.text("Розгорнути");
      }
    });
  })();



  // mixitup
  (function() {
    var checkMixElem = document.querySelector("#specialistsMix"),
    mixer = "",
    li = $(".specialists li"),
    mix = $(".mix"),
    mixConfig = {
      animation: {
        enable: true,
        duration: 300,
        effects: "rotateZ fade",
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
      }
    }

    if ( checkMixElem ) {
      mixer = mixitup(checkMixElem, mixConfig);

      li.click(function() {
        li.removeClass("active");
        $(this).addClass("active");
      });

      mix.mouseenter(function() {
        $(".dark", this).css({
          transform: "scale(1)"
        });
        $("p, span", this).css({
          transform: "scale(1)"
        });
      });
      mix.mouseleave(function() {
        $(".dark, p, span", this).css("transform", "scale(0)");
      });
    }
  })();







  //tagCloud
  if ( !$("#myCanvas").tagcanvas({
    textColour : "#fff",
    outlineThickness : 1,
    maxSpeed : 0.05,
    depth : .8
  })) {
    // TagCanvas failed to load
    $("#myCanvasContainer").hide();
  }





  // scroll to top
  (function() {
    var $scrollToTop = $(".scrollToTop");
    $(window).scroll(function() {
      if ( $(this).scrollTop() > $(window).height() ) {
        $scrollToTop.css("right","20px");
      } else {
        $scrollToTop.css("right","-40px");
      }
    });

    $scrollToTop.click(function() {
      $("body, html").animate({scrollTop: 0}, 500);
    });
  })();



  //*************** PAGES **************************************
  (function() {
    var $main = $("main"),
    pageMark = "";
    if ( $main.attr("class") ) { 
      pageMark = $main.attr("class");
      console.log( "pageMark = " + pageMark );
      /*$("." + pageMark + " .departmentImg img").attr("src", "images/" + pageMark + "/" + imageSizeDetect() + ".jpg");*/
      $("." + pageMark + " .departmentImg img").attr("src", "wp-content/themes/perinatalcenter-dnepr.com/images/" + pageMark + "/" + imageSizeDetect() + ".jpg");
    }
  })();
  //*************** / PAGES ************************************






  // resize
  $(window).on("resize orientationchange", function() {
    /*ww = document.body.clientWidth;*/
    adjustMenu();
    sliderHeightDetect();
    setEqualHeight( $(".largeScreen") );
  });





  // feedback
  $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
        type: "POST", //Метод отправки
        url: "send.php", //путь до php фаила отправителя
        data: form_data,
        success: function() {
               //код в этом блоке выполняется при успешной отправке сообщения
               alert("Ваше сообщение отпрвлено!");
             }
           });
      });



});


