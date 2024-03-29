import React, {useContext, useEffect} from "react";
import { MyContext } from "../../App";
import TopVideoSection from "../CommonComponents/TopVideoSection/TopVideoSection";
import './digitalmarketing.css';
import '../ITConsulting/IT-Consulting.css';
import TextCenterNoNBold from "../CommonComponents/TextCenterNonBold/TextCenterNonBold";
import TextWithCircle from "../CommonComponents/TextWithCircle/TextWithCircle";
import FooterComponent from "../CommonComponents/Footer/footerComponent";
import QuestionAnswer from "../CommonComponents/QuestionAnswer/QuestionAnswer";
import BoldTextCenterSection from "../CommonComponents/BoldTextCenterSection/BoldTextCenterSection";
import DigitalMarketingBanner from '../../assets/videos/digital-marketing.mp4'
import DigitalMarketingImg from '../../assets/images/digital-marketing/digital-marketing-img.jpeg'
import DigitalMarketingImg2 from '../../assets/images/software-development/Software-development-2.jpeg'

const DigitalMarketing = () => {
    let { showMenuPopup, setShowMenuPopup } = useContext(MyContext);

    useEffect(() => {
        const section = document.getElementById('digital-marketing-header-id-section');
        if (section) {
        section.scrollIntoView();
        }
    }, [])
    return(
        <>
            <div className="digital-marketing-main-outer-container" id="digital-marketing-header-id-section">
            <TopVideoSection bannerVideoHeadingText="Digital Marketing" videoUrlLoop={DigitalMarketingBanner} videoUrl={DigitalMarketingBanner} videoBackgroundColor='#bf0bbf' showMenuPopup={showMenuPopup} setShowMenuPopup={setShowMenuPopup} />
                <div>
                    <TextCenterNoNBold paraId={3} centerTextClass="text-center-non-bold" centerText="Acyute's digital marketing services encompass various strategies and tactics tailored to 
                        promote products, services, and brands through various digital channels. Our expertise 
                        is pivotal for businesses that enhance online engagement, increase market presence, 
                        and drive sales. Here's a breakdown of our critical digital marketing services." />
                </div>
                        <div className="db-management-middle-section">
                            <div className="it-consultancy-strategy-section-row">
                                <QuestionAnswer
                                    paraId={4}
                                    outerDivClass="web-development-strategy-section-row"
                                    firstParaClass="strategy-section-heading"
                                    firstParaText="Search Engine Optimization"
                                    secondParaClass="strategy-section-subtitle"
                                    secondParaText="Elevate your online visibility with our expert SEO strategies. We focus on enhancing your website's search engine rankings, driving 
targeted traffic, and establishing your brand as a leading authority in your industry."
                                />
                                <div className="it-consultancy-text-video-section digital-marketing-text-wideo-section">
                                <div class="it-consultancy-text-video-container">
                                    
                                    <div class="it-consultancy-bottom-big-text-section digital-marketing-image-one">
                                        <div><QuestionAnswer
                                            paraId={12}
                                            outerDivClass="it-consultancy-strategy-section-row"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="Social Media Management"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="Harness the immense potential of social media with our all-inclusive management services. From crafting engaging content to 
fostering community interactions, we build a dynamic social media presence tailored to your audience."
                                        /></div>    
                                        <div><QuestionAnswer
                                            paraId={13}
                                            outerDivClass="it-consultancy-strategy-section-row"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="Pay-Per-Click (PPC) Advertising"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="Drive immediate visibility and targeted traffic with our finely-tuned PPC campaigns. We blend creative flair with 
data-driven precision to optimize ad spending and maximize ROI."
                                        /></div>   
                                        <div><QuestionAnswer
                                            paraId={14}
                                            outerDivClass="it-consultancy-strategy-section-row"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="Email Marketing Campaigns"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="Engage your audience with our sophisticated email marketing initiatives. Our approach includes personalized 
newsletters and automated campaigns, ensuring timely and relevant communication with your audience."
                                        /></div>  
                                        <div><QuestionAnswer
                                            paraId={15}
                                            outerDivClass="it-consultancy-strategy-section-row"
                                            firstParaClass="strategy-section-heading"
                                            firstParaText="Analytics and Reporting"
                                            secondParaClass="strategy-section-subtitle"
                                            secondParaText="Gain valuable insights with our comprehensive analytics and reporting. We offer transparent 
analysis of your campaigns' performance, enabling informed decision-making and continuous 
strategy refinement."
                                        /></div> 
                                           
                                    </div>  
                                    <div class="it-consultancy-text-video-right-section section-zoomIn">
                                        <img src={DigitalMarketingImg2} />
                                    </div>                                  
                                </div>
                               <div>
                               <QuestionAnswer
                                    paraId={16}
                                    outerDivClass="it-consultancy-strategy-section-row"
                                    firstParaClass="strategy-section-heading"
                                    firstParaText="Content Marketing"
                                    secondParaClass="strategy-section-subtitle"
                                    secondParaText="We create and distribute engaging, relevant content to captivate your target audience. 
Our offerings include blog posts, videos, infographics, eBooks, and more tailored to 
your brand's voice and audience's interests."
                                />
                               </div>
                            </div>
                                <div>
                                    <QuestionAnswer
                                        paraId={10}
                                        outerDivClass="web-development-strategy-section-row"
                                        firstParaClass="strategy-section-heading"
                                        firstParaText="Pay-Per-Click Advertising (PPC)"
                                        secondParaClass="strategy-section-subtitle"
                                        secondParaText="Utilize platforms like Google AdWords and Bing Ads for paid advertising, driving traffic 
to your website with a cost-effective approach where you pay per ad click."
                                    />
                                </div>

                            </div>
                       </div>
                <div className="digital-marketing-full-width-video-section section-zoomIn">
                    <img src={DigitalMarketingImg} />

                </div>
                <div className="digital-marketing-bold-center-section">
                    <BoldTextCenterSection classNametext="center-text-bold-section" paraId={11} boldText="At Acyute, we understand the critical role of databases in modern businesses. By tailoring our services to 
each organization's specific needs, we ensure your database infrastructure's reliability, security, efficiency, 
and scalability, a key component in your business's operational success."     
                />
                </div>
                <div className="digital-marketing-text-with-circle-section">
                    <TextWithCircle paraId="12" leftSectionText="If you've got an idea, feel free to drop by and
                        discuss it with us to discover the ways we can
                        assist you in bringing it to life." CircleText="Contact us" CircleLink="contact" LeaveARequestText="" />
                </div>
                <FooterComponent />
            </div>
        </>
    )
}

export default DigitalMarketing;