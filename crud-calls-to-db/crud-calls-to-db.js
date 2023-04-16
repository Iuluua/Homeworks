const apiURLQuestionsEn = "http://localhost:3000/questionsEn";
const apiURLQuestionsRo = "http://localhost:3000/questionsRo";

function loadAllEnQs() {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const questions = JSON.parse(this.responseText);

            for (let index = 0; index < questions.length; index++) {
                const paragraph = document.createElement('p');
                const textContent = document.createTextNode(questions[index].question);
                paragraph.append(textContent);

                if (index % 2 === 0)
                    paragraph.style.backgroundColor = 'lightgray';

                document.querySelector(".data-container").appendChild(paragraph);
            }
        }
    }

    xmlHttp.open("GET", apiURLQuestionsEn);
    xmlHttp.send();
}

function loadAllRoQs() {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const questions = JSON.parse(this.responseText);

            for (let index = 0; index < questions.length; index++) {
                const paragraph = document.createElement('p');
                const textContent = document.createTextNode(questions[index].question);
                paragraph.append(textContent);

                if (index % 2 === 0)
                    paragraph.style.backgroundColor = 'lightgray';

                document.querySelector(".data-container").appendChild(paragraph);
            }
        }
    }

    xmlHttp.open("GET", apiURLQuestionsRo);
    xmlHttp.send();
}

function addQuestionRo() {
    const category = addInput("Category");
    const language = addInput("Language");
    const difficulty = addInput("Difficulty");
    const question = addInput("Question");
    const correctAnswer = addInput("Correct Answer");
    const incorrectAnswers = addInput("Incorrect Answers");
    const submitButton = addSubmitButton();

    submitButton.onclick = function () {
        const categoryValue = category.value;
        const languageValue = language.value;
        const difficultyValue = difficulty.value;
        const questionValue = question.value;
        const correctAnswerValue = correctAnswer.value;
        const incorrectAnswersValue = incorrectAnswers.value;

        const incorrectAnswersList = incorrectAnswersValue.split(', ');

        const newQuestion = {
            category: categoryValue,
            language: languageValue,
            difficulty: difficultyValue,
            question: questionValue,
            correct_answer: correctAnswerValue,
            incorrect_answers: incorrectAnswersList
        }

        const xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                console.log(this.responseText);
            }
        }

        xmlHttp.open("POST", `${apiURLQuestionsRo}`, true);

        xmlHttp.setRequestHeader('Content-type', 'application/json');

        xmlHttp.send(JSON.stringify(newQuestion));
    }
}

function updateQuestion() {
    const id = addInput("id");
    const submitButton = addSubmitButton();
    submitButton.style.marginBottom = "24px";

    submitButton.onclick = function () {
        const idValue = id.value;

        getCategoryRo(idValue);
        getLanguageRo(idValue);
        getDifficultyRo(idValue);
        getQuestionRo(idValue);
        getCorrectAnswerRo(idValue);
        getIncorrectAnswersRo(idValue);

        const category = addInput("Update category");
        const language = addInput("Update language");
        const difficulty = addInput("Update difficulty");
        const question = addInput("Update question");
        const correctAnswer = addInput("Update correct answer");
        const incorrectAnswers = addInput("Update incorrect answers");

        const updateSubmit = addSubmitButton();
        updateSubmit.onclick = function () {
            const categoryValue = category.value;
            const languageValue = language.value;
            const difficultyValue = difficulty.value;
            const questionValue = question.value;
            const correctAnswerValue = correctAnswer.value;
            const incorrectAnswersValue = incorrectAnswers.value;

            const newQuestion = {
                category: categoryValue,
                language: languageValue,
                difficulty: difficultyValue,
                question: questionValue,
                correct_answer: correctAnswerValue,
                incorrect_answers: incorrectAnswersValue
            }

            fetch(`${apiURLQuestionsRo}/${idValue}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newQuestion)
            })
                .then(response => response.json())
                .then(question => console.log(question))
                .catch(error => console.log('Error: ' + error))
        }

    }

}

function deleteQuestion() {
    const id = addInput("id");
    const submitButton = addSubmitButton();
    submitButton.style.marginBottom = "24px";

    submitButton.onclick = function () {
        const idValue = id.value;

        fetch(`${apiURLQuestionsRo}/${idValue}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(question => console.log(question))
            .catch(error => console.log('Error: ' + error))
    }

}

function addInput(labelText) {
    const labelElement = document.createElement("label");
    labelElement.innerText = labelText;
    const inputElement = document.createElement("input");
    inputElement.style.marginBottom = "12px";

    document.querySelector(".data-container").appendChild(labelElement);
    document.querySelector(".data-container").appendChild(inputElement);

    return inputElement;
}

function addSubmitButton() {
    const button = document.createElement("button");
    button.innerText = "Submit"
    document.querySelector(".data-container").appendChild(button);

    return button;
}

function getCategoryRo(id) {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const questions = JSON.parse(this.responseText);

            for (let index = 0; index < questions.length; index++) {

                if (questions[index].id == id) {
                    const paragraph = document.createElement('p');
                    const textContent = document.createTextNode(`Category: ${questions[index].category}`);
                    paragraph.append(textContent);
                    document.querySelector(".data-container").appendChild(paragraph);
                }
            }
        }
    }

    xmlHttp.open("GET", apiURLQuestionsRo);
    xmlHttp.send();
}

