var UIA = {
		init : function(){
			$('._repMenuClose').on('click', function(){
				$('._repMenu').hide();
				
			});
			$('._repMenuOpen').on('click', function(){
				$('._repMenu').show();
				
			});
			
			$('._repMenu a').click(function (e) {
				  e.preventDefault();
				  $('._repRightTopHelp').text($(this).text());
				  $(this).tab('show')
			})
		}
}

$(document).ready(function(){
	UIA.init();
});