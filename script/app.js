$( document ).ready(function() {
	console.log('Ready..!');
	window.setInterval(function(){
		$('#kaffecontainer').html('<img src="/kaffecache/'+new Date().getTime()+'">');
		console.log('Reloaded');
	}, 1000);
});