import React from "react";
import logo from "../../assets/travel-tale.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Developer</h6>
          <Link to="https://www.github.com/hrid1" className="link link-hover">
            Facebook
          </Link>
          <Link to="https://www.linkedin.com/feed/" className="link link-hover">
            Linkdin
          </Link>
          <Link to="https://github.com/hrid1" className="link link-hover">
            GitHub
          </Link>
        </nav>
        <form>
          <Link to="/">
            <div className="flex items-center justify-center">
              <img className="w-12 h-12" src={logo} alt="" />
              <h2 className="text-xl font-bold">Travel Tale</h2>
            </div>
          </Link>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-green-400 join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
