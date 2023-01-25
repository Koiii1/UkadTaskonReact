import React from 'react'
import "./styles/Slider.css"
import leftArrow from "./icons/LeftArrow.svg"
import rightArrow from "./icons/RightArrow.svg"



export default function BtnSlider({direction,moveSlide}) {
  return (
    <button
    onClick={moveSlide}
    className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
        <img src={direction === "next" ? rightArrow : leftArrow} alt=""></img>
    </button>
  )
}