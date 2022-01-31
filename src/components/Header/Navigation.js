import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ displayContent, changeDisplayContent }) => {
  const navItemText = ["About Me", "Portfolio", "Contact", "Resume"];
  const navItems = navItemText.map((item, index) => (
    <li
      className={`nav-item mx-2 ${index === displayContent ? "active" : ""}`}
      data-list-item-index={index}
      key={index}
    >
      {item}
    </li>
  ));

  const listItemOnClick = (event) => {
    let target = event.target;

    if (target.matches(".nav-item")) {
      const dataAttr = Number(target.dataset.listItemIndex);
      changeDisplayContent(dataAttr);
    }
  };

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <span className="navbar-brand">Simone Anthony</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon pt-1">
            <span>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarToggler"
        >
          <ul className="navbar-nav text-center" onClick={listItemOnClick}>
            {navItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
