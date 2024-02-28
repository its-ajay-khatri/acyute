import React from "react";
import Header from "../Header/Header";
import './topVideoSection.css';

const TopVideoSection = ({videoBackgroundColor, showMenuPopup, setShowMenuPopup}) => {
    return(
        <>
            <div className="top-video-outer-section">
                <Header showMenuPopup={showMenuPopup} setShowMenuPopup={setShowMenuPopup} />
            </div>
            <div className="top-video-page-video-section">
                <p style={{backgroundColor:`${videoBackgroundColor}`}}>video</p>
            </div>
        </>
    )
}
export default TopVideoSection;