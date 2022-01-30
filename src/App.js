import { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  const [displayContent, setDisplayContent] = useState(0);
  const changeDisplayContent = (index) => setDisplayContent(index);

  return (
    <>
      <Header
        displayContent={displayContent}
        changeDisplayContent={changeDisplayContent}
      />
      <Project displayContent={displayContent} />
      <Footer />
    </>
  );
}

export default App;
