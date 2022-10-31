import React from "react";
import './Projects.css';
function Projects() {
  return (
    <div>
      <h4>Projects</h4>
      <div id="projects">
        <div className="project-card">
          <img src="/images/dest2.jpg" alt="project" />
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, nisi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, tempore.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src="/images/dest1.jpg" alt="project" />
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, nisi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, tempore.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src="/images/bg07.jpg" alt="project" />
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, nisi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, tempore.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src="/images/dest3.jpg" alt="project" />
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, nisi?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, tempore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;