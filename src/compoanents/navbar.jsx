export const Navbar = () => {


    return (
        <div style={{ display: "flex", width: "100%" }}>

            <div style={{ marginLeft: "115px", marginTop: "49px" }}>
                <h1 style={{ fontSize: "26px", fontWeight: "700", fontStyle: "italic", color: "#FB3F6C", width: "254px", height: "36px" }}>Webure Technologies</h1>
            </div>

            <div style={{ display: "flex", marginTop: "59px" }}>

                <ul style={{ display: "flex", gap: "41px", listStyle: "none" }}>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Carrers</li>
                    <li>ROIStories</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                <button style={{ marginLeft: "41px", width: "143px", heigth: "55px", border: "0.5px solid grey", borderRadius: "30px", color: "#282C4B", fontWeight: "700", fontSize: "14px" }}>Let's Talk</button>
            </div>

        </div>
    )
}