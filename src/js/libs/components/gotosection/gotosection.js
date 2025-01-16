export function initGoToSection() {
  return {
    goToTop(e) {
      let elementPosition = e.target.offsetTop;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    },
    goToSection(idName) {
      document.getElementById(idName).scrollIntoView();
    },
  };
}
