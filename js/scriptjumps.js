$(window).load(function() {

	var currentItem = 0;
	var FiniteRotator =
	{
		//currentItem: 0,
		finiteLoop: 0,
		init: function()
		{
			var initialFadeIn = 100;
			//interval between items (in milliseconds)
			var itemInterval = 300;
			//cross-fade time (in milliseconds)
			var fadeTime = 50;
			//count number of items
			var numberOfItems = $('.rotating-item').length;

			//show first item
			$('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

			//loop through the items
			this.finiteLoop = setInterval(function(){
				curr = $('.rotating-item').eq(currentItem);
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
			clearInterval(this.finiteLoop);
		}
	};

	FiniteRotator.init();

	$( "#rotating-item-wrapper" ).mouseenter(function() {
		FiniteRotator.stop()
	});

	$( "#rotating-item-wrapper" ).mouseleave(function() {
		//curr.fadeOut(100);
		FiniteRotator.init();
	});

});
