import Secgirl from "./images/secgirl.png"
import  Vectorright from "./images/Vectorright.png"
import Vector6 from "./images/Vector6.png"
import Vector7 from "./images/Vector7.png"
export const WhyChooseUsSection=()=>{

    const info =["Corporate Financial Advisory" , "Development of Final Models" , "Deal Structuring"]



    return(
        <div style={{display:"flex" , height:"552px", border:"1px solid red" , backgroundColor:"#282C4B"}}>
        
           {/* left box */}
          <div style={{height:"552px" , width:"406px" , border:"1px solid red" , marginLeft:"244px" , paddingTop:"19px"}}>

           <img src={Secgirl}/>

           <div style={{marginTop:"-420px", marginLeft:"320px"}}>
            <img src={Vector6}/>
           </div>

           <div style={{marginLeft:"380px", marginTop:"80px"}}>
            <img src={Vector7}/>
           </div>

          </div>


          {/* right box */}

          <div style={{border:"1px solid red" , marginLeft:"189px" , width:"459px"}}>

            <h4 style={{color:"#F17216", height:"18px" , fontWeight:"400", fontSize:"14px", lineHeight: "18px"
            }}>WHY CHOOSE US</h4>

            <h1 style={{width:"495px", height:"120px",fontWeight:"700", fontSize:"36px",color: "#FFFFFF", lineHeight: "60px"
        }}>Take on any Challenges of Digital World</h1>

         {info.map((elem,index)=>{

            return(
                <div style={{display:"flex", gap:"25px"}}> 
                  <div style={{paddingTop:"20px"}}>
                  <img src={Vectorright}    height="20px width=20px"/>
                  </div>
                 
                 <p style={{width:"260px", height:"23px", fontSize:"20px", fontWeight:"400", color:"#CED1E6"}}>{elem}</p>

                
                
                </div>

            )
         })}

         <div > 

        <div style={{display:"flex"}}>
        <input placeholder="Enter your Email Id" style={{border:"none" ,backgroundColor:"transparent"}}/>
        <button className="getstartedbtn">Get Started</button>
         </div>

         <div style={{width:"350px", height:"0.5px", border:"1px solid #FFFFFF"}}></div>
   


         </div>

          </div>
        </div>
    )
    
}