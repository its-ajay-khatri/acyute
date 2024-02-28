import React, {useContext} from "react";
import { MyContext } from "../../App";
import TopVideoSection from "../CommonComponents/TopVideoSection/TopVideoSection";
import './dBmanagement.css'
import BoldTextCenterSection from "../CommonComponents/BoldTextCenterSection/BoldTextCenterSection";
import TextWithCircle from "../CommonComponents/TextWithCircle/TextWithCircle";
import FooterComponent from "../CommonComponents/Footer/footerComponent";
import TextCenterNoNBold from "../CommonComponents/TextCenterNonBold/TextCenterNonBold";
import FullWidthVideoSection from "../FullWidthVideoSection/FullWidthVideoSection";
import QuestionAnswer from "../CommonComponents/QuestionAnswer/QuestionAnswer";

const DatabaseMangement = () => {

    let { showMenuPopup, setShowMenuPopup } = useContext(MyContext);

    return(
        <>
            <div className="db-management-section-main-container">
                <TopVideoSection videoBackgroundColor='#bf0bbf' showMenuPopup={showMenuPopup} setShowMenuPopup={setShowMenuPopup} />
                { !showMenuPopup &&
                    <>
                       <div>
                       <TextCenterNoNBold paraId={3} centerTextClass="text-center-non-bold" centerText="Acyute's database management services offer solutions focused on efficient database
                            management and organizational utilization. These services are pivotal for maintaining
                            data integrity, security, accessibility, and performance. Here's how we excel in providing
                            superior database management services" />
                       </div>
                       <div className="db-management-middle-section">
                       <div className="it-consultancy-strategy-section-row"><QuestionAnswer
                            paraId={4}
                            outerDivClass="web-development-strategy-section-row"
                            firstParaClass="strategy-section-heading"
                            firstParaText="Database Design and Modeling"
                            secondParaClass="strategy-section-subtitle"
                            secondParaText="We specialize in creating database structures, including designing tables, relationships, 
                            and data models that effectively represent and organize your data."
                        /></div>

                       </div>
                        <div className="db-management-text-video-section">
                            <div class="db-management-text-video-container">
                                <div class="db-management-text-video-left-section">
                                        
                                            <div><QuestionAnswer
                                                paraId={5}
                                                outerDivClass="web-development-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Database Development"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Our team implements database designs using leading database management 
systems (DBMS) such as MySQL, Oracle, SQL Server, and MongoDB."
                                            /></div>

                                            <div><QuestionAnswer
                                                paraId={6}
                                                outerDivClass="web-development-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Data Migration and Integration"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We handle data transfer from various sources into databases and integrate data 
from different databases or sources for a unified, coherent view."
                                            /></div>
                                            <div><QuestionAnswer
                                                paraId={7}
                                                outerDivClass="web-development-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Database Administration (DBA)"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We offer ongoing database management and maintenance, focusing on 
performance tuning, backup and recovery, and data integrity."
                                            /></div>
                                            <div><QuestionAnswer
                                                paraId={8}
                                                outerDivClass="web-development-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Database Security Management"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Our services include implementing robust security measures to protect databases from 
unauthorized access and cyber threats, managing user access controls, and conducting 
thorough audits."
                                            /></div>
                             
                                </div>
                                <div class="db-management-text-video-right-section">
                                    <p>video</p>
                                </div>
                            </div>
                        </div>
                        <div className="db-management-middle-section">
                            <div><QuestionAnswer
                                    paraId={9}
                                    outerDivClass="it-consultancy-strategy-section-row"
                                    firstParaClass="strategy-section-heading"
                                    firstParaText="Data Quality Management"
                                    secondParaClass="strategy-section-subtitle"
                                    secondParaText="We ensure data accuracy, consistency, and reliability through regular cleaning and validation processes."
                                /></div>
                                 <div><QuestionAnswer
                                    paraId={10}
                                    outerDivClass="it-consultancy-strategy-section-row"
                                    firstParaClass="strategy-section-heading"
                                    firstParaText="Performance Tuning and Optimization"
                                    secondParaClass="strategy-section-subtitle"
                                    secondParaText="Our expertise includes analyzing and optimizing database performance through indexing, query optimization, and efficient data 
storage techniques."
                                /></div>
                       </div>
                        <div className="db-management-text-video-section db-management-bottom-section">
                            <div class="db-management-text-video-container">
                                <div class="db-management-text-video-right-section">
                                    <p>video</p>
                                </div>
                                <div class="db-management-bottom-big-text-section">
                                            <div><QuestionAnswer
                                                paraId={11}
                                                outerDivClass="web-design-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Scalability and High Availability Solutions"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We implement solutions to ensure databases can handle increased loads and 
provide continuous availability, which is crucial for mission-critical systems."
                                            /></div>
                                            <div><QuestionAnswer
                                                paraId={12}
                                                outerDivClass="web-design-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Cloud-Based Database Management"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Utilizing cloud services, we offer hosting that provides scalability, flexibility, and cost 
efficiency, including database-as-a-service (DBaaS) from various cloud providers."
                                            /></div>

                                            <div><QuestionAnswer
                                                paraId={13}
                                                outerDivClass="web-design-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Reporting and Data Analytics"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We create tools and systems for extracting insights and generating reports from 
stored data, aiding in data-driven decision-making."
                                            /></div>
                                            <div><QuestionAnswer
                                                paraId={14}
                                                outerDivClass="web-design-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Disaster Recovery Planning"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Our disaster recovery planning establishes procedures and tools for data recovery in 
case of system failure or data corruption."
                                            /></div>
                                            <div><QuestionAnswer
                                                paraId={15}
                                                outerDivClass="web-design-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Regulatory Compliance and Data Governance"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="We ensure database management practices comply with relevant laws, regulations, 
and data privacy and protection standards."
                                            /></div>
                                            <div><QuestionAnswer
                                                paraId={16}
                                                outerDivClass="web-design-strategy-section-row"
                                                firstParaClass="strategy-section-heading"
                                                firstParaText="Database Upgrades and Patch Management"
                                                secondParaClass="strategy-section-subtitle"
                                                secondParaText="Regular database software updates and patch applications are part of our service to 
fix bugs and vulnerabilities."
                                            /></div>
                                </div>
                                
                            </div>
                        </div>
                        <FullWidthVideoSection videoUrlLoop="https://digital-cover.com/wp-content/uploads/2022/05/Showreel-Loop_Compressed.mp4" videoUrl={'https://digital-cover.com/wp-content/uploads/2022/05/Showreel_compressed.mp4'}/>
                        <div>
                            <BoldTextCenterSection classNametext="center-text-bold-section" paraId={20} boldText="At Acyute, we understand the critical role of databases in modern businesses. By tailoring our services to
                            each organization's specific needs, we ensure your database infrastructure's reliability, security, efficiency,
                            and scalability, a key component in your business's operational success."     
                        />
                        </div>
                        <TextWithCircle paraId="21" leftSectionText="If you've got an idea, feel free to drop by and
                            discuss it with us to discover the ways we can
                            assist you in bringing it to life." CircleText="Contact us" CircleLink="contact-us" LeaveARequestText="" />
                        <FooterComponent />
                    </>
                }
            </div>
        </>
    )
}

export default DatabaseMangement;