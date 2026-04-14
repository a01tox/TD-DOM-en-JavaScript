const searchInput = document.getElementById("search-input");
const languageItems = Array.from(document.querySelectorAll("#language-list li"));
const emptyMessage = document.getElementById("empty-message");

function filterLanguages() {
    const searchValue = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    languageItems.forEach((item) => {
        const languageName = item.textContent.toLowerCase();
        const isMatch = languageName.includes(searchValue);

        item.hidden = !isMatch;

        if (isMatch) {
            visibleCount += 1;
        }
    });

    emptyMessage.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterLanguages);
