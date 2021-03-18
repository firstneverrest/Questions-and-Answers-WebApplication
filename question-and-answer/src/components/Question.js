import React, { useState } from 'react'
import { AiOutlineUpCircle, AiOutlineDownCircle } from "react-icons/ai";

const Question = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false);
    let iconStyles = { height: "100%", width: "100%"};

    return (
        <article className="Question">
            <header className="Question__header">
                <h4 className="Question__title">{title}</h4>
                <button className="Question__button" onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineUpCircle style={iconStyles}/> : <AiOutlineDownCircle style={iconStyles}/>}
                </button>                
            </header>
            {showInfo ? <p className="Question__info">{info}</p> : null}
        </article>
    )
}

export default Question
