import Vector4 from "./images/Vector4.png"
import "./services.css"
export const Services=()=>{

    const servicescard =[
         {
            title:"Consult",
            detailinfo:"Levaerage agile framework to provide a robust high levelsynopsys overviews"
        },
        {
            title:"Create ",
            detailinfo:"Bring to the table survival strategies to ensure proactive domination"
        },
        {
            title:"Collaborate ",
            detailinfo:"Grow the hollstic world view of disruptive innovation workspace"
        },

    ]


    return(
        <div style={{display:"flex", height:"441px" , border:"1px solid red"}}>

        <div style={{border:"1px solid pink" ,height:"300px" , width:"300px", marginLeft:"135px" , marginTop:"100px"}}>
         <h1 style={{width:"289px", height:"53px", fontWeight:"700", fontSize:"36px", letterSpacing:"2%" , color:"#282C4B"}}>Our Capabilities</h1>

         <p style={{width:"335px", height:"96px" , fontSize:"20px", fontWeight:"400" , lineheight:"32px", color:" #747582"}}>We will bring the breathe of our expercties and industry  knowledge to help you succeed</p>

         <img src={Vector4}/>
        </div>


     <div style={{display:"flex", border:"1px solid grey" ,marginLeft:"52px" ,width:"75%",marginTop:"100px" , justifyContent:"space-around"}}>

     {servicescard.map((elem,index)=>{
        return (


        <div className="servicescard"> 
          <img src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-hand-drawn-cute-vegetarian-green-leaf-logo-image_1337225.jpg" height="50px width=50px"/>
         <h1 style={{width:"72px", height:"25px", fontWeight:"700", fontSize:"20px" , color:"#14183E"}}>{elem.title}</h1>
         <p>{elem.detailinfo}</p>
        </div>
        )
     })}


     </div>

       


        </div>
    )
    
}