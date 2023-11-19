// Efect for change Nav 1 for Nav 2
/*$(document).ready(function(){
	var altura = $('#homboo-navbar2').offset().top;

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() <= altura ){
			$('#homboo-navbar1').addClass('menu-fixed');
			$('#homboo-navbar2').removeClass('menu-fixed');

		} else {
			$('#homboo-navbar1').removeClass('menu-fixed');
			$('#homboo-navbar2').addClass('menu-fixed');
		}
	});
});*/

$(document).ready(function(){
	// If you quiet mouse the replegable menu not show more
	$(".dropdown").hover(function(){
	 	$(this).find(".dropdown-menu").css("display","none");
	});
});

$(document).ready(function(){
	// The replegable menu slide down with animation
	$(".dropdown").click(function(){   
		$(this).find(".dropdown-menu").slideToggle("fast");
	});
});

$(document).ready(function(){
	// The replegable menu slide up with animation
	$(document).on("click", function(event){
		var $trigger = $(".dropdown");
		if($trigger !== event.target && !$trigger.has(event.target).length){
			$(".dropdown-menu").slideUp("fast");
		}            
	});
});

$(document).ready(function(){
	// No automatic trasition in carousel of slide-show
	$("#slider-show").carousel({
		interval: false
	});
});

$(document).ready(function(){
	// Settings for static-carousel
	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:5,
		//nav:true,
		responsiveClass:true,
		responsive:{
			0:{
			  items:1,
			},
			300:{
			  items:1,
			},
			450:{
			  items:2,
			},
			650:{
			  items:3,
			},
			700:{
			  items:4,
			}
		}
	});
});

$(document).ready(function(){
	// {"-webkit-filter": "grayscale(0) opacity(100%)", "filter": "grayscale(0) opacity(100%)"}
	$(".li-hover").hover(function(){
	  	$(this).find(".services-list-txt").css("font-weight","bolder");
	  	$(this).find(".services-list-img").css({"-webkit-filter": "grayscale(0) opacity(100%)", "filter": "grayscale(0) opacity(100%)"});
	},function(){
	  	$(this).find(".services-list-txt").css("font-weight","normal");
		$(this).find(".services-list-img").css({"-webkit-filter": "grayscale(100%) opacity(40%)", "filter": "grayscale(100%) opacity(40%)"});	
	});
});

$(document).ready(function(){
	// Efects for Recently Views
	$(".recently-views").find(".owl-carousel").hide();
	$(".recently-views").find(".title").hide();
	$("#basic-addon2").click(function(){
		$(".recently-views").find(".owl-carousel").show();
		$(".recently-views").find(".title").show();
		$(".recently-views").find(".input-group").hide();
	});
});


// New select
function createSelect(event, parent_id) {
	$(parent_id).find('ul').width($(parent_id).width());
	if(event.target.nodeName == 'INPUT' || event.target.nodeName == 'DIV') {
		event.stopPropagation();
		$(parent_id).find('button').dropdown('toggle');
	}
	$(parent_id).find('ul li').click(function() {
	$(parent_id).find('input').attr('value', $(this).find('a').text());
	});
}

$(document).ready(function(){
	// Buttom for grid and list in Search Column 
	$(".search-column").find(".list").hide();
	$(".grid-buttom").click(function(){
		$(".search-column").find(".grid").show();
		$(".search-column").find(".list").hide();
	});
	$(".list-buttom").click(function(){
		$(".search-column").find(".grid").hide();
		$(".search-column").find(".list").show();
	});
});

$(document).ready(function(){
	// Hide and show text en questions in Filters
	$(".search-column").find(".questions").find(".text").hide();
	$(".search-column").find(".questions").find(".minus").hide();
	$(".question").click(function(){
		$(this).find(".text").show();
		$(this).find(".plus").hide();
		$(this).find(".minus").show();
	});
});

/*$(document).ready(function(){
	// For Google map api
	function initialize() {
	    var mapCanvas = document.getElementById('map');
	    var mapOptions = {
		    center: new google.maps.LatLng(44.5403, -78.5463),
		    zoom: 8,
		    mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	    var map = new google.maps.Map(mapCanvas, mapOptions)
	}
	initialize();
});*/






