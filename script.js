const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a:"Hello to my land.",
        b:"Hey Text Mark Up Language",
        c:"HyperText Markup language",
        d:"HyperText Makeup Language",
        ans:"ans3"
    },
    {
        question: "Q2: What is the full form of Css?",
        a:"Hello to my Css.",
        b:"Hey Caste Mark Up Language",
        c:"HyperText Makeup Language",
        d:"Cascading Style Sheet",
        ans:"ans4"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a:"Hello to my HTTP.",
        b:"Hyper Text Transfer Protocol",
        c:"HyperText Markup language",
        d:"HyperText Makeup Language",
        ans:"ans2"
    },
    {
        question: "Q4: What is the full form of JS?",
        a:"JavaScript",
        b:"Hey Text Mark Up Language",
        c:"HyperText Markup language",
        d:"HyperText Makeup Language",
        ans:"ans1"
    }
]


var question = document.querySelector(".question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var submit = document.querySelector("#submit");
var answers = document.querySelectorAll(".answer");
var showScore = document.querySelector('#showScore');


var questionCount = 0;
var score = 0;
const loadQuestion= ()=> {
    
    let questionList = quizDB[questionCount];
 
    question.innerHTML = questionList.question;
    option1.innerHTML= questionList.a;
    option2.innerHTML= questionList.b;
    option3.innerHTML= questionList.c;
    option4.innerHTML= questionList.d;
}

loadQuestion();

const getAnswers = () => {
    let answer;
    answers.forEach((currAnsEle) => {
        if(currAnsEle.checked){
            answer = currAnsEle.id;
            // console.log(answer);
        }
    })
    return answer;
};
const deeSelect=()=>{
    answers.forEach((currAnsEle) => currAnsEle.checked = false);
}


submit.addEventListener('click',()=>{
     const checkedAns = getAnswers();
    //  console.log(checkedAns);
  
     if(checkedAns === quizDB[questionCount].ans){
       
        score++;
        
     };
   
     questionCount++;
     deeSelect();
     if(questionCount<quizDB.length){
        loadQuestion();
     }else{
        showScore.innerHTML = `<h3>your score is ${score}/${quizDB.length} </h3>
         <button class="btn" onclick="location.reload();" >Play Again </button>
        `;
        showScore.classList.remove('scorarea');
        

     }

 });