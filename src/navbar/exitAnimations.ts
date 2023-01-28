import gsap from "gsap";

export const exitAnimation = (location: string, dest: string) => {
  if (dest != location) {
    switch (location) {
      case "/about":
        aboutExitAnimation();
        navbarExitAnimation();
        break;
      case "/projects":
        projectsExitAnimation();
        navbarExitAnimation();
        break;
      case "/experience":
        experienceAnimation();
        navbarExitAnimation();
        break;
      default:
        break;
    }
  }
};

const navbarExitAnimation = () => {
  gsap.to("nav", 1, {
    y: 15,
    opacity: 0,
  });
};

const aboutExitAnimation = () => {
  document.querySelector("#question-arrow")?.classList.add("arrow-out");
  pageExitAnimation("#about");
};

const projectsExitAnimation = () => {
  document.querySelector("#projects-line")?.classList.add("project-line-out");
  pageExitAnimation("#projects");
};

const experienceAnimation = () => {
  document
    .querySelector("#experience-line")
    ?.classList.add("experience-line-out");
  pageExitAnimation("#experience");
};

const pageExitAnimation = (pageId: string) => {
  gsap.to(pageId, 1, {
    y: 15,
    opacity: 0,
  });
};
