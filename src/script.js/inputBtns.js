document.addEventListener("DOMContentLoaded", (event) => {
  // Buttons in Hero
  const heroBtnInfoPink = document.getElementById("heroBtnInfoPink");

  const handleHeroBtnInfoPink = () => {
    console.log("Explore Device");
  };

  heroBtnInfoPink.addEventListener("click", handleHeroBtnInfoPink);

  // Button in Experience
  const experienceBtn = document.getElementById("experienceBtn");

  const handlEexperienceBtn = () => {
    console.log("New Experience In Playing Game");
  };

  experienceBtn.addEventListener("click", handlEexperienceBtn);

  // Form in Footer
  const footerFormInput = document.getElementById("footerFormInput");
  const footerFormBtn = document.getElementById("footerFormBtn");

  const handleFormInputChange = (e) => {
    console.log(e.target.value);
  };

  const handleFormBtn = (e) => {
    console.log("Submit");
  };

  footerFormInput.addEventListener("change", handleFormInputChange);
  footerFormBtn.addEventListener("click", handleFormBtn);
});


