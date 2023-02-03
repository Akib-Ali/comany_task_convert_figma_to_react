import microsoftlogo from "./images/microsoftlogo.png"
import perduntallogo from "./images/periduntallogo.png"
import slacklogo from "./images/slacklogo.png"
import slacktext from "./images/slacktext.png"
import zooverlogo from "./images/zooverlogo.png"
export const CompanyLogoSection=()=>{

    const conpanylogo =["https://easydrawings.net/wp-content/uploads/2022/09/How-to-draw-Microsoft-Logo-step-by-step-for-beginners.png", perduntallogo, slacklogo, slacktext, zooverlogo]


    return(
        <div style={{display:"flex",height:"140px", paddingLeft:"168px" , paddingTop:"52px" ,justifyContent:"space-around"}}>
            
            {conpanylogo.map((elem,index)=>{
                return (
                    <div>
                     <img src={elem} height="50px width=50px"/>
                     </div>
                )
            })}
        </div>
    )


}