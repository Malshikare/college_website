import React from "react";
import "./Section.css";
import { Link } from "react-router-dom";
import Placement_img from "./Placement_img.jpg";
import Alumni_image from "./Alumni_image.jpg";
import Gallery_image from "./Gallery_image.png";
export default function Section() {
    return (
        <>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            <div className="section">
                <div className="circle">
                    <p><Link to='./alumni'><more><img className="images" src={Alumni_image} alt="Alumni" /></more></Link></p>
                    <p className="name">Alumni</p>
                </div>
                <div>
                    <p><Link to="./placement"><more><img className="images" src={Placement_img} alt="placement" /></more></Link></p>
                    <p className="name">Placement</p>
                </div>
                <div>
                    <p><Link to="./gallery"><more><img className="images" src={Gallery_image} alt="Gallery" /></more></Link></p>
                    <p className="name">Gallery</p>
                </div>
            </div>
        </>
    )
}