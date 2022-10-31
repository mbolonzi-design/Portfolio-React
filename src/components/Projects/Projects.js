import React from "react";
import './Projects.css';
function Projects() {
  return (
    <div>
      <h4>Projects</h4>
      <div className="project">
        <div className="project-image">
          <img src="/images/bg03.jpg" alt="project" />
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, nisi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, tempore.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, dolore.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, illum.
            </p>
          </div>
          <img src="/images/bg04.jpg" alt="bg2" />
          <img src="/images/bg06.jpg" alt="bg4" />
        </div>
      </div>
    </div>
  );
}
export default Projects;