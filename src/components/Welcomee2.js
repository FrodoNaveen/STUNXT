import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Welcomee2 = () => {

    const navigate = useNavigate()
    const [time, setTime] = useState()



    useEffect(() => {

        let date = new Date()
        let hours = date.getHours()

        let minutes = date.getMinutes()
        if (minutes < 10 && hours <= 12) {
            setTime(`${hours}:0${minutes}`)
        } else if (minutes < 10 && hours > 12) {
            setTime(`${hours - 12}:0${minutes}`)
        } else {
            setTime(`${hours}:${minutes}`)
        }


    }, [])

    function goToNextPage() {
        navigate("/welcome3")
    }

    function goToPreviousPage() {
        navigate('/welcome')
    }
    return (
        <div className="container card mt-5 phoneSize">
            <div className="container bg-white m-2">
                <span className="float-start"><b>{time}</b></span>
                <div className="float-end d-flex justify-content-around">
                    <span><i class="fa-solid fa-signal" style={{ color: "#000000" }}></i></span>
                    <span className="navicons"><i class="fa-solid fa-wifi" style={{ color: "#000000" }}></i></span>
                    <span className="navicons"><i class="fa-solid fa-battery-full" style={{ color: "#000000" }}></i></span>
                </div>
            </div>
            <div className="container bg-body-tertiary">
                <p className="btn mt-5" onClick={goToPreviousPage}><i class="fa-solid fa-arrow-left" style={{ color: "#000000" }}></i></p>
                <img className="img-fluid mx-auto d-block rounded welcomeImage" alt="logo" src="https://neilpatel.com/wp-content/uploads/fly-images/117917/shutterstock_414630034-1200x675-c.png" />
                <div className="text-center mt-5">
                    <h5 className="welcomeImage text-secondary"><b>Sample heading 2</b></h5>
                    <p className="mt-3">Sample text for onboarding screen</p>
                </div>
                <div className="text-center mt-5">
                    <span className="m-2"><i class="fa-solid fa-circle fa-2xs" style={{ color: "#e6e6e6" }}></i></span>
                    <span className="m-2 page"><i class="fa-solid fa-circle fa-xs" style={{ color: "#00d970" }}></i></span>
                    <span className="m-2"><i class="fa-solid fa-circle fa-2xs" style={{ color: "#e6e6e6" }}></i></span>
                </div>
                <div className="mt-5">
                    <div className="float-start mb-5">
                        <button className="btn" style={{ color: "#00d970" }}><b>Skip</b></button>
                    </div>
                    <div className="float-end mb-5">
                        <button className="btn" style={{ color: "#00d970" }} onClick={goToNextPage}><i class="fa-solid fa-circle-arrow-right fa-2xl"></i></button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Welcomee2