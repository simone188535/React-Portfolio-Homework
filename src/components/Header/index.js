import Navigation from "./Navigation";
const Header = ({ displayContent, changeDisplayContent }) => {
  return (
    <nav className="nav-bar">
      <Navigation
        displayContent={displayContent}
        changeDisplayContent={changeDisplayContent}
      />
    </nav>
  );
};

export default Header;
