$(document).ready(function(){

	var currentArray;

	if (localStorage.subjectArr === undefined){
		$("body").prepend("\
			<h1>Flashcard Supreme</h1>\
			<center>\
				<a href='index_create.html'>\
					<button class='menu'>New subject/Topic</button>\
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
					<button class='menu'>New subject/Topic</button>\
				</a>\
				<a href='index_backup&restore.html'>\
					<button class='menu'>Backup & Restore</button>\
				</a>\
			</center><br>\
		")

		for (var key in subjects){

			if(subjects.hasOwnProperty(key)){

				console.log(subjects[key].themeColor);

				if(subjects[key].brief === undefined || subjects[key].brief == ""){
					$("#container").append("\
						<div style='background-color:" + subjects[key].themeColor + "; border-color:" + subjects[key].themeColor + ";' data-sub='" + subjects[key].subjectName + "' class='subjectDiv'><p class='subjTitle'>" + subjects[key].displayName + "</p>\
							<button style='background-color:" + subjects[key].themeColor + ";' class='studyButton divButtons'>Study</button>\
							<button style='background-color:" + subjects[key].themeColor + ";' class='editButton divButtons'>Edit</button>\
						</div><br>\
					");
				}else{
					$("#container").append("\
						<div style='background-color:" + subjects[key].themeColor + "; border-color:" + subjects[key].themeColor + ";' data-sub='" + subjects[key].subjectName + "' class='subjectDiv'><p class='subjTitle'>" + subjects[key].displayName + "</p>\
							<p class='brief'>" + subjects[key].brief + "</p>\
							<button style='background-color:" + subjects[key].themeColor + ";' class='studyButton divButtons'>Study</button>\
							<button style='background-color:" + subjects[key].themeColor + ";' class='editButton divButtons'>Edit</button>\
						</div><br>\
					");
				}
			}
		}

		$(".editButton").click(function(){
			var a = $(this).parent();
			localStorage.setSubject = a.data("sub");
			console.log(localStorage.setSubject);
			currentArray = subjects[a];
			window.location.href = "index_edit.html";

		});

		$(".studyButton").click(function(){
			var a = $(this).parent();
			localStorage.setSubject = a.data("sub");
			console.log(localStorage.setSubject);
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

		$(".subjectDiv").mouseenter(function(){
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
