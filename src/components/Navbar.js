import React, { useEffect, useState } from "react"
import { GiPartyPopper } from "react-icons/gi";
import { MdOutlineFeed } from "react-icons/md"
import { GoHome } from "react-icons/go"
import { FaUserFriends } from "react-icons/fa"
import { PiSuitcaseSimpleLight } from "react-icons/pi"


const Navbar = () => {

    const [nav, setNav] = useState()

    function goToAnotherNav(index) {
        setNav(index)
    }


    const navBarFooter = [{ image: <GoHome size="20px" />, name: "Home" },
    { image: <MdOutlineFeed size="20px" />, name: "Feeds" },
    { image: <GiPartyPopper size="20px" />, name: "Events" },
    { image: <FaUserFriends size="20px" />, name: "Network" },
    { image: <PiSuitcaseSimpleLight size="20px" />, name: "Career" }]
    return (

        <ul className="nav bg-white justify-content-between navBar" >
            {navBarFooter.map((ele, index) => (
                <li className="nav-item text-center" key={index} onClick={() => goToAnotherNav(index)}>
                    {nav === index ?
                        <a className="nav-link" style={{ color: "#00d970" }} aria-current="page" href="#">{ele.image}</a>
                        :
                        <a className="nav-link text-black" aria-current="page" href="#"><b>{ele.image}</b></a>
                    }
                    <span>{ele.name}</span>
                </li>
            ))}
        </ul>

    )
}
export default Navbar