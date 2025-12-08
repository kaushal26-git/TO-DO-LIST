const inputBox = document.querySelector(".input-box");
const listContainer = document.querySelector(".list-container");
const alldeleteBtn = document.querySelector(".all-deleteBtn");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
    alldeleteBtn.style.display = "block";
    saveData();
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  if(listContainer.innerText.trim() === ""){
  alldeleteBtn.style.display = "none";
}
saveData();

}
  , false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  if (listContainer.innerHTML.trim() !== "") {
    alldeleteBtn.style.display = "block";
  } else {
    alldeleteBtn.style.display = "none";
  }

}
showTask();

alldeleteBtn.addEventListener("click", function () {
  listContainer.innerText = "";
  alldeleteBtn.style.display = "none";
  saveData();
})