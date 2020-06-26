
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
  document.getElementById("aboutInfo").innerHTML = "In the Spring 2020 semester, I was lucky enough to study abroad in Wollongong, NSW, Australia. I was enrolled in Machine Learning, Statistical Learning, and Cryptography. Unfortunately, I was sent home after 5 weeks due to the COVID-19 pandemic. However, I had an amazing experience while I was there, and I plan to return someday soon. In Summer 2019, I was a technical intern at Sandia National Labs in the Electrical Science & Experiments group. In Summer 2018, I focused on expanding my computer science skills with online courses and small personal projects. At Colgate, I have taken courses in Data Structures, Computer Organization and Design, Discrete Mathematics, Multivariable Calculus, Linear Algebra, Number Theory, Computational Math, Math Modeling, and Differential Equations.";
  document.getElementById("past").style.color = "#990000";
  document.getElementById("past").style.fontWeight = "bold";
  document.getElementById("present").style.color = "#d37878";
  document.getElementById("present").style.fontWeight = "normal";
  document.getElementById("future").style.color = "#d37878";
  document.getElementById("future").style.fontWeight = "normal";
}
function presentFunc(){
  document.getElementById("aboutInfo").innerHTML = "I'm a senior at Colgate University graduating in May 2021, double majoring in Computer Science and Applied Math. For the Fall 2020 semester, I am enrolled in Data Analysis, Environmental Data Science, Applied Math Seminar, and Dance Studies. I'm volunteering as a campaign data analyst with Bluebonnet Data, and plan to continue doing so for years to come. I'm a Fellow for my second year with Rewriting the Code (RTC), which is an organization that encourages women throughout their tech careers. At Colgate, I am captain of the cheerleading team, and I am a member of Colgate Coders, the Colgate Data Society, and Delta Delta Delta.";
  document.getElementById("present").style.color = "#990000";
  document.getElementById("present").style.fontWeight = "bold";
  document.getElementById("past").style.color = "#d37878";
  document.getElementById("past").style.fontWeight = "normal";
  document.getElementById("future").style.color = "#d37878";
  document.getElementById("future").style.fontWeight = "normal";
}
function futureFunc(){
  document.getElementById("aboutInfo").innerHTML = "I will be intensely searching for a full time opportunity in Data Science and Machine Learning for after my graduation. I plan to pursue an online Master's Degree in Machine Learning while starting my full time job.";
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
    lst[i].setAttribute("style", "color: #8d85d4; font-weight: normal;");
  }
  document.getElementById("educ").style.color = "#4d43ab";
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
    lst[i].setAttribute("style", "color: #8d85d4; font-weight: normal;");
  }
  document.getElementById("workExp").style.color = "#4d43ab";
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
    lst[i].setAttribute("style", "color: #8d85d4; font-weight: normal;");
  }
  document.getElementById("techSkills").style.color = "#4d43ab";
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
    lst[i].setAttribute("style", "color: #8d85d4; font-weight: normal;");
  }
  document.getElementById("activities").style.color = "#4d43ab";
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
    lst[i].setAttribute("style", "color: #65a686; font-weight: normal;");
  }
  document.getElementById("python").style.color = "#286145";
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
    lst[i].setAttribute("style", "color: #65a686; font-weight: normal;");
  }
  document.getElementById("matlab").style.color = "#286145";
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
function rFunc(){
  lst = document.getElementsByClassName("projOpt");
  for (i = 0; i < lst.length; i++){
    lst[i].setAttribute("style", "color: #65a686; font-weight: normal;");
  }
  document.getElementById("r").style.color = "#286145";
  document.getElementById("r").style.fontWeight = "bold";
  lst2 = document.getElementsByClassName("proj");
  for (i = 0; i < lst2.length; i++){
    lst2[i].style.display = "none";
  }
  lst3 = document.getElementsByClassName("r");
  for (i = 0; i < lst3.length; i++){
    lst3[i].style.display = "flex";
  }
}
function htmlFunc(){
  lst = document.getElementsByClassName("projOpt");
  for (i = 0; i < lst.length; i++){
    lst[i].setAttribute("style", "color: #65a686; font-weight: normal;");
  }
  document.getElementById("htmlcssjs").style.color = "#286145";
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
    lst[i].setAttribute("style", "color: #65a686; font-weight: normal;");
  }
  document.getElementById("java").style.color = "#286145";
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
    lst[i].setAttribute("style", "color: #65a686; font-weight: normal;");
  }
  document.getElementById("appliedmath").style.color = "#286145";
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
