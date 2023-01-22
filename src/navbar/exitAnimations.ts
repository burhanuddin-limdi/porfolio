import gsap from "gsap";

export const exitAnimation = (location: string) => {
  switch (location) {
    case "/about":
      aboutExitAnimation();
      break;
    case "/projects":
      projectsExitAnimation();
      break;
    default:
      break;
  }
  navbarExitAnimation();
};

const navbarExitAnimation = () => {
  gsap.to("nav", 1, {
    y: 15,
    opacity: 0,
  });
};

const aboutExitAnimation = () => {
  document.querySelector("#question-arrow")?.classList.add("arrow-out");
  gsap.to("#about", 1, {
    y: 15,
    opacity: 0,
  });
};

const projectsExitAnimation = () => {
  document.querySelector("#projects-line")?.classList.add("project-line-out");
  gsap.to("#projects", 1, {
    y: 15,
    opacity: 0,
  });
};
