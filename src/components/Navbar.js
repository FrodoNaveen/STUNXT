import React, { useState } from "react"
import { GiPartyPopper } from "react-icons/gi";
import { MdOutlineFeed } from "react-icons/md"
import { GoHome } from "react-icons/go"
import { FaUserFriends } from "react-icons/fa"
import { PiSuitcaseSimpleLight } from "react-icons/pi"


const Navbar = () => {

    const [nav, setNav] = useState()

    function goToNav(index) {
        setNav(index)
    }

    const navBarFooter = [{ image: <GoHome size="20px" />, name: "Home" },
    { image: <MdOutlineFeed size="20px" />, name: "Feeds" },
    { image: <GiPartyPopper size="20px" />, name: "Events" },
    { image: <FaUserFriends size="20px" />, name: "Network" },
    { image: <PiSuitcaseSimpleLight size="20px" />, name: "Career" }]
    return (
        <div className=" container card mt-5 phoneSize">
            <div className="navbar">
                <div className="container mt-2">
                    {navBarFooter.map((ele, index) => (
                        <div className=" cursorPointer text-center" key={index} onClick={() => goToNav(index)}>
                            {nav === index ? <span style={{ color: "#00d970" }}><b>{ele.image}</b></span> :
                                <span onClick={() => goToNav(index)}>{ele.image}</span>}
                            <p>{ele.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
export default Navbar