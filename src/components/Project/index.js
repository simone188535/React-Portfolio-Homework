import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

const displayDetails = [
  {
    header: "About Me",
    component: <AboutMe />,
  },
  {
    header: "Portfolio",
    component: <Portfolio />,
  },
  {
    header: "Contact",
    component: <Contact />,
  },
  {
    header: "Resume",
    component: <Resume />,
  },
];

const Project = ({ displayContent }) => {
  return (
    <main className="container h-100 min-vh-100 my-3 body-content">
      <h2 className="page-header">{displayDetails[displayContent].header}</h2>
      {displayDetails[displayContent].component}
    </main>
  );
};

export default Project;
