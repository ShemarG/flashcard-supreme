$(document).ready(function(){

  var subjects = JSON.parse(localStorage.subjectArr);
  var gotSubject = localStorage.setSubject;
  var gotTopic = localStorage.setTopic;
  var currentArray = subjects[gotSubject];
  var currentTopic;
  var currentIndex = 0;

  for(i=0; i<currentArray.topics.length; i++){
    for (key in currentArray.topics[i]){
      var topic = currentArray.topics[i][key];

      if (topic.topicName === gotTopic){
        currentTopic = topic;
      } else {}
    }
  }

  $("head").append("<title>" + currentTopic.tDisplayName + "</title>")
  $("body").css("background-color", currentArray.color1)
  $("body").css("background-image", currentArray.themeData)

  $("body").append("\
			<div id='title'><h1>" + currentTopic.tDisplayName + "</h1></div>\
      <div id='nav'>\
        <a href='index.html'>\
          <button class='menu'>Home</button>\
        </a>\
        <a href='index_subject.html'>\
          <button class='menu'>Back</button>\
        </a>\
        <a href='index_edit.html'>\
          <button class='menu'>Edit</button>\
        </a>\
        <a href='#'>\
          <button class='menu'>Quiz</button>\
        </a>\
      </div>\
      <div id='container'>\
        <div class='arrows' id='prev'><p class='arrows-inner'>&#129188;</p></div>\
        <div style='background-color:" + currentTopic.color + "'; id='flashcard'>\
          <h2 class='content' id='question'></h2>\
          <h3 class='content' id='answer'></h3>\
          <p class='content' id='notes'></p>\
        </div>\
        <div class='arrows' id='next'><p class='arrows-inner'>&#129191;</p></div>\
      </div>\
	");

  console.log(currentTopic);

  function popFlashCard(index) {
    $("#question").empty();
    $("#answer").empty();
    $("#notes").empty();

    var card = currentTopic.questions[index]

    $("#question").append(card.q);
    $("#answer").append(card.a);
    $("#notes").append(card.n);
  }

  popFlashCard(currentIndex);

  $("#next").click(function(){
    if (currentIndex !== currentTopic.questions.length -1){
      currentIndex++;
      popFlashCard(currentIndex);
      console.log(currentIndex);
    } else {}
  })

  $("#prev").click(function(){
    if (currentIndex !== 0) {
      currentIndex--;
      popFlashCard(currentIndex);
      console.log(currentIndex);
    } else {}
  })

  $(document).keyup(function(event){
       if (event.keyCode == 39){
       		$("#next").click();
       }
 	});

	$(document).keyup(function(event){
       if (event.keyCode == 37){
       		$("#prev").click();
       }
 	});

})
