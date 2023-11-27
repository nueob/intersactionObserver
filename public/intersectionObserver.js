function callback(entries, observer) {
  entries.forEach(entry => {
    console.log("isIntersecting: " + entry.isIntersecting);
    if (!entry.isIntersecting) return;

    [
      'boundingClientRect',
      'intersectionRect',
      'intersectionRatio',
      'rootBounds',
      'target',
      'time'
    ].forEach((element) => {
      if (document.querySelector(`#${element}`).checked) {
        console.log(element);
        console.log(entry[element]);
      }
    });
  })
}

document.querySelectorAll(".button")[0].addEventListener("click", function (event) {
  const rootMargin = document.querySelector("#rootMargin");
  const threshold = document.querySelector("#threshold");

  const options = {
    root: document.querySelector(".root"),
    ...rootMargin && {rootMargin: rootMargin.value},
    ...threshold && {threshold: threshold.value}
  };

  const observer = new IntersectionObserver(callback, options);
  const target = document.querySelector('.target');
  observer.observe(target);
});
  