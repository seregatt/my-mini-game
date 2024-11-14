	let tg = window.Telegram.WebApp; //получаем объект webapp телеграма
	

let main_page = document.querySelector('#main_page');
$(window).resize(function() {
    $('.page.full-page').css({minHeight:$(window).height() - 125})
});

$(window).trigger('resize');

if  (main_page){
    window.Telegram.WebApp.expand() //expand window after page loading
	window.Telegram.WebApp.disableVerticalSwipes() //scroll
	var BackButton = window.Telegram.WebApp.BackButton; //back botton
}

//add castom scroll
$('body').overlayScrollbars({className: "os-theme-dark"}); 
$('.level-list-block.scrollable-element').overlayScrollbars({className: "os-theme-dark"}); 
$('.works-info.scrollable-element').overlayScrollbars({className: "os-theme-dark"}); 


// Check if it's out of the viewport on each side
var isOutOfViewport = function (elem) {
	var bounding = elem.getBoundingClientRect()
	var out = {}
	out.top = bounding.top < 0
	out.left = bounding.left < 0
	out.bottom =
	bounding.bottom >
	(window.innerHeight-50 || document.documentElement.clientHeight)
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

logViewport()

window.addEventListener("scroll", logViewport, false)

$(window).resize(function() {
	logViewport()
});

window.addEventListener("orientationchange", function() {
  logViewport()
}, false);











      /*function ensureDocumentIsScrollable() {
        const isScrollable =
          document.documentElement.scrollHeight > window.innerHeight;
        if (!isScrollable) {
          document.documentElement.style.setProperty(
            "height",
            "calc(100vh + 1px)",
            "important"
          );
        }
      }
      function preventCollapse() {
        if (window.scrollY === 0) {
          window.scrollTo(0, 1);
        }
      }

      const scrollableElement = document.querySelector(".scrollable-element");
      scrollableElement.addEventListener("touchstart", preventCollapse);

      window.addEventListener("load", ensureDocumentIsScrollable);*/
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
		$('.bottom-hidden-block.level-block').toggleClass('hide');
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

//tabs
$('.main-tab-link').click( function() {
	var tabID = $(this).attr('data-tab');
	$(this).addClass('active').siblings().removeClass('active');
	$('.main-tab-content#tab-'+tabID).addClass('active').siblings().removeClass('active');
	logViewport();
	$(window).scrollTop(0);
});
$('.small_tab_1_link').click( function() {
	var tabID = $(this).attr('data-tab');
	$(this).addClass('active').siblings().removeClass('active');
	logViewport();
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
	$(".small_tab_2_content").removeClass("active").fadeOut(200);
	setTimeout(load, 200);
	function load(){
	   $('.small_tab_2_content#tab-'+tabID).fadeIn(500).addClass("active");
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
            let hour = 3, min = 0, sec = 0
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
    
    $('#countdown').countdown()
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