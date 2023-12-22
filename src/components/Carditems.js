//import React, { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Carditems(props) {
  

  return (
    <>
      
    <div id='carditem1' className='cardbody justify-content-center  px-5 my-2 rounded-4 ' >
    <div style={{height:"20px"}}>{(props.alert==="1")?<h5><span className="badge rounded-pill text-bg-danger position-relative  start-100">Danger</span></h5>:" "}</div>
       <h3 className= {`  text-center mt-2 text-white rounded-5`} style={{backgroundColor:"#454441"}} >Client {props.client}</h3>
       <div className='fs-4 mt-5 mb-5'>
        <div className='d-flex'>
       <div className='mt-3 w-50 fw-semibold ' >BPM:           </div>
       <div className='mb-5 ' style={{ width: 70, height: 70}}>
  <CircularProgressbar className='fw-bold  mx-5 ' value={props.bpm} maxValue={200} strokeWidth={15} text={props.bpm}  styles={buildStyles({
   pathColor:  "orange",
    trailColor: 'gray',
    textSize: '35px',
    textColor: "orange",
    rotation: 0.5})}/>
    </div>
</div>  

<div className='d-flex'>
       <div className='mt-3 w-50 fw-semibold' >Humidity:           </div>
       <div className='mb-5' style={{ width: 70, height: 70}}>
  <CircularProgressbar className='fw-bold  mx-5' value={props.humidity} maxValue={200} strokeWidth={15} text={props.humidity}  styles={buildStyles({
   pathColor:  "orange",
    trailColor: 'gray',
    textSize: '35px',
    textColor: "orange",
    rotation: 0.5})}/>
    </div>
</div>
<div className='d-flex'>
       <div className='mt-3 w-50 fw-semibold' >Temperature:           </div>
       <div  style={{ width: 70, height: 70}}>
  <CircularProgressbar className='fw-bold  mx-5' value={props.temp} maxValue={200} strokeWidth={15} text={props.temp}  styles={buildStyles({
   pathColor:  "orange",
    trailColor: 'gray',
    textSize: '35px',
    textColor: "orange",
    rotation: 0.5})}/>
    </div>
</div>

       </div>
    </div>
    </>
  )
}
