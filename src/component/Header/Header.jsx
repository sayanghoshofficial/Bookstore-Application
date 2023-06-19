import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice
          </h2>
          <p className="header-text fs-18 fw-3">
            Libraries serve as treasure troves of knowledge, offering access to
            a vast collection of books, journals, magazines, and digital
            resources. They provide a space for individuals to explore different
            subjects, conduct research, and enhance their understanding of the
            world. Libraries bridge the gap between information and people,
            enabling individuals from all walks of life to access educational
            materials regardless of their socioeconomic background.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
