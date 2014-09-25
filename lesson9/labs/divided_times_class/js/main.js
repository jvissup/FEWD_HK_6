$(document).ready(function(){

	// International Link
	$('#primary-nav .international').on('click', function(e){
		debugger;
		e.preventDefault();
		$('#primary-nav .international').siblings().removeClass('active');
		$('#primary-nav .international').toggleClass('active');
		if($('#primary-nav .international').hasClass('active')) {
			if($('#slide-down').hasClass('open')) {
				$('#slide-down .drop.open').hide().removeClass('open');
				$('.drop.international').show().addClass('open');
			} else {
				$('#slide-down .drop').hide();
				$('.drop.international').show().addClass('open');
				$('#slide-down').slideDown(150).addClass('open');			
			}
		} else {
			$('#slide-down').slideUp(150).removeClass('open');
		}
	});

})