import React from 'react'

const TopicPills = ({topics, selectTopic}) => {
    return (
        <div>

            <ul className="nav nav-tabs">
                {
                    topics.map(topic =>
                        <div className="nav-item">
                            <a className="nav-link active" onClick={() => {selectTopic(topic)}}>{topic.title}</a>
                        </div>
                    )
                }
            </ul>

        </div>

    )
}

export default TopicPills