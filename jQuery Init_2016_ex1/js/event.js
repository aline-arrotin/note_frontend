window.addEventListener("load",function (){
	//click sur box 2  => modifie box1
	var box = document.querySelector("#ex1 div:nth-of-type(2)");
	box.addEventListener("click",function (){
		document.getElementById("box1").classList.toggle("dark");
		document.querySelector("#ex1 p:last-child").textContent="Nouveau Texte";
	}); 
	//click sur h1  => change titre section #ex1
	var bool = true;
	document.querySelector("h1").addEventListener("click",function(){
		var h2 = document.querySelector("#ex1 h2");
		if(bool){
			h2.textContent ="Hello";
			bool= false;	
		}
		else {
			h2.textContent ="Section Parent de Box 1 et Box 2";
			bool= true;		
		}	
	});	
});


