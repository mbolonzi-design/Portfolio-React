import React from 'react';
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';
import './Home.css';

function Home() {
    return (
        <div 
            className='hero' 
            style={{
                backgroundImage: "url(/images/bg03.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
           <h3>Hi, I'm Mbolonzi</h3>
           <p>A software engineer from Nairobi, Kenya</p>
           <div className="get-social">
                <a href='https://github.com/mbolonzi-design' target='_blank' rel='noreferrer'>
                    <FaGithub className='icon github' />
                </a>
                <a href='https://www.linkedin.com/in/mbolonzi-peter/' target='_blank' rel='noreferrer'>
                    <FaLinkedin className='icon linkedin' />
                </a>
                <a href='https://twitter.com/mbolonzi_' target='_blank' rel='noreferrer'>
                    <FaTwitter className='icon twitter' />
                </a>
           </div>
        </div>
    );
}
export default Home;
