
const flash_Cards = document.getElementsByClassName("flash-Cards")[0];
const create_box = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");


let contentArray = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];


contentArray.forEach(divMaker);


function divMaker(text) {
    const div = document.createElement("div");
    const h2_question = document.createElement("h2");
    const h2_answer = document.createElement("h2");

    div.className = "flash_cards";

    
    h2_question.setAttribute(
        "style",
        "border-top:1px solid red; padding:15px; margin-top:30px;"
    );
    h2_question.innerHTML = text.my-question;

    h2_answer.setAttribute(
        "style",
        "text-align:center; display:none; color:red;"
    );
    h2_answer.innerHTML = text.my-answer;

    
    div.appendChild(h2_question);
    div.appendChild(h2_answer);

   
    div.addEventListener("click", function () {
        if (h2_answer.style.display === "none") {
            h2_answer.style.display = "block";
        } else {
            h2_answer.style.display = "none";
        }
    });

    
    flash_Cards.appendChild(div);
}


function addFlashCards() {
    
    if (question.value.trim() === "" || answer.value.trim() === "") {
        alert("Both question and answer are required!");
        return;
    }

    const flashCardInfo = {
        "my-question": question.value,
        "my-answer": answer.value,
    };

    contentArray.push(flashCardInfo);
    localStorage.setItem("items", JSON.stringify(contentArray));

    divMaker(flashCardInfo);

    question.value = "";
    answer.value = "";
}


function delFlashCard() {
   
    localStorage.clear();
    contentArray = [];

    flash_Cards.innerHTML = "";
}


function showCreateCardBox() {
    create_box.style.display = "block";
}


function hideCreateBox() {
    create_box.style.display = "none";
}
