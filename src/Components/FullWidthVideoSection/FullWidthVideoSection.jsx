import React from "react";

const FullWidthVideoSection = ({videoUrlLoop, videoUrl}) => {
    return(
        <>
            <section className="b-video" data-scroll-section data-scroll data-scroll-call="b-video" data-scroll-repeat data-scroll-offset="0, 125%">
                            <div className="container-fluid">
                            <div className="row">
                                <div className="offset-md-2 col-md-20">
                                <div className="b-video__main">
                                    <div className="b-video__wrapper" data-scroll data-animate="fadeUp">
                                    <div className="b-video__preview">
                                        <video autoPlay muted loop playsInline>
                                        <source src={videoUrlLoop} type="video/mp4" />
                                        <p>Your browser does not support HTML5 videos.<a href={videoUrlLoop}>Watch video</a></p>
                                        </video>
                                    </div>
                                    <div className="b-video__video">
                                        <video playsInline>
                                        <source src={videoUrl} type="video/mp4" />
                                        <p>Your browser does not support HTML5 videos.<a href={videoUrl}>Watch video</a></p>
                                        </video>
                                    </div>
                                    </div>
                                    {/* <div className="b-video__button">
                                    <span className="b-video__button-icon"><svg width={63} height={63} viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.5124 2.84309C28.2917 -0.936244 34.4192 -0.936244 38.1986 2.84309L59.8677 24.5122C63.647 28.2916 63.6471 34.4191 59.8677 38.1984L38.1986 59.8676C34.4192 63.6469 28.2917 63.6469 24.5124 59.8676L2.84322 38.1984C-0.936114 34.4191 -0.936111 28.2916 2.84322 24.5122L24.5124 2.84309Z" fill="white" />
                                        </svg>
                                    </span>
                                    <span className="b-video__button-text">
                                        <span data-text="Pause">Play</span>
                                    </span>
                                    </div> */}
                                </div>
                                </div>
                            </div>
                            </div>
                        </section>
        </>
    )
}

export default FullWidthVideoSection;