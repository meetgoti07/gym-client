import React, { useEffect, useState } from "react";
import { IMAGES } from "../constants/theme";
import MainBanner3 from "../components/MainBanner3";
import ModalVideo from "react-modal-video";
import HomebannerCard from "../elements/HomebannerCard";
import { AboutServicesDetails } from "../components/AboutServices";
import IconBox from "../elements/IconBox";
import {useLocation } from "react-router-dom";
import Portfolio from "../components/Portfolio";
import OurBlog from "../components/OurBlog";
import Clients from "../elements/Clients";
import axios from "axios";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Home3 = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    const body = document.querySelector("body");  
    body.setAttribute("data-theme-color", 'color_3'); 
    localStorage.setItem("theme", "color_3");
    localStorage.setItem("themeInd", 2);
  }, [location]);
  const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllBlogs`);
                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, []);
  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={open}
        videoId="X_9VoqR5ojM"
        onClose={() => setOpen(false)}
      />
      <div className="page-content bg-white style-1">
        <div className="main-bnr-two">
          <div
            className="banner-inner"
            style={{
              backgroundImage: `url(${IMAGES.BackgroundBg15})`,
              backgroundSize: " cover",
            }}
          >
            <MainBanner3 open={setOpen} />
          </div>
        </div>
        <section className="clearfix section-wrapper1">
          <div className="container">
            <HomebannerCard />
          </div>
        </section>
        <section
          className="about-bx3"
          style={{
            backgroundImage: ` url(${IMAGES.BgImage8})`,
            backgroundPosition: " center",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="content-inner">
            <div className="container">
              <div className="row align-items-end">
                <AboutServicesDetails />
                <div className="col-lg-6 m-md-b30">
                  <div className="dz-media p-r20">
                    <img
                      src={IMAGES.aboutPic7}
                      alt=""
                      className="wow fadeInUp"
                      data-wow-delay="0.4s"
                    />
                    <div className="tag">
                      <h2>20</h2>
                      <h5>YEAR EXPERIENCE</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="content-inner section-wrapper-1"
          style={{
            backgroundImage: ` url(${IMAGES.BgImage7})`,
            backgroundSize: " cover",
            backgroundRepeat: " no-repeat",
          }}
        >
          <div className="container">
            <IconBox />
          </div>
        </section>
        
        <div className="content-inner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 m-b30 wow fadeInUp">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={IMAGES.Img2}
                      srcSet={IMAGES.Img2}
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={IMAGES.Img1}
                      srcSet={IMAGES.Img1}
                      alt="Image two"
                    />
                  }
                />
              </div>
              <div className="col-lg-6">
                <div className="section-head style-1 wow fadeInUp">
                  <h5 className="sub-title">Gym Time</h5>
                  <h2 className="title">
                    Workout Routine for Better{" "}
                    <span className="text-primary">Fitness Results</span>
                  </h2>
                  <p>
                    We believe that fitness is not just about working out; it's about feeling good, both physically and mentally. Our holistic approach focuses on overall well-being, combining physical exercise, nutrition guidance, and mental wellness to create a balanced and healthy lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="clearfix">
          <Portfolio />
        </section>
        <section
          className="content-inner-2 overflow-hidden"
          style={{
            backgroundImage: `url(${IMAGES.BgImage1})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="section-head style-1 text-center">
              <h2 className="title">
                Latest <span className="text-primary">Blogs</span>
              </h2>
            </div>
            <OurBlog  blogs={blogs}/>
          </div>
        </section>
        <div className="half-shape-top-w theme-bg content-inner-1 ">
          <div className="container">
            <div className="clients-box">
              <Clients />
            </div>
          </div>
        </div>
        <section
          className="content-inner-2 theme-bg contact-section style-2"
          style={{
            backgroundImage: ` url(${IMAGES.BgImage10})`,
            backgroundPosition: " center",
          }}
        >
        </section>
        <div className="map z-index-none">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.557526513655!2d-77.03546232520506!3d18.13821328288266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb0fc82270dc73%3A0x15b15a41c0140f5d!2s4%20Church%20St%2C%20Linstead%2C%20Jamaica!5e0!3m2!1sen!2sin!4v1722671658326!5m2!1sen!2sin"
            style={{
              border: "0",
              marginBottom: "-7px",
              width: "100%",
              height: "400px",
            }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Home3;
