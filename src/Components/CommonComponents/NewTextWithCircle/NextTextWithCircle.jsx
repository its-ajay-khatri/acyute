import React from "react";
import './NextTextWithcircle.css'
import { Link } from "react-router-dom";

const NextTextWithCircle = () => {
    return(<>
                <div className="lets-talk-outer-section">
                    <div className="lets-talk-inner-section">
                        <div class="lets-talk-left-div" style={{fontSize:'40px'}}>
                            <p>If you've got an idea, feel free to drop by and discuss it with us to discover the ways we can assist you in bringing it to life
                            </p>
                        </div>
                        <div class="lets-talk-right-div">
                            <div className="lets-talk-circle-section">
                                <Link to='contact'>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
    </>)
}

export default NextTextWithCircle;