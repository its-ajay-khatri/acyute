import React from "react";
import Header from "../Header/Header";
import './topVideoSection.css';

const TopVideoSection = ({bannerVideoHeadingText, videoUrlLoop, videoUrl, videoBackgroundColor, showMenuPopup, setShowMenuPopup}) => {
    return(
        <>
            <div className="top-video-outer-section">
                <Header showMenuPopup={showMenuPopup} setShowMenuPopup={setShowMenuPopup} />
            </div>
            <div className="top-video-page-video-section">
            <h1 className="banner-video-heading-h1">{bannerVideoHeadingText}</h1>
                                        <video autoPlay muted loop playsInline width={100} height={100}>
                                        <source src={videoUrlLoop} type="video/mp4" />
                                        <p>Your browser does not support HTML5 videos.<a href={videoUrlLoop}>Watch video</a></p>
                                        </video>
            </div>
                                    
        </>
    )
}
export default TopVideoSection;