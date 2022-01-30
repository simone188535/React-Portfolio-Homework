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
    header: "Contact",
    component: <Contact />,
  },
  {
    header: "Portfolio",
    component: <Portfolio />,
  },
  {
    header: "Resume",
    component: <Resume />,
  },
];

const Project = ({ displayContent }) => {
  return (
    <main className="container h-100 min-vh-100">
      <h2>{displayDetails[displayContent].header}</h2>
      {displayDetails[displayContent].component}
    </main>
  );
};

export default Project;
