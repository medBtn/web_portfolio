const projects = [
  {
    id: 1,
    title: "spendwise",
    description: "An expense tracker for understanding where money goes.",
    technology: "javascript",
    year: "2023",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "An expense tracker for understanding where money goes.",
    technology: "javascript",
    year: "2023",
  },
  {
    id: 3,
    title: "wether app",
    description: "An expense tracker for understanding where money goes.",
    technology: "javascript",
    year: "2023",
  },
  {
    id: 4,
    title: "Todo",
    description: "An expense tracker for understanding where money goes.",
    technology: "html css",
    year: "2026",
  },
];


let projectListElement = document.querySelector("#projectList");
console.log(projectListElement);

function renderProject(prj) {
  const html = `
               <article class="project">
                    <h3>${prj.title}</h3>
                    <p>${prj.description}</p>
                    <small>${prj.technology}</small>
                </article>
`;
  projectListElement.insertAdjacentHTML("beforeend", html);
}

for (project of projects) {
  renderProject(project);
}



// function renderProjectElement(project) {
//   let projectIdEle = document.createElement("span");
//   let projectTitleEle = document.createElement("h3");
//   let projectDescriptionEle = document.createElement("p");
//   let projectLink = document.createElement("a");

//   projectIdEle.textContent = project.id;
//   projectIdEle.className = "id";

//   projectTitleEle.textContent = project.title;
//   projectTitleEle.className = "title";
//   projectDescriptionEle.textContent = project.description;
//   projectDescriptionEle.className = "description";

//   projectListElement.append(
//     projectIdEle,
//     projectTitleEle,
//     projectDescriptionEle,
//   );
// }

// let projects = [project1, project2, project3];
// console.log(projects);

// for(project of projects){
//   renderProjectElement(project)
// }

// let firstNameInput = document.getElementById("first-name-input");
// let lastNameInput = document.getElementById("last-name-input");

// let firstNameError = document.getElementById("first-name-error");

// // link email, phone and message

// let BtnSubmit = document.querySelector("#btn-submit");

// BtnSubmit.addEventListener("click", function (event) {
//   event.preventDefault();

//   if (firstNameInput.value == "") {
//     // firstNameError.textContent = "try to enter your first name!!"
//     firstNameError.innerHTML = "<p>Enter Name <a>(From Inner Html)</a></p>";
//     firstNameError.className = "error";
//     console.log(firstNameError);
//   } else {
//     firstNameError.textContent = "";
//     console.log(firstNameInput.value.trim());
//   }

//   if (lastNameInput.value == "") {
//     console.log("try to enter your last name!!");
//   } else {
//     console.log(lastNameInput.value.trim());
//   }

//   // validate email and phone and message to not be empty
//   //  when we click button
// });
