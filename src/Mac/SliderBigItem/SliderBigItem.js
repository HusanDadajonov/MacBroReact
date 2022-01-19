import React from "react";

function SliderBigItem(props){
    console.log(props);
    return (
        <div className="box__slider-item"><img className="box__slider-img" src={props.img} alt="slider-img" /></div>
    )
}
export default SliderBigItem;