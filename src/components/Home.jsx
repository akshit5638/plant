import React from 'react'
import vdo from '../assets/mainvideo.mp4'
const Home = () => {
    return (
        <div className="landing-page">
            <video autoPlay loop muted className="background-video">
                <source src={vdo} type="video/mp4" />
                {/* Add additional source elements for other video formats if needed */}
                Your browser does not support the video tag.
            </video>
            {/* Your landing page content */}
        </div>
    )
}

export default Home