// fonction globale


// variables globales
	


// click sur button action
	
		
// click bouton(s) radio => attraper fieldset pour ajouter/retirer la classe hidden
		
 //récuperation de données formulaires.

$(document).ready(function(){

 var data = $("#frm1").serialize();

// alert(data);



		//Transforme json en une chose javascript
		$.getJSON("../../data/texte/cities.json",data,function(json){
			$.each(json, function(index,cities){
			//index, numero de la case de l'array. Member c'est le contenu de la case. Ex: member.name -->appel le nom qui ets dans la case.


			$("#zip").append("<option value=" + cities.zip + ">" + cities.zip + " " + cities.name + "</option>");

			});

		});

		});