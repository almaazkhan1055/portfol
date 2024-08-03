import { useRef, useEffect, useState } from "react";
import "./Services.scss";
import { animate, motion, useInView } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const variants = {
  initial: { x: -500, y: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 738);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          We focus on helping your event stand out with
          <br />
          stunning balloon displays.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="people"></img> */}
          <h1>
            <motion.b whileHover={{ color: "#ff48a5" }}>Create </motion.b>
            Balloon Displays
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#ff48a5" }}>for Your </motion.b>
            Events.
          </h1>
          {/* <button>Using</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.b whileHover={{ color: "#ff48a5" }}>
          "Balloons Nation is a premier balloon decoration company specializing
          in creating stunning and eye-catching balloon displays for all
          occasions. From birthday parties to weddings to corporate events, we
          have the experience and expertise to craft the perfect balloon display
          for your special event."
        </motion.b>
        {/* {isMobile ? (
          <Slider>
            {BoxData.map((e, index) => (
              <div key={index} className="box">
                <h2>{e.title}</h2>
                <img src={e.desc} alt={e.title} />
              </div>
            ))}
          </Slider>
        ) : (
          BoxData.map((e, index) => (
            <motion.div key={index} className="box">
              <h2>{e.title}</h2>
              <img src={e.desc} alt={e.title} />
            </motion.div>
          ))
        )} */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
