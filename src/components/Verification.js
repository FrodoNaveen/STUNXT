import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"


const Verification = () => {

    const navigate = useNavigate()

    const [time, setTime] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [checkPhoneNumber, setCheckPhoneNumber] = useState(false)
    const inputRef = useRef()


    useEffect(() => {
        setCheckPhoneNumber(false)

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

    function getPhoneNumber(e) {
        setPhoneNumber(e.target.value)
    }

    function getOtp() {
        setCheckPhoneNumber(true)
    }

    function editNumber() {
        setCheckPhoneNumber(false)
        inputRef.current.focus()

    }

    function goToOtpPage() {
        navigate("/otp")
    }


    return (
        <div className="container card mt-5 phoneSize">
            <div className="container bg-white m-2">
                <span className="float-start"><b>{time}</b></span>
                <div className="float-end d-flex justify-content-around">
                    <span><i className="fa-solid fa-signal" style={{ color: "#000000" }}></i></span>
                    <span className="navicons"><i class="fa-solid fa-wifi" style={{ color: "#000000" }}></i></span>
                    <span className="navicons"><i class="fa-solid fa-battery-full" style={{ color: "#000000" }}></i></span>
                </div>
            </div>
            {phoneNumber && phoneNumber.length === 10 && checkPhoneNumber ?
                <div className="row">
                    <div className="col-12">
                        <div className="card confirmNumber">
                            <div className="card-body text-center">
                                <div className="row">
                                    <div className="col-12 mt-3">
                                        <span><b>+91 {phoneNumber}</b></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        <span className="text-muted">is this the correct number?</span>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        <span className="btn" onClick={editNumber} style={{ color: "#00d970" }}><b>Edit</b></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        <button className="btn w-100  rounded-5 p-3" style={{ backgroundColor: "#00d970", color: "white " }} onClick={goToOtpPage}><b>Continue</b></button>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null}

            <div style={{ backgroundColor: checkPhoneNumber ? "#b3b3b3" : null }}>
                <div className="mt-5">
                    <p className="text-center" style={{ color: "#4d4d4d" }}><b>Phone number</b></p>
                    <p className="text-center" style={{ color: "#636363" }}>Please confirm your country code and enter your phone number</p>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-2">

                            <span>
                                <input className="form-control phoneNumber"
                                    placeholder="+91"
                                    style={{
                                        width: "52px",
                                        height: "60px",
                                        backgroundColor: checkPhoneNumber ? "#b3b3b3" : null,
                                        borderColor: checkPhoneNumber ? "#00d970" : phoneNumber && phoneNumber.length === 10 ? "#00d970" : null
                                    }} /></span>
                        </div>

                        <div className="col-10">
                            <div>
                                {phoneNumber && phoneNumber.length === 10 ?
                                    <small className="inputNumberSuccess"
                                        style={{
                                            backgroundColor: checkPhoneNumber ? "#b3b3b3" : null,
                                            color: checkPhoneNumber ? "#636363" : null
                                        }}>Phone number</small> : null}
                                <input
                                    className="form-control phoneNumber"
                                    ref={inputRef} maxLength="10"
                                    type="number"
                                    placeholder="Phone number"
                                    style={{
                                        height: "60px",
                                        backgroundColor: checkPhoneNumber ? "#b3b3b3" : null,
                                        borderColor: checkPhoneNumber ? "#00d970" : phoneNumber && phoneNumber.length === 10 ? "#00d970" : null
                                    }}
                                    onChange={getPhoneNumber}
                                    value={phoneNumber}
                                    required />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <small className="text-muted text-start">We'll send you an otp by sms to cofirm your mobile number</small>
                    </div>
                    <div className="verificationFooter">
                        <div className="float-start">
                            <span style={{ color: "#636363" }}>Having trouble logging in?</span>
                            <p style={{ color: "#00d970" }}>Get Help</p>
                        </div>
                        {phoneNumber && phoneNumber.length === 10 ?
                            <div className="float-end">
                                <span className="arrowCircle" style={{ color: "#00d970" }} onClick={getOtp}><i class="fa-solid fa-circle-arrow-right fa-2xl"></i></span>
                            </div> :
                            <div className="float-end">
                                <span className="text-secondary"><i class="fa-solid fa-circle-arrow-right fa-2xl"></i></span>
                            </div>}

                    </div>
                </div>

            </div>

        </div >
    )
}
export default Verification