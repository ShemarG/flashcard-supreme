$(document).ready(function(){

  var subjects = JSON.parse(localStorage.subjectArr);
  var gotSubject = localStorage.setSubject;
  var currentArray = subjects[gotSubject];

  var themeObject = {
    brickWall: {
      name: "Brick Wall",
      tag: "brick-wall",
      url: "data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239C92AC' fill-opacity='0.7'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
    },
    hexagons: {
      name: "Hexagons",
      tag: "hexagons",
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.7' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
    },
    circuitBoard: {
      name: "Circuit Board",
      tag: "circuit-board",
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%239C92AC' fill-opacity='0.7' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E"
    },
    fourPointStars: {
      name: "4 Point Stars",
      tag: "4-point-stars",
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%239C92AC' fill-opacity='0.7'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E"
    }
  }

  console.log(themeObject);

  var colorArray = [
		{hex:"ff3333", rgb:"rgb(255,51,51)", colorName:"Red"},
		{hex:"ff6633", rgb:"rgb(255,102,51)", colorName:"Red-Orange"},
		{hex:"ff9933", rgb:"rgb(255,153,51)", colorName:"Orange"},
		{hex:"ffcc33", rgb:"rgb(255,204,51)", colorName:"Yellow-Orange"},
		{hex:"ffff33", rgb:"rgb(255,255,51)", colorName:"Yellow"},
		{hex:"ccff33", rgb:"rgb(204,255,51)", colorName:"Yellow-Green"},
		{hex:"99ff33", rgb:"rgb(153,255,51)", colorName:"Lime Green"},
		{hex:"66ff33", rgb:"rgb(102,255,51)", colorName:"Light Green"},
		{hex:"33ff33", rgb:"rgb(51,255,51)", colorName:"Green"},
		{hex:"33ff66", rgb:"rgb(51,255,102)", colorName:"Pale Green"},
		{hex:"33ff99", rgb:"rgb(51,255,153)", colorName:"Sea Green"},
		{hex:"33ffcc", rgb:"rgb(51,255,204)", colorName:"Aquamarine"},
		{hex:"33ffff", rgb:"rgb(51,255,255)", colorName:"Cyan"},
		{hex:"33ccff", rgb:"rgb(51,204,255)", colorName:"Skyblue"},
		{hex:"3399ff", rgb:"rgb(51,153,255)", colorName:"Navy Blue"},
		{hex:"3366ff", rgb:"rgb(51,102,255)", colorName:"Royal Blue"},
		{hex:"3333ff", rgb:"rgb(51,51,255)", colorName:"Blue"},
		{hex:"6633ff", rgb:"rgb(102,51,255)", colorName:"Indigo"},
		{hex:"9933ff", rgb:"rgb(153,51,255)", colorName:"Purple"},
		{hex:"cc33ff", rgb:"rgb(204,51,255)", colorName:"Light Purple"},
		{hex:"ff33ff", rgb:"rgb(255,51,255)", colorName:"Pink"},
		{hex:"ff33cc", rgb:"rgb(255,51,204)", colorName:"Magenta"},
		{hex:"ff3399", rgb:"rgb(255,51,153)", colorName:"Bubble Gum"},
		{hex:"ff3366", rgb:"rgb(255,51,102)", colorName:"Fruit Punch"}
	];

  $("body").css("background-color", currentArray.color1);

  for (var key in themeObject){
    if (currentArray.theme === themeObject[key].tag){
      var gotTheme = themeObject[key].url;
      $("body").css("background-image", 'url("' + gotTheme + '")');
    }
  }

  function setThemeColor() {
    for (i=0; i<colorArray.length; i++){
      if (colorArray[i].rgb === currentArray.color2){
        var string = $("body").css("background-image");
        var fillPos = string.search("fill='%23")
        var fill = string.substr(fillPos+9, 6)
        var change = string.replace("%23" + fill, "%23" + colorArray[i].hex)
        $("body").css("background-image", change);
      }
    }
  }

  setThemeColor();



  $("body").prepend("\
    <center>\
      <div class='title'><h1>" + currentArray.displayName + "</h1></div>\
      <a href='index.html'>\
        <button class='menu'>Home</button>\
      </a>\
      <a href='index_tCreate.html'>\
        <button class='menu'>Add Topic</button>\
      </a>\
      <a href='#'>\
        <button class='menu'>Study All</button>\
      </a>\
      <a href='index_review'>\
        <button class='menu'>Review All</button>\
      </a><br>\
      <select id='theme'>\
        <option>Choose a pattern</option>\
      <select>\
      <select id='color1'>\
        <option data-color_rgb='rgba(255,255,255,0)'>Choose a background color</option>\
      <select>\
      <select id='color2'>\
        <option>Choose a theme color</option>\
      <select>\
      <button id='color1Button'><p id='check' style='color: green;'>&#x2714</p></button<br>\
    </center>\
  ")

for (var key in themeObject){

  if (themeObject[key].tag === currentArray.theme){
    $("#theme").append("\
      <option selected='selected' data-theme=" + themeObject[key].tag + ">" + themeObject[key].name + "</option>\
    ")
  } else {
    $("#theme").append("\
      <option data-theme=" + themeObject[key].tag + ">" + themeObject[key].name + "</option>\
    ")
  }
}

for (i=0; i<colorArray.length; i++){

  var getColor = $("body").css("background-color")
  var nospace = getColor.replace(/\s+/g, '');

  if(colorArray[i].rgb == nospace) {
    $("#color1").append("\
      <option selected='selected' data-color1_rgb=" + colorArray[i].rgb + ">" + colorArray[i].colorName + "</option>\
    ")
  }else{

    $("#color1").append("\
      <option data-color1_rgb=" + colorArray[i].rgb + ">" + colorArray[i].colorName + "</option>\
    ")
  }
  //console.log(colorArray[i].rgb)
}

for (i=0; i<colorArray.length; i++){
  if (colorArray[i].rgb === currentArray.color2){
    $("#color2").append("\
      <option selected='selected' data-color2_rgb=" + colorArray[i].rgb + ">" + colorArray[i].colorName + "</option>\
    ")
  } else {
    $("#color2").append("\
      <option data-color2_rgb=" + colorArray[i].rgb + ">" + colorArray[i].colorName + "</option>\
    ")
  }
}

for (i=0; i<currentArray.topics.length; i++){
  for (var key in currentArray.topics[i]){
    var topic = currentArray.topics[i][key]

    if (topic.breif === undefined || topic.brief == ""){
      $("#container").append("\
      	<div data-sub='" + topic.topicName + "' class='topDiv'><p class='topTitle'>" + topic.tDisplayName + "</p>\
      		<button class='studyButton topButtons'>Quiz</button>\
      		<button class='reviewButton topButtons'>Review</button>\
      		<button class='editButton topButtons'>Edit</button>\
      	</div><br>\
      ");
    } else {
      $("#container").append("\
      	<div data-sub='" + topic.topicName + "' class='topDiv'><p class='topTitle'>" + topic.tDisplayName + "</p>\
      		<p class='brief'>" + topic.brief + "</p>\
      		<button class='studyButton topButtons'>Quiz</button>\
      		<button class='reviewButton topButtons'>Review</button>\
      		<button class='editButton topButtons'>Edit</button>\
      	</div><br>\
      ");
    }
  }
}

$("#color1Button").click(function(){
  currentArray.themeData = $("body").css("background-image");
  localStorage.setItem("subjectArr", JSON.stringify(subjects))
  $("#color1Button").css("background-image", "linear-gradient(rgba(255,255,255,0.6), rgb(101, 213, 95))")
  $("#check").css("color", "green")
})


$(document).on("change", "#theme", function(){
  var opt = $(this).find(":selected");
  var theme = opt.data("theme");

  for (var key in themeObject){
    if (themeObject[key].tag === theme){
      $("body").css("background-image", 'url("' + themeObject[key].url + '")');
        currentArray.theme = themeObject[key].tag;
    } else {}
  }

  $("#color1Button").css("background-image", "linear-gradient(rgba(255,255,255,0.6), rgba(255, 0, 0, 0.6))")
  $("#check").css("color", "red")

  })

$(document).on("change", "#color1", function(){
  var opt = $(this).find(":selected");
  var color = opt.data("color1_rgb")
  $("body").css("background-color", color);
  currentArray.color1 = color;
  $("#color1Button").css("background-image", "linear-gradient(rgba(255,255,255,0.6), rgba(255, 0, 0, 0.6))")
  $("#check").css("color", "red")

  })

$(document).on("change", "#color2", function(){
  var opt = $(this).find(":selected");
  var color = opt.data("color2_rgb")

  for (i=0; i<colorArray.length; i++){
    if (colorArray[i].rgb === color){
      var string = $("body").css("background-image");
      var fillPos = string.search("fill='%23")
      var fill = string.substr(fillPos+9, 6)
      var change = string.replace("%23" + fill, "%23" + colorArray[i].hex)
      $("body").css("background-image", change);
    }
  }

  currentArray.color2 = color;
  $("#color1Button").css("background-image", "linear-gradient(rgba(255,255,255,0.6), rgba(255, 0, 0, 0.6))")
  $("#check").css("color", "red")

  })

  console.log(currentArray);

})
