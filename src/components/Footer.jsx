import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../Assets/home-img/logo.png";
import "../styles/footer.css";
import { API_BASE_URL } from "../api";

const Footer = () => {
  const [email, setemail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleEmailClick = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!email) {
      setResponseMessage("Please enter a valid email address.");
      return;
    }

    console.log("Submitting email:", email); // Debugging step: log email

    try {
      const formData = new FormData();
      formData.append("Email", email); // Append the email to the form data

      // Debugging: log the formData to ensure it's correctly set
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      const response = await fetch(`${API_BASE_URL}/email`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.text();
        setResponseMessage("We will get back to you!");
        setTimeout(() => setResponseMessage(""), 3000); // Clear the message after 3 seconds
      } else {
        const errorData = await response.text();
        console.error("Error response:", errorData); // Log error for debugging
        setResponseMessage(errorData || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error contacting API:", error); // Log error for debugging
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Us Section */}
        <div className="footer-section address">
          {/* <Link to ='/'><img src={logo} alt="Brave SparkKids Logo" className="footer-logo" /></Link> */}
          <NavLink to="/">
{/*           <img src={logo} alt="Brave Sparkids Logo" /> */}
          <svg id="mySvg" width="95" height="110" viewBox="0 0 295 409" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="295" height="410" fill="url(#pattern0_1357_198322)"/>
<defs>
<pattern id="pattern0_1357_198322" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_1357_198322" transform="scale(0.00338983 0.00244499)"/>
</pattern>
</defs>
</svg>
        </NavLink>
          <h3>Contact Us</h3>
          <p>
            Call: +91 82170 77217 <br />
            Email: sparkids@mail.com
          </p>
          <p>
            Address: Indi Regional Office<br />
            Behind BSNL Tower, Near Mallikarjun Temple,<br />
            Vidya Nagar, Sindagi Road, Indi - 586209
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-dribbble"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Explore Section */}
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/franchise">Franchises</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Courses Section */}
        <div className="footer-section">
          <h3>Courses</h3>
          <ul>
            <li><Link to="/abacus">Abacus</Link></li>
            <li><Link to="/vedic">Vedic Maths</Link></li>
            <li><Link to="/rubic">Rubik’s Cube</Link></li>
            <li><Link to="/writing">Writing</Link></li>
            <li><Link to="/reading">Reading</Link></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            {/* <li><Link to="/faq">FAQ’s</Link></li> */}
            <li><Link to="/franchise#faq">FAQ’s</Link></li>
            <li><Link to="/#testimonials">Testimonials</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/policies">Policies</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section subscribe">
          <h3>Subscribe to News Letters</h3>
          <p>Stay in the loop with the latest news and <br /> updates from SparkKids.</p>
          <form onSubmit={handleEmailClick}>
            <input
              type="email"
              placeholder="Email here"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <button type="submit">Subscribe Now</button>
          </form>
          {responseMessage && <p>{responseMessage}</p>} {/* Display response message */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Brave SparkKids, Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
