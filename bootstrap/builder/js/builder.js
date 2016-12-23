$('document').ready(function() {
    
    /*
    // this does not work with DOCTYPE html
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
    });

    var idcntr = 0;
    $('#divDraw').mouseup(function(e) {
	var l = x1;
	var r = e.pageX;
	if (l > e.pageX) {
	    l = e.pageX;
	    r = x1;
	}
	var b = y1;
	var t = e.pageY;
	if (b < e.pageY) {
	    b = e.pageY;
	    t = y1;
	}
	
	var pos = $('#divDraw').position();
	l -= pos.left;
	t -= pos.top;
	b -= pos.top;
	r -= pos.left;
	var w = r - l;
	var h = b - t;
	l += 'px';
	r += 'px';
	b += 'px';
	t += 'px';
	
	var totdiv = $('<div>').css({
	    "border": "solid",
	    "position": "absolute",
	    "left": l,
	    "top": t,
	    "width": w,
	    "height": h
	});
	totdiv.resizable();
	var newid = 'divNew' + idcntr++;
	totdiv.attr('id', newid);
	
	totdiv.appendTo($('#divDraw'));

	//var elems = $("[id*=divNew]");
	//alert(elems.length);
	
    });
});
