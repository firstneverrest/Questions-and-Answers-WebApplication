import React from 'react'

const Navbar = ({filterQuestions}) => {
    return (
        <div className="Navbar">
            <button className="Navbar__item" 
                    onClick={() => filterQuestions('all')}>
                    all
            </button>
            <button className="Navbar__item" 
                    onClick={() => filterQuestions('sport')}>
                    sport
            </button>
            <button className="Navbar__item" 
                    onClick={() => filterQuestions('cuisine')}>
                    cuisine
            </button>
         
        </div>
    )
}

export default Navbar
