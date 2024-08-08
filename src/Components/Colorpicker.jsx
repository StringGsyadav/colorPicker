import React, { useState } from 'react'
import style from '../Components/Color.module.css';
const Colorpicker = () => {

    let[color,setColor]=useState("#cccccc");

    function onchangeColor(event){
        setColor(event.target.value);
    }

   
  return (
    <div className={style.mainBox}>
        <h2>Color Picker Project</h2>
        <div className={style.designColor} style={{backgroundColor:color}}>
            <p>Set Color  : {color}</p>
        </div>
    <span>Here You select Color</span>
        <input type="color" value={color} onChange={onchangeColor}/>
    </div>
  )
}

export default Colorpicker