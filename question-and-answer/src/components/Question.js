import React from 'react'

const Question = ({title, info}) => {
    return (
        <article className="Question">
            <header className="Question__header">
                <h4 className="Question__title">{title}</h4>
                <button className="Question__button">+</button>                
            </header>
            <p className="Question__info">{info}</p>
        </article>
    )
}

export default Question
