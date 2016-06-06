// fonction globale
var optValue = function (select) {
	select.options[select.selectedIndex].value;
}

// variables globales
	var gender= null; //=> sexe de l'utilisateur
	var member= []; // array contenant les membres


// click sur button action
	document.querySelector("#frm1 button:last-child").addEventListener("click",function(){
		//création objet et récupération contenu des champs
		
		var person={
			name: document.getElementById("name").value,
			firstname: document.getElementById("firstname").value,
			birthday: document.getElementById("dateOfBirth").value,
			sex: gender,
			address: {
					street: null, 
					zip: optValue(document.getElementById("zip")), 
					city: null
			}
		};
		member.push(person);
		//alert(member.length);

		var table = document.getElementById("personTable");
		var tBody = table.querySelector("tbody");
		var row = document.createElement("tr");


		row.innerHTML = "<td>" + person.name + "</td><td>" + person.firstname + "</td><td>" + person.birthday + "</td><td>" + gender + "</td>";
		//Je crée une nouvelle ligne avec les informations de la variable person.
		tBody.appendChild(row);
		//Je rajoute une ligne à ma table dans le html, apres les lignes déjà existantes.
		table.classList.remove("hidden");
		//Permet d'afficher la table. Enleve la classe hidden sur le html.

		//Permet de faire disparaître la table
			var reset= document.querySelector("button[type='reset']")
			//Crée l'action au click.
			reset.addEventListener ("click",function(){
				//J'ajoute la classe hidden.
				document.getElementById("personTable").classList.add("hidden");
		}, false);

	});
		



// click bouton(s) radio => attraper fieldset pour ajouter/retirer la classe hidden
		var radio = document.querySelectorAll('input[name="sex"]');
		for(var i= 0, longueur =radio.length ; i < longueur  ; i++){
			radio[i].addEventListener("click",function(){
				document.querySelector("fieldset:nth-of-type(2)").classList.add("hidden");
				document.querySelector("fieldset:nth-of-type(3)").classList.add("hidden");
				gender="Inconnu";
				switch(this.value){
					case "M" : 
						document.querySelector("fieldset:nth-of-type(2)").classList.remove("hidden");
						gender="Homme";
					break;	
					case "F" : 
						document.querySelector("fieldset:nth-of-type(3)").classList.remove("hidden");	
						gender="Femme";
					break;
				}
			});
		};	
 