import React from 'react';
import s1 from '../../../../src/TravelCarosuel/slider1.jpg';
import s2 from '../../../../src/TravelCarosuel/slider2.jpg';
import s3 from '../../../../src/TravelCarosuel/slider3.jpg';

const HomeBanner = () => {
  return (
    <div> 
    {/* Top carosel  */}
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img width="100%" height="550px"  src={s1} class="d-block " alt="..." />
      <div  class="carousel-caption d-none d-md-block">
        <h2>LUXE HOTEL</h2>
        <p>Representative placefull make your vacation comfortable</p>
      </div>
    </div>
    <div class="carousel-item">
      <img width="100%" height="550px"  src={s2} class="d-block " alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h2>BORA HOTEL</h2>
        <p>Reserve Room for Family Vacation DELUXE HOTEL Make Your Vacation Comfortable</p>
      </div>
    </div>
    <div class="carousel-item">
      <img width="100%" height="550px"  src={s3} class="d-block " alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h2>DELUXE HOTEL</h2>
        <p>A Best Place To Enjoy Your Life</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default HomeBanner;