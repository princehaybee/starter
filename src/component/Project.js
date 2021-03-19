import React from 'react'


function Project(props) {
    return (
    <div className="project-tile" id= {props.name}>
        <a href= {props.anchorUrl} target="_blank">
          <img src= {props.imgUrl} />
          <h3>{props.title}</h3>
        </a>                
    </div>
    )
}


export default Project