

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

		//Méthode à envoyer. 3 façons:

		var data = "name=Mulkay&firstname=Alain&dateOfBirth=24%2F02%2F1959&address=Rebecq&zip=0000";
		//wwwencoded.

		var objData = {"name":"Mulkay","firstname":"Alain"};
		//Ecriture objet.


		// $.get("../../data/texte/address.xml", function(reponse){
		// //url, adresse du fichier. Il va chercher mon fichier.
		// 	$(reponse).find("member").each(function(index){
		// 		//fonction qui me permet de dire ce que je vais faire avec le retour du serveur.
		// 		var enfants = $(this).children();
		// 		var gender = $(this).attr("sex")
		// 		$("#listTable tbody").append('<tr><td class="checkbox" ><input name="members" value="A01' + index + '" type="checkbox"/></td><td>' + enfants.eq(0).text() + '</td><td>' + enfants.eq(1).text() + '</td><td>' + enfants.eq(2).text() + '</td><td>' + gender + '</td></tr>')
		// 		//Je viens integrer les infos ou je veux dans ma page html.


		// })

		// });

		//Méthode GET ou POST.

		//GET: Limite de quantité de caractère. Jamais envoyer de données de formulaire avec le GET.

		//Post: Pas moyen de courcircuité. Remplir des données personnelles. Le POST est PLUS LOURD.


		//Transforme json en une chose javascript
		$.getJSON("../../data/texte/address.json",data,function(prout){
			$.each(prout, function(index,member){
			//index, numero de la case de l'array. Member c'est le contenu de la case. Ex: member.name -->appel le nom qui ets dans la case.


			$("#listTable tbody").append('<tr><td class="checkbox" ><input name="members" value="A01' + index + '" type="checkbox"/></td><td>' + member.name + '</td><td>' + member.firstName + '</td><td>' + member.birthday + '</td><td>' + member.sex + '</td></tr>');

			});

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




