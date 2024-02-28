import React, { useEffect, useState, useRef } from "react";
import './portfolio.css'
import $ from 'jquery'; 

const PortfolioSlider = () => {

  const [myContentt, setMyContent] = useState(false);

  useEffect(() =>{
    if(window.scrollY >= 4000 && window.scrollY <= 4300){
      setMyContent(true)
    }
  }, [window.scrollY])

  //useEffect for Scroll JS
  useEffect(() => {
    $(document).ready(function() {
  
      var scrolling = false,
          curPage = 1,
          pages = $(".img-cont").length / 2,
          $left = $(".img-cont.left"),
          $right = $(".img-cont.right");
      
      function doMargins(paramPage) {
        
        scrolling = true;
        
        var _page = paramPage || curPage;
        
        $left.each(function() {
          var marginMult = parseInt($(this).attr("data-helper"), 10) + _page - 1;
          $(this).attr("style", "margin-top: "+ marginMult * 100 +"vh");
        });
        
        $right.each(function() {
          var marginMult = parseInt($(this).attr("data-helper"), 10) - _page + 1;
          $(this).attr("style", "margin-top: "+ marginMult * 100 +"vh");
        });
        
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
  }, [])


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

    return(
        <>
          <div ref={scrollRef} className="portfolio-slider-container">   
            <div style={{ width: 800}}>
              <div className="scene your-container" style={{ whiteSpace: "nowrap" }}>
                <div className="img-cont left cont-1" data-helper="0" data-blocks="1"></div>
                <div className="img-cont right cont-1" data-helper="0" data-blocks="1"></div>
                <div className="content cont-1">
                  <h2 className="title">Page 1 Content</h2>
                  <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, soluta, incidunt. Recusandae veritatis quam quos quaerat molestiae rem officiis blanditiis, nulla sed, corporis, sunt eveniet earum sapiente officia possimus eligendi.</p>
                  <span className="close">+</span>
                </div>
                <div className="img-cont left cont-2" data-helper="-1" data-blocks="2"></div>
                <div className="img-cont right cont-2" data-helper="1" data-blocks="2"></div>
                <div className="content cont-2">
                  <h2 className="title">Page 2 Content</h2>
                  <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, soluta, incidunt. Recusandae veritatis quam quos quaerat molestiae rem officiis blanditiis, nulla sed, corporis, sunt eveniet earum sapiente officia possimus eligendi.</p>
                  <span className="close">+</span>
                </div>
                <div className="img-cont left cont-3" data-helper="-2" data-blocks="3"></div>
                <div className="img-cont right cont-3" data-helper="2" data-blocks="3"></div>
                <div className="content cont-3">
                  <h2 className="title">Page 3 Content</h2>
                  <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, soluta, incidunt. Recusandae veritatis quam quos quaerat molestiae rem officiis blanditiis, nulla sed, corporis, sunt eveniet earum sapiente officia possimus eligendi.</p>
                  <span className="close">+</span>
                </div>
                <div className="img-cont left cont-4" data-helper="-3" data-blocks="4"></div>
                <div className="img-cont right cont-4" data-helper="3" data-blocks="4"></div>
                <div className="content cont-4">
                  <h2 className="title">Page 4 Content</h2>
                  <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, soluta, incidunt. Recusandae veritatis quam quos quaerat molestiae rem officiis blanditiis, nulla sed, corporis, sunt eveniet earum sapiente officia possimus eligendi.</p>
                  <span className="close">+</span>
                </div>
                <div className="img-cont left cont-5" data-helper="-4" data-blocks="5"></div>
                <div className="img-cont right cont-5" data-helper="4" data-blocks="5"></div>
                <div className="content cont-4">
                  <h2 className="title">Page 4 Content</h2>
                  <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, soluta, incidunt. Recusandae veritatis quam quos quaerat molestiae rem officiis blanditiis, nulla sed, corporis, sunt eveniet earum sapiente officia possimus eligendi.</p>
                  <span className="close">+</span>
                </div>
                
                <h1 class="heading">Our Services</h1>
                {/* <p class="scroll-down">scroll down</p> */}
                {/* <p class="click-blocks">click blocks</p> */}
                <div class="pagination">
                {/* <ul class="page-names">
                    <li class="active" data-page="1">Page 1</li>
                    <li data-page="2">Page 2</li>
                    <li data-page="3">Page 3</li>
                    <li data-page="4">Page 4</li>
                  </ul>
                 <ul class="page-dots">
                    <li class="active" data-page="1">•</li>
                    <li data-page="2">•</li>
                    <li data-page="3">•</li>
                    <li data-page="4">•</li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default PortfolioSlider;