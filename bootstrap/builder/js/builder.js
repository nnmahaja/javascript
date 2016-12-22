$('document').ready(function() {
    // not sure why this does not work immediately? boostrap?

    /*
    $('body').click(function() {
	// do something here like:
        alert('hey! The body click is working!!!')
    });
    */
	var x1, y1;
	
    $('#divDraw').mousedown(function(e) {
	    var parentOffset = $(this).parent().offset(); 
	    //or $(this).offset(); if you really just want the current element's offset
	    var relX = e.pageX - parentOffset.left;
	    var relY = e.pageY - parentOffset.top;
	    x1 = e.pageX;
	    y1 = e.pageY;
	    /*
	    $('#divDraw').append('<div style="background-color: #80fc05; ' +
				 'position: fixed; left: ' + e.pageX + '; top:' + e.pageY + 
				 '"><p>Success</p></div>')
	    */
    });
	
    $('#divDraw').mouseup(function(e) {
	    var l = Math.min(x1, e.pageX);
	    var r = Math.max(x1, e.pageX);
	    var t = Math.min(y1, e.pageY);
	    var b = Math.max(y1, e.pageY);
	    
	    $('#divDraw').append('<div style="background-color: #80fc05; ' +
				 'position: fixed; left: ' + l + '; top: ' + t +
				 '; bottom: ' + b + '; right: ' + r +
				 '"><p>Success</p></div>')
    });
});
