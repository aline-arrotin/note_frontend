var btn = $("aside .button")


$("header+aside").on("click",function(){
	btn.toggleClass("hidden");
});


//Méthode #1

// $("#btnHalf").on("click",function(){
// 	$("body").removeClass();
// 	$("body").addClass("half");
// });

// $("#btnLarge").on("click",function(){
// 	$("body").removeClass();
// 	$("body").addClass("largeFont");

// });

// $("#btnNormal").on("click",function(){
// 	$("body").removeClass();
// 	//Quand on ne donne pas de valeur, ca enlève toutes les classes.
// });

// Fin de la méthode #1

//Méthode simplifié de la #1

//Méthode #2



//Fin de la méthode 2

btn.on("click",function(event){
	$("body").removeClass();
	if(this.id=="btnLarge"){
		$("body").addClass("largeFont");
	}

	else if (this.id=="btnHalf"){
		$("body").addClass("half");
	}

	event.stopPropagation();
});


// $("#nav-site a").on("click",function(event){
// 	event.preventDefault();
// });