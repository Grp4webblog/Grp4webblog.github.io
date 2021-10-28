// Opening a question in q-a
let questionBox = document.querySelectorAll(".question");
var openCount = 0;
var storedOpen;
var storedOpenAns = "";
//inserts and removes a class in the box
for (var i = 0; i < questionBox.length; i++) {
  questionBox[i].addEventListener("click", (e)=>{
    if (e.target.nodeName == "P" || e.target.nodeName == "I") {
      e.target.parentElement.classList.toggle('open');
      if (openCount == 0) {
        storedOpen = e.target.parentElement;
        openCount += 1;
      } else if (openCount == 1 && e.target.parentElement.id == storedOpen.id) {
        openCount -= 1;
        storedOpen = "";
      } else {
        storedOpen.classList.toggle('open');
        storedOpen = e.target.parentElement;
      }
    } else {
      e.target.classList.toggle('open');
      if (openCount == 0) {
        storedOpen = e.target;
        openCount += 1;
      } else if (openCount == 1 && e.target.id == storedOpen.id) {
        openCount -= 1;
        storedOpen = "";
      } else {
        storedOpen.classList.toggle('open');
        storedOpen = e.target;

      }
    }
    if (storedOpenAns != "") {
      storedOpenAns.style.opacity = 0;
    }
    // revealing to information
    if (storedOpen.id == document.getElementById('q1').id) {
      var a1 = document.getElementById("a1");
      a1.style.opacity = 1;
      storedOpenAns = a1;

    } else if (storedOpen.id == document.getElementById('q2').id) {
      var a2 = document.getElementById("a2");
      a2.style.opacity = 1;
      storedOpenAns = a2;

    } else if (storedOpen.id == document.getElementById('q3').id) {
      var a3 = document.getElementById("a3");
      a3.style.opacity = 1;
      storedOpenAns = a3;

    } else if (storedOpen.id == document.getElementById('q4').id) {
      var a4 = document.getElementById("a4");
      a4.style.opacity = 1;
      storedOpenAns = a4;

    } else if (storedOpen.id == document.getElementById('q5').id) {
      var a5 = document.getElementById("a5");
      a5.style.opacity = 1;
      storedOpenAns = a5;

    }
  });
}

// clicking the titles in action Table


let option = document.querySelectorAll(".obj-title");
var openTableCount = 0;
var storedOpenTable = "";
var openObj = "";
var openPerson = "";
var openRes = "";
var openAct = "";
var openDate = "";
var openBorder = 0;
var boxes = document.getElementsByClassName("table-cell");

for (var i = 0; i < option.length; i++) {
  option[i].addEventListener("click", (e)=>{
    if (e.target.nodeName == "SPAN" || e.target.nodeName == "IMG") {
      e.target.parentElement.classList.toggle('expand');
      if (openTableCount == 0) {
        storedOpenTable = e.target.parentElement;
        openTableCount += 1;
      } else if (openTableCount == 1 && e.target.parentElement.id == storedOpenTable.id) {
        openTableCount -= 1;
        storedOpenTable = "";
      } else {
        storedOpenTable.classList.toggle('expand');
        storedOpenTable = e.target.parentElement;
      }
    } else {
      e.target.classList.toggle('expand');
      if (openTableCount == 0) {
        storedOpenTable = e.target;
        openTableCount += 1;
      } else if (openTableCount == 1 && e.target.id == storedOpenTable.id) {
        openTableCount -= 1;
        storedOpenTable = "";
      } else {
        storedOpenTable.classList.toggle('expand');
        storedOpenTable = e.target;
      }
    }

    // removing previously shown content
    // if (storedOpenAns != "") {
    //   storedOpenAns.style.opacity = 0;
    // }
    if (openBorder != 0) {
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.border = "2px solid rgba(0, 0, 0, 0)";
        boxes[i].style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
      }
    }
    if (openObj != "") {
      openObj.style.opacity = 0;
    }
    if (openPerson != "") {
      openPerson.style.opacity = 0;
    }
    if (openRes != "") {
      openRes.style.opacity = 0;
    }
    if (openAct != "") {
      openAct.style.opacity = 0;
    }
    if (openDate != "") {
      openDate.style.opacity = 0;
    }
    // showing the table content
    //tesla
    if (storedOpenTable.id == document.getElementById('obj1').id) {
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.border = "2px solid #FF4C60";
        boxes[i].style.boxShadow = "0 0 10px rgba(255, 76, 96, 0.5)";
      }

      openBorder += 1;

      var obj = document.getElementById('g1');
      obj.style.opacity = 0.8;
      openObj = obj;

      var per = document.getElementById('p1');
      per.style.opacity = 0.8;
      openPerson = per;

      var res = document.getElementById('r1');
      res.style.opacity = 0.8;
      openRes = res;

      var act = document.getElementById('ac1');
      act.style.opacity = 0.8;
      openAct = act;

      var time = document.getElementById('t1');
      time.style.opacity = 0.8;
      openDate = time;

    } else if (storedOpenTable.id == document.getElementById('obj2').id) {
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.border = "2px solid #3A6FCE";
        boxes[i].style.boxShadow = "0 0 10px rgba(58, 111, 206, 0.5)";
      }

      openBorder += 1;

      var obj = document.getElementById('g2');
      obj.style.opacity = 0.8;
      openObj = obj;

      var per = document.getElementById('p2');
      per.style.opacity = 0.8;
      openPerson = per;

      var res = document.getElementById('r2');
      res.style.opacity = 0.8;
      openRes = res;

      var act = document.getElementById('ac2');
      act.style.opacity = 0.8;
      openAct = act;

      var time = document.getElementById('t2');
      time.style.opacity = 0.8;
      openDate = time;

    } else if (storedOpenTable.id == document.getElementById('obj3').id) {
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.border = "2px solid #6FB53F";
        boxes[i].style.boxShadow = "0 0 10px rgba(111, 181, 63, 0.5)";
      }

      openBorder += 1;

      var obj = document.getElementById('g3');
      obj.style.opacity = 0.8;
      openObj = obj;

      var per = document.getElementById('p3');
      per.style.opacity = 0.8;
      openPerson = per;

      var res = document.getElementById('r3');
      res.style.opacity = 0.8;
      openRes = res;

      var act = document.getElementById('ac3');
      act.style.opacity = 0.8;
      openAct = act;

      var time = document.getElementById('t3');
      time.style.opacity = 0.8;
      openDate = time;
    }
  });
}

// slide function
//
// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName('slide');
//
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//
//   slides[slideIndex-1].style.display = "block";
// }
