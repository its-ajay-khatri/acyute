import React from "react";
import Header from "./CommonComponents/Header/Header";
import './home.css';
import FooterComponent from "./CommonComponents/Footer/footerComponent";

const Home = () => {
    return(
        <>
            <div className="home-page-outer-container">
                <Header backgroundColor={'transparent'}/>

                <div className="home-page-banner-section">
                <div className="home-section-background-image"></div>
                    <div className="bigger-text-section">
                        <p className="banner-section-title">ACYUTE</p>
                        <p className="banner-section-sub-title">Technologies</p>
                        <p className="banner-section-description">Empowering your digital journey with Excellence</p>
                    </div>
                </div>
                <div className="lets-talk-outer-section">
                    <div className="lets-talk-inner-section">
                        <div class="lets-talk-left-div" style={{fontSize:'40px'}}>
                            <p>We Ellevate Your Business to the<br />
                                Next Level with<br />
                                Cutting-Edge Technology.
                            </p>
                        </div>
                        <div class="lets-talk-right-div">
                            <div className="lets-talk-circle-section">
                                <p>Let's Talk</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="video-outer-section">
                    <div className="video-inner-section">
                        <video width="100%" height="100%" muted='true' loop='true' playsInline='true' autoPlay='true'>
                            <source src="https://digital-cover.com/wp-content/uploads/2022/05/Showreel-Loop_Compressed.mp4" type="video/mp4" />
                            Your browser does not support HTML5 videos. <a href="https://digital-cover.com/wp-content/uploads/2022/05/Showreel-Loop_Compressed.mp4">Watch video</a>
                        </video>
                    </div>
                </div>
                <div className="join-us-text-section">
                    <div className="home-section-background-image"></div>
                    <div className="join-us-text-div">
                        <p>Join us on this journey of digital excellence. Let Acyute be <br />
                        the architect of your digital future, where your vision is our<br />
                        blueprint, and your success is our mission.</p>
                    </div>
                </div>
                <div className="lets-talk-outer-section">
                    <div className="lets-talk-inner-section">
                        <div class="lets-talk-left-div" style={{fontSize:'25px'}}>
                            <p>We're eager to take on the challenges you present<br />
                            to us! Please go ahead and provide us with your<br />
                            project specifications.</p>
                        </div>
                        <div class="lets-talk-right-div">
                            <div className="lets-talk-circle-section">
                                <p style={{padding: '3.5em 1.5em'}}>start a project</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lets-talk-outer-section">
                    <div className="lets-talk-inner-section">
                        <div class="lets-talk-left-div" style={{fontSize:'25px', width:'45%'}}>
                            <p style={{fontSize:'40px', textAlign:'center', fontFamily:'monospace', lineHeight:'1.1em'}}>Have Questions? <br /> we got you</p>
                        </div>
                        <div class="lets-talk-right-div">
                            <div className="lets-talk-circle-section">
                                <p style={{padding: '3.5em 1.5em'}}>leave Inquiry</p>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterComponent />
            </div>            
        </>
    )
}

export default Home;