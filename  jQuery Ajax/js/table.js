

//Exercice 1

// $(document).ready(function(){

// 	var result="";

// 	$("#listTable tbody").load("../../data/texte/tab_people.html", function(){
// 		//Après que le tableau soit chargé CALLBACK.


// 		$("#listTable tbody").on("click", "tr" ,function(){

// 			var target = $("h1+p");
// 			result = "";
// 			target.empty();
// 			$(this).children().each(function(){

// 				result += $(this).text() + " ";
// 			});

// 			target.text(result);

// 		});

// 	});

// });


//////////////////

//Exercice 2


$(document).ready(function(){

	var result="";

	//$("#listTable tbody").load("../../data/texte/tab_people.html", function(){});
		//Après que le tableau soit chargé CALLBACK.


		$.get("../../data/texte/address.xml", function(reponse){
		//url, adresse du fichier. Il va chercher mon fichier.
			$(reponse).find("member").each(function(){
				var enfants = $(this).children();
				var gender = $(this).attr("sex")
			})


		});


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