const questions = [];

const questionInput = document.getElementById("questionInput");

const difficulty = document.getElementById("difficulty");

const addBtn = document.getElementById("addBtn");

const questionList = document.getElementById("questionList");



function renderQuestions() {

    questionList.innerHTML = "";

    questions.forEach(function(question) {

        const div = document.createElement("div");

        div.className ="bg-slate-800 p-5 rounded-xl shadow-lg";

        div.innerHTML = `
            <h3 class="text-2xl font-semibold">${question.title}</h3>
            <p class="text-blue-400 mt-2">${question.difficulty}</p>`;
        questionList.appendChild(div);

    });

}



addBtn.addEventListener("click", function () {

    const question = questionInput.value;

    const level = difficulty.value;

    const questionObj = {
        title: question,
        difficulty: level,
        solved: false
    };

    questions.push(questionObj);

    renderQuestions();

});


// basically the same as movies search but with questions instead of movies and difficulty instead of year  