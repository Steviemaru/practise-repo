import React, { useRef , useEffect, useState } from "react";
import Slider from "react-slick";
import tw from "tailwind-styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { current } from "@reduxjs/toolkit";
// import { list } from "postcss";


const list = ["btc", "eth", "ltc", "bch", "bnb", "eos", "xrp"];

const Slide = tw.div`
bg-pink-400
py-2
border

`;

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function CurrencyCarousel() {
const [currentSlide, setCurrentSlide] = useState(0)

  let sliderRef = useRef<Slider | null>(null) // type: Slider | null
  const next = () => {
    sliderRef.slickNext();  
    setTimeout(function() {
        setCurrentSlide(currentSlide + 1)
      }, 500);
    
  };
  const previous = () => {
    sliderRef.slickPrev();
    setTimeout(function() {
      setCurrentSlide(currentSlide - 1)
    }, 500);
  };
  const settings = {
    dots: true,
    width: "9px",
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    Padding: "60px",
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  }
useEffect(()=> {
  // sliderRef.current.slickGoTo(3);
  // console.log(currentSlide)
  if(currentSlide < 0 ){
    setCurrentSlide((list.length - 1) )
  }
  if(currentSlide > list.length - 1){
    setCurrentSlide((0) )
  }

  console.log(currentSlide)
})

  return (
    <div className="slider-container flex justify-center items-center bg-blue-400 ">
      <Slider
        style={{
          display: "flex",
          gap: "90px",
          width: "700px",
          background: "red",
          margin: "30px",
          padding: "8px",
        }}
        {...settings}
        ref={
          slider => {
            sliderRef = slider;
          }
        }>
        {list.map((item)=> {
         
return <Slide>
<button className={`m-2 w-24 ${list.indexOf(item) == currentSlide?  "bg-purple-500" :  "bg-green-400"}`}>{item}</button>
</Slide>
        })}
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}
