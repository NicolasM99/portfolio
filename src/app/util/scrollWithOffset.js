export const scrollWithOffset = (el) => {
  el.preventDefault();
  const _href = el.target.parentElement.href || el.target.href;
  const elementId = _href.substring(_href.indexOf("#") + 1, _href.length);
  const yCoordinate =
    document.getElementById(elementId).getBoundingClientRect().top +
    document.getElementById("#body-container").scrollTop;
  const yOffset = 0;
  document
    .getElementById("#body-container")
    .scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};
