import React from "react";
import Header from "../Header/Header";
import './topVideoSection.css';
import FullWidthVideoSection from "../../FullWidthVideoSection/FullWidthVideoSection";

const TopVideoSection = ({ videoUrlLoop, videoUrl, videoBackgroundColor, showMenuPopup, setShowMenuPopup}) => {
    return(
        <>
            <div className="top-video-outer-section">
                <Header showMenuPopup={showMenuPopup} setShowMenuPopup={setShowMenuPopup} />
            </div>
            <div className="top-video-page-video-section">
                {/* <p style={{backgroundColor:`${videoBackgroundColor}`}}>video</p> */}
                {/* <img src={ImageUrl} /> */}
                                        <video autoPlay muted loop playsInline width={100} height={100}>
                                        <source src={videoUrlLoop} type="video/mp4" />
                                        <p>Your browser does not support HTML5 videos.<a href={videoUrlLoop}>Watch video</a></p>
                                        </video>
            </div>
                                    
        </>
    )
}
export default TopVideoSection;