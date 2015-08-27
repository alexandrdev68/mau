var UIA = {
		init : function(){
			
			$('._repMenu a').click(function (e) {
				  e.preventDefault();
				  $('._repRightTopHelp').text($(this).text());
				  $(this).tab('show');
				  $('._repMenu').hide();
			});
			
			$('._mAdminToolsNav a').click(function (e) {
				  e.preventDefault();
				  $(this).tab('show');
			});
			
			
			$('._marketDateFrom').datetimepicker();
			$('._marketDateTo').datetimepicker();
			
			$('._reportMenuTop a').click(function(e){
				//e.preventDefault();
				$('._repRightTopHelp').text($(this).text());
				$(this).tab('show');
			});
		}
}

$(document).ready(function(){
	UIA.init();
});