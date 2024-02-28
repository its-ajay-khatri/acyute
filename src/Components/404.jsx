import React from "react";
import './404Page.css';

const ErrorPage = () => {
    return(
        <>
            <div className="an-404-page-outer-cntainer">
                <div className="not-found-container">
                    <h1 className="not-found-title">404</h1>
                    <p className="not-found-message">OOPS, the page you are looking for is not found.</p>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;