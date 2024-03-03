import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import './softwareDevelopment.css';
import '../animations.css'
import TextWithCircle from "../CommonComponents/TextWithCircle/TextWithCircle";
import FooterComponent from "../CommonComponents/Footer/footerComponent";
import TopVideoSection from "../CommonComponents/TopVideoSection/TopVideoSection";
import TextCenterNoNBold from "../CommonComponents/TextCenterNonBold/TextCenterNonBold";
import BoldTextCenterSection from "../CommonComponents/BoldTextCenterSection/BoldTextCenterSection";
import QuestionAnswer from "../CommonComponents/QuestionAnswer/QuestionAnswer";
import SoftwareDevelopmentBanner from '../../assets/videos/software-development.mp4'
import SoftwareDevImage1 from '../../assets/images/software-development/Software-development-1.jpeg'
import SoftwareDevImage2 from '../../assets/images/software-development/Software-development-2.jpeg'

const WebDevelopment = () => {
    let { showMenuPopup, setShowMenuPopup } = useContext(MyContext);

    useEffect(() => {
        setShowMenuPopup(false);
    }, [])
    return(
        <>
            <div className="software-development-outer-container">
            <TopVideoSection bannerVideoHeadingText="Software Development" videoUrlLoop={SoftwareDevelopmentBanner} videoUrl={SoftwareDevelopmentBanner} videoBackgroundColor='#bf0bbf' showMenuPopup={showMenuPopup} setShowMenuPopup={setShowMenuPopup} />
                { !showMenuPopup &&
                    <>
                        <div className="section-slideInUp">
                            <TextCenterNoNBold paraId={3} centerTextClass="text-center-non-bold" centerText="Acyute offers comprehensive software development services tailored to innovate, enhance 
                                efficiency, and provide a competitive edge for businesses and organizations. Our approach 
                                integrates strategic planning, bespoke solutions, and modern methodologies to meet the 
                                unique requirements of each project"  />
                        </div>
                             <div className="web-development-strategy-section-container">
                                <QuestionAnswer
                                    paraId={5}
                                    outerDivClass="web-development-strategy-section-row"
                                    firstParaClass="strategy-section-heading"
                                    firstParaText="Strategic Architecture"
                                    secondParaClass="strategy-section-subtitle"
                                    secondParaText="We begin our software development journey with a deep understanding of your business objectives, workflow intricacies, and end-user expectations. This allows us to architect solutions that align seamlessly with your organization's goals."
                                />
                                <QuestionAnswer
                                    paraId={6}
                                    outerDivClass="it-consultancy-strategy-section-row"
                                    firstParaClass="strategy-section-heading"
                                    firstParaText="Custom Code Craftsmanship"
                                    secondParaClass="strategy-section-subtitle"
                                    secondParaText="Our team specializes in creating unique software solutions, whether scalable web applications, robust mobile solutions, or complex enterprise software. Our expertise in custom code development ensures optimal performance and adaptability"
                                />
                                
                                
                                <div className="web-development-text-video-section">
                                    <div class="web-development-text-video-container">
                                        
                                        <div class="web-development-bottom-big-text-section">
                                            <QuestionAnswer
                                                paraId={7}
                                                outerDivClass="web-development-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Agile Methodology Mastery"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Utilizing Agile methodologies, our process is iterative, collaborative, and flexible. This approach allows us to adapt to evolving business needs, ensuring transparency and high-quality software delivery."
                                            />
                                            <QuestionAnswer
                                                paraId={8}
                                                outerDivClass="web-development-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Custom Software Development"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We tailor software solutions to meet the specific needs of your business, encompassing the development of new applications or modification of existing ones."
                                            />

                                            <QuestionAnswer
                                                paraId={9}
                                                outerDivClass="web-development-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Web Application Development"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Our services include creating sophisticated web-based applications accessible via browsers. This involves both front-end and back-end development to ensure a complete and efficient web solution."
                                            />
                                                
                                        </div>  
                                        <div class="web-development-text-video-right-section section-zoomIn">
                                           <img src={SoftwareDevImage1} />
                                        </div>                                  
                                    </div>
                                </div>
                               
                                <QuestionAnswer
                                    paraId={10}
                                    outerDivClass="it-consultancy-strategy-section-row"
                                    firstParaClass="strategy-section-heading"
                                    firstParaText="Mobile Application Development"
                                    secondParaClass="strategy-section-subtitle"
                                    secondParaText="We develop applications for mobile devices, focusing on both native (iOS, Android) and cross-platform solutions, ensuring a broad reach and user engagement."
                                />
                                <div className="web-development-text-video-section web-development-video-left-40-text-right-60">
                                    <div class="web-development-text-video-container">
                                        <div class="web-development-text-video-right-section section-zoomIn">
                                        <img src={SoftwareDevImage2} />
                                        </div>
                                        <div class="web-development-bottom-big-text-section">                                 
                                            <QuestionAnswer
                                                paraId={11}
                                                outerDivClass="web-development-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Cloud Computing Services"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Leveraging cloud platforms, we offer services in cloud migration, cloud-native development, and cloud infrastructure management, enhancing scalability and flexibility."
                                            />
                                            <QuestionAnswer
                                                paraId={12}
                                                outerDivClass="web-development-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Enterprise Software Solutions"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We design and implement large-scale software solutions like ERP and CRM systems, helping businesses manage complex operations efficiently."
                                            />

                                            <QuestionAnswer
                                                paraId={13}
                                                outerDivClass="web-development-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Software Consulting"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Our expert consulting services guide you through software strategy, architecture, technology selection, and process optimization"
                                            />
                                                  
                                        </div>                                    
                                    </div>
                                </div>
                                
                                <div className="it-consultancy-fifty-fifty-section">
                                    <QuestionAnswer
                                        paraId={14}
                                        outerDivClass="fifty-fifty-left-container"
                                        firstParaClass="strategy-section-heading"
                                        firstParaText="Quality Assurance and Testing"
                                        secondParaClass="strategy-section-subtitle"
                                        secondParaText="We ensure the reliability and functionality of software through comprehensive testing methods, including unit, integration, and user acceptance testing."
                                    />
                                    
                                    <div className="fifty-fifty-right-container section-lineRight">
                                    <QuestionAnswer
                                        paraId={15}
                                        outerDivClass="fifty-fifty-left-container"
                                        firstParaClass="strategy-section-heading"
                                        firstParaText="Software and System Integration"
                                        secondParaClass="strategy-section-subtitle"
                                        secondParaText="We specialize in integrating various software products and systems, enhancing interoperability and functionality."
                                    />
                                        
                                    </div>
                                </div>
                                <div className="it-consultancy-fifty-fifty-section">
                                    <QuestionAnswer
                                        paraId={16}
                                        outerDivClass="fifty-fifty-left-container"
                                        firstParaClass="strategy-section-heading"
                                        firstParaText="Maintenance and Support"
                                        secondParaClass="strategy-section-subtitle"
                                        secondParaText="Our ongoing support, updates, and maintenance services ensure that your software continues to function effectively over time."
                                    />
                                    
                                    <div className="fifty-fifty-right-container">
                                    <QuestionAnswer
                                        paraId={17}
                                        outerDivClass="fifty-fifty-left-container"
                                        firstParaClass="strategy-section-heading"
                                        firstParaText="Agile and DevOps Practices"
                                        secondParaClass="strategy-section-subtitle"
                                        secondParaText="Implementing Agile for iterative development and DevOps practices to unify software development and operations, enhancing efficiency and collaboration"
                                    />
                                    </div>
                                </div>
                                <div className="it-consultancy-fifty-fifty-section">
                                    <QuestionAnswer
                                        paraId={18}
                                        outerDivClass="fifty-fifty-left-container"
                                        firstParaClass="strategy-section-heading"
                                        firstParaText="Data Analytics and Business Intelligence"
                                        secondParaClass="strategy-section-subtitle"
                                        secondParaText="We develop data analysis and business intelligence solutions, providing actionable insights crucial for decision-making."
                                    />
                                    
                                    <div className="fifty-fifty-right-container">
                                        <QuestionAnswer
                                            paraId={19}
                                            outerDivClass="fifty-fifty-left-container"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="Cybersecurity Services"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="Our focus on security in the software development process protects applications from threats and vulnerabilities."
                                        />
                                    
                                       
                                    </div>
                                </div>
                                
                            </div>
                            <div className="web-development-bold-center-section section-bounceIn">
                                <BoldTextCenterSection classNametext="center-text-bold-section" paraId={20} boldText="At Acyute, we understand the diverse needs of software development and are committed to delivering 
                                    solutions that meet and exceed our client's expectations. Our services are designed to adapt to each 
                                    project's specific requirements and goals, ensuring success and innovation in the digital realm." />
                            </div>
                                <div className="web-development-text-with-circle">
                                    <TextWithCircle paraId="21" leftSectionText="If you've got an idea, feel free to drop by and 
                                        discuss it with us to discover the ways we can 
                                        assist you in bringing it to life." CircleLink="contact" CircleText='Contact us' />   
                                </div>
                                <FooterComponent />
                    </>
                 }
            </div>
        </>
    )
}

export default WebDevelopment;