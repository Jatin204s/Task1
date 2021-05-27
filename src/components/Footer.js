import React from "react";
import bulb from "./bulb.jpg";
import cost from "./cost.jpg";
import design from "./design.jpg";
import lock from "./lock.jpg";

const Footer = () => {
  return (
    <div className="container">
      <div class="card">
        <img
          src={bulb}
          width="50px"
          height="50px"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h3 class="card-title">Creative Concept</h3>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src={design}
          width="50px"
          height="50px"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h3 class="card-title">Amazing Design</h3>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src={cost}
          width="50px"
          height="50px"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h3 class="card-title">Cost Effective</h3>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src={lock}
          width="50px"
          height="50px"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h3 class="card-title">Secure</h3>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
