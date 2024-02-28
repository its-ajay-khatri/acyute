import React from "react";
import TopVideoSection from "../CommonComponents/TopVideoSection/TopVideoSection";
import './digitalmarketing.css';
import TextCenterNoNBold from "../CommonComponents/TextCenterNonBold/TextCenterNonBold";
import FullWidthVideoSection from "../FullWidthVideoSection/FullWidthVideoSection";
import TextWithCircle from "../CommonComponents/TextWithCircle/TextWithCircle";
import FooterComponent from "../CommonComponents/Footer/footerComponent";

const DigitalMarketing = () => {
    return(
        <>
            <div className="digital-marketing-main-outer-container">
                <TopVideoSection videoBackgroundColor='yellow' />
                <TextCenterNoNBold centerText="Acyute's digital marketing services encompass various strategies and tactics tailored to 
                      promote products, services, and brands through various digital channels. Our expertise 
                      is pivotal for businesses that enhance online engagement, increase market presence, 
                      and drive sales. Here's a breakdown of our critical digital marketing services" />
                <FullWidthVideoSection videoUrlLoop="https://digital-cover.com/wp-content/uploads/2022/05/Showreel-Loop_Compressed.mp4" videoUrl={'https://digital-cover.com/wp-content/uploads/2022/05/Showreel_compressed.mp4'}/>
                <TextWithCircle leftSectionText="If you've got an idea, feel free to drop by and
                    discuss it with us to discover the ways we can
                    assist you in bringing it to life." CircleText="Contact us" CircleLink="contact-us" LeaveARequestText="" />
                <FooterComponent />
            </div>
        </>
    )
}

export default DigitalMarketing;