$('li').click(function(){
	$('li').removeClass('activeNemu');
	$(this).toggleClass('activeNemu');

});
// var like= 0;
var newLike= 0;
$('.like-news').click(function(){
	// like = newLike;
    newLike++;
    $('#id-like').text(newLike);
    // $('.like-news span').text(newLike);
})