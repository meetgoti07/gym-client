import React, {useState } from "react";
import swal from "sweetalert";
import PageTitle from "../elements/PageTitle";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    dzFirstName: "",
    dzLastName: "",
    dzEmail: "",
    dzPhoneNumber: "",
    dzMessage: "",
  });

  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Validate email format
    if (e.target.name === "dzEmail") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(e.target.value);
      setEmailError(isValidEmail ? "" : "Please enter a valid email address");
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (emailError) {
      swal("Oops!", "Please enter a valid email address", "error");
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contactus`, formData);
      swal("Good job!", "Form submitted successfully", "success");
      setFormData({
        dzFirstName: "",
        dzLastName: "",
        dzEmail: "",
        dzPhoneNumber: "",
        dzMessage: "",
      });
    } catch (error) {
      console.error('Error sending form data:', error);
      swal("Oops!", "Something went wrong", "error");
    }
  };

  return (
    <>
      <div className="page-content bg-white">
        <PageTitle activePage="Contact Us" parentTitle="Home" />
        <section className="content-inner-2 z-index-none">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-xl-5 m-sm-b30 m-xl-b0">
                <div className="contact-box">
                  <h3 className="contact-title">Contact Information</h3>
                  <p className="contact-text">
                    Fill up the form and our Team will get back to you within 24
                    hours.
                  </p>
                  <div className="widget widget_getintuch ">
                    <ul>
                      <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>
                          4 Church Street; Linstead; St Catherine
                        </p>
                      </li>
                      <li>
                        <i className="fa-solid fa-phone"></i>
                        <p>(876) 295-5173/ (876) 469-2523</p>
                      </li>
                      <li>
                        <i className="fa-solid fa-envelope"></i>
                        <p>blackfusefitness@gmail.com</p>
                      </li>
                    </ul>
                  </div>
                  <h6 className="m-b15 text-white">Our Socials</h6>
                  <div className="dz-social-icon style-1 dark">
                    <ul>
                      <li>
                        <Link
                          target="_blank"
                          to="https://www.instagram.com/blackfusefitness"
                          rel="noreferrer"
                        >
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>{" "}
                    </ul>
                  </div>
                  <svg
                    width="250"
                    height="70"
                    viewBox="0 0 250 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 38L250 0L210 70L0 38Z"
                      fill="url(#paint0_linear_306_1296)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_306_1296"
                        x1="118.877"
                        y1="35.552"
                        x2="250.365"
                        y2="35.552"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="var(--primary)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="col-md-6 col-xl-7">
                <form
                  className="dz-form dzForm style-1"
                  onSubmit={sendEmail}
                >
                  <input
                    type="hidden"
                    className="form-control"
                    name="dzToDo"
                    value="Contact"
                  />
                  <div className="dzFormMsg"></div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="input-group input-line">
                        <input
                          name="dzFirstName"
                          value={formData.dzFirstName}
                          onChange={handleChange}
                          required
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group input-line">
                        <input
                          name="dzLastName"
                          value={formData.dzLastName}
                          onChange={handleChange}
                          required
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="input-group input-line">
                        <input
                          name="dzEmail"
                          value={formData.dzEmail}
                          onChange={handleChange}
                          required
                          type="email"
                          className={`form-control ${emailError ? "is-invalid" : ""}`}
                          placeholder="Your Email Address"
                        />
                      
                        {emailError && (
                          <div className="invalid-feedback">{emailError}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="input-group input-line">
                        <input
                          name="dzPhoneNumber"
                          value={formData.dzPhoneNumber}
                          onChange={handleChange}
                          required
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-group input-line m-b30">
                        <textarea
                          name="dzMessage"
                          value={formData.dzMessage}
                          onChange={handleChange}
                          rows="5"
                          required
                          className="form-control"
                          placeholder="Message..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="btn btn-primary btn-lg btn-skew"
                      >
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="container content-inner-1">
          <div className="map-iframe">
            <iframe
              title="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.557526513655!2d-77.03546232520506!3d18.13821328288266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb0fc82270dc73%3A0x15b15a41c0140f5d!2s4%20Church%20St%2C%20Linstead%2C%20Jamaica!5e0!3m2!1sen!2sin!4v1722671658326!5m2!1sen!2sin"
              style={{ border: "0", marginBottom: "-7px", width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
