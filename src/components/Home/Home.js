import React from 'react';
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
        </div>
    );
}
export default Home;
