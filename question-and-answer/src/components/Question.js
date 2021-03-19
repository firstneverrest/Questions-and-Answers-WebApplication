import React, { useState } from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const Question = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false);
    let iconStyles = { height: "100%", width: "50%", color: "white"};

    return (
        <article className="Question">
            <header className="Question__header">
                <h4 className="Question__title">{title}</h4>
                <button className="Question__button" onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <FaAngleUp style={iconStyles}/> : <FaAngleDown style={iconStyles}/>}
                </button>                
            </header>
            {showInfo ? <p className="Question__info">{info}</p> : null}
        </article>
    )
}

export default Question
