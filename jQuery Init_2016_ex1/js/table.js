	var myContent = document.querySelectorAll('tbody td');
	var elementP = document.querySelector("h1+p")
		//console.log(myContent);

		for ( var i=0, l = myContent.length; i< l; i++){
				myContent[i].addEventListener('click',function (){
					alert(this.textContent);
					this.style.backgroundColor ="red";
					elementP.textContent = this.textContent;
				}, false);
			}

