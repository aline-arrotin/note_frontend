//$("#listTable tbody tr:gt(5)").addClass("alert"); //tr plus grand que...
//$("#listTable tbody tr:contains('BEAUPIERRE')").addClass("alert");//pas obligé de mettre les guillemets à BEAUPIERRE.

$(document).ready(function(){

//$("#listTable tbody").load("../../data/texte/tab_people.html");



//Exercice sans correction.

// var show = $("#listTable tbody");

// 		show.on("click", "tr" ,function(){

// 			var result = '';

//  			$(this).children().each(function(){

//  				result += $(this).text() + " ";

//  			});

//  			alert(result);

//  		});

// });



//Correction



var result;

$("#listTable tbody").on("click", "tr" ,function(){

	var target = $("h1+p");
	result = "";
	target.empty();
	$(this).children().each(function(){

		result += $(this).text() + " ";
	});

	target.text(result);

});

});