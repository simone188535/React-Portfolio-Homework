const Navigation = ({ displayContent, changeDisplayContent }) => {

    const listItemOnClick = (event) => {
        let target = event.target; 
        
        if (target.matches('.nav-item')) {
            const dataAttr = target.dataset.listItemIndex;
            changeDisplayContent(dataAttr);
        }
    }

  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <span className="navbar-brand">
          Simone Anthony
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
          <ul className="navbar-nav" onClick={listItemOnClick}>
            <li className="nav-item mx-2" data-list-item-index="0">
                About Me
            </li>
            <li className="nav-item mx-2" data-list-item-index="1">
                Portfolio
            </li>
            <li className="nav-item mx-2" data-list-item-index="2">
                Contact
            </li>
            <li className="nav-item mx-2" data-list-item-index="3">
                Resume
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
