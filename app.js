
var div_contained_ques, h4_contain_endpage,question;
var options,optn,opt_no_1,opt_no_2,opt_no_3,opt_no_4;
var counter = 0;
var corrects = 0;
var scores = 0;
var arrray_questiuons = [
    {
        question: "c.p.u stand for?",
       
          a: "central programming unit",
          b: "central processing universal",
          c: "central processing unit",
          d: "centralized processing unit",
          answer: "c"
      },
      {
        question: "what is color of mango?",
       
          a: "Red",
          b: "Green",
          c: "yellow",
          d: "blue",
          answer: "c"
      },
      {
        question: "js stands for?",
       
          a: "java Script",
          b: "java source",
          c: "jawa script",
          d: "jawa serires",
          answer: "a"
      },
      {
        question: "who is the prime minister of pakistan?",
       
          a: "ARIF ALVI",
          b: "IMRAN KHAN",
          c: "DONALD TRUMP",
          d: "BENEZIR BHUTTO",
          answer: "b"
      },
      {
        question: "When pakistan came into being?",
        
          a: "11 august 1947",
          b: "14 august 1977",
          c: "14 november 1947",
          d: "14 august 1947",
          answer: "d"
      }
];



function get_questions(){
    div_contained_ques = document.getElementById("div_contained_ques");
    if(counter >= arrray_questiuons.length){
    
      div_contained_ques.innerHTML = "<h2>You answered "+corrects+ " of "+arrray_questiuons.length+" questions correctly</h2>"+"<br>"+"<h2>You scores: "+scores+ " </h2><br><h2 class='timeused'>Time used  "+minutes.innerHTML+" : "+seconds.innerHTML;
     div_contained_ques.innerHTML += "<a href='index.html'><button class='backbtn '>Back</button></a><br>";
      document.getElementById("h4_contain_endpage").innerHTML = "<h3 class='completed'>QUIZZ COMPLETED </h3><br>";
      if (scores>30) {
        document.getElementById("h4_contain_endpage").innerHTML += 
        "<h3 class='congrats'>CONGRAGULATIONS!!! </h3><br>";
         
       }
      document.getElementById("min").innerHTML = "00";
      document.getElementById("sec").innerHTML = "00";
    
     
      counter = 0;
      corrects = 0;
    clearTimeout(interval);
      return false;
  }
 

   
    question = arrray_questiuons[counter].question;
    opt_no_1 = arrray_questiuons[counter].a;
    opt_no_2 = arrray_questiuons[counter].b;
    opt_no_3 = arrray_questiuons[counter].c;
    opt_no_4 = arrray_questiuons[counter].d;
    div_contained_ques.innerHTML = "<h3 class='question_html'>"+question+"</h3>";
    div_contained_ques.innerHTML += "<label > <input type='radio' name='options' value='a'>"+opt_no_1+"</label>";
    div_contained_ques.innerHTML += "<label> <input type='radio' name='options' value='b'>"+opt_no_2+"</label>";
    div_contained_ques.innerHTML += "<label> <input type='radio' name='options' value='c'>"+opt_no_3+"</label>";
    div_contained_ques.innerHTML += "<label> <input type='radio' name='options' value='d'>"+opt_no_4+"</label>"; 
    div_contained_ques.innerHTML +="<button class='nextbtn' onclick='validate()'>Next</button>";

console.log(div_contained_ques)
    document.getElementById("h4_contain_endpage").innerHTML = "<h3 class='nextquestion'>Questions "+ (counter+1)+ " of "+ arrray_questiuons.length+"</h3>";

 
   
}
function validate(){
   
    options = document.getElementsByName("options");
    for(i=0; i<options.length;i++){
        if(options[i].checked){
            optn = options[i].value
        }
    }
    if(optn == arrray_questiuons[counter].answer){
        corrects++;
         scores += 10;
    }
    counter++;
    get_questions();



}
 
window.addEventListener("load",get_questions);







var min = 0;
var sec = 0;
var msec = 0;
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var interval;
function timer(){
    sec++;
  seconds.innerHTML = sec;
    if(sec >=60){
        min++
        minutes.innerHTML = min;
        sec = 0
    } 
   if(minutes.innerHTML==1 && seconds.innerHTML==30){
       clearTimeout(interval);
    
       div_contained_ques.innerHTML = "<h2>Your correct answers are "+corrects+ " of "+arrray_questiuons.length+" </h2>"
       +"<br>"+"<h2>You got "+scores+ " scores</h2>";
       div_contained_ques.innerHTML += "<a href='index.html'><button class='backbtn'>TRY AGAIN</button></a><br>";
        document.getElementById("h4_contain_endpage").innerHTML = "<h3 class='completed'>TIMES UP !!</h3>"; 
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
       
   }
}
interval = setInterval(timer,1000);








