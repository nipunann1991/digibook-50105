
$(document).ready(function() {


	var controller = new ScrollMagic.Controller();
	var nav_inks = [
		{
			link: '<span>0.</span>Overview',
			url: 'index.html'
		},
		{
			link: '<span>I.</span>Workplace 2.0',
			url: 'workplace-2.0.html'
		},
		{
			link: '<span>II.</span> Less Work, More Network',
			url: 'less-work.html'
		},
		{
			link: '<span>III.</span> Rebooting Wellness',
			url: 'rebooting-wellness.html'
		},
		{
			link: '<span>IV.</span> The Feel-Good Factor',
			url: 'the-feel-good-factor.html'
		},
		{
			link: '<span>V.</span> What We Pay, to Whom, and Why',
			url: 'what-we-pay.html'
		},
		{
			link: '<span>VI.</span> Shaping Businesses to People',
			url: 'shaping-businesses.html'
		},

	];

	 

	$(window ).scroll(function() {
	 	var x = window.scrollY  - $('.cloud-anim').offset().top;
	 	console.log();
 		TweenLite.from($('.cloud-anim'), 1.5, {  x:  -(x/10), ease: Power2.easeOut });
 		TweenLite.from($('.cloud-anim-left'), 1.5, {  x:  (x/10), ease: Power2.easeOut });
		TweenLite.from($('.rotate'), 1.5, { rotation:x , transformOrigin:"50% 50%" } ); 

	});

	 

	$('.custom-tabs .round').click(function(event) {
		
		$('.custom-tabs .round').parent().removeClass('active');
		$(this).parent().addClass('active')

	});

	$('html .category-tab li').mouseover(function(event) {
		 
		$(this).find('a').trigger('click'); 
		 
	});

 


	var triggerAnimate = function(){ 

	 	$('.anim-up').each(function (index, element) { 
	 
		  	var imageBlocks = new TimelineMax();

		  	imageBlocks.from($(element), 1.5, { opacity: 0, y: 50, ease: Power2.easeOut });

	         var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 0})
		        .setTween( imageBlocks )
		        .addTo(controller)
	    });

	    $('.user-profile .cls-1, .user-profile .cls-2, .user-profile .cls-12').each(function (index, element) { 
	 
		  	var imageBlocks = new TimelineMax();

		  	imageBlocks.from($(element), 1.5, {opacity: 0, y: 50, ease: Power2.easeOut });

	         var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 0})
		        .setTween( imageBlocks )
		        .addTo(controller)
	    });

	    $('.progress-bar').each(function (index, element) { 
	 
		  	var imageBlocks = new TimelineMax();

		  	imageBlocks.from($(element), 1, { width: 0 });

	         var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100})
		        .setTween( imageBlocks )
		        .addTo(controller)
	    });



	    $('.barchart .cls-3, .barchart .cls-2, .barchart1 rect.cls-3, .barchart1 rect.cls-4').each(function (index, element) { 
	 
		  	var imageBlocks = new TimelineMax();

		  	imageBlocks.from($(element), 1, { height: 0, y: 350,   ease: Power1.easeNone });

	         var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100})
		        .setTween( imageBlocks )
		        .addTo(controller)
	    });


	    $('.anim-left').each(function (index, element) { 
	 
		  	var imageBlocks = new TimelineMax();

		  	imageBlocks.from($(element), 1.5, { opacity: 0, x: -50, ease: Power2.easeOut } );

	         var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100})
		        .setTween( imageBlocks )
		        .addTo(controller)
	    });

 
	   

	    $('.anim-right').each(function (index, element) { 
	 
		  	var imageBlocks = new TimelineMax();

		  	imageBlocks.from($(element), 1.5, { opacity: 0, x: 50, ease: Power2.easeOut } );

	         var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100})
		        .setTween( imageBlocks )
		        .addTo(controller)
	    });


	    $('.table-content').each(function (index, element) { 
	 
		  	var imageBlocks = new TimelineMax();
 
		  	var tableItem = new TimelineMax();

	        tableItem.staggerFrom($(element).find('.table-column'), 0.7, { opacity: 0 , x: -50 }, 0.5);

	        new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100 })
	            .setTween(tableItem)
	            .addTo(controller); 
	        
	    });


	    $('.man, .anim-round, .img-wrapper').each(function (index, element) { 
	 
		  	var tableItem = new TimelineMax();

	        tableItem.staggerFrom($(element).find('img.small-ico, .sub-img'), 1, { opacity: 0 , x: 0 }, 0.4);

	        new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100 })
	            .setTween(tableItem)
	            .addTo(controller); 
	        
	    });


	    $('.questions-for .bordered-content, .delivery-checklist .bordered-content, .checklist, .agile-process').each(function (index, element) { 
 
		  	var tableItem = new TimelineMax();

	        tableItem.staggerFrom($(element).find('.list-bullets li, li'), 0.5, { opacity: 0 , x: 0  }, 0.3);

	        new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100 })
	            .setTween(tableItem)
	            .addTo(controller); 
	        
	    });

	    $('.anim-fade').each(function (index, element) { 
	 
		  	var imageBlocks = new TimelineMax();

		  	imageBlocks.from($(element), 1.5, { opacity: 0, x: 0, ease: Power2.easeOut });

	         var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100})
		        .setTween( imageBlocks )
		        .addTo(controller)
	    });

	    $('.anim-zoom').each(function (index, element) { 
	 
		  	var imageBlocks = new TimelineMax();

		  	imageBlocks.from($(element), 0.7, { scale: 0, x: 0, ease: Power2.easeOut });

	         var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100})
		        .setTween( imageBlocks )
		        .addTo(controller)
	    });




	}



	var getNavigation = function(){

		var active_link = $('.navigation').attr('data-active-id');
		var active_class = '';
		for (var i = 0; i < nav_inks.length; i++) {

			active_class = '';

			if (i == active_link) {
				active_class = 'active';
			}
			$('.navigation ul').append(` 
				<li class="`+active_class+`">
					<a href="`+nav_inks[i].url+`">`+nav_inks[i].link+`</a>
				</li>`);
		}
	}

	

	var stickyNav = function(){
	    
	    var mainNavScene = new ScrollMagic.Scene({ triggerHook: "onLeave", triggerElement: ".navigation.hidden-xs" })
        .setPin(".navigation.hidden-xs", { pushFollowers: true })
        .addTo(controller);
 
	
	};

 
	new ScrollMagic.Scene({
        triggerElement: ".parallax",
        triggerHook: "onLeave",
    })
    .duration('300%')
    .setTween(".parallax", {
        backgroundPosition: "100% 546px",
        ease: Linear.easeNone
    }) 

    .addTo(controller);


    var paralaxEffect = function(element, position){

		new ScrollMagic.Scene({
	        triggerElement: element,
	        triggerHook: "onEnter",
	    })
	    .duration('300%')
	    .setTween( element , {
	        backgroundPosition: position,
	        ease: Linear.easeNone
	    })
	    
	    .addTo(controller);

    }

    
 	triggerAnimate();
   	getNavigation();
	stickyNav();
 
	paralaxEffect('.tools', '100% 100%');
	paralaxEffect('.mangement-challenge', '200px 100%');
	
	
});