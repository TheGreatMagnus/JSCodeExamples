// Adds the completed effect

// $("#to-do-list").on("click", "li", function(){
// 	$(this).toggleClass('completed');
// });
//
// // Removing todo
// $("#to-do-list").on("click", "li span", function(e){
// 	e.stopPropagation();
// 	$(this).parent().fadeOut(function(){
// 		$(this).remove();
// 	})
// });
//
// // Adding the todo, using event handler?
// var nextTask = document.getElementbyId("new-task")
// nextTask.
// $("#new-task").keypress(function(e){
// 	if(e.which === 13){
// 		var task = $(this).val();
// 		$(this).val("");
// 		$("#to-do-list").append("<li> <span class='fa fa-close'></span> " + task + "</li>");
// 	}
// })

function addItem(text){

  var text = document.getElementById('new-task').value;
  if (text.length === 0) {

  } else {
    var newLi = document.createElement('li');
    var newTask = document.createTextNode(text);
    newLi.appendChild(newTask);
    var position = document.getElementsByTagName('ul')[0];
    position.appendChild(newLi);
    document.getElementById('new-task').value = '';
  }

};
