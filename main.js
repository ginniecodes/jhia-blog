var button = document.querySelector('.loader');
button.addEventListener('click', function(){
	var up = document.querySelector('.up'), down = document.querySelector('.down'), patt=/(toggle-up|toggle-down)/g;
	if(patt.test(up.className) || patt.test(down.className)){
		up.className = 'up';
		down.className = 'down';
	} else {
		up.className += ' toggle-up';
		down.className += ' toggle-down';
	}
	colorButton(this);
});

function colorButton(text) {
		if(/colorful/g.test(text.className))
			text.className = 'loader center';
		else
			text.className += ' colorful';
}
