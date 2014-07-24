$(document).ready(function(){
/* 	get the target section  */
	var box = document.querySelector('.boxWrapper');
/* 	array to store all deleted items */
	var deletedItems = new Array();
	var clickNum = 0;
/* 	listen to any clicks and run a function */
	box.addEventListener("click", function(e){
/* 		grab all the <li>  */
		var allLi = box.querySelectorAll('li');
/* 		store all the info of the clicked element */
		var clickedElement = e.target;
		console.log(e);
		if((e.target.className != "boxWrapper") && (allLi.length > 1)) {
			
			console.log(clickedElement);
			$(clickedElement).fadeOut('fast', function(){
/* 				console.log(this); */
				this.parentNode.removeChild(this);
				deletedItems.push(this.innerHTML);
/* 				console.log(deletedItems[clickNum].toString()); */
				var itemAdded = deletedItems[clickNum].toString();
				
				var elementAdded = $('<li> </li>').append(itemAdded);
				$('.removed').append(elementAdded);
				
				clickNum = clickNum + 1;

			});

			

			
		}
				
		
	} , false);
	
})