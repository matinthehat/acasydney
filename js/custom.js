$(document).ready(function(){
	
	$(".toggle_container").hide();

	$("h2.trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
	});


	$("ul.tabs").tabs("div > div.tab_content");
});


var $j = jQuery.noConflict();
	$j(function(){
	$j("a[rel^='prettyPhoto']").prettyPhoto({theme:'facebook'});	
	$j('.grid12 .homebox:nth-child(3n)').addClass("nopadding");
	$j('.grid8 .homebox:nth-child(2n)').addClass("nopadding");
	 $j('.portfolio1 li:nth-child(4n)').addClass("last");
	   $j('#frontpage_mid_teaserboxes .homebox:nth-child(3n)').addClass("nopadding");
});
	
$j(function() { 				
    $j('#slideshow').cycle({ 
        fx:     'fade', 
        timeout: 4000,
		pause:1,
		speed:  1200,
        pager:  '#slider .nav', 
        before: function() {  
       $j('#caption').html(this.alt); 
        } 
    }); 
}); 

$j(function() { 
    $j('#slideshow2').cycle({ 
        fx:     'fade', 
        timeout: 4000,
		pause:1,
		 speed:  1200,
        pager:  '#nav2', 
        before: function() {  
       $j('#caption2').html(this.alt); 
        } 
    }); 
}); 
	
$j(function() { 
    $j('#testimonial').cycle({ 
        fx:     'scrollDown', 
        timeout: 4000,
		pause:1,
		 speed:  1200,
        pager:  '', 
        before: function() {  
       $j('').html(this.alt); 
        } 
    }); 
}); 
	
	
// If the HTML document is ready to be manipulated
$j(document).ready(function(){
	// Add the hover handler to the link
	$j("ul.social-icons li a").hover(
		function(){
			$j(this).find("img").animate({top : '-6px'}, 200);
		},
		function(){ 
			$j(this).find("img").animate({top : '0px'}, 200);
		}
	);
});

$j(document).ready(function(){
	$j("a[rel^='prettyPhoto']").each(function() {	
		var $jimage = $j(this).contents("img");
			$jhoverclass = 'hover_video';

	if($j(this).attr('href').match(/(jpg|gif|jpeg|png|tif)/)) 
	$jhoverclass = 'hover_image';
		
	if ($jimage.length > 0)
	{	
		var $jhoverbg = $j("<span class='"+$jhoverclass+"'></span>").appendTo($j(this));
		
			$j(this).bind('mouseenter', function(){
			$jheight = $jimage.height();
			$jwidth = $jimage.width();
			$jpos =  $jimage.position();		
			$jhoverbg.css({height:$jheight, width:$jwidth, top:$jpos.top, left:$jpos.left});
		});
	}

	$j("a[rel^='prettyPhoto']").find("img").hover(function() {
			$j(this).stop().animate({"opacity": "0.2"}, 400);
			},function() {
			$j(this).stop().animate({"opacity": "1"},400);
		});
	});

});	

