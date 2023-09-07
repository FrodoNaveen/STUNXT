import React, { useState, useEffect } from "react"

const Otppage = () => {

    const [time, setTime] = useState()
    const [resendOtp, setResendOtp] = useState(15)

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

    useEffect(() => {
        if (resendOtp === 0) {
            clearTimeout()
        } else {
            setTimeout(() => {
                setResendOtp(resendOtp - 1)
            }, 1000)
        }

    }, [resendOtp])



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
            <div className="container mt-5 text-center">
                <b style={{ color: "#4d4d4d" }}>Enter Code</b>
                <p className="mt-2" style={{ color: "#636363" }}>Enter the 4 digit code sent to your phone number +91 1234567890</p>

            </div>
            <div className="container otpVerificationFooter">
                <div className="float-start">
                    <span style={{ color: "#636363" }}>Not received OTP?</span>
                    {resendOtp === 0 ? <p className="cursorPointer" style={{ color: "#00d970" }}>Resend</p> :
                        <p style={{ color: "#00d970" }}>Resend ({resendOtp} Sec)</p>}
                </div>
                <div className="float-end">
                    <span className="cursorPointer text-secondary"><i class="fa-solid fa-circle-arrow-right fa-2xl"></i></span>
                </div>
            </div>

        </div>
    )
}
export default Otppage