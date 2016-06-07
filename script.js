// var username = prompt("What is your name?")
// $("h1").append(username+"'s To Do List")
$("h1").append("To Do List")

// document.getElementById('createNew').addEventListener('click', function(){
// 	var newItem = prompt("Create a new task:");
// 	var newItemText = document.createTextNode(newItem);
// 	var newP = document.createElement("p");
// 	newP.appendChild(newItemText);
// 	document.body.appendChild(newP);


// 	});



var count = 0;
var numCompleted = $(".complete").length;
$("#plural").text("s");


// $("#submit").click(function() {
// 	var newJob = document.getElementById("newObject").value;
// 	console.log(newJob)

// })




$("#submit").click(function () {
	// var newTask = prompt("Create a new to do:");

	var newJob = document.getElementById("newObject").value;
	var newCategory = document.getElementById("newCat").value;
	var myDiv = $("<div></div>");

	myDiv.addClass("testID"+count);
	myDiv.addClass("taskItem");
	myDiv.addClass("incomplete");
	// var workCheck = $("input[value='workcheck']:checked").length ? "Yes" : "No";
	// var playCheck = $("input[value='playcheck']:checked").length ? "Yes" : "No";

	// if (workCheck === "Yes") {$('.work').append(myDiv);}
	// else if (playCheck === "Yes") {$('.play').append(myDiv);}
	// else {alert("Please check a box!")}

	$('.list').append(myDiv);

	var newItem = $("<span><img class='box' src='http://www.clker.com/cliparts/d/o/Q/L/c/T/nxt-checkbox-unchecked-th.png' height='20' weight='20'/>"+" "+newJob+" "+"</span>");
	newItem.addClass("item"+count)
	newItem.addClass("checkbox")
	myDiv.append(newItem);

	var newTrash = $("<img id='delete' src='https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/256x256/plain/navigate_cross.png' height='25' weight='25'/>");
	// newTrash.css('opacity', '0.6');
	myDiv.append(newTrash);
	newTrash.click(function() {
	console.log("trash!");
	$(this).parent().remove();	
	});

	var catTag = $("<div>"+newCategory+"</div>");
	catTag.addClass("tag"+count)
	catTag.addClass("tags")
	myDiv.addClass(newCategory)
	if ($(newCat).val().length === 0) {myDiv.append(" ");}
	else {myDiv.append(catTag);};

	// catTag.click(function() {
	// console.log("tag!");
	// $(".taskItem:not(."+newCategory+")").slideUp();
	// });


	var catTagBottom = $("<div>"+newCategory+"</div>");
	catTagBottom.addClass("bottomTag")
	catTagBottom.addClass("tag"+newCategory)
	if ($(newCat).val().length === 0) {$('.tagsRow').append(" ");}
	else if ($('.tag'+newCategory).length === 0) {$('.tagsRow').append(catTagBottom);}
	else {$('.tagsRow').append(" ");};
	catTagBottom.click(function() {
	console.log("tag!");
	$('.taskItem').show();
	$(".taskItem:not(."+newCategory+")").slideUp();
	});

	$('.item'+count).click(function() {
	
	console.log("hello! click!");
	$(this).parent().toggleClass("complete");
	$(this).parent().toggleClass("incomplete");

	if ($(this).parent().hasClass("complete")) {numCompleted++;}
	else if ($(this).parent().hasClass("incomplete")) {numCompleted--;}
	else {console.log("surprise!")};

	$("#numberOfCompleted").text(numCompleted);
	if (numCompleted===1) {$("#plural").text("");}
	else {$("#plural").text("s")};
	$(".incomplete .checkbox .box").attr('src','http://www.clker.com/cliparts/d/o/Q/L/c/T/nxt-checkbox-unchecked-th.png');
	$(".complete .checkbox .box").attr('src','http://www.clker.com/cliparts/B/2/v/i/n/T/tick-check-box-th.png');	
	})
	
	count++;
	});

$("#numberOfCompleted").append(numCompleted)



$("#filterComplete").click(function () {
	$(".complete").slideDown()
	$(".incomplete").slideUp()
});


$("#filterIncomplete").click(function () {
	$(".complete").slideUp()
	$(".incomplete").slideDown()
});

$("#filterAll").click(function () {
	$(".complete").slideDown()
	$(".incomplete").slideDown()
});

$("#deleteComplete").click(function () {
	$(".complete").remove()
	$(".incomplete").slideDown()
});

$("#deleteAll").click(function () {
	$(".complete").remove()
	$(".incomplete").remove()
});

$("#resetCounter").click(function () {
	numCompleted = 0;
	$("#numberOfCompleted").text(numCompleted);
	if (numCompleted===1) {$("#plural").text();}
	else {$("#plural").text("s")};
});

$("#grey").click(function () {
	$("body").css('background-color','#C9C9C9')
	$(".buttons").css('background-color','#C9C9C9')
});

$("#green").click(function () {
	$("body").css('background-color','#A1D1B5')
	$(".buttons").css('background-color','#A1D1B5')
});

$("#yellow").click(function () {
	$("body").css('background-color','#F3DE8A')
	$(".buttons").css('background-color','#F3DE8A')
});

$("#red").click(function () {
	$("body").css('background-color','#EB9486')
	$(".buttons").css('background-color','#EB9486')
});

$("#purple").click(function () {
	$("body").css('background-color','#9697B7')
	$(".buttons").css('background-color','#9697B7')
});

$("#blue").click(function () {
	$("body").css('background-color','#9EB7BC')
	$(".buttons").css('background-color','#9EB7BC')
});





// "<div id=ID)> <img class='box incomplete' src=' ' height='30' weight='30'/> <img class='box complete' src=' ' height='30' weight='30' style='display: none'/></div>"+newTask+"<br><br>










