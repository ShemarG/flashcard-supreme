$(document).ready(function(){

	var subjects = JSON.parse(localStorage.subjectArr);
	var gotSubject = localStorage.setSubject;
	var currentArray = subjects[gotSubject];
	var questionsArray = currentArray.questions;
	var streak = 0;

	var rightFX = $("#right")[0];
	var wrongFX = $("#wrong")[0];

	var boost = ["GOOD JOB!", "CORRECT!", "KEEP IT UP!", "AWESOME!", "THAT'S RIGHT!", "SWEET!", "You're doing GREAT!", "NICE!"];

	var correct;

	$("head").append("<title>" + currentArray.displayName + "</title>");
	$("#title").append(currentArray.displayName);
	$("#title").css("color", currentArray.themeColor)
	$("#streak").append(streak);
	$("#streak").css("text-shadow", "-1.5px 0 " + currentArray.themeColor + ", 0 1.5px " + currentArray.themeColor + ", 1.5px 0 " + currentArray.themeColor + ", 0 -1.5px " + currentArray.themeColor);
	$("#questionDiv").css("color", currentArray.themeColor);
	$("#questionDiv").css("border-color", currentArray.themeColor);
	$(".num").css("color", currentArray.themeColor);
	$(".num").css("border-color", currentArray.themeColor);


	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
    	return array;
	}


	function generate(){
		var indexArray = [];
		var displayArray = [];
		var randomIndex = Math.floor(Math.random() * questionsArray.length);

		displayArray.push(randomIndex);
		correct = questionsArray[randomIndex].a;

		for(i=0; i<questionsArray.length; i++){
			
			if (i != displayArray[0]){

				indexArray.push(i);
			}else{}
		}
			
		shuffleArray(indexArray);

		for (i=0; i<3; i++){

			displayArray.push(indexArray[i]);
		}
		shuffleArray(displayArray);

		$("#questionDiv").append("<p id='question'>" + questionsArray[randomIndex].q + "</p>");

		for(i=0; i<displayArray.length; i++){
			$("#b" + (i+1)).append("<p>" + questionsArray[displayArray[i]].a + "</p>")
			$("#b" + (i+1)).css("background-image", "linear-gradient(rgba(255,255,255,0.5)," + currentArray.themeColor);
		}

	}

	generate();


	function check(button){
		var boostRand = boost[Math.floor(Math.random() * boost.length)];

	 	if(button.text() == correct){
	 		streak++;
	 		$(".answerButtons").empty();
	 		$("#questionDiv").empty();
	 		$("#streak").empty();
	 		$("#comment").empty();
	 		$("#streak").append("Streak: " + streak);
	 		$("#comment").append(boostRand);
	 		$("#comment").css("opacity", "1")
	 		$("#comment").hide();
	 		$("#comment").fadeIn("slow", function(){
	 			$("#comment").fadeTo("slow", 0)
	 		})
	 		rightFX.load();
			rightFX.play();
	 		generate();
	 	}else{
	 		streak = 0;
	 		$(".answerButtons").empty();
	 		$("#questionDiv").empty();
	 		$("#streak").empty();
	 		$("#comment").empty();
	 		$("#streak").append("Streak: " + streak);
	 		$("#comment").append("Incorrect, the correct answer was: " + correct);
	 		$("#comment").css("opacity", "1")
	 		$("#comment").hide();
	 		$("#comment").fadeIn("slow");
	 		wrongFX.load();
			wrongFX.play();
	 		generate();
	 	}
	}

	$(document).on("click", ".answerButtons", function(){
		check($(this));
	})

	$(document).keyup(function(event){
       if (event.keyCode == 49 || event.keyCode == 97){
       		$("#b1").click();
       }
 	});

 	$(document).keyup(function(event){
       if (event.keyCode == 50 || event.keyCode == 98){
       		$("#b2").click();
       }
 	});

 	$(document).keyup(function(event){
       if (event.keyCode == 51 || event.keyCode == 99){
       		$("#b3").click();
       }
 	});

 	$(document).keyup(function(event){
       if (event.keyCode == 52 || event.keyCode == 100){
       		$("#b4").click();
       }
 	});
	
})