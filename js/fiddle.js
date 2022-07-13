var initX = 0, flag = false, moveLeft = 0, left = 0, slide = 150;
$(".inner").mousedown(function(e){
		initX = e.pageX;
}).mousemove(function(e){
		flag = true;
}).mouseup(function(e){
		if(flag) {
			moveLeft = Number(e.pageX) - Number(initX);
			left = Number($(".inner").css("left").replace(/px/,''));
			left = moveLeft > 0 ? left + slide : left - slide;
			left = left < -420 ? -420 : left > 0  ? 0 : left;
			$(".inner").css({"left": left + 'px'});	
			flag = false;
		}
})
$(".move").click(function() {
	left = Number($(".inner").css("left").replace(/px/,''));
	left += $(this).hasClass("left") ? slide : -slide;
	left = left < -420 ? -420 : left > 0  ? 0 : left;
	$(".inner").css({"left": left + 'px'});	
});