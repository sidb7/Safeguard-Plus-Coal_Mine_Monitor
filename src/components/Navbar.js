import React from 'react'

export default function Navbar(props) {
 const mode = ()=>
 {
    if(props.mode==="dark")
    {
      props.setMode("light")
    }
    else
    {
      props.setMode("dark")
    }
 }

  return (
    <div>

<nav className="navbar navbar-expand-lg fixed-top  " style={{backgroundColor:"orange"}} data-bs-theme="light">
  <div className="container-fluid">
    <a className="navbar-brand fs-3 fw-bold" >MINE MONITOR</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active fw-semibold" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
       <div ><button className='btn mt-1' onClick={mode}><i className={` ${(props.mode==='light')?"fa fa-moon-o":"fa fa-sun-o"} fs-4`} ></i></button></div>
      </div>
    
    </div>
    <div> {(props.float===1)?<i className="fa fa-warning" style={{color:"red",fontSize:"24px",fontWeight:"30px"}}> DANGER! </i>:""}</div>
   
  </div>

</nav>

    </div>
  )
}
