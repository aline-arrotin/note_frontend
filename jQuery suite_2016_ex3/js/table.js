// code javascript commun a


var radio = $(".radio input[type='radio']")


radio.on("click",function(){

	$("form fieldset").addClass("hidden");

	if(this.value=="M"){
		$("fieldset:eq(1)").removeClass("hidden");
	}

		else if(this.value=="F"){
		$("fieldset:eq(2)").removeClass("hidden");
	}

	else{
		$("fieldset:eq(1)").addClass("hidden");
		$("fieldset:eq(2)").addClass("hidden");
	}

});