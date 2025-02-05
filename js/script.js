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

const button = document.querySelector(".test");
button.addEventListener("click", () => {

  const titleText = prompt("Write an title for your project!");
  const descriptionText = prompt("Write an description for your project!");

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

  const a = document.createElement("a");
  a.setAttribute("href", ".");

  document.querySelector(".projects").prepend(projectWrapper);
  projectWrapper.appendChild(project);
  project.appendChild(textContainer);
  textContainer.appendChild(a);

  a.appendChild(title);
  textContainer.appendChild(description);

  console.log(a);
}