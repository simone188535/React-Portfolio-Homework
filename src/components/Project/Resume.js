import resume from "./../../assets/Resume.pdf";
const Resume = () => {
  return (
    <section className="resume row">
      <article className="col">
        <div className="mb-2 col">
          Download my{" "}
          <a href={resume} download>
            resume
          </a>
        </div>

        <h2 className="resume-header">Front-end Proficiencies</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
          <li>Redux</li>
          <li>Ember.js</li>
          <li>Typescript</li>
          <li>Bootstrap</li>
        </ul>

        <h2 className="resume-header">Back-end Proficiencies</h2>
        <ul>
          <li>PHP</li>
          <li>C/C++</li>
          <li>PGSQL</li>
          <li>MySQL</li>
          <li>Node.js</li>
        </ul>
      </article>
    </section>
  );
};

export default Resume;
