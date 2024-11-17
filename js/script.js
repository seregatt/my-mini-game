	let tg = window.Telegram.WebApp; //получаем объект webapp телеграма
	

let main_page = document.querySelector('#main_page');


 

if  (main_page){
    window.Telegram.WebApp.expand() //expand window after page loading
	window.Telegram.WebApp.disableVerticalSwipes() //scroll
	var BackButton = window.Telegram.WebApp.BackButton; //back botton
}

//add castom scroll
$('body').overlayScrollbars({className: "os-theme-dark"}); 
$('.level-list-block.scrollable-element').overlayScrollbars({className: "os-theme-dark"}); 
$('.works-info.scrollable-element').overlayScrollbars({className: "os-theme-dark"}); 
$('.language.scrollable-element').overlayScrollbars({className: "os-theme-dark"}); 


// Check if it's out of the viewport on each side
var isOutOfViewport = function (elem) {
	var bounding = elem.getBoundingClientRect()
	var out = {}
	out.top = bounding.top < 0
	out.left = bounding.left < 0
	out.bottom =
	bounding.bottom >
	(window.innerHeight || document.documentElement.clientHeight)
	out.right =
	bounding.right > (window.innerWidth || document.documentElement.clientWidth)
	out.any = out.top || out.left || out.bottom || out.right
	return out
}

var elem = document.querySelector(".main-tab-content.active")

var logViewport = function () {
	var isOut = isOutOfViewport(elem)
	if (isOut.any) {
		console.log("Not in the viewport! =(")
	$('body').removeClass('scroll');
	} else {
		console.log("In the viewport! =)")
		$('body').addClass('scroll');
	}
}

var initHeight = function () {
    var $header = $('.main-tab-content.active .tab-page').outerHeight();
	var $footer = $('.bottom-fixed-menu').outerHeight();
    $.each($('.active .page'), function (index, node) {
        var $hero = $(node);
        $hero.css({
			minHeight: $(window).height() - $header - $footer+'px'
		});
    });
	console.log($(window).height(),  $header,   $footer, $(window).height())
}

var mainHeight = function () {
    var $header = $('.main-tab-content.active .main-head').outerHeight();
	var $footer = $('.bottom-fixed-menu').outerHeight();
    $.each($('.main-tab-content.active .page'), function (index, node) {
        var $hero = $(node);
        $hero.css({
			height: $(window).height() - $header - $footer+'px'
		});
    });
	
}

logViewport()
mainHeight()
window.addEventListener("scroll", logViewport, false)

$(window).resize(function() {
	logViewport()
	initHeight()
});

window.addEventListener("orientationchange", function() {
  logViewport()
  initHeight()
}, false);







function debounce( func, wait, immediate ) {
	var timeout;
	return function () {
		var context = this, args = arguments;
		var later = function () {
			timeout = null;
			if ( !immediate ) func.apply( context, args );
		};
		var callNow = immediate && !timeout;
		clearTimeout( timeout );
		timeout = setTimeout( later, wait );
		if ( callNow ) func.apply( context, args );
	};
};


	$(".close").click(function() {
		$(this).parent('.closing-div').toggleClass('hide');
		$('.overflow').removeClass('show');
		$('body').removeClass('hide');
		BackButton.hide();
	});
	$(".overflow").click(function() {
		$('.overflow').removeClass('show');
		$('body').removeClass('hide');
		$('.bottom-hidden-block.level-block').removeClass('hide');
		$('.bottom-hidden-block.share-block').removeClass('hide');
		$('.bottom-hidden-block.works-block').removeClass('hide');
		$('.bottom-hidden-block.language-block').removeClass('hide');
		$('.bottom-hidden-block.deleting-acount').removeClass('hide');
		BackButton.hide();
	});
	$(".open-level").click(function() {
		$('body').toggleClass('hide');
		$('.overflow').toggleClass('show');
		$('.bottom-hidden-block.level-block').toggleClass('hide');
		BackButton.show();
	});
	BackButton.onClick(function() {
		BackButton.hide();
		$('body').toggleClass('hide');
		$('.overflow').toggleClass('show');
		$('.bottom-hidden-block.level-block').removeClass('hide');
		$('.bottom-hidden-block.share-block').removeClass('hide');
		$('.bottom-hidden-block.works-block').removeClass('hide');
		$('.bottom-hidden-block.language-block').removeClass('hide');
		$('.bottom-hidden-block.deleting-acount').removeClass('hide');
	});
	$(".open-share").click(function() {
		$('body').toggleClass('hide');
		$('.overflow').toggleClass('show');
		$('.bottom-hidden-block.share-block').toggleClass('hide');
		BackButton.show();
	});
	$(".open-works").click(function() {
		$('body').toggleClass('hide');
		$('.overflow').toggleClass('show');
		$('.bottom-hidden-block.works-block').toggleClass('hide');
		BackButton.show();
	});
	$(".open-language").click(function() {
		$('body').toggleClass('hide');
		$('.overflow').toggleClass('show');
		$('.bottom-hidden-block.language-block').toggleClass('hide');
		BackButton.show();
	});
	$(".open-delete").click(function() {
		$('body').toggleClass('hide');
		$('.overflow').toggleClass('show');
		$('.bottom-hidden-block.deleting-acount').toggleClass('hide');
		BackButton.show();
	});
	$(".test-token").click(function() {
		$(this).hide();
		$('.balance-block').show();
	});
