import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import College_logo from "./College_logo.png";
import Usefull_logo_1 from "./Usefull_logo_1.jpg";
import Usefull_logo_2 from "./Usefull_logo_2.jpg";
import Usefull_logo_3 from "./Usefull_logo_3.jpg";
import Usefull_logo_4 from "./Usefull_logo_4.jpg";
import Usefull_logo_5 from "./Usefull_logo_5.jpg";
export default function Footer() {
    return (
        <>
            <div className="footer footer_border">
                <div className="clg_info">
                    {/* <img className="clg_logo" src={College_logo} alt="img loading..." /> */}
                    <p className="title">Government College of Engineering and Research,Avasari Kh.</p>
                    <p className="para"> Taluka-Ambegaon,District-pune,412405</p>
                    <p className="para">Tel : 02133- 230582</p>
                    <p className="para">Fax : 02133-230583</p>
                    <p className="para">Email: <Link className="email" to="mailto:office.gcoeavasari@dtemaharashtra.gov.in">office.gcoeavasari@dtemaharashtra.gov.in</Link></p>
                    <p className="para"><Link className="clg_link" to="https://www.gcoeara.ac.in">gcoeara.ac.in</Link></p>
                </div>
                <div className="imp_links">
                    <p className="title">Important Links</p>
                    <p className="para">Mission</p>
                    <p className="para">Vision</p>
                    <p className="para">About</p>
                    <p className="para">Alumni</p>
                    <p className="para">Placement</p>
                </div>
                <div className="climate">
                    <p className="title">Climate</p>
                    <p className="para">25 C, Cloudy</p>
                </div>
            </div>
            <div className="footer logo_footer">
                <div>
                    <p> <Link to="./https://www.maharashtra.gov.in/1125/Home"> <img className="imgs" src={Usefull_logo_1} alt="img" /></Link></p>
                </div>
                <div>
                    <p> <Link to="http://www.dtemaharashtra.gov.in/index.html"> <img className="imgs" src={Usefull_logo_2} alt="img" /></Link></p>
                </div>
                <div>
                    <p> <Link to="https://www.aicte-india.org/"> <img className="imgs" src={Usefull_logo_3} alt="img" /></Link></p>
                </div>
                <div>
                    <p> <Link to="https://msbte.org.in/"> <img className="imgs" src={Usefull_logo_4} alt="img" /></Link></p>
                </div>
                <div>
                    <p> <Link to="http://www.unipune.ac.in/"><img className="imgs" src={Usefull_logo_5} alt="img" /></Link></p>
                </div>
            </div>
            <div className="footer footer_border copyright">
                <div>
                    <p className="para">Copyright © 2021 Government Colllege of Engineering and Research, Avsari(GCOEARA)</p>
                </div>
                <div>
                    <p className="para">Designed & Developed by Computer and Entc Engineering Department, GCOEARA</p>
                </div>
            </div>
        </>
    )
}