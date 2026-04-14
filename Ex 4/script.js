const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");
let itemCount = 0;

function createListItem() {
  itemCount += 1;

  const li = document.createElement("li");
  li.textContent = `Element ${itemCount}`;
  itemList.appendChild(li);
}

for (let i = 0; i < 5; i += 1) {
  createListItem();
}

addBtn.addEventListener("click", createListItem);

// Un seul ecouteur sur le parent pour gerer tous les <li>, meme ajoutes plus tard.
itemList.addEventListener("click", (event) => {
  const clickedItem = event.target.closest("li");

  if (!clickedItem || !itemList.contains(clickedItem)) {
    return;
  }

  clickedItem.classList.toggle("active");
});
