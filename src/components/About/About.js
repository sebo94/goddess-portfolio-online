import React from "react";
import Counters from "../Counters/Counters";
import Carousel from '../Carousel/Carousel';
import classes from "./About.module.css";
import imgSrc from "../../assets/images/projects/project2.jpg";
import "aos/dist/aos.css";

const about = (props) => (
  <section
    id="about"
    className={classes.About}
    data-aos="fade-left"
    data-aos-delay="200"
    data-aos-duration="500"
    data-aos-easing="ease-in"
  >
    <div className={[classes.Column, classes.Content].join(" ")}>
      <div className={classes.ContentBox}>
        <div className={classes.ContentBoxInner}>
          <h3 className={classes.Title}>Just a few words about us</h3>
          <p className={classes.Description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            leo est, feugiat nec elementum id, suscipit id nulla. Nulla sit amet
            luctus dolor. Etiam finibus consequat ante ac congue. Quisque
            porttitor porttitor tempus. Donec maximus ipsum non ornare
            vestibulum. Sed libero nibh, feugiat at enim id, bibendum
            sollicitudin arcu. Aliquam elit nibh, finibus eget mauris non,
            pretium vehicula ipsum. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <Counters />
          <Carousel />
        </div>
      </div>
    </div>
    <div
      style={{ backgroundImage: `url(${imgSrc})` }}
      className={[classes.Column, classes.Image].join(" ")}
    ></div>
  </section>
);

export default about;
