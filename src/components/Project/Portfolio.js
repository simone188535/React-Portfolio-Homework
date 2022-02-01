import employeeTracker from "./../../assets/employee-tracker.png";
import noteTaker from "./../../assets/note-taker.png";
import presidentialGallery from "./../../assets/presidential-gallery.png";
import openWeatherDashboard from "./../../assets/weather-api-thumbnail.png";
import UXUITips from "./../../assets/ui-ux-tips.png";
import workDayScheduler from "./../../assets/work-day-scheduler.png";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <section className="row">
          <figure className="col-md-6">
            <a href="https://github.com/simone188535/MySQL-Employee-Tracker">
              <img
                src={employeeTracker}
                alt="Employee Tracker"
                className="d-block w-100 portfolio-img"
              />
            </a>
            <figcaption>Employee Tracker</figcaption>
          </figure>
          <figure className="col-md-6">
            <a href="https://simone188535.github.io/Open-Weather-API-Dashboard/">
              <img
                src={noteTaker}
                alt="Note Taker"
                className="d-block w-100 portfolio-img"
              />
            </a>
            <figcaption>JSON Note Taker</figcaption>
          </figure>
        </section>
        <section className="row">
          <figure className="col-md-6">
            <a href="https://floating-chamber-62136.herokuapp.com/">
              <img
                src={presidentialGallery}
                alt="Presidential Gallery"
                className="d-block w-100 portfolio-img"
              />
            </a>
            <figcaption>Presidential Gallery</figcaption>
          </figure>
          <figure className="col-md-6">
            <a href="https://simone188535.github.io/Open-Weather-API-Dashboard/">
              <img
                src={openWeatherDashboard}
                alt="Open Weather API Dashboard"
                className="d-block w-100 portfolio-img"
              />
            </a>
            <figcaption>Open Weather API Dashboard</figcaption>
          </figure>
        </section>
        <section className="row">
          <figure className="col-md-6">
            <a href="https://murmuring-peak-24595.herokuapp.com/">
              <img
                src={UXUITips}
                alt="UX UI Tips"
                className="d-block w-100 portfolio-img"
              />
            </a>
            <figcaption>UX UI Tips</figcaption>
          </figure>
          <figure className="col-md-6">
            <a href="https://simone188535.github.io/Personal-Work-Day-Scheduler/">
              <img
                src={workDayScheduler}
                alt="Work Day Scheduler"
                className="d-block w-100 portfolio-img"
              />
            </a>
            <figcaption>Work Day Scheduler</figcaption>
          </figure>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
