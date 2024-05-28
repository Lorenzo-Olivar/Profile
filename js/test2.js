const showHome = () => {
  const homeContent = document.getElementById("home-content");

  const projectsContent = document.getElementById("projects-content");

  const infoContent = document.getElementById("info-content");

  const contactContent = document.getElementById("contact-content");

  projectsContent.dataset.show = "no";

  infoContent.dataset.show = "no";

  contactContent.dataset.show = "no";

  setTimeout(() => {
    homeContent.dataset.show = "yes";
  }, 600);
};

const showProjects = () => {
  const homeContent = document.getElementById("home-content");

  const projectsContent = document.getElementById("projects-content");

  const infoContent = document.getElementById("info-content");

  const contactContent = document.getElementById("contact-content");

  homeContent.dataset.show = "no";

  infoContent.dataset.show = "no";

  contactContent.dataset.show = "no";

  setTimeout(() => {
    projectsContent.dataset.show = "yes";
  }, 600);
};

const showInfo = () => {
  const homeContent = document.getElementById("home-content");

  const projectsContent = document.getElementById("projects-content");

  const infoContent = document.getElementById("info-content");

  const contactContent = document.getElementById("contact-content");

  homeContent.dataset.show = "no";

  projectsContent.dataset.show = "no";

  contactContent.dataset.show = "no";

  setTimeout(() => {
    infoContent.dataset.show = "yes";
  }, 600);
};

const showContact = () => {
  const homeContent = document.getElementById("home-content");

  const projectsContent = document.getElementById("projects-content");

  const infoContent = document.getElementById("info-content");

  const contactContent = document.getElementById("contact-content");

  homeContent.dataset.show = "no";

  projectsContent.dataset.show = "no";

  infoContent.dataset.show = "no";

  setTimeout(() => {
    contactContent.dataset.show = "yes";
  }, 600);
};
