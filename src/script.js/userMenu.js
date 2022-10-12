document.addEventListener("DOMContentLoaded", () => {
  // -----Auth and adding avatar foto-----
  const signInBtn = document.getElementById("signInFormBtn");
  const headerAvatar = document.getElementById("headerAvatar");

  const handleSignInBtn = () => {
    headerAvatar.style.display = "flex";
    headerBtnSignIn.style.display = "none";
  };

  signInBtn.addEventListener("click", handleSignInBtn);

  // -----Transition by clicking on the avatar in the User menu and closing this page -----
  const userMenu = document.getElementById("userMenu");

  const openUserMenu = () => {
    userMenu.style.display = "flex";
  };

  headerAvatar.addEventListener("click", openUserMenu);

  // -----Closing User menu in any place-----
  document.addEventListener("click", closeUserMenu);

  function closeUserMenu(event) {
    if (event.target.closest(".user__menu-title")) {
      userMenu.style.display = "none";
    }
    if (!event.target.closest(".header__menu")) {
      userMenu.style.display = "none";
    }
  }

  // -----Exit user menu-----
  const headerLogOut = document.getElementById("headerLogOut");
  const burgerLogOut = document.getElementById("burgerLogOut");
  const burgerAvatar = document.getElementById("authedBurgerAvatar");

  const handeleLogOut = () => {
    userMenu.style.display = "none";
    headerAvatar.style.display = "none";
    headerBtnSignIn.style.display = "flex";

    burgerUserMenu.style.display = "none";
    burgerAvatar.style.display = "none";
    burgerBtnSignIn.style.display = "flex";
    burgerNavList.style.display = "flex";

    localStorage.removeItem("user");
    localStorage.removeItem("userCards");
  };

  headerLogOut.addEventListener("click", handeleLogOut);
  burgerLogOut.addEventListener("click", handeleLogOut);
});
