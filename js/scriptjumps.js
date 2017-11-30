$(window).load(function() {	//start after HTML, images have loaded

	var FiniteRotator =
	{
		infiniteLoop: 0,
		init: function()
		{
			var initialFadeIn = 100;
			//interval between items (in milliseconds)
			var itemInterval = 300;
			//cross-fade time (in milliseconds)
			var fadeTime = 50;
			//count number of items
			var numberOfItems = $('.rotating-item').length;
			//set current item
			var currentItem = 0;
			//show first item
			$('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
			//loop through the items
			this.infiniteLoop = setInterval(function(){
				$('.rotating-item').eq(currentItem).fadeOut(fadeTime);

				if(currentItem == numberOfItems -1){
					currentItem = 0;
				}else{
					currentItem++;
				}

				$(".rotating-item").eq(currentItem).fadeIn(fadeTime);

			}, itemInterval);
		},
		stop: function()
		{
			clearInterval(this.infiniteLoop);
		}
	};

	FiniteRotator.init();

	$("#rotating-item-wrapper").onmouseover(
		FiniteRotator.init().stop()
	);

});