function getLanguageRo(id) {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const questions = JSON.parse(this.responseText);

            for (let index = 0; index < questions.length; index++) {

                if (questions[index].id == id) {
                    const paragraph = document.createElement('p');
                    const textContent = document.createTextNode(`Language: ${questions[index].language}`);
                    paragraph.append(textContent);
                    document.querySelector(".data-container").appendChild(paragraph);
                }
            }
        }
    }

    xmlHttp.open("GET", apiURLQuestionsRo);
    xmlHttp.send();
}

function getDifficultyRo(id) {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const questions = JSON.parse(this.responseText);

            for (let index = 0; index < questions.length; index++) {

                if (questions[index].id == id) {
                    const paragraph = document.createElement('p');
                    const textContent = document.createTextNode(`Difficulty: ${questions[index].difficulty}`);
                    paragraph.append(textContent);
                    document.querySelector(".data-container").appendChild(paragraph);
                }
            }
        }
    }

    xmlHttp.open("GET", apiURLQuestionsRo);
    xmlHttp.send();
}

function getQuestionRo(id) {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const questions = JSON.parse(this.responseText);

            for (let index = 0; index < questions.length; index++) {

                if (questions[index].id == id) {
                    const paragraph = document.createElement('p');
                    const textContent = document.createTextNode(`Question: ${questions[index].question}`);
                    paragraph.append(textContent);
                    document.querySelector(".data-container").appendChild(paragraph);
                }
            }
        }
    }

    xmlHttp.open("GET", apiURLQuestionsRo);
    xmlHttp.send();
}

function getCorrectAnswerRo(id) {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const questions = JSON.parse(this.responseText);

            for (let index = 0; index < questions.length; index++) {

                if (questions[index].id == id) {
                    const paragraph = document.createElement('p');
                    const textContent = document.createTextNode(`Correct Answer: ${questions[index].correct_answer}`);
                    paragraph.append(textContent);
                    document.querySelector(".data-container").appendChild(paragraph);
                }
            }
        }
    }

    xmlHttp.open("GET", apiURLQuestionsRo);
    xmlHttp.send();
}

function getIncorrectAnswersRo(id) {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const questions = JSON.parse(this.responseText);

            for (let index = 0; index < questions.length; index++) {

                if (questions[index].id == id) {
                    const paragraph = document.createElement('p');
                    const textContent = document.createTextNode(`Incorrect Answers: ${questions[index].incorrect_answers}`);
                    paragraph.append(textContent);
                    document.querySelector(".data-container").appendChild(paragraph);
                }
            }
        }
    }

    xmlHttp.open("GET", apiURLQuestionsRo);
    xmlHttp.send();
}