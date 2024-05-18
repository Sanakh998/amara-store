import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/store-logo.svg'


const Footer = () => {
  return (
    <footer className="bg-berkeley text-honeydew py-4 mx-auto d-grid">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Link to={'/'}>
              {/* <h5>Amara Store</h5> */}
              <img className="logo" src={logo} alt="Logo" />
            </Link>
            <p className="ms-3">About Us</p>
            <p className="ms-3">Contact Us</p>
          </div>
          <div className="col-sm-4">
            <h5 className="my-2 ms-2 ms-sm-0">Helpful Links</h5>
            <p className="ms-3 ms-sm-0">FAQs</p>
            <p className="ms-3 ms-sm-0">Shipping Information</p>
            <p className="ms-3 ms-sm-0">Privacy Policy</p>
          </div>
          <div className="col-sm-4">
            <h5 className="my-2 ms-2 ms-sm-0">Follow Us</h5>
            <p className="ms-3 ms-sm-0">Facebook</p>
            <p className="ms-3 ms-sm-0">Twitter</p>
            <p className="ms-3 ms-sm-0">Instagram</p>
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
