import React, { useEffect, useState, useRef } from "react";
import './portfolio.css'
import $ from 'jquery'; 
import { Link } from "react-router-dom";

const PortfolioSlider = () => {

  const [currentValHolder, setCurrentValueHolder] = useState("Software Develop,ent");

  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = e => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }

  const scrollRef = useHorizontalScroll();

  //useEffect for Scroll JS
  useEffect(() => {

    if((window.scrollY >= 3000 && window.scrollY <=3800 && window.innerWidth > 768) || (window.scrollY >= 2400 && window.scrollY <=2800 && window.innerWidth <= 768)){
      $(document).ready(function() {
  
        var scrolling = false,
            curPage = 1,
            pages = $(".img-cont").length / 2,
            $left = $(".img-cont.left"),
            $right = $(".img-cont.right");
        
        function doMargins(paramPage) {
          
          scrolling = true;
          
          var _page = paramPage || curPage;
  
          var newMargin = 0;
  
          $left.each(function() {
            var marginMult = parseInt($(this).attr("data-helper"), 10) + _page - 1;
            newMargin = marginMult * 100;
            $(this).attr("style", "margin-top: "+ marginMult * 100 +"vh");
                  
          });
  
          
          $right.each(function() {
            var marginMult = parseInt($(this).attr("data-helper"), 10) - _page + 1;
            newMargin = marginMult * 100;
            $(this).attr("style", "margin-top: "+ marginMult * 100 +"vh");
      
          });
  
          if (newMargin === 0) {
            setCurrentValueHolder("Digital Marketing")
          } else if (newMargin === 100) {
            setCurrentValueHolder("Web Design")
          }
          else if (newMargin === 200) {
            setCurrentValueHolder("Networking")
          }
          else if (newMargin === 300) {
            setCurrentValueHolder("IT Consultancy")
          }
          else if (newMargin === 400) {
            setCurrentValueHolder("Database Management")
          }
          else if (newMargin === 500) {
            setCurrentValueHolder("Software Development")
          } else {
            setCurrentValueHolder("Our Services")
          }
          
          setTimeout(function() {
            scrolling = false;
          }, 1000);
        }
        
        function navigateUp() {
          if (curPage > 1) {
            curPage--;
            pagination(curPage);
            doMargins();
          }
        }
        
        function navigateDown() {
          if (curPage < pages) {
            curPage++;
            pagination(curPage);
            doMargins();
          }
        }
        
        function pagination(page) {
          $(".page-dots li").removeClass("active");
          $(".page-dots li[data-page="+ page +"]").addClass("active");
          $(".page-names li").removeClass("active");
          $(".page-names li[data-page="+page+"]").addClass("active");
          curPage = page;
        }
        
        $(document).on("click", ".page-dots li", function() {
          if (!scrolling) {
            var page = parseInt($(this).attr("data-page"), 10);
            pagination(page);
            doMargins(page);
          }
        });
        
        function openContent() {
          var number = $(this).attr("data-blocks");
          $(".scene").addClass("active");
          setTimeout(function() {
            $(".img-cont.cont-"+number).addClass("active");
            
            $(document).off("click", ".img-cont", openContent);
            $(document).unbind("keydown mousewheel DOMMouseScroll");
            
            setTimeout(function() {
              $(".content.cont-"+number).show();
              $(".content.cont-"+number).css("top");
              $(".content.cont-"+number).addClass("visible");
            }, 300);
          }, 300);
        }
        
        function initHandlers() {
          
          $(document).on("mousewheel DOMMouseScroll", function(e) {
            if (!scrolling) {
              if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                navigateUp();
              } else { 
                navigateDown();
              }
            }
          });
      
          $(document).on("keydown", function(e) {
            if (!scrolling) {
              if (e.which === 38) {
                navigateUp();
              } else if (e.which === 40) { 
                navigateDown();
              }
            }
          });
          
          $(document).on("click", ".img-cont:not(.active)", openContent);
          
        }
        
        initHandlers();
        
        $(document).on("click", ".close", function() {
          scrolling = true;
          var $content = $(this).parent();
          $content.removeClass("visible");
          setTimeout(function() {
            
            $content.hide();
            $content.css('top');
            $(".img-cont").removeClass("active").addClass("closing");
            
            setTimeout(function() {
              $(".scene").removeClass("active");
              initHandlers();
              
              setTimeout(function() {
                $(".img-cont").removeClass("closing");
                scrolling = false;
              }, 300);
              
            }, 300);
            
          }, 800);
        });
        
      }); 
    }
    
  }, [window.scrollY])

  const scrollToSection = () => {
    const section = document.getElementById('bottom-text-circle-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return(
        <>
          <div ref={scrollRef} className="portfolio-slider-container">   
            <div>
              <div className="scene your-container">
                <div className="img-cont left cont-1 service-portlolio-text-section-class" data-helper="0" data-blocks="1"></div>
                <div className="img-cont right cont-1" data-helper="0" data-blocks="1"></div>
                <div className="content cont-1">
                  <Link to='/web-development'> <h2 className="title">Software Development</h2></Link>
                  <p className="content-text">Acyute offers comprehensive software development services tailored to innovate, enhance 
 efficiency, and provide a competitive edge for businesses and organizations. Our approach 
 integrates strategic planning, bespoke solutions, and modern methodologies to meet the 
 unique requirements of each project.</p>
                  <span className="close">+</span>
                </div>
                <div className="img-cont left cont-2" data-helper="-1" data-blocks="2"></div>
                <div className="img-cont right cont-2" data-helper="1" data-blocks="2"></div>
                <div className="content cont-2">
                <Link to='/database-management'> <h2 className="title">Database Development</h2></Link>
                  <p className="content-text">Acyute's database management services offer solutions focused on efficient database
 management and organizational utilization. These services are pivotal for maintaining
 data integrity, security, accessibility, and performance. Here's how we excel in providing
 superior database management services.</p>
                  <span className="close">+</span>
                </div>
                <div className="img-cont left cont-3" data-helper="-2" data-blocks="3"></div>
                <div className="img-cont right cont-3" data-helper="2" data-blocks="3"></div>
                <div className="content cont-3">
                <Link to='/it-consultancy'> <h2 className="title">IT Consulting</h2></Link>
                  <p className="content-text">Acyute's IT consulting services offer expert guidance in planning, developing, and 
 optimizing information technology systems and infrastructure. Tailored to align 
 IT strategies with business objectives, our services ensure the efficient and effective 
 utilization of technology. Here's how we deliver excellence in IT consulting.</p>
                  <span className="close">+</span>
                </div>
                <div className="img-cont left cont-4" data-helper="-3" data-blocks="4"></div>
                <div className="img-cont right cont-4" data-helper="3" data-blocks="4"></div>
                <div className="content cont-4">
                <Link to='/networking'> <h2 className="title">Networking</h2></Link>
                  <p className="content-text">Acyute's networking services offer a holistic suite of solutions to enhance, maintain, 
and optimize network infrastructure. Our expertise ensures seamless communication, 
data transfer, and connectivity, vital for the smooth functioning of businesses. Here's 
how we provide unparalleled networking services.</p>
                  <span className="close">+</span>
                </div>
                <div className="img-cont left cont-5" data-helper="-4" data-blocks="5"></div>
                <div className="img-cont right cont-5" data-helper="4" data-blocks="5"></div>
                <div className="content cont-5">
                <Link to='/web-design'> <h2 className="title">Web Designing</h2></Link>
                  <p className="content-text">Acyute's IT consulting services offer expert guidance in planning, developing, and 
 optimizing information technology systems and infrastructure. Tailored to align 
 IT strategies with business objectives, our services ensure the efficient and effective 
 utilization of technology. Here's how we deliver excellence in IT consulting.</p>
                  <span className="close">+</span>
                </div>
                <div className="img-cont left cont-6" data-helper="-5" data-blocks="6"></div>
                <div className="img-cont right cont-6" data-helper="5" data-blocks="6"></div>
                <div className="content cont-6">
                <Link to='/digital-marketing'> <h2 className="title">Digital Marketing</h2></Link>
                  <p className="content-text">Acyute's digital marketing services encompass various strategies and tactics tailored to 
 promote products, services, and brands through various digital channels. Our expertise 
 is pivotal for businesses that enhance online engagement, increase market presence, 
 and drive sales. Here's a breakdown of our critical digital marketing services.</p>
                  <span className="close">+</span>
                </div>
                
                <h1 class="heading" style={{color:'white'}}>{currentValHolder}</h1>
                <div class="pagination">
                </div>
              </div>
            </div>
           <div className="portfolio-arrow-down-section">
            <div class="arrow down" style={{cursor:'pointer'}} onClick={scrollToSection}></div>
           </div>
          </div>
        </>
    )
}

export default PortfolioSlider;