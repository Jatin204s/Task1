import React from "react";

const Navbar = () => {
  return (
    <div className="backimage">
      <nav>
        <label className="logo">
          <span className="ba">BA</span>KER
        </label>
        <ul className="list">
          <li>
            <a className="active" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Testimonial</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="text">
        <h1>
          <br />
          We are at Baker
        </h1>
        <h1>
          <br />
          STARTING A NEW JOURNEY
        </h1>
        <p className="para1">
          <br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, . Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."
        </p>
      </div>
      <div className="butns">
        <button className="btnn1">Download Now</button>
        <button className="btnn2">Learn More</button>
      </div>
    </div>
  );
};

export default Navbar;
