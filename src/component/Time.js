import React from 'react'


const date = new Date()
const hours = date.getHours()
let timeOfDay


function Moment() {
    if (hours < 12) {
        timeOfDay = 'morning'
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon'
    } else if (hours >= 17 && hours < 24) {
        timeOfDay = 'evening'
    }

    return (
        <p>Hey, good {timeOfDay}</p>
    )
}


export default Moment