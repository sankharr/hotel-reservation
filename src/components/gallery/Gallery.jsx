import React, { useEffect } from "react";
import "./gallery.css";
import {
  araliyaUnawatuna,
  arielView,
  buildingDayTime,
  arielView2,
  beachSeating,
  club,
  gym,
  infinityPool,
  nightBar,
  nightBar2,
  poolArea,
  rooftop,
  room1,
  room2,
  room3,
  spa,
} from "./imageImport";

function Gallery() {
  let slideIndex = 1;
  const slidesData = [
    // {
    //   path: araliyaUnawatuna,
    // },
    // {
    //   path: arielView,
    // },
    // {
    //   path: buildingDayTime,
    // },
    {
      path: arielView2,
    },
    {
      path: beachSeating,
    },
    {
      path: club,
    },
    {
      path: gym,
    },
    {
      path: infinityPool,
    },
    {
      path: nightBar,
    },
    {
      path: nightBar2,
    },
    {
      path: poolArea,
    },
    {
      path: rooftop,
    },
    {
      path: room1,
    },
    {
      path: room2,
    },
    {
      path: room3,
    },
    {
      path: spa,
    },
  ];

  useEffect(() => {
    console.log(slidesData);
    showSlides(slideIndex);
  }, []);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("gallery__slide");
    let dots = document.getElementsByClassName("gallery__thumbnail");
    console.log("slides", slides);
    console.log("dots", dots);
    // let captionText = document.getElementById("caption");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
  }

  return (
    <div className="gallery__wrapper">
      <div className="gallery__slideContainer">
        {slidesData.map((slide, index) => (
          <div className="gallery__slide" key={slide.path}>
            <img src={slide.path} className="gallery__slideImage" />
          </div>
        ))}
        <div className="gallery__largeText">glimpse</div>
        <div className="gallery__smallText">of surroundings</div>
      </div>
      {/* next and previous buttons */}
      {/* <a className="gallery__prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="gallery__next" onClick={() => plusSlides(1)}>
        &#10095;
      </a> */}

      {/* thumbnail images */}
      <div className="gallery__row">
        {slidesData.map((thumbnail, index) => (
          <div className="gallery_column" key={thumbnail.path}>
            <img
              className="gallery__thumbnail"
              src={thumbnail.path}
              //   sx={{ width: '100vw' }}
              onClick={() => currentSlide(index + 1)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
