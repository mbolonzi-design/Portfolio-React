import React from "react";
import './About.css';

function About() {
  return (
    <div>
        <div id="profile">
            <div className="profile-image">
              <img src="/images/me.jpg" alt="Mbolonzi" />
            </div>
            <div className="desc">
              <p>
                  I am a software developer from with a passion for building web applications.
                  I am also a graduate of the <a href="https://moringaschool.com/" target="_blank" rel="noopener noreferrer">Moringa School</a> Full Stack Web Development program.
                  I have a background in Computer Science. I enjoy solving real world problems with some lines of code.
                  I am always looking for new opportunities to learn and grow as a developer.
                  If you are interested in working with me, please feel free to contact me.
              </p>
            </div>
        </div>
    </div>
  );
}
export default About;