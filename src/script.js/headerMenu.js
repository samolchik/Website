document.addEventListener("DOMContentLoaded", (event) => {
  //-----Header menu and active buttons-----
  const headerNavHome = document.getElementById("headerNavHome");
  const headerNavCompany = document.getElementById("headerNavCompany");
  const headerNavFeatures = document.getElementById("headerNavFeatures");

  const handleHeaderNavHomeActive = (e) => {
    headerNavHome.classList.add("nav-list__item--active");
    headerNavCompany.classList.remove("nav-list__item--active");
    headerNavFeatures.classList.remove("nav-list__item--active");
  };

  const handleHeaderNavCompanyActive = (e) => {
    headerNavCompany.classList.add("nav-list__item--active");
    headerNavHome.classList.remove("nav-list__item--active");
    headerNavFeatures.classList.remove("nav-list__item--active");
  };

  const handleHeaderNavFeaturesActive = (e) => {
    headerNavFeatures.classList.add("nav-list__item--active");
    headerNavHome.classList.remove("nav-list__item--active");
    headerNavCompany.classList.remove("nav-list__item--active");
  };

  headerNavHome.addEventListener("click", handleHeaderNavHomeActive);
  headerNavCompany.addEventListener("click", handleHeaderNavCompanyActive);
  headerNavFeatures.addEventListener("click", handleHeaderNavFeaturesActive);
  //-----Header menu and active buttons-----


});
