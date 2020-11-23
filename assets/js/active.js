;(function ($) {

    "use strict";
        /* ---------------------------------------------
        Mobile Menu Active
        --------------------------------------------- */
        $('.mainmenu').slicknav({
            prependTo: '.mobile-menu',
        });
        

        /* ---------------------------------------------
        Rastan Parallax
        --------------------------------------------- */ 
        $('.funfact-area').parallax("100%", 0.4);
        $('.team-bg').parallax("100%", 0.4);


        /* ---------------------------------------------
        Portfolio Filtering
        --------------------------------------------- */
        $("#container").imagesLoaded( function() {
            $(".portfolio-filter").on( "click", "li", function() {
              $('li').removeClass("active");
              $(this).addClass("active");
                
              var filterValue = $(this).attr("data-filter");
              $grid.isotope({ filter: filterValue });
            });
            var $grid = $(".grid").isotope({
              itemSelector: ".grid-item",
              percentPosition: true,
              transitionDuration:"1s"

            })
        });

        /* ---------------------------------------------
        Post Masonry
        --------------------------------------------- */
        $("#container").imagesLoaded( function() {
            var $grid = $(".post-grid").isotope({
              itemSelector: ".post-grid-item",
              percentPosition: true,
              masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: ".post-grid-item"
              }
            })
        });
        /* ---------------------------------------------
        Brand Carousel
        --------------------------------------------- */ 
        $("#rastan-brand").owlCarousel({
            nav: false,
            loop: true,
            dots: false,
            center:true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 700,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 4,
                },
                992: {
                    items: 6,
                }
            }
        });
    
        /* ---------------------------------------------
        Service Carousel
        --------------------------------------------- */
        $(".service-wrapper").owlCarousel({
            nav: false,
            loop: true,
            dots: false,
            center:false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            responsive:{
	            0:{
	                items: 1,
	            },
	            600:{
	                items: 2,
	            },
	            1000:{
	                items: 4,
	            }
        	}
        });
    
        /* ---------------------------------------------
        Pportfolio Carousel
        --------------------------------------------- */
        $(".portfolio-wrapper").owlCarousel({
            nav: false,
            loop: true,
            dots: false,
            center:false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            responsive:{
                0:{
                    items: 1,
                },
                600:{
                    items: 2,
                },
                1000:{
                    items: 3,
                }
            }
        });
    
        /* ---------------------------------------------
        Testimonial Carousel
        --------------------------------------------- */
        $("#rastan-testimonial").owlCarousel({
            nav: false,
            loop: true,
            dots: false,
            center:false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            responsive:{
                0:{
                    items: 1,
                },
                600:{
                    items: 1,
                },
                1000:{
                    items: 3,
                }
            }
        });
        /* ---------------------------------------------
        pertner
        --------------------------------------------- */
        $(".pertner-wrapper").owlCarousel({
            nav: false,
            loop: true,
            dots: false,
            center:false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            responsive:{
                0:{
                    items: 2,
                },
                600:{
                    items: 3,
                },
                1000:{
                    items: 4,
                }
            }
        });
        /* ---------------------------------------------
        Hero Slider
        --------------------------------------------- */ 
        var $activeSlider = $("#rastan-slider-area");
        $activeSlider.owlCarousel({
            items: 1,
            nav: true,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 7000,
            items: 1,            
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            smartSpeed: 1800,
            
        });
        $activeSlider.on("translate.owl.carousel", function () {
            $("#rastan-slider-area .hero-text h1").removeClass("zoomIn animated").hide();
            $("#rastan-slider-area .hero-text h4").removeClass("zoomIn animated").hide();
            $("#rastan-slider-area .slide-btn").removeClass("zoomIn animated").hide();
        });          
        $activeSlider.on("translated.owl.carousel", function () {
            $("#rastan-slider-area .hero-text h1").addClass("zoomIn animated").show();
            $("#rastan-slider-area .hero-text h4").addClass("zoomIn animated").show();
            $("#rastan-slider-area .slide-btn").addClass("zoomIn animated").show();
        });

        /* ---------------------------------------------
        Hero Slider Two
        --------------------------------------------- */ 
        var $activeSliderTwo = $("#rastan-rero-area-four");
        $activeSliderTwo.owlCarousel({
            items: 1,
            nav: true,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            items: 1,            
            navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            smartSpeed: 1800,
            
        });
        $activeSliderTwo.on("translate.owl.carousel", function () {
            $("#rastan-rero-area-four .hero-text").removeClass("fadeIn animated").hide();
        });          
        $activeSliderTwo.on("translated.owl.carousel", function () {
            $("#rastan-rero-area-four .hero-text").addClass("fadeIn animated").show();
        }); 

    
        /* ---------------------------------------------
        MagnificPopup Image Video view
        --------------------------------------------- */
        $('.popup-load').magnificPopup({
            type: 'iframe',
            gallery: {
                enabled: true
            }
        });
        $('.img-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    
        /* ---------------------------------------------
        Sidebar Menu
        --------------------------------------------- */
	    $(".side-hamburger-close").on("click",function(){
          $("#side-hamburger-menu").css('right' , '-500px');
        });
        $(".sidebar-icon").on("click",function(){
            $("#side-hamburger-menu").css('right' , '0');
        });
    
        /* ---------------------------------------------
        Counter
        --------------------------------------------- */
        if ($('.odometer').length) {
            $(window).on('scroll', function () {
                function winScrollPosition() {
                    var scrollPos = $(window).scrollTop(),
                        winHeight = $(window).height();
                    var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
                    return scrollPosition;
                }
                var elemOffset = $('.odometer').offset().top;
                if (elemOffset < winScrollPosition()) {

                    $('.odometer').each(function () {
                        $(this).html($(this).data('count-to'));
                    });
                }
            });
        }
        /* ---------------------------------------------
        window When Loading
        --------------------------------------------- */
        var $window = $(window);
        $window.on("load",function (){
            // Preloader
            $(".rastan-preloader").fadeOut(500);
        });
    

})(jQuery);