import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-berkeley text-honeydew py-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Link to={'/'} className="text-honeydew">
              <h5>Amara Store</h5>
            </Link>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className="col-sm-4">
            <h5>Helpful Links</h5>
            <p>FAQs</p>
            <p>Shipping Information</p>
            <p>Privacy Policy</p>
          </div>
          <div className="col-sm-4">
            <h5>Follow Us</h5>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Amara Store. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
