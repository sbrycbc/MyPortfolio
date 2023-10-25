import React, {useState} from 'react';
import { data } from '../../data/data.js';
import "./works.css";


function Works() {
  const [degrees, setDegrees] = useState(0);

  const handlePrevClick = () => {
    setDegrees(degrees + 45);
  }

  const handleNextClick = () => {
    setDegrees(degrees - 45);
  }

  const boxStyle = {
    transform: `perspective(1000px) rotateY(${degrees}deg)`
  };

  const spanStyle = (item) => {
    const spanStyle = {
      '--i':item.id
    }
    return spanStyle;

  }
  
    return (
      <div className="container">
        <div className="box" style={boxStyle}>
        {data.map((project) => (
          <span style={spanStyle(project)}>
            <img src={project.image} alt={project.name} />
          </span>
          // <div className="project" key={project.id}>
          //   <img src={project.image} alt={project.name} className="project-image" />
          //   <div className="project-details">
          //     <h3 className="project-name">{project.name}</h3>
          //     <div className="project-buttons">
          //       <a href={project.github} target="_blank" className="project-button">
          //         Code
          //       </a>
          //       {project.live && (
          //         <a href={project.live} target="_blank" className="project-button">
          //           Live
          //         </a>
          //       )}
          //     </div>
          //   </div>
          // </div>
        ))
        }
          </div>
          <div className="btns">
            <div className="btn prev" onClick={handlePrevClick}>

            </div>
            <div className="btn next" onClick={handleNextClick}></div>
        </div>
      </div>
    );
  }

export default Works;
