import React from "react";
import { IMAGES } from "../constants/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";


const OurBlog = ({ blogs }) => {
  
  return (
    <>
      <div className="swiper blog-slider-2">
        <Swiper
          className="swiper-wrapper"
          slidesPerView={3}
          speed={1800}
          spaceBetween={30}
          modules={[Autoplay]}
          autoplay={{ delay: 1500 }}
          breakpoints={{
            1275: { slidesPerView: 3 },
            991: { slidesPerView: 2 },
            240: { slidesPerView: 1 },
          }}
        >
          {blogs.map((item, ind) => {
            // Parse the date string to get the day and month
            const blogDate = new Date(item.date);
            const day = blogDate.getDate();
            const month = blogDate.toLocaleString('en-US', { month: 'long' });
            
            return (
              <SwiperSlide className="swiper-slide" key={ind}>
                <div className="dz-card style-2 wow fadeInUp">
                  <div className="post-date">
                    <span className="date">{day}</span>
                    <span className="months">{month}</span>
                  </div>
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li className="post-author">
                          <Link to="/blog-grid">
                            <img src={IMAGES.avatar2} alt="" />
                            <span>{item.author}</span>
                          </Link>
                        </li>
                        <li className="post-comments">
                          <div>{item.comments ? item.comments.length : 0} comments</div>
                        </li>
                      </ul>
                    </div>
                    <h4 className="dz-title">
                      <Link to="/blog-grid">{item.title}</Link>
                    </h4>
                    <div dangerouslySetInnerHTML={{ __html: item.content.substring(0, 30) + "....." }}></div>
                    <Link to="/blog-grid" className="btn rounded-0 btn-primary btn-skew">
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default OurBlog;