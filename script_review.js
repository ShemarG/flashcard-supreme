$(document).ready(function(){

  var subjects = JSON.parse(localStorage.subjectArr);
  var gotSubject = localStorage.setSubject;
  var currentArray = subjects[gotSubject];

  console.log(currentArray);

})
