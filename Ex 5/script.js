const faqItems = document.querySelectorAll(".faq-item");

function closeItem(item) {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  item.classList.remove("open");
  button.setAttribute("aria-expanded", "false");
  answer.style.maxHeight = "0px";
}

function openItem(item) {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  item.classList.add("open");
  button.setAttribute("aria-expanded", "true");
  answer.style.maxHeight = `${answer.scrollHeight}px`;
}

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    faqItems.forEach((currentItem) => {
      if (currentItem !== item) {
        closeItem(currentItem);
      }
    });

    if (isOpen) {
      closeItem(item);
      return;
    }

    openItem(item);
  });
});

window.addEventListener("resize", () => {
  const openItemElement = document.querySelector(".faq-item.open");

  if (!openItemElement) {
    return;
  }

  const answer = openItemElement.querySelector(".faq-answer");
  answer.style.maxHeight = `${answer.scrollHeight}px`;
});
