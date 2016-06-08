// fonction globale


// variables globales
	


// click sur button action
	
		
// click bouton(s) radio => attraper fieldset pour ajouter/retirer la classe hidden
		
 
 var radio = $("fieldset:first :radio")


radio.on("click",function(){

	$("fieldset:gt(0)").addClass("hidden");

	switch(this.id){
		case "male" :
		$("fieldset:eq(1)").removeClass("hidden");
		break;

		case "female" :
		$("fieldset:eq(2)").removeClass("hidden");
	}

});