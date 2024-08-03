import React, { useRef } from "react";
import "./Portfolio.scss";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import pic1 from "../../assets/pic1.jpeg";
import pic2 from "../../assets/pic2.jpeg";
import pic3 from "../../assets/pic3.jpeg";
import pic4 from "../../assets/pic4.jpeg";
import pic5 from "../../assets/pic5.jpeg";
import pic6 from "../../assets/pic6.jpeg";
import pic7 from "../../assets/pic7.jpeg";
import pic8 from "../../assets/pic8.jpeg";
import pic9 from "../../assets/pic9.jpeg";
import pic10 from "../../assets/pic10.jpeg";
import pic11 from "../../assets/pic11.jpeg";
import pic12 from "../../assets/pic12.jpeg";
import pic13 from "../../assets/pic13.jpeg";
import pic14 from "../../assets/pic14.jpeg";
import pic15 from "../../assets/pic15.jpeg";
import pic16 from "../../assets/pic16.jpeg";
import pic17 from "../../assets/pic17.jpeg";
import pic18 from "../../assets/pic18.jpeg";
import pic19 from "../../assets/pic19.jpeg";

const items = [
  {
    img: pic1,
  },
  {
    img: pic2,
  },
  {
    img: pic3,
  },
  {
    img: pic4,
  },
  {
    img: pic5,
  },
  {
    img: pic6,
  },
  {
    img: pic7,
  },
  {
    img: pic8,
  },
  {
    img: pic9,
  },
  {
    img: pic10,
  },
  {
    img: pic11,
  },
  {
    img: pic12,
  },
  {
    img: pic13,
  },
  {
    img: pic14,
  },
  {
    img: pic15,
  },
  {
    img: pic16,
  },
  {
    img: pic17,
  },
  {
    img: pic18,
  },
  {
    img: pic19,
  },
];

const SingleSection = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="ImageContainer" ref={ref}>
            <img src={item.img}></img>
          </div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item, index) => (
        <SingleSection key={index} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
