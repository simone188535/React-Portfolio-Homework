import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center footer">
      <a href="https://github.com/simone188535">
        <FontAwesomeIcon icon={faGithub} size="2x" className="my-3 mx-2" />
      </a>
      <a href="https://www.linkedin.com/in/simone-anthony-059066136/">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="my-3 mx-2" />
      </a>
      <a href="https://stackoverflow.com/users/6195136/simone-anthony">
        <FontAwesomeIcon
          icon={faStackOverflow}
          size="2x"
          className="my-3 mx-2"
        />
      </a>
    </footer>
  );
};

export default Footer;
