$(window).load(function() {
	// Global Variables

	var currentItemToeLoop = 0;
	var currentItemFlip = 0;
	var currentItemLutz = 0;
	var currentItemSalchow = 0;
	var currentItemLoop = 0;
	var currentItemAxel = 0;
	//fade-in time (in milliseconds)
	var initialFadeIn = 100;
	//interval between items (in milliseconds)
	var itemInterval = 300;
	//cross-fade time
	var fadeTime = 50;

	// Animation Function for Toe Loop

	var FiniteRotatorToeLoop =
	{
		finiteLoop: 0,

		init: function()
		{
			//count number of items
			var numberOfItems = $(".toe-loop").length;
			$(".toe-loop").eq(currentItemToeLoop).fadeIn(initialFadeIn);
			//loop through the items
			this.finiteLoop = setInterval(function(){
				$(".toe-loop").eq(currentItemToeLoop).fadeOut(fadeTime);

				if(currentItemToeLoop == numberOfItems -1){
					currentItemToeLoop = 0;
				}else{
					currentItemToeLoop++;
				}
				$(".toe-loop").eq(currentItemToeLoop).fadeIn(fadeTime);
			}, itemInterval);
		},

		stop: function()
		{
			clearInterval(this.finiteLoop);
		}
	};

	// Animation Function for Flip

	var FiniteRotatorFlip =
	{
		finiteLoop: 0,

		init: function()
		{
			var numberOfItems = $(".flip").length;
			$(".flip").eq(currentItemFlip).fadeIn(initialFadeIn);
			//loop through the items
			this.finiteLoop = setInterval(function(){
				$(".flip").eq(currentItemFlip).fadeOut(fadeTime);

				if(currentItemFlip == numberOfItems -1){
					currentItemFlip = 0;
				}else{
					currentItemFlip++;
				}
				$(".flip").eq(currentItemFlip).fadeIn(fadeTime);
			}, itemInterval);
		},

		stop: function()
		{
			clearInterval(this.finiteLoop);
		}

	};

	// Animation Function for Lutz

	var FiniteRotatorLutz =
	{
		finiteLoop: 0,

		init: function()
		{
			//count number of items
			var numberOfItems = $(".lutz").length;
			$(".lutz").eq(currentItemLutz).fadeIn(initialFadeIn);
			//loop through the items
			this.finiteLoop = setInterval(function(){
				$(".lutz").eq(currentItemLutz).fadeOut(fadeTime);

				if(currentItemLutz == numberOfItems -1){
					currentItemLutz = 0;
				}else{
					currentItemLutz++;
				}
				$(".lutz").eq(currentItemLutz).fadeIn(fadeTime);
			}, itemInterval);
		},

		stop: function()
		{
			clearInterval(this.finiteLoop);
		}
	};

	// Animation Function for Salchow

	var FiniteRotatorSalchow =
	{
		finiteLoop: 0,

		init: function()
		{
			//count number of items
			var numberOfItems = $(".salchow").length;
			$(".salchow").eq(currentItemSalchow).fadeIn(initialFadeIn);
			//loop through the items
			this.finiteLoop = setInterval(function(){
				$(".salchow").eq(currentItemSalchow).fadeOut(fadeTime);

				if(currentItemSalchow == numberOfItems -1){
					currentItemSalchow = 0;
				}else{
					currentItemSalchow++;
				}
				$(".salchow").eq(currentItemSalchow).fadeIn(fadeTime);
			}, itemInterval);
		},

		stop: function()
		{
			clearInterval(this.finiteLoop);
		}
	};

	// Animation Function for Loop

	var FiniteRotatorLoop =
	{
		finiteLoop: 0,

		init: function()
		{
			//count number of items
			var numberOfItems = $(".loop").length;
			$(".loop").eq(currentItemLoop).fadeIn(initialFadeIn);
			//loop through the items
			this.finiteLoop = setInterval(function(){
				$(".loop").eq(currentItemLoop).fadeOut(fadeTime);

				if(currentItemLoop == numberOfItems -1){
					currentItemLoop = 0;
				}else{
					currentItemLoop++;
				}
				$(".loop").eq(currentItemLoop).fadeIn(fadeTime);
			}, itemInterval);
		},

		stop: function()
		{
			clearInterval(this.finiteLoop);
		}
	};

	// Animation Function for Axel

	var FiniteRotatorAxel =
	{
		finiteAxel: 0,

		init: function()
		{
			//count number of items
			var numberOfItems = $(".axel").length;
			$(".axel").eq(currentItemAxel).fadeIn(initialFadeIn);
			//Axel through the items
			this.finiteAxel = setInterval(function(){
				$(".axel").eq(currentItemAxel).fadeOut(fadeTime);

				if(currentItemAxel == numberOfItems -1){
					currentItemAxel = 0;
				}else{
					currentItemAxel++;
				}
				$(".axel").eq(currentItemAxel).fadeIn(fadeTime);
			}, itemInterval);
		},

		stop: function()
		{
			clearInterval(this.finiteAxel);
		}
	};



	// Initializers
	FiniteRotatorToeLoop.init();
	FiniteRotatorFlip.init();
	FiniteRotatorLutz.init();
	FiniteRotatorSalchow.init();
	FiniteRotatorLoop.init();
	FiniteRotatorAxel.init();

	// Hover Interaction for Toe Loop

	$( "#rotating-item-wrapper-toe-loop" ).mouseenter(function() {
		FiniteRotatorToeLoop.stop()
	});

	$( "#rotating-item-wrapper-toe-loop" ).mouseleave(function() {
		FiniteRotatorToeLoop.init();
	});

	// Hover Interaction for Flip

	$( "#rotating-item-wrapper-flip" ).mouseenter(function() {
		FiniteRotatorFlip.stop()
	});

	$( "#rotating-item-wrapper-flip" ).mouseleave(function() {
		FiniteRotatorFlip.init();
	});

	// Hover Interaction for Lutz

	$( "#rotating-item-wrapper-lutz" ).mouseenter(function() {
		FiniteRotatorLutz.stop()
	});

	$( "#rotating-item-wrapper-lutz" ).mouseleave(function() {
		FiniteRotatorLutz.init();
	});

	// Hover Interaction for Salchow

	$( "#rotating-item-wrapper-salchow" ).mouseenter(function() {
		FiniteRotatorSalchow.stop()
	});

	$( "#rotating-item-wrapper-salchow" ).mouseleave(function() {
		FiniteRotatorSalchow.init();
	});

	// Hover Interaction for Loop

	$( "#rotating-item-wrapper-loop" ).mouseenter(function() {
		FiniteRotatorLoop.stop()
	});

	$( "#rotating-item-wrapper-loop" ).mouseleave(function() {
		FiniteRotatorLoop.init();
	});


	// Hover Interaction for Axel

	$( "#rotating-item-wrapper-axel" ).mouseenter(function() {
		FiniteRotatorAxel.stop()
	});

	$( "#rotating-item-wrapper-axel" ).mouseleave(function() {
		FiniteRotatorAxel.init();
	});




});
