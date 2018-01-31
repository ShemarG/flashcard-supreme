$(document).ready(function(){

  var subjects = JSON.parse(localStorage.subjectArr);
  var gotSubject = localStorage.setSubject;
  var currentArray = subjects[gotSubject];

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


  $("body").prepend("\
    <center>\
      <div class='title'><h1>" + currentArray.displayName + "</h1></div>\
      <a href='index.html'>\
        <button class='menu'>Home</button>\
      </a>\
      <a href='#'>\
        <button class='menu'>Add Topic</button>\
      </a>\
      <a href='#'>\
        <button class='menu'>Study All</button>\
      </a>\
      <a href='index_review'>\
        <button class='menu'>Review All</button>\
      </a><br>\
      <select id='theme'>\
        <option data-color_rgb='rgba(255,255,255,0)'>Choose a theme color</option>\
      <select>\
      <button id='themeButton'><p id='check' style='color: green;'>&#x2714</p></button<br>\
    </center>\
  ")

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

})
