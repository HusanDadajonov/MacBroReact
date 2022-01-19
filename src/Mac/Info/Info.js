import { useState } from "react";
import "./Info.scss"

function Info(){
    const defaultValue = 11602500;
    const [value,setValue] = useState(1);
    const [sumValue,setSumValue] = useState(11602500);

    function valueChange(bool){
        bool == true ? setValue(value + 1) : value > 1 ? setValue(value - 1) : setValue(value - 0);
        bool == true ? setSumValue(sumValue + defaultValue) : value > 1 ? setSumValue(sumValue - defaultValue) : setSumValue(sumValue - 0);
    }

    return(
        <div className="col-xs-6 ms-4">
            <h2 className="box__title">MacBook Air 16-inch</h2>
            <p className="box__desc"><span className="box__m">M1</span>/<span className="box__gb box__gb-img">8</span>/<span className="box__gb box__gb-storage">256</span>/<span className="box__color">Gold</span></p>
            <div className="box__btns">
                <span className="box__btns-title">Rasm</span>
                <div>
                    <button className="box__gb-btn box__btns--img box__btns--img-active" id="gb" onClick={()=> setSumValue(defaultValue)}>8gb</button>
                    <button className="box__gb-btn box__btns--img" id="box__gb-big" onClick={()=> setSumValue(26509500)}>16gb</button>
                </div>
            </div>
            <div className="box__btns ">
                <span className="box__btns-title">xotira hajmi</span>
                <div>
                    <button className="box__gb-btn box__btns--storage box__btns--storage-active" id="gb-2" onClick={()=> setSumValue(defaultValue)}>256gb</button>
                    <button className="box__gb-btn box__btns--storage" id="box_gb-btn-big" onClick={()=> setSumValue(1259023)}>512gb</button>
                    <button id="tb" className="box__gb-btn box__btns--storage">1TB</button>
                </div>
            </div>
            <div className="box__btns">
                <span className="box__btns-title">Ranglar</span>
                <div>
                    <button className="box__gb-btn box__btns--color box__btns--color-active" id="gold"><span className="box__btn-color"></span><p className="box__btn-color-text">Tilla rang</p></button>
                    <button className="box__gb-btn box__btns--color" id="silver"><span className="box__btn-color"></span><p className="box__btn-color-text">Kumush rang</p></button>
                    <button className="box__gb-btn box__btns--color" id="gray"><span className="box__btn-color"></span><p className="box__btn-color-text">Kosmik kulrang</p></button>
                </div>
            </div>
            <div className="box__count-block">
                <button className="box__count-minus" onClick={()=> valueChange(false)}>-</button>
                <span className="box__count">{value}</span>
                <button className="box__count-plus" onClick={()=> valueChange(true)}>+</button>
            </div>
            <h2 className="box__sum"><span className="box__sum-count">{sumValue}</span>so'm</h2>
        </div>
    )
}

export default Info