$(document ).ready(function() {

 // scroll to top on page reload
  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

// loading bar
      NProgress.start();
      NProgress.done();

$(function () {
    $('.message_box').textillate({ in: { effect: 'fadeIn', delay:100} });
});

// rotating greeter
var adjs = ["Hello", "こんにちは", " Bonjour", "Hola", "नमस्ते", "안녕하세요","Здравствуйте",
	"Kamusta","你好","Olá","ہیلو","xin chào","مرحبا","হ্যালো"],

	sentence = $('#sentence'),
	textSlider = $('#textSlider'),
	stop = false;

function getList() {
	return $('.adj');
}

// function to build the adjective list
// args: adjective array
function build(arr) {
	for (i=0; i<arr.length; i++) {
		var item = "<li class='adj'>";
		$(textSlider).append(item + arr[i] + "</li>");
	}
}

// function to resize adjective list
// args: adjective list item
function resize(el) {
	$(textSlider).animate({
		width: $(el).width(),
	}, 200);
}

// function to add slide-in transition
// args: element that needs to slide
function slideIn(el) {
	// duration slide is on screen
	var hold = 3000;
	// resize area to sliding element
	resize($(el));
	// add slide-in class
	$(el).addClass('slide-in');
	// after 'hold' duration slide-out current item
	// then slide in next item
	setTimeout(function(){
		// check to see if loop should continue
		if (stop === true) {
			stop = false;
			return;
		}
		// slide current element out
		slideOut(el);
		// slide in next element in queue
		slideIn($(el).next());
	}, hold);
}

// function to add slide-out transition
// args: element that needs to slide
function slideOut(el) {
	// remove current class and add slide-out transition
	$(el).removeClass('slide-in').addClass('slide-out');
	// wait for slide tramsition to finish then
	// call 'change' function
	setTimeout(function(){
		change();
	}, 200);
}

// function to re-arrange adjective list
function change() {
	// store last item index
	var i = adjs.length - 1;
	// detach element that has slide-out class
	// put to the bottom of the list after
	// the last item
	$('.adj:eq(' + i + ')').after($('.slide-out').detach());
	// remove class to send element back to original position
	$('.adj').removeClass('slide-out');
}

// build slider
build(adjs);
slideIn(getList()[0]);


     $('.project_name').hide();
          $('.more_soon').hide();

// start of scroll magic
 var controller = new ScrollMagic.Controller();

 var scene = new ScrollMagic.Scene ({
 	triggerElement:'#trigger1'
 	  }).addTo(controller);

$(" #languages_list, #skills_list").hide();

scene.on("enter", function(){

    $(".topbar").show();
    $(".topbar").animate({width: "99.5%"},700, function() {
      $(".rightbar").show();
      $(".rightbar").animate({height: "99.5%"},700, function() {
        $(".bottombar").show();
        $(".bottombar").animate({width: "99.5%"},700, function() {
          $(".leftbar").show();
          $(".leftbar").animate({height: "99.5%"},700, function() {
            $("#languages_list, #skills_list").fadeIn(500);
          });
        });
      });
    });

// start of prgress bar
function progress(percent, element) {
	var progressBarWidth = percent * element.width() / 100;
	element.find('div').animate({ width: progressBarWidth }, 12000);
	}

	$('.progressBar').each(function() {
					var bar = $(this);
					var max = $(this).attr('id');
					max = max.substring(3);
					progress(max, bar);
				});
			});

 var controller = new ScrollMagic.Controller();

 var scene2 = new ScrollMagic.Scene ({
 	triggerElement:'#trigger2'
 	  }).addTo(controller);

 $(" .project_image").hide();

scene2.on("enter", function(){

    $(".topbar1,.topbar2,.topbar3").show();
    $(".topbar1,.topbar2, .topbar3").animate({width: "99.5%"},700, function() {
      $(".rightbar3").show();
      $(".rightbar3").animate({height: "99.5%"},700, function() {
        $(".bottombar3,.bottombar2,.bottombar1").show();
        $(".bottombar3,.bottombar2,.bottombar1").animate({width: "99.5%"},700, function() {
          $(".leftbar1").show();
          $(".leftbar1").animate({height: "99.5%"},700, function() {
          		  $(".rightbar1,.leftbar2, .rightbar2,.leftbar3").show();
          		   $(".rightbar1,.leftbar2, .rightbar2,.leftbar3").animate({height: "99.5%"},700, function (){
            $(".project_image").fadeIn(1000);
			});
          });
        });
      });
    });

    $(".project_1").hover(function() {
    $('.project_name1').fadeIn(500);
}, function() {
     $('.project_name1').fadeOut(500);

});

$(".project_2").hover(function() {
    $('.project_name2').fadeIn(500);
}, function() {
     $('.project_name2').fadeOut(500);

});

$(".project_3").hover(function() {
    $('.more_soon').fadeIn(500);
}, function() {
     $('.more_soon').fadeOut(500);

});

});

//parallax anchor links
$( "#nav_about, #arrow" ).on( "click", function() {
 $('#about').ScrollTo({
 	duration:900,
	easing:'linear'
});
});

$( "#nav_work" ).on( "click", function() {
 $('#work').ScrollTo({
 	duration:900,
	 easing:'linear'
});
});

$( "#nav_contact" ).on( "click", function() {
 $('#bottom').ScrollTo({
 	duration:900,
	 easing:'linear'
});
});

$( "#nav_home" ).on( "click", function() {
 $('#homepage').ScrollTo({
 	duration:900,
	easing:'linear'
});
});


// menu-toggle
document.querySelector( "#nav-toggle" )
.addEventListener( "click", function() {
  this.classList.toggle( "active" );
});


$('#nav-toggle').on('click', function(){
 var menu=document.querySelector("#main-menu");
 if (menu.className == 'hidden-small') {
  menu.classList.remove('hidden-small');
  menu.classList.add('show-small');
  menu.style.position = 'absolute';
} else {
  menu.classList.remove('show-small');
  menu.classList.add('hidden-small');
  menu.style.position = "absolute";
}
});

// modal
$('.project_1').on('click', function(){
    $("#myModal").css("display", "block");
});

$('.modal_close').on('click', function(){
    $("#myModal").css("display", "none");
});

});
