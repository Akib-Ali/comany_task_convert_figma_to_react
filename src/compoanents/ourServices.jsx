import designthinking1 from "./images/designthinking1.png"
import setting1 from "./images/setting1.png"
import analysys from "./images/analysys.png"
import applicationdevelopment from "./images/applicationdevelopment.png"
import backkending from "./images/backkendimg.png"
import backofficesupport from "./images/backofficesupport.png"
import qatesting from "./images/qatesting.png"
import "./ourservices.css"
import cloudserviceslogo from "./images/cloudserviceslogo.png"



export const OurServices = () => {


    const ourservices = [

        { title: "Design", logo: designthinking1 },
        { title: "Front End Development", logo: setting1 },
        { title: "Backend End Development", logo: backkending },
        { title: "Application Development", logo: applicationdevelopment },
        { title: "Analytics", logo: analysys },
        { title: "Q-A And Testing", logo: qatesting },
        { title: "Back office Support", logo: backofficesupport },
        { title: "Analytics", logo: analysys }
    ]



    return (
        <div className="ourservice_container">

            {ourservices.map((elem, index) => {

                return (
                    <div className="ourservice_card" key={index}>

                        <div style={{ width: "150px", margin: "auto", paddingTop: "25px" }}>
                            <img src={elem.logo} height="101px width=101px" />
                        </div>

                        <h2 style={{
                            textAlign: "center", width: "179px", height: "78px", color: "#040404", fontWeight: "600", lineHeight: "39px"

                        }}>{elem.title}</h2>


                    </div>
                )
            })}



        </div>
    )



}