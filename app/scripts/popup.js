
$(document).ready(function(){
$.ajax({
	url:'http://www.reddit.com/r/washingtondc.json',
	method: 'GET',
	success: (function(response){
		console.log(data);
		console.log(data.data.children[0].data.title);

		var html ='<ul>';

		for (var i=0; i<8; i++){
			html += '<li>' + data.data.children[i].data.title + '</li>';
		}
		html += '</ul>';
	
		$('.box').html(html);
		complete (function(){
			alert('finally appear');
		});
	})


});

});


