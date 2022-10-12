const user = JSON.parse(localStorage.getItem("user") || null);
const userCards = JSON.parse(localStorage.getItem("userCards")) || [];

const itemsPerPage = 6;
let currentPage = 1;
let currentCards = userCards;

const addingCardForm = document.getElementById("addingCardForm");
const outputCards = document.getElementById("outputCards");
const headsetsPaginationBlock = document.querySelector(
  ".headsets__pagination-block"
);
const sortSelect = document.getElementById("sortSelect");
const heroBtnAddNewCard = document.getElementById("heroBtnAddNewCard");
const userMenuAddNewCard = document.getElementById("headerAddNewCard");
const burgerAddNewCard = document.getElementById("burgerAddNewCard");
const addingCard = document.getElementById("addingCard");
const burgerAvatar = document.getElementById("authedBurgerAvatar");
const previewPhoto = document.getElementById("previewPhoto");
const previewPage = document.getElementById("previewPage");

const numPages = (cardsArray) => {
  return Math.ceil(cardsArray.length / itemsPerPage);
};

let pages = numPages(currentCards);

const paginationEmptyState = () => {
  outputCards.innerHTML = `<h2 class="headsets__empty-cards">Empty User Cards!</h2>`;
  headsetsPaginationBlock.style.display = "none";
};

const previewCard = (id) => {
  const currentCard = currentCards.find((card) => card.id === id);

  previewPage.innerHTML = "";

  const modalHTML = `
    <div class="page" id="page">
      <img
        class="preview-photo__img"
        src="../src/assets/images/List/${currentCard.cardImageName}.png"
        alt="Foto_user"
      >
      <div class="preview-photo__text">
        <h5 class="preview-photo__title">${currentCard.cardName}</h5>
        <p class="preview-photo__description">${currentCard.cardDescription}</p>
      </div>
    </div>`;

  previewPage.innerHTML = modalHTML;

  previewPhoto.style.display = "flex";
  overlay.style.display = "flex";
};

const changePage = (page) => {
  if (page >= 1 && pages >= 0 && !currentCards.length) {
    paginationEmptyState();
    return;
  }

  headsetsPaginationBlock.style.display = "flex";

  if (page < 1) page = 1;
  if (page > pages) page = pages;

  outputCards.innerHTML = "";

  for (
    let i = (page - 1) * itemsPerPage;
    i < page * itemsPerPage && i < currentCards.length;
    i++
  ) {
    if (i <= 0) i = 0;

    if (i <= currentCards.length && i >= 0) {
      outputCards.innerHTML += `
        <li
          onclick="previewCard(${currentCards[i].id.toString()})"
          id="headsetsSet"
          class="headsets__set"
          data-id=${currentCards[i].id}
        >
          <img
            src="../src/assets/images/List/${currentCards[i].cardImageName}.png"
            class="headsets__set-photo"
            alt="${currentCards[i].cardImageNameAlt}"
          >
          <div class="headsets__set-dscr">
            <h5 class="headsets__set-name">${currentCards[i].cardName}</h5>
            <p class="headsets__set-text">${currentCards[i].cardDescription}</p>
          </div>
        </li>`;
    }
  }
};

const nextPage = () => {
  if (currentPage < pages) changePage(++currentPage);
};

const prevPage = () => {
  if (currentPage > 1) changePage(--currentPage);
};

const gotoPage = (page) => {
  currentPage = page;
  changePage(page);
};

const addPages = () => {
  const el = document.getElementById("pages");
  el.innerHTML = "";

  [...Array(pages).keys()].forEach((page, idx) => {
    el.innerHTML += `
      <li>
        <a
          class="headsets__pagination-num"
          href="javascript:gotoPage(${idx + 1})">
          ${idx + 1}
        </a>
      </li>`;
  });
};

const clearAddingCardForm = () => {
  addingCardFormName.value = "";
  addingCardFormDescription.value = "";
  addingCardFormImageName.value = "";
};

const hideAddingCardForm = () => {
  addingCard.style.display = "none";
  overlay.style.display = "none";
};

const addingFormValues = () => {
  return {
    cardName: addingCardForm.elements["cardName"].value,
    cardDescription: addingCardForm.elements["cardDescription"].value,
    cardImageName: addingCardForm.elements["cardImageName"].value,
    createCard: Date.now(),
    id: Date.now(),
  };
};

const handleAddingCardForm = (e) => {
  e.preventDefault();

  const newCard = addingFormValues();

  currentCards.push(newCard);
  localStorage.setItem("userCards", JSON.stringify(currentCards));

  clearAddingCardForm();
  hideAddingCardForm();
  updatedCards(currentCards);
};

addingCardForm.addEventListener("submit", handleAddingCardForm);

const handleNewCard = () => {
  if (!user) return alert("Sign in, please");

  addingCard.style.display = "flex";
  overlay.style.display = "flex";

  userMenu.style.display = "none";
  burgerUserMenu.style.display = "none";
  burgerAvatar.classList.toggle("authed-burger__avatar");
};

heroBtnAddNewCard.addEventListener("click", handleNewCard);
userMenuAddNewCard.addEventListener("click", handleNewCard);
burgerAddNewCard.addEventListener("click", handleNewCard);

const updatedCards = (cards) => {
  changePage(1);
  pages = numPages(cards);
  addPages();
};

const handleSortSelectChange = (e) => {
  outputCards.innerHTML = "";

  switch (e.target.value) {
    case "newFirst":
      const newFirstCards = currentCards.sort(
        (a, b) => a.createCard - b.createCard
      );

      updatedCards(newFirstCards);
      break;
    case "newLast":
      const newLastCards = currentCards.sort(
        (a, b) => b.createCard - a.createCard
      );

      updatedCards(newLastCards);
      break;

    default:
      break;
  }
};

sortSelect.addEventListener("change", handleSortSelectChange);

window.onload = () => {
  updatedCards(currentCards);
};
