
$(document).ready(function(){
$.ajax({
	url:'http://www.reddit.com/r/washingtondc.json',
	type: 'GET',
	success: (function(data){
		console.log(data);
		console.log(data.data.children[0].data.title);

		var html ='<ul>' ;

		for (var i=0; i<3; i++){
			html += '<li>' + '<a href=\" ' + data.data.children[i].data.url + ' \">' + data.data.children[i].data.title + '</a>' + '</li>';
		}
		html += '</ul>';
	
		$('.box').html(html);
	})


});

});


