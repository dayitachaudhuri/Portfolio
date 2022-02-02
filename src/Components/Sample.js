import React, { Component } from 'react';

class Sample extends Component {

  render() {
    return (

<section id="portfolio" class="bg-white">
    <div class="container">
        <div class="section-content">
   
            <div class="title-wrap">
                <h2 class="section-title">Our <b>Awesome</b> Works</h2>
                <p class="section-sub-title">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br> pharetra augue. Donec id elit non mi.</p>
            </div>
    
            <div class="row">
     
                <div class="col-md-12 portfolio-holder mt-3">
               
                    <div class="filter-button-group btn-filter d-flex justify-content-center">
                        <a tabindex="0" class="is-checked" data-filter="*">Show All</a>
                        <a tabindex="0" data-filter=".minimalism">Minimalism</a>
                        <a tabindex="0" data-filter=".vintage">Vintage</a>
                        <a tabindex="0" data-filter=".creative">Creative</a>
                    </div>
            
                    <div class="grid-portfolio">
                        <div class="grid-sizer"></div>
                        <div class="gutter-sizer"></div>
                     
                        <div class="grid-item minimalism" data-aos="fade-up">
                            <div class="grid-item-wrapper">
                                <img src="img/photo-1.jpg" alt="portfolio-img" class="portfolio-item" />
                                <div class="grid-info">
                                    <div class="grid-link d-flex justify-content-center">
                                        <a class="img-pop" data-rel="lightcase" href="img/photo-1.jpg" title="Photo-1">
                                            <span class="lnr lnr-move"></span>
                                        </a>
                                        <a class="ext-link" href="https://unsplash.com/" target="_blank">
                                            <span class="lnr lnr-link"></span>
                                        </a>
                                    </div>
                                    <div class="grid-title">
                                        <h4>Camera</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
   
                        <div class="grid-item vintage" data-aos="fade-up">
                            <div class="grid-item-wrapper">
                                <img src="img/photo-6.jpg" alt="portfolio-img" class="portfolio-item" />
                                <div class="grid-info">
                                    <div class="grid-link d-flex justify-content-center">
                                        <a class="img-pop" data-rel="lightcase" href="img/photo-6.jpg" title="Ship">
                                            <span class="lnr lnr-move"></span>
                                        </a>
                                        <a class="ext-link" href="https://unsplash.com/" target="_blank">
                                            <span class="lnr lnr-link"></span>
                                        </a>
                                    </div>
                                    <div class="grid-title">
                                        <h4>Flower</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
      
     
                        <div class="grid-item creative grid-item-height" data-aos="fade-up">
                            <div class="grid-item-wrapper">
                                <img src="img/photo-2.jpg" alt="portfolio-img" class="portfolio-item" />
                                <div class="grid-info">
                                    <div class="grid-link d-flex justify-content-center">
                                        <a class="img-pop" data-rel="lightcase" href="img/photo-2.jpg" title="Tracy Portrait">
                                            <span class="lnr lnr-move"></span>
                                        </a>
                                        <a class="ext-link" href="https://unsplash.com/" target="_blank">
                                            <span class="lnr lnr-link"></span>
                                        </a>
                                    </div>
                                    <div class="grid-title">
                                        <h4>Breakfast</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
              
                        <div class="grid-item creative" data-aos="fade-up">
                            <div class="grid-item-wrapper">
                                <img src="img/photo-7.jpg" alt="portfolio-img" class="portfolio-item" />
                                <div class="grid-info">
                                    <div class="grid-link d-flex justify-content-center">
                                        <a class="img-pop" data-rel="lightcase" href="img/photo-7.jpg" title="Guitar">
                                            <span class="lnr lnr-move"></span>
                                        </a>
                                        <a class="ext-link" href="https://unsplash.com/" target="_blank">
                                            <span class="lnr lnr-link"></span>
                                        </a>
                                    </div>
                                    <div class="grid-title">
                                        <h4>Chair</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                
                        <div class="grid-item vintage" data-aos="fade-up">
                            <div class="grid-item-wrapper">
                                <img src="img/photo-4.jpg" alt="portfolio-img" class="portfolio-item" />
                                <div class="grid-info">
                                    <div class="grid-link d-flex justify-content-center">
                                        <a class="img-pop" data-rel="lightcase" href="img/photo-4.jpg" title="Bookself">
                                            <span class="lnr lnr-move"></span>
                                        </a>
                                        <a class="ext-link" href="https://unsplash.com/" target="_blank">
                                            <span class="lnr lnr-link"></span>
                                        </a>
                                    </div>
                                    <div class="grid-title">
                                        <h4>Hidden Book</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                   
                        <div class="grid-item creative" data-aos="fade-up">
                            <div class="grid-item-wrapper">
                                <img src="img/photo-9.jpg" alt="portfolio-img" class="portfolio-item" />
                                <div class="grid-info">
                                    <div class="grid-link d-flex justify-content-center">
                                        <a class="img-pop" data-rel="lightcase" href="img/photo-9.jpg" title="Guitar">
                                            <span class="lnr lnr-move"></span>
                                        </a>
                                        <a class="ext-link" href="https://unsplash.com/" target="_blank">
                                            <span class="lnr lnr-link"></span>
                                        </a>
                                    </div>
                                    <div class="grid-title">
                                        <h4>Red</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                   
                    </div>
                
                </div>
               
            </div>
        </div>
    </div>
</section>

);
  }
}

export default Sample;