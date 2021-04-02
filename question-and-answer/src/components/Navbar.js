import React from "react";

const Navbar = ({ filterQuestions }) => {
  return (
    <div className="Navbar">
      <button className="Navbar__item" onClick={() => filterQuestions("all")}>
        All
      </button>
      <button className="Navbar__item" onClick={() => filterQuestions("sport")}>
        Sport
      </button>
      <button className="Navbar__item" onClick={() => filterQuestions("cuisine")}>
        Cuisine
      </button>
    </div>
  );
};

export default Navbar;
