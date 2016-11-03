var	accordeon = document.getElementById('accordeon');

accordeon.addEventListener('click', function(ev){
	ev.preventDefault();
	var evTarget = ev.target,
			evParent = evTarget.parentNode;

	if(evParent.classList.contains('accord__item')){
			evParent.classList.toggle('collapse');
		}
});
