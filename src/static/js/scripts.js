$(function(){
	svg4everybody();
	

	paceOptions = {
		ajax: true,
		document: true,
		eventLag: false, 

	};

	Pace.on('done', function() {
		$(".preloader").fadeOut();
	});

});