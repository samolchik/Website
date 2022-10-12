document.addEventListener("DOMContentLoaded", (event) => {
  // -----Opening Burger menu-----
  const burgerMenuIcon = document.getElementById("burgerMenuIcon");
  const burgerMenuList = document.getElementById("burgerMenuList");

  const burgerMenuOpen = () => {
    burgerMenuList.style.display = "flex";
  };

  burgerMenuIcon.addEventListener("click", burgerMenuOpen);

  // -----Closing Burger menu in any place-----
  document.addEventListener("click", closeBurgerMenu);

  function closeBurgerMenu(event) {
    if (!event.target.closest(".header__burger")) {
      burgerMenuList.style.display = "none";
    }
  }

  // -----Active buttons in Burger menu-----
  const burgerrNavHome = document.getElementById("burgerrNavHome");
  const burgerrNavCompany = document.getElementById("burgerrNavCompany");
  const burgerrNavFeatures = document.getElementById("burgerrNavFeatures");

  const handleHeaderNavHomeActive = (e) => {
    burgerrNavHome.classList.add("nav-list__item--active");
    burgerrNavCompany.classList.remove("nav-list__item--active");
    burgerrNavFeatures.classList.remove("nav-list__item--active");

    console.log(e.target);
  };

  const handleHeaderNavCompanyActive = (e) => {
    burgerrNavCompany.classList.add("nav-list__item--active");
    burgerrNavHome.classList.remove("nav-list__item--active");
    burgerrNavFeatures.classList.remove("nav-list__item--active");

    console.log(e.target);
  };

  const handleHeaderNavFeaturesActive = (e) => {
    burgerrNavFeatures.classList.add("nav-list__item--active");
    burgerrNavHome.classList.remove("nav-list__item--active");
    burgerrNavCompany.classList.remove("nav-list__item--active");

    console.log(e.target);
  };

  burgerrNavHome.addEventListener("click", handleHeaderNavHomeActive);
  burgerrNavCompany.addEventListener("click", handleHeaderNavCompanyActive);
  burgerrNavFeatures.addEventListener("click", handleHeaderNavFeaturesActive);

  // -----Opening Sign-in in Burger menu-----
  const burgerBtnSignIn = document.getElementById("burgerBtnSignIn");

  const handleBurgerOpenSignIn = () => {
    sigInPage.style.display = "flex";
    overlay.style.display = "flex";
  };
  burgerBtnSignIn.addEventListener("click", handleBurgerOpenSignIn);

  // -----Closing Sign in and Add card by clicking on cross----
  const closeBurgerSignIn = document.getElementById("closeSignInPage");
  const closeAddCardPage = document.getElementById("closeAddCardPage");
  const closePreviewPhoto = document.getElementById("closePreviewPhoto");
  const previewPhoto = document.getElementById("previewPhoto");
 
  const handleCloseBurgerModal = () => {
    sigInPage.style.display = "none";
    addingCard.style.display = "none";
    previewPhoto.style.display = "none";
    overlay.style.display = "none";

    signInFormEmail.value = "";
    signInFormPassword.value = "";
  };

  closeBurgerSignIn.addEventListener("click", handleCloseBurgerModal);
  closeAddCardPage.addEventListener("click", handleCloseBurgerModal);
  closePreviewPhoto.addEventListener("click", handleCloseBurgerModal);

  // -----Auth and adding avatar foto-----
  const burgerAvatar = document.getElementById("authedBurgerAvatar");
  const burgerUserMenu = document.getElementById("burgerUserMenu");

  const openBurgerUserMenu = () => {
    burgerUserMenu.style.display = "flex";
  };

  burgerAvatar.addEventListener("click", openBurgerUserMenu);

  // -----Closing User menu in any place-----
  document.addEventListener("click", closeBurgerUserMenu);

  function closeBurgerUserMenu(event) {
    if (event.target.closest(".burger__title")) {
      burgerUserMenu.style.display = "none";
    }
    if (!event.target.closest(".header__burger")) {
      burgerUserMenu.style.display = "none";
    }
  }
});
