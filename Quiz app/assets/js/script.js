let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;


let questions = quiz.sort(function() {
    return 0.5 - Math.random();
});
let totalQuestion = questions.length;

$(function() {
    //timer code start from here
    let totalTime = 300; //300 seconds for timer
    let min = 0;
    let sec = 0;
    let counter = 0;

    let timer = setInterval(function() {
        counter++;
        min = Math.floor((totalTime - counter)); //calculating min
        sec = totalTime - min - counter;
        $(".timeBox span").text(min);
        if (counter == totalTime) {
            alert("Time's up. press ok to show the result");
            result();
            clearInterval(timer)
        }
    }, 1000); //timer set for 1 sec interval
    //timer code end  here


    //print question
    printQuestion(index);
});

function printQuestion(i) {

    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);


} //function to print question end


//function to print answer start

function checkAnswer(option) {

    attempt++;

    let optionClicked = $(option).data("opt");

    console.log(questions[index]);

    if (optionClicked == questions[index].answer) {

        $(option).addClass("right");
        score++;

    } else {

        $(option).addClass("wrong");
        wrong++;
    }
    $(".scoreBox span").text(score);
    $(".optionBox span").attr("onclick", "");
}
//function to print answer end


//function for thenext question start
function showNext() {
    if (index >= questions.length - 1) {
        showResult(0);
        return;
    }
    index++;
    $(".optionBox span").removeClass();
    $(".optionBox span").attr("onclick", "checkAnswer(this)");

    printQuestion(index);
}
//function for thenext question end


//function for result start 

function showResult(j) {
    if (
        j == 1 &&
        index < questions.length - 1 &&
        !confirm(
            "Quiz has not finished yet. Press ok to skip quiz & get your final result."

        )
    ) {
        return;
    }
    result();
}


function result() {
    $("#question").hide();
    $("#result").show();
    $("#totalTime").text();
    $("#totalQuestion").text(totalQuestion);
    $("#totalAttempt").text(attempt);
    $("#totalCorrect").text(score);
    $("#totalWrong").text(wrong);
    // $("#totalPerctange").text(percentage);





}
//function for result end