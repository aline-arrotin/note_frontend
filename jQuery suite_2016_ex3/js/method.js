// code javascript commun au site;
$(document).ready(function (){
	//sauvegarde de la div #subject dans une variable pour réinitialiser le site après chaque manip
	var i=0;
	//changement de look pour méthode déjà clickée une fois
	$('.left').on("click","li li",function(){
		if (i>0){
			$('#subject').html("<div id='intro'><h2>Introduction</h2><p>Lorem ipsum Intro...</p></div><div id='chap1'><h2>Chapitre 1</h2><p>Lorem ipsum Chap 1A...</p><p>Lorem ipsum Chap 1B...</p><p>Lorem ipsum Chap 1C...</p></div><div id='chap2'><h2>Chapitre 2</h2><p>Lorem ipsum Chap 2A...</p><p>Lorem ipsum Chap 2B...</p><p>Lorem ipsum Chap 2C... </p></div>");	
		};
		switch($(this).html()){
			case "$('sélecteur').append('à insérer')":
				$("#chap1,#chap2").append('<div class="bckgrd" >new div</div>');
			break;
			case "$('sélecteur').prepend('à insérer')":
				$("#chap1,#chap2").prepend('<div class="bckgrd" >new div</div>');	
			break;
			case "$('à insérer').appendTo('cible')":
				$('<div class="bckgrd" >new div</div>').appendTo("#chap1,#chap2");
			break;
			case "$('à insérer').prependTo('cible')":
				$('<div class="bckgrd" >new div</div>').prependTo("#chap1,#chap2");	
			break;
			case "$('sélecteur').before('à insérer')":
				$("#chap1,#chap2").before('<div class="bckgrd" >new div</div>');	
			break;
			case "$('sélecteur').after('à insérer')":
				$("#chap1,#chap2").after('<div class="bckgrd" >new div</div>');
			break;
			case "$('à insérer').insertBefore('cible')":
				$('<div class="bckgrd" >new div</div>').insertBefore("#chap1,#chap2");	
			break;
			case "$('à insérer').insertAfter('cible')":;
				$('<div class="bckgrd" >new div</div>').insertAfter("#chap1,#chap2");
			break;
			case "$('sélecteur').wrap('à insérer')":
				$("#chap1,#chap2").wrap('<div class="bckgrd" >new div</div>');
			break;
			case "$('sélecteur').wrapAll('à insérer')":
				$("#chap1,#chap2").wrapAll('<div class="bckgrd" >new div</div>');	
			break;
			case "$('sélecteur').wrapInner('à insérer')":
				$("#chap1,#chap2").wrapInner('<div class="bckgrd" >new div</div>');
			break;
			case "$('sélecteur').replaceWith('à insérer')":
				$("#chap1,#chap2").replaceWith('<div class="bckgrd" >new div</div>');
			break;
		}
		i++;
	});
	
	$('.right').on("click","li li",function(){
		if (i>0){
				$('#subject').html("<div id='intro'><h2>Introduction</h2><p>Lorem ipsum Intro...</p></div><div id='chap1'><h2>Chapitre 1</h2><p>Lorem ipsum Chap 1A...</p><p>Lorem ipsum Chap 1B...</p><p>Lorem ipsum Chap 1C...</p></div><div id='chap2'><h2>Chapitre 2</h2><p>Lorem ipsum Chap 2A...</p><p>Lorem ipsum Chap 2B...</p><p>Lorem ipsum Chap 2C... </p></div>");	
		};
		var element = $('#intro');
		switch($(this).html()){
			case "$('sélecteur').prepend(element)":
				$("#chap1,#chap2").prepend(element);	
			break;
			case "$('sélecteur').append(element)":
				$("#chap1,#chap2").append(element);	
			break;
			case "$(element).appendTo('cible')":
				$(element).appendTo("#chap1,#chap2");
			break;
			case "$(element).prependTo('cible')":
				$(element).prependTo("#chap1,#chap2");	
			break;
			case "$('sélecteur').before(element)":
				$("#chap1,#chap2").before(element);	
			break;
			case "$('sélecteur').after(element)":
				$("#chap1,#chap2").after(element);
			break;
			case "$(element).insertBefore('cible')":
				$(element).insertBefore("#chap1,#chap2");	
			break;
			case "$(element).insertAfter('cible')":
				$(element).insertAfter("#chap1,#chap2");
			break;
			
			case "$('sélecteur').wrap(element)":
				$("#chap1,#chap2").wrap(element);
			break;
			case "$('sélecteur').wrapAll(element)":
				$("#chap1,#chap2").wrapAll(element);	
			break;
			case "$('sélecteur').wrapInner(element)":
				$("#chap1,#chap2").wrapInner(element);	
			break;
			case "$('sélecteur').replaceWith(element)":
				$("#chap1,#chap2").replaceWith(element);	
			break;
		}
		i++;
	});						
		 
});











 
