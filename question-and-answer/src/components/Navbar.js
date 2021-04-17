import React from "react";

const Navbar = ({ filterQuestions }) => {
  return (
    <div className="Navbar">
      <button className="Navbar__item" onClick={() => filterQuestions("all")}>
        All
      </button>
      <button className="Navbar__item" onClick={() => filterQuestions("profile")}>
        Profile
      </button>
      <button className="Navbar__item" onClick={() => filterQuestions("sport")}>
        Sport
      </button>
      <button className="Navbar__item" onClick={() => filterQuestions("food")}>
        Food
      </button>
    </div>
  );
};

export default Navbar;
