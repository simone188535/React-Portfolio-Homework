import picOfMe from './../../assets/me.jpeg';

const AboutMe = () => {
    return <section className="about-me">
    <img src={picOfMe} alt="profile pic" className='image-thumbnail d-block mx-auto'/>
    <article className="my-3">
      "I am a software developer with 4+ years of experience who enjoys
      building fun and creative projects. Software development is my passion
      and I enjoy writing and building personal projects on my free time. I
      would like to become a full Stack JavaScript Developer (preferable the
      MERN stack). In the future I would also like to create my own
      animation Library and put it on github."
    </article>
  </section>;
  };
  
  export default AboutMe;