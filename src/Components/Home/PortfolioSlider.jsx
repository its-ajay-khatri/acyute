import React from "react";
import './portfolioSlider.css';


const PortfolioSlider = () => {
    return(
        <>
          <div class="scene">
    <div class="img-cont left cont-1" data-helper="0" data-blocks="1"></div>
    <div class="img-cont right cont-1" data-helper="0" data-blocks="1"></div>
    <div class="content cont-1">
      <h2 class="title">Page 1 Content</h2>
      <p class="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, soluta, incidunt. Recusandae veritatis quam quos quaerat molestiae rem officiis blanditiis, nulla sed, corporis, sunt eveniet earum sapiente officia possimus eligendi.</p>
      <span class="close">+</span>
    </div>
    <div class="img-cont left cont-2" data-helper="-1" data-blocks="2"></div>
    <div class="img-cont right cont-2" data-helper="1" data-blocks="2"></div>
    <div class="content cont-2">
      <h2 class="title">Page 2 Content</h2>
      <p class="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, soluta, incidunt. Recusandae veritatis quam quos quaerat molestiae rem officiis blanditiis, nulla sed, corporis, sunt eveniet earum sapiente officia possimus eligendi.</p>
      <span class="close">+</span>
    </div>
    <div class="img-cont left cont-3" data-helper="-2" data-blocks="3"></div>
    <div class="img-cont right cont-3" data-helper="2" data-blocks="3"></div>
    <div class="content cont-3">
      <h2 class="title">Page 3 Content</h2>
      <p class="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, soluta, incidunt. Recusandae veritatis quam quos quaerat molestiae rem officiis blanditiis, nulla sed, corporis, sunt eveniet earum sapiente officia possimus eligendi.</p>
      <span class="close">+</span>
    </div>
    <div class="img-cont left cont-4" data-helper="-3" data-blocks="4"></div>
    <div class="img-cont right cont-4" data-helper="3" data-blocks="4"></div>
    <div class="content cont-4">
      <h2 class="title">Page 4 Content</h2>
      <p class="content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, soluta, incidunt. Recusandae veritatis quam quos quaerat molestiae rem officiis blanditiis, nulla sed, corporis, sunt eveniet earum sapiente officia possimus eligendi.</p>
      <span class="close">+</span>
    </div>

    <h1 class="heading">SCROLL</h1>
    <p class="scroll-down">scroll down</p>
    <p class="click-blocks">click blocks</p>
    <div class="pagination">
      <ul class="page-names">
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
      </ul>
    </div>
  </div>
        </>
    )
}

export default PortfolioSlider;