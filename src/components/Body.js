import React, { useEffect, useState } from 'react'
import Carditems from './Carditems'
import "../App.css"



export default function Body(props) {
  // const [humidity1,setHumidity1] = useState(0);
  // const [temp1,setTemp1] = useState(0);
  // const [client1,setClient1] = useState(0);
  
  

const [users,setUser] = useState([])




  useEffect(() => {
    const url = "https://sid-b7dd-123-44-435.loca.lt/alltasks";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
       const json = await response.json();
        //val = json[0]['humidity'];
       //console.log( json);
       
      setUser(json);
    
        // setHumidity1(json[Object.keys(json).length - 1 ]['humidity']);
        // setTemp1(json[Object.keys(json).length - 1 ]['temperature']);
        // setClient1(json[Object.keys(json).length - 1 ]['client']);
       
      
       
      } catch (error) {
        console.log("error", error);
      }
    };

  
    setInterval(() => {
      fetchData();
   
    }, 1000);

   
}, []);
    
  const Cardcomponent = users.map((user) => <div className='col-xsm-12 col-sm-6 col-md-4 col-lg-3 'key={user.id}  ><Carditems alert={(user.humidity>100||user.temperature>100||user.bpm>100)?"1":"0"}  mode={props.mode} humidity={user.humidity} temp={user.temperature} bpm={user.bpm} client ={user.client}/></div> );
  return (
    <>
    <div className={`bg-${props.mode} `} style={{height:"80px",width:"100.7%"} } > </div>
<div  className={ ` bg-${props.mode} text-${(props.mode==="dark")?"light":"dark"} px-3 row d-flex `} style={{height:"100vh"}} >

{Cardcomponent}

 </div>
 {/* <Carditems alert={(humidity1>100||temp1>100)?"1":"0"} mode={props.mode} humidity={humidity1} temp={temp1} client ="1" /> */}



    </>
  )
}
