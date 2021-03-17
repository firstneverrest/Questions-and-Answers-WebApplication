import React from 'react'
import Question from './Question'

const Questions = ({data}) => {
    return (
        <div className="Questions">
            {
                data.map((question) => {
                    return <Question key={question.id} {...question} />
                })
            }
        </div>
    )
}

export default Questions
