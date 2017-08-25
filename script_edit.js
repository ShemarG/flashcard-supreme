$(document).ready(function(){

	var subjects = JSON.parse(localStorage.subjectArr);
	var gotSubject = localStorage.setSubject;
	var currentArray = subjects[gotSubject];

	var saveState;

	var themeArray = [
		{rgb:"rgb(255,51,51)", colorName:"Red"},
		{rgb:"rgb(255,102,51)", colorName:"Red-Orange"},
		{rgb:"rgb(255,153,51)", colorName:"Orange"},
		{rgb:"rgb(255,204,51)", colorName:"Yellow-Orange"},
		{rgb:"rgb(255,255,51)", colorName:"Yellow"},
		{rgb:"rgb(204,255,51)", colorName:"Yellow-Green"},
		{rgb:"rgb(153,255,51)", colorName:"Lime Green"},
		{rgb:"rgb(102,255,51)", colorName:"Light Green"},
		{rgb:"rgb(51,255,51)", colorName:"Green"},
		{rgb:"rgb(51,255,102)", colorName:"Pale Green"},
		{rgb:"rgb(51,255,153)", colorName:"Sea Green"},
		{rgb:"rgb(51,255,204)", colorName:"Aquamarine"},
		{rgb:"rgb(51,255,255)", colorName:"Cyan"},
		{rgb:"rgb(51,204,255)", colorName:"Skyblue"},
		{rgb:"rgb(51,153,255)", colorName:"Navy Blue"},
		{rgb:"rgb(51,102,255)", colorName:"Royal Blue"},
		{rgb:"rgb(51,51,255)", colorName:"Blue"},
		{rgb:"rgb(102,51,255)", colorName:"Indigo"},
		{rgb:"rgb(153,51,255)", colorName:"Purple"},
		{rgb:"rgb(204,51,255)", colorName:"Light Purple"},
		{rgb:"rgb(255,51,255)", colorName:"Pink"},
		{rgb:"rgb(255,51,204)", colorName:"Magenta"},
		{rgb:"rgb(255,51,153)", colorName:"Bubble Gum"},
		{rgb:"rgb(255,51,102)", colorName:"Fruit Punch"}
	];

	$(document).on("change", "body", function(){
		saveState = 1;
		$("#save").css("background-image", "linear-gradient(rgba(255,255,255,0.6), rgba(128,255,0,1))")
		$("#save").css("border", "1px solid black")
		console.log(saveState);
	})

	$("body").css("background-color", currentArray.themeColor);

	$("head").append("<title>" + currentArray.displayName + "</title>")

	$("body").append("\
		<center>\
			<h1>" + currentArray.displayName + "</h1>\
			<a href='index.html'>\
				<button id='homeButton'>Home</button>\
			</a>\
			<select id='theme'>\
				<option data-color_rgb='rgba(255,255,255,0)'>Choose a theme color</option>\
			<select><br>\
		</center>\
	");

	for (i=0; i<themeArray.length; i++){

		var getColor = $("body").css("background-color")
		var nospace = getColor.replace(/\s+/g, '');

		if(themeArray[i].rgb == nospace) {
			$("#theme").append("\
				<option selected='selected' data-color_rgb=" + themeArray[i].rgb + ">" + themeArray[i].colorName + "</option>\
			")
		}else{

			$("#theme").append("\
				<option data-color_rgb=" + themeArray[i].rgb + ">" + themeArray[i].colorName + "</option>\
			")
		}
		//console.log(themeArray[i].rgb)
	}


	$(document).on("change", "#theme", function(){
		var opt = $(this).find(":selected");
		var color = opt.data("color_rgb")
		$("body").css("background-color", color);
		currentArray.themeColor = color;
	})

	if (currentArray.brief !== undefined){
		$("body").append("\
			<center>\
				<textarea rows='2' cols='75' style='resize:none;' placeholder='Add a description' id='descript'>" + currentArray.brief + "</textarea>\
			</center>\
		")
	}else{
		$("body").append("\
			<center>\
				<textarea rows='2' cols='75' style='resize:none;' placeholder='Add a description' id='descript'></textarea>\
			</center>\
		")
	}



	if(currentArray.questions.length == 0){
		$("body").append("\
			<div id='container'>\
				<center>\
					<div class='questionDiv'>\
						<textarea class='qclass' id='q1' rows='6' cols='45' style='resize:none; 'placeholder='Enter question here' type='text'></textarea>\
						<textarea class='aclass' id='a1' rows='6' cols='45' style='resize:none; 'placeholder='Enter answer here'type='text'></textarea><br>\
						<button class='deleteButton'>Delete</button><br>\
					</div>\
				</center>\
			</div>\
			<center>\
				<div class='actions'>\
					<button id='addQuestion'>Add Question</button><button id='save'>Save</button><button id='deleteSubject'>Delete Subject</button><br>\
				</div>\
			</center>\
		")
	}else{

		$("body").append("\
			<div id='container'></div>\
			<center>\
				<div class='actions'>\
					<button id='addQuestion'>Add Question</button><button id='save'>Save</button><button id='deleteSubject'>Delete Subject</button><br>\
				</div>\
				<div id='share'>\
					<p>Share these flashcards with friends by sending them this data. Make sure you've saved already! (Ctrl/Cmd + A highlights it real nice.)</p>\
				</div>\
				<textarea rows='10' cols='100' id='export'></textarea>\
			</center>\
		")

		for (i = 0; i < currentArray.questions.length; i++) {
			$("#container").append("\
				<center>\
					<div class='questionDiv'>\
						<textarea class='qclass' rows='6' cols='45' style='resize:none; 'placeholder='Enter question here' type='text'>" + currentArray.questions[i].q + "</textarea>\
						<textarea class='aclass' rows='6' cols='45' style='resize:none; 'placeholder='Enter answer here'type='text'>" + currentArray.questions[i].a + "</textarea><br>\
						<button class='deleteButton'>Delete</button><br>\
					</div>\
				</center>\
			")
		};

	}

	$("#export").prop("readOnly", true);
	$("#export").val('{"' + currentArray.subjectName + '":' + JSON.stringify(currentArray) + '}')



function read(){
		var a = $("#container").find(".questionDiv");
		var vars = {};
		currentArray.questions = [];

		currentArray.brief = $("#descript").val();

		//generic counters
		var i1 = 0;
		var i2 = 0;

		//question module
  		$(".qclass").each(function(){
    		i1++;
    		$(this).attr("id", ("q"+ i1))
  		})

  		//answer module
  		$(".aclass").each(function(){
    		i2++;
    		$(this).attr("id", ("a"+ i2))
  		})

  		//reads the values
		for(i = 0; i < a.length; i++){

			if( $("#q"+ (i+1)).val() != "" || $("#q"+ (i+1)).attr("id") == "q1"){
				var question = $("#q" + (i+1)).val();
			}else{
				alert("There are empty fields, did not save. Enter a value or delete the field")
				return;
			}
			if ( $("#a"+ (i+1)).val() != "" || $("#a"+ (i+1)).attr("id") == "a1"){
				var answer = $("#a" + (i+1)).val()
			}else{
				alert("There are empty fields, did not save. Enter a value or delete the field")
				return;
			}

			vars["set" + (i+1)] = {q: question, a: answer}
		}

		//gets the object and updates question array
		for (var k in vars){
			if (vars.hasOwnProperty(k)){
				currentArray.questions.push(vars[k]);
			}else{}
		}
		subjects[gotSubject] = currentArray;

		localStorage.setItem("subjectArr", JSON.stringify(subjects))
		console.log(JSON.parse(localStorage.subjectArr))
	}

	//deletion module
	$("body").on("click", ".deleteButton", function(){
		var noofContainers = $(this).parents("#container");
		var index = noofContainers.children("center").length;

		if(index != 1){
			var a = $(this).parents("center");

			if($(this).siblings(".aclass").val() == "" && $(this).siblings(".qclass").val() == ""){
				a.remove();
			}else{
				a.remove();
				read();
			}
		}else{}
	})

	$("#deleteSubject").click(function(){
		var sure = confirm("Are you sure you want to delete this subject? You will lose all your data forever if you do!");

		if (sure == true){
			delete subjects[gotSubject];
			localStorage.setItem("subjectArr", JSON.stringify(subjects));
			window.location.href = "index.html";
		}else{}
	})

	function save(){
		saveState = 0;
		$("#save").css("background-image", "linear-gradient(rgba(255,255,255,0.6), rgba(194,194,214,1))");
		$("#save").css("border", "1px solid black");
		console.log(saveState);
		read();
	}

	$("body").on("click", "#save", function(){
		save();
		$("#export").val('{"' + currentArray.subjectName + '":' + JSON.stringify(currentArray) + '}');
	})

	window.onbeforeunload = function(){
		if (saveState == 1){
			return "You have unsaved changes, are you sure you want to leave?";
		}else{}
	}

	$("body").on("click", "#addQuestion", function(){
		var a = $("#container").children(".questionDiv");
		var b = a.length;
		var c = b+1;
		$("#container").append("\
			<center>\
				<div class='questionDiv' style='border: solid black 2px; padding:5px;'>\
					<textarea class='qclass' id='q" + c + "' rows='6' cols='45' style='resize:none; 'placeholder='Enter question here' type='text'></textarea>\
					<textarea class='aclass' id='a" + c + "' rows='6' cols='45' style='resize:none; 'placeholder='Enter answer here'type='text'></textarea><br>\
					<button class='deleteButton'>Delete</button><br>\
				</div>\
			</center>\
		")

	})

});
