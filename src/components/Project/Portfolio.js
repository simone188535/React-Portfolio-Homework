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
            <img
              src={employeeTracker}
              alt="Employee Tracker"
              className="d-block w-100 portfolio-img"
            />

            <figcaption>
              <a
                href="https://github.com/simone188535/MySQL-Employee-Tracker"
                className="portfolio-link"
              >
                Employee Tracker
              </a>
            </figcaption>
          </figure>
          <figure className="col-md-6">
            <img
              src={noteTaker}
              alt="Note Taker"
              className="d-block w-100 portfolio-img"
            />
            <figcaption>
              <a
                href="https://frozen-tor-69384.herokuapp.com/"
                className="portfolio-link"
              >
                JSON Note Taker
              </a>
            </figcaption>
            <div>
              <a
                href="https://github.com/simone188535/JSON-Note-Taker"
                className="portfolio-link"
              >
                Github
              </a>
            </div>
          </figure>
        </section>
        <section className="row">
          <figure className="col-md-6">
            <img
              src={presidentialGallery}
              alt="Presidential Gallery"
              className="d-block w-100 portfolio-img"
            />
            <figcaption>
              <a
                href="https://floating-chamber-62136.herokuapp.com/"
                className="portfolio-link"
              >
                Presidential Gallery
              </a>
            </figcaption>
            <div>
              <a
                href="https://github.com/mattholtmoore/presidential-gallery"
                className="portfolio-link"
              >
                Github
              </a>
            </div>
          </figure>
          <figure className="col-md-6">
            <a
              href="https://simone188535.github.io/Open-Weather-API-Dashboard/"
              className="portfolio-link"
            >
              <img
                src={openWeatherDashboard}
                alt="Open Weather API Dashboard"
                className="d-block w-100 portfolio-img"
              />
            </a>
            <figcaption>
              <a
                href="https://simone188535.github.io/Open-Weather-API-Dashboard/"
                className="portfolio-link"
              >
                Open Weather API Dashboard
              </a>
            </figcaption>
            <div>
              <a
                href="https://github.com/simone188535/Open-Weather-API-Dashboard"
                className="portfolio-link"
              >
                Github
              </a>
            </div>
          </figure>
        </section>
        <section className="row">
          <figure className="col-md-6">
            <img
              src={UXUITips}
              alt="UX UI Tips"
              className="d-block w-100 portfolio-img"
            />
            <figcaption>
              {" "}
              <a
                href="https://murmuring-peak-24595.herokuapp.com/"
                className="portfolio-link"
              >
                UX UI Tips
              </a>
            </figcaption>
            <div>
              <a
                href="https://github.com/simone188535/UI-UX-Tips"
                className="portfolio-link"
              >
                Github
              </a>
            </div>
          </figure>
          <figure className="col-md-6">
            <img
              src={workDayScheduler}
              alt="Work Day Scheduler"
              className="d-block w-100 portfolio-img"
            />
            <figcaption>
              <a
                href="https://simone188535.github.io/Personal-Work-Day-Scheduler/"
                className="portfolio-link"
              >
                Work Day Scheduler
              </a>
            </figcaption>
            <div>
              <a
                href="https://github.com/simone188535/Personal-Work-Day-Scheduler"
                className="portfolio-link"
              >
                Github
              </a>
            </div>
          </figure>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
