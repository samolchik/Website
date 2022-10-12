document.addEventListener("DOMContentLoaded", () => {

  const user = JSON.parse(localStorage.getItem("user") || null);
  const headerBtnSignIn = document.getElementById("headerBtnSignIn");
  const sigInPage = document.getElementById("sigInPage");
  const previewPhoto = document.getElementById("previewPhoto");
  const overlay = document.getElementById("overlay");
  const signInForm = document.getElementById("signInForm");
  const signInFormEmail = document.getElementById("signInFormEmail");
  const signInFormPassword = document.getElementById("signInFormPassword");
  const signInBtn = document.getElementById("signInFormBtn");
  const burgerAvatar = document.getElementById("authedBurgerAvatar");
  
  // -----Opening Sign-in by clicking in Header menu----
  const handleOpenSignIn = () => {
    sigInPage.style.display = "flex";
    overlay.style.display = "flex";
  };

  headerBtnSignIn.addEventListener("click", handleOpenSignIn);

  // -----Filling out the form on the Header page-----
  let userData = "";

  const handleSignInInputChange = (e) => {
    userData = { ...userData, [e.target.name]: e.target.value };
  };

  signInFormEmail.addEventListener("change", handleSignInInputChange);
  signInFormPassword.addEventListener("change", handleSignInInputChange);

  const handleSignInForm = (e) => {
    e.preventDefault();

    sigInPage.style.display = "none";
    overlay.style.display = "none";

    signInFormEmail.value = "";
    signInFormPassword.value = "";

    signInForm.addEventListener("submit", handleSignInForm);
  };

  // -----Saving user in localStorage-----
  const handleSignInLogIn = () => {
    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );
  };

  if (user) {
    headerAvatar.style.display = "flex";
    headerBtnSignIn.style.display = "none";

    burgerAvatar.style.display = "flex";
    burgerBtnSignIn.style.display = "none";
  }

  signInBtn.addEventListener("click", handleSignInLogIn);

  // -----Closing Sign In and Adding Card in any place, outside the modal-----
  const handleOverlay = () => {
    sigInPage.style.display = "none";
    addingCard.style.display = "none";
    previewPhoto.style.display = "none";
    overlay.style.display = "none";

    signInFormEmail.value = "";
    signInFormPassword.value = "";

  };
  overlay.addEventListener("click", handleOverlay);
});
