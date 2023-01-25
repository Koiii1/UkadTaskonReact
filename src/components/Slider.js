import {useState} from "react"
import BtnSlider from "./BtnSlider"
import dataSlider from "../data/dataSlider"
import "./styles/Slider.css"


export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if ( slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }

    }


  return (
<div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className= {slideIndex === index + 1 ? "slide active-anim" : "slide"}>
    
                    <div key={obj.id + 1}>
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                        alt="" 
                        />
                    </div>
        
                    <div key={obj.id + 2}>
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 2}.jpg`}
                        alt="" 
                        />
                    </div>
        
                    <div  key={obj.id + 3}>
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 3}.jpg`}
                        alt="" 
                        />
                    </div>
            </div>

    )
    })}
    <BtnSlider moveSlide={nextSlide}  direction={"next"}/>
    </div>
  )
}