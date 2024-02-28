import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import './networking.css';
import TextWithCircle from "../CommonComponents/TextWithCircle/TextWithCircle";
import FooterComponent from "../CommonComponents/Footer/footerComponent";
import TopVideoSection from "../CommonComponents/TopVideoSection/TopVideoSection";
import FullWidthVideoSection from "../FullWidthVideoSection/FullWidthVideoSection";
import QuestionAnswer from "../CommonComponents/QuestionAnswer/QuestionAnswer";
import TextCenterNoNBold from "../CommonComponents/TextCenterNonBold/TextCenterNonBold";
import BoldTextCenterSection from "../CommonComponents/BoldTextCenterSection/BoldTextCenterSection";

const WebDesign = () => {
    let { showMenuPopup, setShowMenuPopup } = useContext(MyContext);

    useEffect(() => {
        setShowMenuPopup(false);
    }, [])

    return(
        <>
            <div className="networking-main-container">
                <TopVideoSection videoBackgroundColor='pink' showMenuPopup={showMenuPopup} setShowMenuPopup={setShowMenuPopup} />
                { 
                    !showMenuPopup &&
                    <>
                    <TextCenterNoNBold paraId={1} centerTextClass="networking-welcome-text-section" centerText="Acyute's networking services offer a holistic suite of solutions to enhance, maintain, 
and optimize network infrastructure. Our expertise ensures seamless communication, 
data transfer, and connectivity, vital for the smooth functioning of businesses. Here's 
how we provide unparalleled networking services." />
                        
                        
                        <div className="networking-strategy-section-container">
                            <div className="networking-text-video-section">
                                    <div class="networking-text-video-container">
                                        <div class="networking-text-video-right-section first-video-section section-zoomIn">
                                            <p>video</p>
                                        </div>   
                                        <div class="networking-bottom-big-text-section section-zoomIn">
                                            <QuestionAnswer
                                                paraId={4}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Strategic Network Architecture"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Strategic planning is at the heart of our IT consulting services. We collaborate 
closely with clients, understanding their business objectives, challenges, and 
growth aspirations to develop comprehensive IT strategies that align with 
their organizational goals."
                                            />
                                            <QuestionAnswer
                                                paraId={5}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Scalability for Future Needs"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="As your business grows, so does the demand on your network. Our scalable 
designs effortlessly accommodate this growth, ensuring your network 
infrastructure is always a step ahead."
                                            />

                                            <QuestionAnswer
                                                paraId={6}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Network Installation and Configuration"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Our services extend to the setup and configuration of network hardware and 
software, optimizing performance from the start."
                                            />
                                            
                                                   
                                        </div>
                                                                        
                                    </div>
                                    <div class="networking-text-video-container">
                                        <div class="networking-text-video-right-section second-video-section section-zoomIn">
                                            <p>video</p>
                                        </div>   
                                        <div class="networking-bottom-big-text-section section-zoomIn">
                                        <QuestionAnswer
                                                paraId={7}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Network Design and Architecture"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We meticulously develop network layouts that align with your organization's 
needs. This involves selecting suitable hardware and software and crafting an 
efficient network topology."
                                            />
                                            <QuestionAnswer
                                                paraId={8}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Wireless Networking Solutions"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We deliver robust wireless networking solutions that combine mobility 
and flexibility with stringent security, guaranteeing high performance and 
reliability."
                                />
                                             <QuestionAnswer
                                                paraId={9}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Network Security"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="With comprehensive security measures like firewalls, IDS, IPS, and VPNs, we 
ensure your network is shielded against cyber threats and unauthorized intrusions."
                                />
                                            <QuestionAnswer
                                                paraId={10}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Network Monitoring and Management"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Our continuous monitoring and management services ensure your network 
operates efficiently and swiftly resolves any issues."
                                />
                                                                                              
                                        </div>                                                                        
                                    </div>
                                    <div class="networking-text-video-container">
                                        <div class="networking-text-video-right-section section-zoomIn">
                                            <p>video</p>
                                        </div>   
                                        <div class="networking-bottom-big-text-section section-zoomIn">
                                        <div><QuestionAnswer
                                                paraId={11}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Data Center Networking"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We specialize in managing data center network infrastructure, ensuring 
seamless connectivity and optimized performance for servers, storage, and 
computing resources."
                                            /></div>

                                            <div><QuestionAnswer
                                                paraId={12}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Cloud Networking"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Our cloud networking solutions include sophisticated cloud-based network 
management and seamless integration with on-premises networks, enhancing 
flexibility and scalability."
                                            /></div>
                                            <div><QuestionAnswer
                                                paraId={13}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="VPN Services"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We create secure internet connections for remote access and site-to-site 
connectivity, ensuring safe and reliable data transfer."
                                            /></div>
                                            <div><QuestionAnswer
                                                paraId={14}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="VoIP Services"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Our Voice over Internet Protocol services enable efficient and cost-effective 
voice communication over your network infrastructure."
                                            /></div>
                                             <div><QuestionAnswer
                                                paraId={15}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Disaster Recovery and Business Continuity"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We develop network solutions that ensure continuity of operations or 
a swift resumption during a disaster."
                                            /></div>
                                                                                           
                                        </div>                                                                        
                                    </div>
                                    <div class="networking-text-video-container">
                                        <div class="networking-text-video-right-section section-zoomIn">
                                            <p>video</p>
                                        </div>   
                                        <div class="networking-bottom-big-text-section section-zoomIn">
                                        <QuestionAnswer
                                                paraId={16}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Network Scalability and Upgrades"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Our proactive approach to scalability and upgrades ensures your network keeps 
pace with your organization's growth and the ever-evolving tech landscape."
                                            />

                                            <QuestionAnswer
                                                paraId={17}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Bandwidth Management and Optimization"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Effective bandwidth management and optimization form a core part of our 
services, preventing bottlenecks and ensuring optimal network performance."
                                            />
                                            <QuestionAnswer
                                                paraId={18}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Remote Networking and Telecommuting"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We equip organizations with networks that support remote work and 
telecommuting, catering to the modern demands of business operations."
                                            />
                                            <QuestionAnswer
                                                paraId={19}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Security as a Priority"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Understanding the critical nature of network security, we deploy comprehensive 
protective measures. Our solutions include advanced protocols, robust encryption, 
and sophisticated intrusion detection systems to safeguard your network."
                                            />
                                             <QuestionAnswer
                                                paraId={20}
                                                outerDivClass="networking-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Cutting-Edge Technology Integration"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Keeping your network at the forefront of technological advancements, we 
integrate the latest networking innovations, ensuring your infrastructure is 
prepared for present and future challenges."
                                            />
                                                                                           
                                        </div>                                                                        
                                    </div>
                            </div>

                            <BoldTextCenterSection classNametext="networking-text-center-bold-section" paraId={21} boldText="At Acyute, we understand the critical role of databases in modern businesses. By tailoring our services to
                                each organization's specific needs, we ensure your database infrastructure's reliability, security, efficiency,
                                and scalability, a key component in your business's operational success."     
                            />
                           
                            <div className="networking-text-with-circle-section">
                            <TextWithCircle paraId="22" leftSectionText="If you've got an idea, feel free to drop by and 
                            discuss it with us to discover the ways we can 
                            assist you in bringing it to life." CircleLink="contact" CircleText='Contact us' LeaveARequestText="" />
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