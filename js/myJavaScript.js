
window.onscroll = function() {makeSticky()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function makeSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function pastFunc(){
  document.getElementById("aboutInfo").innerHTML = "In Summer 2018, I focused on expanding my computer science skills with online courses and small personal projects. At Colgate, I have taken courses in Data Structures, Computer Organization and Design, Discrete Mathematics, Multivariable Calculus, Linear Algebra, Number Theory, Computational Math, Math Modeling, and Differential Equations.";
  document.getElementById("past").style.color = "#990000";
  document.getElementById("past").style.fontWeight = "bold";
  document.getElementById("present").style.color = "#d37878";
  document.getElementById("present").style.fontWeight = "normal";
  document.getElementById("future").style.color = "#d37878";
  document.getElementById("future").style.fontWeight = "normal";
}
function presentFunc(){
  document.getElementById("aboutInfo").innerHTML = "I am a Junior at Colgate University double majoring in Computer Science and Applied Math. For the Fall 2019 semester, I am enrolled in Operating Systems, Analysis of Algorithms, Numerical Analysis, and Real Analysis. I am a Fellow with Rewriting the Code (RTC), which is an organization that encourages women throughout their tech careers. At Colgate, I am captain of the cheerleading team, and I am a member of Colgate Coders, the aerial arts club, and Delta Delta Delta.";
  document.getElementById("present").style.color = "#990000";
  document.getElementById("present").style.fontWeight = "bold";
  document.getElementById("past").style.color = "#d37878";
  document.getElementById("past").style.fontWeight = "normal";
  document.getElementById("future").style.color = "#d37878";
  document.getElementById("future").style.fontWeight = "normal";
}
function futureFunc(){
  document.getElementById("aboutInfo").innerHTML = "I will be studying abroad in Wollongong, Australia for the Spring 2020 semester with a Colgate study group focused on Computer Science. In the near future I plan to: develop my JavaScript skills with a mobile version of this website, explore Python machine learning libraries, compete in Kaggle competitions, and upload more projects to my GitHub. I hope to either continue with Sandia National Labs or join a startup with a focus on Data Science and Machine Learning";
  document.getElementById("future").style.color = "#990000";
  document.getElementById("future").style.fontWeight = "bold";
  document.getElementById("past").style.color = "#d37878";
  document.getElementById("past").style.fontWeight = "normal";
  document.getElementById("present").style.color = "#d37878";
  document.getElementById("present").style.fontWeight = "normal";
}

function edFunc(){
  lst = document.getElementsByClassName("resOpt");
  for (i = 0; i < lst.length; i++){
    lst[i].setAttribute("style", "color: #d37878; font-weight: normal;");
  }
  document.getElementById("educ").style.color = "#990000";
  document.getElementById("educ").style.fontWeight = "bold";
  lst2 = document.getElementsByClassName("resume");
  for (i = 0; i < lst2.length; i++){
    lst2[i].style.display = "none";
  }
  lst3 = document.getElementsByClassName("educ");
  for (i = 0; i < lst3.length; i++){
    lst3[i].style.display = "flex";
  }
}
function expFunc(){
  lst = document.getElementsByClassName("resOpt");
  for (i = 0; i < lst.length; i++){
    lst[i].setAttribute("style", "color: #d37878; font-weight: normal;");
  }
  document.getElementById("workExp").style.color = "#990000";
  document.getElementById("workExp").style.fontWeight = "bold";
  lst2 = document.getElementsByClassName("resume");
  for (i = 0; i < lst2.length; i++){
    lst2[i].style.display = "none";
  }
  lst3 = document.getElementsByClassName("exp");
  for (i = 0; i < lst3.length; i++){
    lst3[i].style.display = "flex";
  }
}
function techFunc(){
  lst = document.getElementsByClassName("resOpt");
  for (i = 0; i < lst.length; i++){
    lst[i].setAttribute("style", "color: #d37878; font-weight: normal;");
  }
  document.getElementById("techSkills").style.color = "#990000";
  document.getElementById("techSkills").style.fontWeight = "bold";
  lst2 = document.getElementsByClassName("resume");
  for (i = 0; i < lst2.length; i++){
    lst2[i].style.display = "none";
  }
  lst3 = document.getElementsByClassName("tech");
  for (i = 0; i < lst3.length; i++){
    lst3[i].style.display = "flex";
  }
}
function actFunc(){
  lst = document.getElementsByClassName("resOpt");
  for (i = 0; i < lst.length; i++){
    lst[i].setAttribute("style", "color: #d37878; font-weight: normal;");
  }
  document.getElementById("activities").style.color = "#990000";
  document.getElementById("activities").style.fontWeight = "bold";
  lst2 = document.getElementsByClassName("resume");
  for (i = 0; i < lst2.length; i++){
    lst2[i].style.display = "none";
  }
  lst3 = document.getElementsByClassName("act");
  for (i = 0; i < lst3.length; i++){
    lst3[i].style.display = "flex";
  }
}

function pyFunc(){
  lst = document.getElementsByClassName("projOpt");
  for (i = 0; i < lst.length; i++){
    lst[i].setAttribute("style", "color: #d37878; font-weight: normal;");
  }
  document.getElementById("python").style.color = "#990000";
  document.getElementById("python").style.fontWeight = "bold";
  lst2 = document.getElementsByClassName("proj");
  for (i = 0; i < lst2.length; i++){
    lst2[i].style.display = "none";
  }
  lst3 = document.getElementsByClassName("python");
  for (i = 0; i < lst3.length; i++){
    lst3[i].style.display = "flex";
  }
}
function matlabFunc(){
  lst = document.getElementsByClassName("projOpt");
  for (i = 0; i < lst.length; i++){
    lst[i].setAttribute("style", "color: #d37878; font-weight: normal;");
  }
  document.getElementById("matlab").style.color = "#990000";
  document.getElementById("matlab").style.fontWeight = "bold";
  lst2 = document.getElementsByClassName("proj");
  for (i = 0; i < lst2.length; i++){
    lst2[i].style.display = "none";
  }
  lst3 = document.getElementsByClassName("matlab");
  for (i = 0; i < lst3.length; i++){
    lst3[i].style.display = "flex";
  }
}
function htmlFunc(){
  lst = document.getElementsByClassName("projOpt");
  for (i = 0; i < lst.length; i++){
    lst[i].setAttribute("style", "color: #d37878; font-weight: normal;");
  }
  document.getElementById("htmlcssjs").style.color = "#990000";
  document.getElementById("htmlcssjs").style.fontWeight = "bold";
  lst2 = document.getElementsByClassName("proj");
  for (i = 0; i < lst2.length; i++){
    lst2[i].style.display = "none";
  }
  lst3 = document.getElementsByClassName("html");
  for (i = 0; i < lst3.length; i++){
    lst3[i].style.display = "flex";
  }
}
function javaFunc(){
  lst = document.getElementsByClassName("projOpt");
  for (i = 0; i < lst.length; i++){
    lst[i].setAttribute("style", "color: #d37878; font-weight: normal;");
  }
  document.getElementById("java").style.color = "#990000";
  document.getElementById("java").style.fontWeight = "bold";
  lst2 = document.getElementsByClassName("proj");
  for (i = 0; i < lst2.length; i++){
    lst2[i].style.display = "none";
  }
  lst3 = document.getElementsByClassName("java");
  for (i = 0; i < lst3.length; i++){
    lst3[i].style.display = "flex";
  }
}
function mathFunc(){
  lst = document.getElementsByClassName("projOpt");
  for (i = 0; i < lst.length; i++){
    lst[i].setAttribute("style", "color: #d37878; font-weight: normal;");
  }
  document.getElementById("appliedmath").style.color = "#990000";
  document.getElementById("appliedmath").style.fontWeight = "bold";
  lst2 = document.getElementsByClassName("proj");
  for (i = 0; i < lst2.length; i++){
    lst2[i].style.display = "none";
  }
  lst3 = document.getElementsByClassName("apmath");
  for (i = 0; i < lst3.length; i++){
    lst3[i].style.display = "flex";
  }
}
