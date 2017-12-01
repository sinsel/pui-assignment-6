$(function() {

	// Home Page Animations
	var animationEndWords = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"

	// Jumping Animation
	$('#skate-jump').mouseenter(
		function() {
			$('#skate-jump').addClass('animated bounce').one(animationEndWords , function() {
				$(this).removeClass('animated bounce')
			});
		});

		// Spinning Animation
		$('#skate-spin').mouseenter(
			function() {
				$('#skate-spin').addClass('animated flip').one(animationEndWords , function() {
					$(this).removeClass('animated flip')
				});
			});

			// Spin Page Animations
			$('#scratch-spin').mouseenter(
				function() {
					$('#scratch-spin').addClass('animated flip').one(animationEndWords , function() {
						$(this).removeClass('animated flip')
					});
				});

				$('#layback-spin').mouseenter(
					function() {
						$('#layback-spin').addClass('animated flip').one(animationEndWords , function() {
							$(this).removeClass('animated flip')
						});
					});

					$('#biellman-spin').mouseenter(
						function() {
							$('#biellman-spin').addClass('animated flip').one(animationEndWords , function() {
								$(this).removeClass('animated flip')
							});
						});

						$('#camel-spin').mouseenter(
							function() {
								$('#camel-spin').addClass('animated flip').one(animationEndWords , function() {
									$(this).removeClass('animated flip')
								});
							});

							$('#doughnut-spin').mouseenter(
								function() {
									$('#doughnut-spin').addClass('animated flip').one(animationEndWords , function() {
										$(this).removeClass('animated flip')
									});
								});

								$('#sit-spin').mouseenter(
									function() {
										$('#sit-spin').addClass('animated flip').one(animationEndWords , function() {
											$(this).removeClass('animated flip')
										});
									});
								});
