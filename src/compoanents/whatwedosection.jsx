import xmdlogo from "./images/xmdlogo.png"
export const WhatWedoSection=()=>{

return(
    <div style={{height:"300px", border:"2px solid red"}}>
    <div style={{marginLeft:"510px"}}>
    <img src={xmdlogo} height="60px width=60px"/>
    </div>
 
    <h1 style={{marginTop:"-65px", marginLeft:"545px", width:"436px", height:"105px", fontWeight:"600", fontSize:"70px"}}>
    what we sojnn</h1>


    <div style={{display:"flex",  border:"2px solid green", marginTop:"-70px"}}>

    <h1>Our  <sub>Services</sub></h1>
    <p style={{height:"206px",widht:"1105px", fontWeight:"500", fontSize:"23px", lineHeight:"34px", color: "#A9A9A9"}}>It has roots in a piece of classical Latin Literature from 45 BC, making it over 2000 years old.Richards McClintock, a latin  proffessor at Hampden -Sydney College in VIrginia , looked up one of the more abscure Latin words , consectetur, from a Lorem Ipsum Passage andgoing through  the cities of the word in classical literature</p>

    </div>

    </div>
)


}