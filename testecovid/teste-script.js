var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('testeContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Por favor selecione um Sintoma!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Enviar';
    }
    if(currentQuestion == totQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
    }
	if (score <= 40){
		resultCont.textContent = `Você tem baixa probabilidade (${score}%) de estar com Covid-19, continue se cuidando!`;
	}else if (score > 40 && score < 70){
		resultCont.textContent = resultCont.textContent = `Você tem ${score}% de probabilidade de estar com Covid-19, fique atento!`;
    }else {
        resultCont.textContent = `Você tem grande probabilidade (${score}%) de estar com Covid-19, procure um médico!`;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);