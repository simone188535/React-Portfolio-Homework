const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-md">
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
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <span>
                About Me
              </span>
            </li>
            <li className="nav-item mx-2">
              <span>
                Portfolio
              </span>
            </li>
            <li className="nav-item mx-2">
              <span>
                Contact
              </span>
            </li>
            <li className="nav-item mx-2">
              <span>
                Resume
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
