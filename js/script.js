const bells = document.querySelector(".bells");
bells.addEventListener("click", changeIcon);

function changeIcon() {
  const ringBell = document.querySelector(".ring-notification-bell")
  const bell = document.querySelector(".notification-bell")
  if (bell.style.display === "none") {
    bell.style.display = "block";
    ringBell.style.display = "none";
  } else {
    bell.style.display = "none";
    ringBell.style.display = "block";
  }
}

const button = document.querySelector(".new-button");
button.addEventListener("click", () => {

  const titleText = prompt("Write a title for your project!");
  const descriptionText = prompt("Write a description for your project!");

  if (titleText && descriptionText) {

    const titleElement = document.createElement("h4");
    const descriptionElement = document.createElement("p");

    titleElement.innerHTML = titleText;
    descriptionElement.innerHTML = descriptionText;

    createProject(titleElement, descriptionElement);
  }
});

function createProject(title, description) {

  const projectWrapper = document.createElement("div");
  projectWrapper.classList.add("project-wrapper");

  const project = document.createElement("div");
  project.classList.add("project");

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  const interactionIcons = document.createElement("div");
  interactionIcons.classList.add("interaction-icons");

  const starIcon = document.createElement("i");
  starIcon.classList.add("iconify");
  starIcon.setAttribute("data-icon", "mdi-star-plus-outline");

  const eyeIcon = document.createElement("i");
  eyeIcon.classList.add("iconify");
  eyeIcon.setAttribute("data-icon", "mdi-eye-plus-outline");

  const forkIcon = document.createElement("i");
  forkIcon.classList.add("iconify");
  forkIcon.setAttribute("data-icon", "mdi-source-fork");

  const a = document.createElement("a");
  a.setAttribute("href", ".");

  document.querySelector(".projects").prepend(projectWrapper);

  projectWrapper.appendChild(project);

  project.appendChild(textContainer);
  project.appendChild(interactionIcons);

  const starA = document.createElement("a");
  starA.setAttribute("href", ".");

  const eyeA = document.createElement("a");
  eyeA.setAttribute("href", ".");

  const forkA = document.createElement("a");
  forkA.setAttribute("href", ".");

  interactionIcons.appendChild(starA);
  interactionIcons.appendChild(eyeA);
  interactionIcons.appendChild(forkA);
  starA.appendChild(starIcon);
  eyeA.appendChild(eyeIcon);
  forkA.appendChild(forkIcon);

  textContainer.appendChild(a);

  a.appendChild(title);
  textContainer.appendChild(description);
}