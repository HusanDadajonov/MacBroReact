import React from "react";
import './SliderItem.scss';

function SliderItem(props){

    return (
        <li className="box__item"><button className="box__item--btn"><img className="box__item--img" src={props.img} alt="slider-img" /></button></li>
    )
}
export default SliderItem;