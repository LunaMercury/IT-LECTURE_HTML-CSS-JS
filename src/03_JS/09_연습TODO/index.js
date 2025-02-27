const sectionEl = document.querySelector(".layout-360");
const itemsEl = document.querySelector(".items");
const inputEl = document.querySelector(".add-input");

function createNode(text) {
  // 노드 만들기
  const itemEl = document.createElement("div");
  itemEl.classList.add("item");
  const fragmentEl = document.createElement("div");
  fragmentEl.classList.add("fragment");
  const todoEl = document.createElement("input");
  todoEl.classList.add("todo");
  todoEl.setAttribute("readonly", true); // read-only 속성 추가
  const editEl = document.createElement("div");
  editEl.classList.add("edit");
  editeventmaker(editEl); // 기능을 등록. editEl에 주었으므로 edit만 기능 적용 되는 게 아니라 edit버튼과 delete 버튼 둘 다 기능이 들어간다. 각각 적용하려면 editaEl과 deleteaEl에 각각 editeventmaker, deleteeventmaker를 적용해야 한다.
  const editaEl = document.createElement("a");
  editaEl.href = "javascript:void(0)";
  const deleteaEl = document.createElement("a");
  deleteaEl.href = "javascript:void(0)";
  const editSpanEl = document.createElement("span");
  editSpanEl.classList.add("material-symbols-outlined");
  editSpanEl.innerHTML = "edit";
  const deleteSpanEl = document.createElement("span");
  deleteSpanEl.classList.add("material-symbols-outlined");
  deleteSpanEl.innerHTML = "delete";

  // 아이콘 배치
  itemsEl.appendChild(itemEl);
  itemEl.appendChild(fragmentEl);
  itemEl.appendChild(todoEl);
  itemEl.appendChild(editEl);
  editEl.appendChild(editaEl);
  editaEl.appendChild(editSpanEl);
  editEl.appendChild(deleteaEl);
  deleteaEl.appendChild(deleteSpanEl);

  todoEl.value = text;
  itemEl.append(todoEl);
}

function editNode(event) {
  const itemEl = event.target.closest(".item");
  const todoEl = itemEl.querySelector(".todo");
  todoEl.removeAttribute("readonly");
  todoEl.focus();
  todoEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      todoEl.setAttribute("readonly", true);
    }
  });
}

function deleteNode(event) {
  const itemEl = event.target.closest(".item");
  itemsEl.removeChild(itemEl);
}

// 이벤트 등록
inputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const text = inputEl.value;
    if (text.trim() !== "") {
      createNode(text);
      inputEl.value = "";
    }
  }
});

function editeventmaker(editEl) {
  editEl.addEventListener("click", (event) => {
    console.log(event);
    editNode(event);
  });
  editEl.addEventListener("click", (event) => {
    deleteNode(event);
  });
}