//tabs
$('.main-tab-link').click( function() {
	var tabID = $(this).attr('data-tab');
	$(this).addClass('active').siblings().removeClass('active');
	$('.main-tab-content#tab-'+tabID).addClass('active').siblings().removeClass('active');
	logViewport();
	initHeight();
	$(window).scrollTop(0);
});
$('.small_tab_1_link').click( function() {
	var tabID = $(this).attr('data-tab');
	$(this).addClass('active').siblings().removeClass('active');
	logViewport();
	initHeight();
	$(".small_tab_1_content").removeClass("active").fadeOut(200);
	setTimeout(load, 200);
	function load(){
	   $('.small_tab_1_content#tab-'+tabID).fadeIn(500).addClass("active");
		return false;
	}
});
$('.small_tab_2_link').click( function() {
	var tabID = $(this).attr('data-tab');
	$(this).addClass('active').siblings().removeClass('active');
	logViewport();
	initHeight();
	$(".small_tab_2_content").removeClass("active").fadeOut(200);
	setTimeout(load, 200);
	function load(){
	   $('.small_tab_2_content#tab-'+tabID).fadeIn(500).addClass("active").siblings().removeClass('active');
		return false;
	}
});
$('.mini_tab_1_link').click( function() {
	var tabID = $(this).attr('data-tab');
	$(this).addClass('active').siblings().removeClass('active');
	$(".mini_tab_1_content").removeClass("active").fadeOut(200);
	setTimeout(load, 200);
	function load(){
	   $('.mini_tab_1_content#tab-'+tabID).fadeIn(500).addClass("active");
		return false;
	}
});
$('.mini_tab_2_link').click( function() {
	var tabID = $(this).attr('data-tab');
	$(this).addClass('active').siblings().removeClass('active');
	$(".mini_tab_2_content").removeClass("active").fadeOut(200);
	setTimeout(load, 200);
	function load(){
	   $('.mini_tab_2_content#tab-'+tabID).fadeIn(500).addClass("active");
		return false;
	}
});


(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 5000,           // how long it should take to count between the target numbers
		refreshInterval: 10,  // how often the element should be updated
		decimals: 2,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));








//horisontal slide
const slider = document.querySelector(".items-list");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

























//countdown
$(function () {
	jQuery.fn.extend({
    	countdown: function () {
            let hour = 0, min = 0, sec = 5
            render(hour, min, sec)
            
            const timer = setInterval(() => {
            	if (hour == 0 && min == 0 && sec == 0) {
                	clearInterval(timer)
                    return ;
                }
                
            	sec = dealSec(sec)
                min = dealMin(min, sec)
                hour = dealhour(hour, min, sec)
                render(hour, min, sec)
            }, 1000)
        },
    })
    
   
})

function dealSec (sec) {
    const timeRange = [...Array(60).keys()].reverse()
	const idxNow = timeRange.indexOf(sec)
    const idxNext = (idxNow + 1) % timeRange.length
    return timeRange[idxNext]
}

function dealMin(min, sec) {
    const timeRange = [...Array(60).keys()].reverse()
    if (sec === 59) {
    	const idxNow = timeRange.indexOf(min)
        const idxNext = (idxNow + 1) % timeRange.length
        return timeRange[idxNext]
    }
    return min
}

function dealhour (hour, min, sec) {
	if (min === 59 && sec === 59) return hour - 1
    return hour
}

function render(hour, min, sec) {
	hour = ("00" + hour).slice(-2)
    min  = ("00" + min).slice(-2)
    sec  = ("00" + sec).slice(-2)
    
    $('#countdown').text(`${hour} : ${min} : ${sec}`)
}

$('.btn-start-mining').click( function() {
	$(this).fadeOut(300);
	
	setTimeout(load, 300);
	function load(){
		$('.btn-active-mining').addClass("action").css("display", "flex").fadeIn(300);
		$('#countdown').countdown();

		$('.count-number').data('countToOptions', {
			formatter: function (value, options) {
				return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
			}
		});

		// start all the timers
		$('.count-farm').each(count);  

		function count(options) {
			var $this = $(this);
			options = $.extend({}, options || {}, $this.data('countToOptions') || {});
			$this.countTo(options);
		}
		return false;
	}
	
	setTimeout(finish, 5000);
	function finish(){
		$('.btn-active-mining').removeClass("action").fadeOut(300);
		$('.btn-end-mining').addClass("action").css("display", "flex").fadeIn(300);
		return false;
	}
	
});

$('.master-btn-big, .master-btn').click( function() {
	$('.fixed-info').removeClass('close-info').addClass("open-info").fadeIn(300);
	setTimeout(close_info, 1000);
	function close_info(){
		$('.fixed-info').removeClass("open-info").addClass("close-info").fadeOut(300);
		return false;
	}
});