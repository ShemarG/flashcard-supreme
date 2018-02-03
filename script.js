$(document).ready(function(){

	// localStorage.clear()

	var currentArray;

	if (localStorage.subjectArr === undefined){
		$("body").prepend("\
			<h1>Flashcard Supreme</h1>\
			<center>\
				<a href='index_create.html'>\
					<button class='menu'>New Subject</button>\
				</a>\
				<a href='index_backup&restore.html'>\
					<button class='menu'>Backup & Restore</button>\
				</a>\
			</center>\
		")
	}else{
		var subjects = JSON.parse(localStorage.subjectArr);
		$("body").prepend("\
			<h1>Flashcard Supreme</h1>\
			<center>\
				<a href='index_create.html'>\
					<button class='menu'>New Subject</button>\
				</a>\
				<a href='index_backup&restore.html'>\
					<button class='menu'>Backup & Restore</button>\
				</a>\
			</center><br>\
		")

		for (var key in subjects){

			if(subjects.hasOwnProperty(key)){

				console.log(subjects[key].color1);

				if(subjects[key].brief === undefined || subjects[key].brief == ""){

					$("#container").append("\
						<button style='background-color:" + subjects[key].color1 + ";' data-sub='" + subjects[key].subjectName + "' class='subjectButton'><p class='subjTitle'>" + subjects[key].displayName + "</p></button>\
					")
					// $("#container").append("\
					// 	<div style='background-color:" + subjects[key].color1 + "; border-color:" + subjects[key].color1 + ";' data-sub='" + subjects[key].subjectName + "' class='subjectDiv'><p class='subjTitle'>" + subjects[key].displayName + "</p>\
					// 		<button style='background-color:" + subjects[key].color1 + ";' class='studyButton divButtons'>Quiz</button>\
					// 		<button style='background-color:" + subjects[key].color1 + ";' class='reviewButton divButtons'>Review</button>\
					// 		<button style='background-color:" + subjects[key].color1 + ";' class='editButton divButtons'>Edit</button>\
					// 	</div><br>\
					// ");
				}else{
					$("#container").append("\
						<button style='background-color:" + subjects[key].color1 + ";' data-sub='" + subjects[key].subjectName + "' class='subjectButton'><p class='subjTitle'>" + subjects[key].displayName + "</p><p class='brief'>" + subjects[key].brief + "</p></button>\
					")
					// $("#container").append("\
					// 	<div style='background-color:" + subjects[key].color1 + "; border-color:" + subjects[key].color1 + ";' data-sub='" + subjects[key].subjectName + "' class='subjectDiv'><p class='subjTitle'>" + subjects[key].displayName + "</p>\
					// 		<p class='brief'>" + subjects[key].brief + "</p>\
					// 		<button style='background-color:" + subjects[key].color1 + ";' class='studyButton divButtons'>Quiz</button>\
					// 		<button style='background-color:" + subjects[key].color1 + ";' class='reviewButton divButtons'>Review</button>\
					// 		<button style='background-color:" + subjects[key].color1 + ";' class='editButton divButtons'>Edit</button>\
					// 	</div><br>\
					// ");
				}
			}
		}

		console.log(subjects)

		$(".subjectButton").click(function(){
			var a = $(this).data("sub");
			localStorage.setSubject = a;
			window.location.href = "index_subject.html";
		});

		$(".editButton").click(function(){
			var a = $(this).parent();
			localStorage.setSubject = a.data("sub");
			window.location.href = "index_edit.html";

		});

		$(".reviewButton").click(function(){
			var a = $(this).parent();
			localStorage.setSubject = a.data("sub");
			window.location.href = "index_review.html";

		});

		$(".studyButton").click(function(){
			var a = $(this).parent();
			localStorage.setSubject = a.data("sub");
			currentArray = subjects[a.data("sub")];
			if(currentArray.questions.length < 6){
				alert("You need at least 6 questions to get started!")
			}else{
				window.location.href = "index_study.html";
			}

		});

		$(".divButtons").hide();
		$(".brief").hide();

		$(".divButtons").mouseenter(function(){
			$(this).css("background-image", "linear-gradient(rgba(255,255,255,1), rgba(255,255,0,0.8))")
		}).mouseleave(function(){
			// $(this).css("background-color", "white");
			$(this).css("background-image", "linear-gradient(rgba(255,255,255,1), rgba(148,77,255,0.8)")
		})

		$(".subjectButton").mouseenter(function(){
			$(this).find("button").stop(true, true).show(125);
			$(this).find(".brief").stop(true, true).show(125);
		}).mouseleave(function(){
			$(this).find("button").stop(true, true).hide(125);
			$(this).find(".brief").stop(true, true).hide(125);
		})

		$(".menu").mouseenter(function(){
			$(this).toggleClass("active");
		}).mouseleave(function(){
			$(this).toggleClass("active");
		})


	}


});
