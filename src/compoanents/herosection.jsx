import girlpicture from "./images/girlpicture.png"
import Vector from "./images/Vector.png"
import Vectoriind from "./images/Vectoriind.png"
import Rectangle1 from "./images/Rectangle 1.png"
import Rectangle2 from "./images/Rectangle 2.png"
import Rectangle3 from "./images/Rectangle 3.png"
import Reactangle4 from "./images/Rectangle 4.png"
import "./herosectionsection.css"
export const HeroSection = () => {

    return (

        <div style={{ display: "flex", marginTop: "205px" }}>

            {/* left div */}
            <div border="1px solid red">

                <p style={{ marginLeft: "117px", color: "#F17216", height: '18px', width: "319px", fontSize: "16px", fontWeight: "400" }}>
                    Best Business  Platform-World Record 2021</p>

                <h1 style={{ marginLeft: "115px", marginTop: "26px", width: "646px", height: "160px", fontWeight: "700", fontSize: "58px", lineHeight: "80px", letterSpacing: "2%", color: "#282C4B" }}>Reach Your Business Goals in Record Time</h1>

                <p style={{ marginLeft: "115px", marginTop: "25px", width: "561px", height: "108px", fontWeight: "400", fontSize: "20px", lineHeight: "36px", color: "#747582" }}>
                    Support small business and join the nationwide movement to encourage commercial support for the millions of miniority owned business helping world economy.
                </p>

                <div style={{ display: "flex", gap: "12px", height: "150px", width: "500px", marginLeft: "115px" }}>
                    <button className="getstartedbtn">Get Started</button>
                    <p style={{ width: "254px", height: "21px", fontWeight: "500", fontSize: "18px", letterSpacing: "2%" }}>Book a 30 Min Quick Meeting</p>



                </div>

            </div>







            {/* right div */}



            <div style={{ height: "576px", width: "416px", border: "none", marginRight: "135px" }}>
                <div style={{ marginTop: "40px", position: "relative" }}> <img src={Vector} /></div>
                <div style={{ marginTop: "-150px", position: "relative" }}> <img src={girlpicture} /></div>
                <div style={{ marginTop: "-200px", marginLeft: "280px", position: "relative" }}><img src={Vectoriind} /></div>

                <div className="rectangle_card" >

                    <div >
                        <h1 style={{ color: "black", position: "relative", paddingLeft: "20px", width: "42px", height: "34px", fontSize: "30px" }}>4.9</h1>
                    </div>

                    <div style={{ display: "flex", gap: "1x", position: "relative" }}>
                        <img src={Rectangle1} height="45px" width="45px" />
                        <img src={Rectangle2} height="45px" width="45px" />
                        <img src={Rectangle3} height="45px" width="45px" />
                        <img src={Reactangle4} height="45px" width="45px" />

                        <div style={{ backgroundColor: "orange", padding: "2px", borderRadius: "50%", height: "18px", width: "18px", color: "white" }}>5k</div>
                    </div>

                </div>



            </div>



        </div>
    )



}