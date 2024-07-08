import React, { useState } from "react";
import { SVGICON } from "../constants/theme";
import { Link } from "react-router-dom";

const boxSVG = [
  {
    icon: "flaticon-exercise-2",
    svg: SVGICON.iconBox1,
    title: "Our Mission",
    num: 1,
    content:"We are dedicated to empowering individuals on their fitness journeys, going beyond just to provide a state-of-the-art facility and fostering a supportive community that encourages and guides each member to achieve their unique health and wellness goals.",
    
  },
  {
    icon: "flaticon-dumbbells",
    svg: SVGICON.iconBox2,
    title: "Vision",
    num: 2,
    content:"We aspire to be the most desired fitness group in the region, recognized for our unwavering commitment to holistic well-being, offering enduring support, camaraderie and lifelong commitment to a healthier, happier lifestyle.",
   
  },
];
const IconBox = () => {
  const [addActive, setActive] = useState(1);
  return (
    <>
      <div className="row align-items-center">
        {boxSVG.map((item, ind) => (
          <div className="col-xl-6 col-md-6 mb-4 wow fadeInLeft" key={ind}>
            <div
              onMouseEnter={() => setActive(ind)}
              className={`icon-bx-wraper style-5 ${
                addActive === ind ? "active" : ""
              }`}
            >
              <div className="icon-bx m-b40">
                <div className="icon-cell text-primary">
                  <i className={item.icon}></i>
                </div>
              </div>
              <div className="icon-content">
                <h4 className="dz-title m-b10">
                  <Link to="/about-us">{item.title}</Link>
                </h4>
                <p className="m-b15 text-white">
                  {item.content}
                </p>
                <Link to="/about-us" className="read-more">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
              <div className="badge">
                {" "}
                <span>{item.num}</span>
              </div>
              {item.svg}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IconBox;
