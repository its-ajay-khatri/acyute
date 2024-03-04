import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import './IT-Consulting.css'
import '../animations.css';
import TopVideoSection from "../CommonComponents/TopVideoSection/TopVideoSection";
import TextCenterNoNBold from "../CommonComponents/TextCenterNonBold/TextCenterNonBold";
import BoldTextCenterSection from "../CommonComponents/BoldTextCenterSection/BoldTextCenterSection";
import TextWithCircle from "../CommonComponents/TextWithCircle/TextWithCircle";
import FooterComponent from "../CommonComponents/Footer/footerComponent";
import QuestionAnswer from "../CommonComponents/QuestionAnswer/QuestionAnswer";
import ITImageBanner from '../../assets/videos/IT-consulting.mp4';
import ITConsultancyImg1 from '../../assets/images/IT-consultancy/IT-consulting1.jpeg'
import ITConsultancyImg2 from '../../assets/images/IT-consultancy/IT-consulting2.jpeg'
import ITConsultancyImg3 from '../../assets/images/IT-consultancy/IT-consulting3.jpeg'

const ITConsultancy = () => {
    let { showMenuPopup, setShowMenuPopup } = useContext(MyContext);

    useEffect(() => {
        setShowMenuPopup(false);
    }, []);

    useEffect(() => {
        const section = document.getElementById('it-consulting-header-id-section');
        if (section) {
        section.scrollIntoView();
        }
    }, [])

    return(
        <>
            <div className="it-consulting-main-container" id="it-consulting-header-id-section">
            <TopVideoSection bannerVideoHeadingText="IT Consultancy" videoUrlLoop={ITImageBanner} videoUrl={ITImageBanner} videoBackgroundColor='#bf0bbf' showMenuPopup={showMenuPopup} setShowMenuPopup={setShowMenuPopup} />
                { !showMenuPopup &&
                    <>
                       <div>
                       <TextCenterNoNBold paraId={1} centerTextClass="text-center-non-bold" centerText="Acyute's IT consulting services offer expert guidance in planning, developing, and 
                            optimizing information technology systems and infrastructure. Tailored to align 
                            IT strategies with business objectives, our services ensure the efficient and effective 
                            utilization of technology. Here's how we deliver excellence in IT consulting." />
                       </div>
                        
                        <div className="it-consultancy-strategy-section-container">
                            <QuestionAnswer paraId={3} outerDivClass="it-consultancy-strategy-section-row" firstParaClass="strategy-section-heading" firstParaText="Strategic IT Planning" secondParaClass="strategy-section-subtitle" secondParaText="Strategic planning is at the heart of our IT consulting services. We collaborate closely with clients, understanding their business objectives, 
                                    challenges, and growth aspirations to develop comprehensive IT strategies that align with their organizational goals." />

                           <div>
                           <QuestionAnswer
                                paraId={4}
                                outerDivClass="it-consultancy-strategy-section-row"
                                firstParaClass="strategy-section-heading"
                                firstParaText="Technology Optimization"
                                secondParaClass="strategy-section-subtitle"
                                secondParaText="We maximize the potential of your technological infrastructure, streamlining processes, implementing cutting-edge solutions, and staying abreast of technological advancements to enhance efficiency and sophistication."
                            />
                           </div>


                            <div className="it-consultancy-fifty-fifty-section technology-text-class">
                            <QuestionAnswer
                                paraId={6}
                                outerDivClass="fifty-fifty-left-container"
                                firstParaClass="strategy-section-heading"
                                firstParaText="Cybersecurity Excellence"
                                secondParaClass="strategy-section-subtitle"
                                secondParaText="Our cybersecurity experts adopt a multi-layered approach to protect your digital assets. From risk assessments to robust defence mechanisms, we ensure the security and integrity of your critical information."
                            />
                               
                                {/* <div className="fifty-fifty-right-container"> */}
                                <QuestionAnswer
                                    paraId={7}
                                    outerDivClass="fifty-fifty-right-container"
                                    firstParaClass="strategy-section-heading"
                                    firstParaText="Cloud Integration and Migration"
                                    secondParaClass="strategy-section-subtitle"
                                    secondParaText="We guide clients through the complexities of cloud computing, offering expertise in cloud integration and migration strategies to optimize scalability, collaboration, and cost-efficiency."
                                />
                                
                                {/* </div> */}
                            </div>
                            <div className="it-consultancy-fifty-fifty-section technology-text-class">
                                <QuestionAnswer
                                    paraId={8}
                                    outerDivClass="fifty-fifty-left-container"
                                    firstParaClass="strategy-section-heading"
                                    firstParaText="IT Infrastructure Services"
                                    secondParaClass="strategy-section-subtitle"
                                    secondParaText="Our services encompass advising on the design, implementation, 
                                        and optimization of IT infrastructure, covering hardware,
                                        software, and cloud services."
                                />
                               
                                {/* <div className="fifty-fifty-right-container"> */}
                                    <QuestionAnswer
                                    paraId={9}
                                    outerDivClass="fifty-fifty-right-container"
                                    firstParaClass="strategy-section-heading"
                                    firstParaText="Technology Strategy and Planning"
                                    secondParaClass="strategy-section-subtitle"
                                    secondParaText="We assist in developing strategic IT plans that align with 
                                            business goals, including technology roadmaps, resource 
                                            planning, and budgeting."
                                    />
                                {/* </div> */}
                            </div>
                            <div className="it-consultancy-text-video-section">
                                <div class="it-consultancy-text-video-container">
                                    <div class="it-consultancy-text-video-right-section section-zoomIn">
                                        <img src={ITConsultancyImg1} />
                                    </div>
                                    <div class="it-consultancy-bottom-big-text-section">
                                        <div><QuestionAnswer
                                            paraId={9}
                                            outerDivClass="it-consultancy-strategy-section-row"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="Cybersecurity Consulting"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="We provide expert advice on protecting IT systems and data, including risk assessments, security audits, policy implementation, and incident response planning."
                                        /></div>
                                       <div><QuestionAnswer
                                            paraId={10}
                                            outerDivClass="it-consultancy-strategy-section-row"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="Cloud Computing Consulting"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="Our team assists in cloud platform migration and optimization, including service selection, architecture design, and resource management."
                                        /></div>

                                        <div><QuestionAnswer
                                            paraId={11}
                                            outerDivClass="it-consultancy-strategy-section-row"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="Data Management and Analytics"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="We offer guidance on data governance, storage, and analytics strategies, covering big data solutions, data warehousing, and business intelligence."
                                        /> </div>                                        
                                    </div>                                    
                                </div>
                            </div>
                            <div className="it-consultancy-text-video-section">
                                <div class="it-consultancy-text-video-container">
                                    
                                    <div class="it-consultancy-bottom-big-text-section">
                                        <div><QuestionAnswer
                                            paraId={12}
                                            outerDivClass="it-consultancy-strategy-section-row"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="Network Design and Management"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="Our expertise extends to designing and managing secure and efficient 
                                            networks, including LANs, WANs, and wireless networks."
                                        /></div>    
                                        <div><QuestionAnswer
                                            paraId={13}
                                            outerDivClass="it-consultancy-strategy-section-row"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="Regulatory Compliance and IT Governance"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="Ensuring IT systems and processes comply with relevant laws, 
                                            regulations, and best practices is vital to our service."
                                        /></div>   
                                        <div><QuestionAnswer
                                            paraId={14}
                                            outerDivClass="it-consultancy-strategy-section-row"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="Software Development and Integration"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="We assist in custom software development and integration to 
                                            enhance business processes and efficiency."
                                        /></div>  
                                        <div><QuestionAnswer
                                            paraId={15}
                                            outerDivClass="it-consultancy-strategy-section-row"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="Performance Tuning and Optimization"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="We analyze existing IT systems to enhance efficiency, reduce costs, 
                                            and improve performance."
                                        /></div> 
                                           
                                    </div>  
                                    <div class="it-consultancy-text-video-right-section section-zoomIn">
                                        <img src={ITConsultancyImg2} />
                                    </div>                                  
                                </div>
                               <div>
                               <QuestionAnswer
                                    paraId={16}
                                    outerDivClass="it-consultancy-strategy-section-row"
                                    firstParaClass="strategy-section-heading"
                                    firstParaText="Technology Optimization"
                                    secondParaClass="strategy-section-subtitle"
                                    secondParaText="We maximize the potential of your technological infrastructure, streamlining processes, implementing cutting-edge solutions, and staying abreast of technological advancements to enhance efficiency and sophistication."
                                />
                               </div>
                            </div>
                            <div className="it-consultancy-text-video-section">
                                <div class="it-consultancy-text-video-container">
                                    <div class="it-consultancy-text-video-right-section section-zoomIn">
                                        <img src={ITConsultancyImg3} />
                                    </div>
                                    <div class="it-consultancy-bottom-big-text-section">
                                        <div><QuestionAnswer
                                            paraId={17}
                                            outerDivClass="it-consultancy-strategy-section-row"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="Change Management and Training"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="Our services include change management strategies and training 
                                            programs to assist organizations with the human aspect of IT changes."
                                        /></div>
                                        <div><QuestionAnswer
                                            paraId={17}
                                            outerDivClass="it-consultancy-strategy-section-row"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="Digital Transformation"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="We guide organizations in leveraging digital technologies to transform 
                                            their business processes, products, and customer experiences."
                                        /></div>
                                        
                                        <div><QuestionAnswer
                                            paraId={18}
                                            outerDivClass="it-consultancy-strategy-section-row"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="IT Outsourcing and Vendor Management"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="We advise on outsourcing strategies and manage relationships 
                                            with IT service providers and vendors."
                                        /></div>      
                                    </div>                                    
                                </div>
                            </div>
                            
                        </div>

                            <div className="it-consultancy-bold-section">
                                <BoldTextCenterSection classNametext="center-text-bold-section" paraId={19} boldText="Acyute's IT consulting services are designed to meet each organization's unique needs and challenges, 
                                helping them leverage technology for growth, innovation, and a competitive edge. Our services range 
                                from short-term specific issue advice to long-term partnerships for ongoing IT strategy and management." />
                            </div>
   
                            <div className="it-consultancy-text-with-circle-section">
                            <TextWithCircle paraId="19" leftSectionText="If you've got an idea, feel free to drop by and 
                            discuss it with us to discover the ways we can 
                            assist you in bringing it to life." CircleLink="contact" CircleText='Contact us' LeaveARequestText="" />   
                            </div>
                            <FooterComponent />
                    </>
                }
            </div>
        </>
    )
}

export default ITConsultancy;