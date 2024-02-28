import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import './webDesign.css';
import TextWithCircle from "../CommonComponents/TextWithCircle/TextWithCircle";
import FooterComponent from "../CommonComponents/Footer/footerComponent";
import TopVideoSection from "../CommonComponents/TopVideoSection/TopVideoSection";
import FullWidthVideoSection from "../FullWidthVideoSection/FullWidthVideoSection";
import QuestionAnswer from "../CommonComponents/QuestionAnswer/QuestionAnswer";
import TextCenterNoNBold from "../CommonComponents/TextCenterNonBold/TextCenterNonBold";

const WebDesign = () => {
    let { showMenuPopup, setShowMenuPopup } = useContext(MyContext);

    useEffect(() => {
        setShowMenuPopup(false);
    }, [])

    return(
        <>
            <div className="web-design-main-container">
                <TopVideoSection videoBackgroundColor='green' showMenuPopup={showMenuPopup} setShowMenuPopup={setShowMenuPopup} />
                { 
                    !showMenuPopup &&
                    <>
                    <TextCenterNoNBold paraId={1} centerTextClass="web-design-welcome-text-section" centerText="Acyute's IT consulting services offer expert guidance in planning, developing, and 
                            optimizing information technology systems and infrastructure. Tailored to align 
                            IT strategies with business objectives, our services ensure the efficient and effective 
                            utilization of technology. Here's how we deliver excellence in IT consulting" />
                        
                        <div className="web-design-strategy-section-container">
                            <div className="web-design-text-video-section">
                                    <div class="web-design-text-video-container">
                                        
                                        <div class="web-design-bottom-big-text-section">
                                            

                                            <div><QuestionAnswer
                                                paraId={3}
                                                outerDivClass="web-design-strategy-section-row section-zoomIn"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Intuitive UI/UX Design"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We harness advanced tools for user interface design, emphasizing color, typography, and layout to create visually appealing and user-friendly websites."
                                            /></div>

                                            <div><QuestionAnswer
                                                paraId={4}
                                                outerDivClass="web-design-strategy-section-row section-zoomIn"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Adaptive Responsive Design"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Our designs adapt seamlessly across devices and screen sizes using responsive frameworks, ensuring a consistent and optimal viewing experience."
                                            /></div>
                                            <div><QuestionAnswer
                                                paraId={5}
                                                outerDivClass="web-design-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Dynamic Content Management"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We employ CMS like WordPress for dynamic content updates, keeping the website fresh and relevant."
                                            /></div>
                                            <div><QuestionAnswer
                                                paraId={6}
                                                outerDivClass="web-design-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Enhanced Visibility"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Through modern SEO tactics, we boost your website's visibility and ranking on search engines"
                                            /></div>
                                            <div><QuestionAnswer
                                                paraId={7}
                                                outerDivClass="web-design-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Robust Security"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We safeguard websites with SSL certificates and security best practices to prevent cyber threats"
                                            /></div>
                                                   
                                        </div>  
                                        <div class="web-design-text-video-right-section section-zoomIn">
                                            <p>video</p>
                                        </div>                                  
                                    </div>
                            </div>
                        </div>
                        <div className="web-design-video-section section-bounceIn">
                            <FullWidthVideoSection videoUrlLoop="https://digital-cover.com/wp-content/uploads/2022/05/Showreel-Loop_Compressed.mp4" videoUrl={'https://digital-cover.com/wp-content/uploads/2022/05/Showreel_compressed.mp4'}/>
                        </div>
                        <div className="web-design-strategy-section-container">
                            <div className="web-design-text-video-section">
                                    <div class="web-design-text-video-container">
                                        <div class="web-design-text-video-right-section section-zoomIn">
                                            <p>video</p>
                                        </div>   
                                        <div class="web-design-bottom-big-text-section section-zoomIn">
                                            <div><QuestionAnswer
                                                paraId={10}
                                                outerDivClass="web-design-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Speed Optimization"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Techniques such as compression and caching are used to enhance website speed, improving user experience and SEO."
                                            /></div>
                                            <div><QuestionAnswer
                                                paraId={11}
                                                outerDivClass="web-design-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Inclusive Accessibility"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Our adherence to WCAG standards makes our websites accessible to all users, including those with disabilities"
                                            /></div>

                                            <div><QuestionAnswer
                                                paraId={12}
                                                outerDivClass="web-design-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Data-Driven Insights"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="With tools like Google Analytics, we analyze user behavior to continuously improve the website's performance and user experience."
                                            /></div>
                                            <div><QuestionAnswer
                                                paraId={13}
                                                outerDivClass="web-design-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Seamless E-commerce"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We integrate secure shopping carts, payment systems, and product management for a smooth online shopping experience."
                                            /></div>
                                            <div><QuestionAnswer
                                                paraId={14}
                                                outerDivClass="web-design-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Customized Strategic Design"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We tailor website designs to reflect your brand's unique identity and strategic goals, ensuring a bespoke and luxurious online presence that stands out."
                                            /></div>
                                                   
                                        </div>                                
                                    </div>
                            </div>
                            <div className="web-design-text-with-circle-section">
                            <TextWithCircle paraId="19" leftSectionText="If you've got an idea, feel free to drop by and 
                            discuss it with us to discover the ways we can 
                            assist you in bringing it to life." CircleLink="contact-us" CircleText='Contact us' LeaveARequestText="" />
                            </div>
                        </div>
                        <FooterComponent />
                    </>
                 }
            </div>
        </>
    )
}

export default WebDesign;