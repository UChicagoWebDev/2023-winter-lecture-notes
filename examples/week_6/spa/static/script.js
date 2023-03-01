function showHappyAnimal(animal) {
  // Make sure no other animals are best
  document.querySelectorAll(".animal.best").forEach((n) => {
    n.classList.remove("best");
  });
  
  // Add the 'best' class to the selected animal
  if(animal && animal.length > 0) {
    a = document.querySelector(".animal."+animal)
    a.classList.add("best")
  }
}

function makeBest(animal, pushHistory=true) {
  showHappyAnimal(animal)

  if (animal.length > 0 ){
    document.title = animal + " is best!";
  } else {
    document.title = "SPA: Single Page Application";
  }

  // TODO: push /animal to the URL bar and add this page to the history

  // DOES NOT WORK: location.replace('/'+animal)

  if(pushHistory) {
    let url = new URL(document.URL);
    window.history.pushState(null, animal, '/' + animal + url.search);
  }
}

function loadAnimal(pushHistory=true) {
  // TODO: Check the URL bar on load so e.g. /cat makes cat best
  url = new URL(document.URL);
  path = url.pathname; // '/animal'
  parsed = path.split('/'); // ['', 'animal']
  animal = parsed[1];

  console.log("Making best animal: " + animal)
  makeBest(animal, pushHistory);
}

window.addEventListener("load", loadAnimal);
window.addEventListener("popstate", (newState) => {console.log(newState); loadAnimal(false)});
