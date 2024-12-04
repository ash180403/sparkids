import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import logo from "../Assets/home-img/logo.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Us Section */}
        <div className="footer-section address">
          <img src={logo} alt="Brave SparkKids Logo" className="footer-logo" />
          <h3>Contact Us</h3>
          <p>
            Call: +91 82170 77217 <br />
            Email: example@mail.com
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
            <li><Link to="/opportunities">Opportunities</Link></li>
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
            <li><Link to="/faq">FAQ’s</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/policies">Policies</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section subscribe">
          <h3>Subscribe to News Letters</h3>
          <p>Stay in the loop with the latest news and <br /> updates from SparkKids.</p>
          <form>
            <input type="email" placeholder="Email here" />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Brave SparkKids, Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
